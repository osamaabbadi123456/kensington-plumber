import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import publicRoutes from "../app/_data/publicRoutes.json" with { type: "json" };

const canonicalDomain = "https://plumberkensington.co.uk";
const issues = [];

function addIssue(message) {
  issues.push(message);
}

async function pageFiles(directory = "app") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await pageFiles(filePath));
    } else if (entry.name === "page.tsx") {
      files.push(filePath);
    }
  }

  return files;
}

function routeFromPageFile(filePath) {
  const directory = relative("app", filePath).split(sep).slice(0, -1);
  return directory.length === 0 ? "/" : `/${directory.join("/")}`;
}

function literalMetadataValue(source, key) {
  const match = source.match(new RegExp(`\\b${key}\\s*:\\s*["']([^"']+)["']`));
  return match?.[1];
}

function normaliseCanonical(value) {
  if (value.startsWith("/")) return `${canonicalDomain}${value === "/" ? "" : value}`;
  return value.replace(/\/$/, "");
}

const config = await readFile("app/_data/siteConfig.ts", "utf8");
const layout = await readFile("app/layout.tsx", "utf8");
const sitemap = await readFile("app/sitemap.ts", "utf8");
const routeFiles = await pageFiles();
const actualRoutes = routeFiles.map(routeFromPageFile).sort();
const inventoryRoutes = [...publicRoutes].sort();
const actualRouteSet = new Set(actualRoutes);
const inventorySet = new Set(inventoryRoutes);

if (!config.includes(`url: "${canonicalDomain}"`)) addIssue("siteConfig.url does not use https://plumberkensington.co.uk");
if (/localhost/i.test(layout)) addIssue("root metadata contains localhost");
if (!/metadataBase:\s*new URL\(siteConfig\.url\)/.test(layout)) addIssue("root metadataBase is not derived from siteConfig.url");
if (!/canonical:\s*"\/"/.test(layout)) addIssue("root metadata does not declare the home canonical");
if (!sitemap.includes('import publicRoutes from "./_data/publicRoutes.json"')) addIssue("sitemap.ts is not derived from the route inventory");
if (!sitemap.includes("publicRoutes.map")) addIssue("sitemap.ts does not map the route inventory");

if (inventorySet.size !== publicRoutes.length) addIssue("public route inventory contains duplicate routes");

for (const route of actualRoutes) {
  if (!inventorySet.has(route)) addIssue(`indexable page is missing from the public route inventory: ${route}`);
}

for (const route of inventoryRoutes) {
  if (!actualRouteSet.has(route)) addIssue(`public route inventory contains a non-existing route: ${route}`);
}

const seenCanonicals = new Map();
const seenTitles = new Map();

for (const route of inventoryRoutes) {
  const filePath = route === "/" ? "app/layout.tsx" : join("app", route.slice(1), "page.tsx");
  const source = route === "/" ? layout : await readFile(filePath, "utf8");
  const title = route === "/" ? literalMetadataValue(source, "default") : literalMetadataValue(source, "title");
  const description = route === "/"
    ? (source.includes("description: siteConfig.description") ? "siteConfig.description" : literalMetadataValue(source, "description"))
    : literalMetadataValue(source, "description");
  const canonical = literalMetadataValue(source, "canonical");

  if (!title) addIssue(`${relative(process.cwd(), filePath)}: missing literal metadata title`);
  if (!description) addIssue(`${relative(process.cwd(), filePath)}: missing literal metadata description`);
  if (!canonical) addIssue(`${relative(process.cwd(), filePath)}: missing canonical`);

  if (title) {
    if (seenTitles.has(title)) addIssue(`duplicate metadata title for ${route} and ${seenTitles.get(title)}: ${title}`);
    else seenTitles.set(title, route);
  }

  if (canonical) {
    const normalised = normaliseCanonical(canonical);

    if (normalised.includes("localhost")) addIssue(`${route}: canonical contains localhost`);
    if (!normalised.startsWith(canonicalDomain)) addIssue(`${route}: canonical does not resolve to ${canonicalDomain}`);
    if (normalised !== `${canonicalDomain}${route === "/" ? "" : route}`) addIssue(`${route}: canonical does not match its route`);
    if (seenCanonicals.has(normalised)) addIssue(`duplicate canonical for ${route} and ${seenCanonicals.get(normalised)}: ${normalised}`);
    else seenCanonicals.set(normalised, route);
  }
}

if (issues.length > 0) {
  for (const issue of issues) console.error(`SEO audit failure: ${issue}`);
  process.exitCode = 1;
} else {
  console.log(`SEO route audit passed: ${publicRoutes.length} indexable routes match page files, metadata and sitemap inventory.`);
}
