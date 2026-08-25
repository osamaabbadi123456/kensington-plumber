import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import publicRoutes from "../app/_data/publicRoutes.json" with { type: "json" };

const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx"]);
const knownRoutes = new Set(publicRoutes);
const brokenLinks = [];
const linkedRoutes = new Set();
let sourceFileCount = 0;

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await sourceFiles(filePath));
    } else if (sourceExtensions.has(extname(entry.name))) {
      files.push(filePath);
    }
  }

  return files;
}

function normaliseInternalTarget(target) {
  if (!target.startsWith("/") || target.startsWith("//")) return null;

  return target.split(/[?#]/, 1)[0] || "/";
}

for (const filePath of await sourceFiles("app")) {
  sourceFileCount += 1;
  const source = await readFile(filePath, "utf8");
  const hrefPattern = /\bhref\s*(?:=|:)\s*["']([^"']+)["']/g;

  for (const match of source.matchAll(hrefPattern)) {
    const target = match[1];
    const route = normaliseInternalTarget(target);

    if (!route) continue;

    if (!knownRoutes.has(route)) {
      brokenLinks.push({ source: relative(process.cwd(), filePath), target });
    } else {
      linkedRoutes.add(route);
    }
  }
}

const orphanedRoutes = publicRoutes.filter((route) => route !== "/" && !linkedRoutes.has(route));

if (brokenLinks.length > 0) {
  for (const link of brokenLinks) {
    console.error(`Broken internal link: ${link.source} -> ${link.target}`);
  }
}

if (orphanedRoutes.length > 0) {
  for (const route of orphanedRoutes) {
    console.error(`Indexable route is not reached by a static internal link: ${route}`);
  }
}

if (brokenLinks.length > 0 || orphanedRoutes.length > 0) {
  process.exitCode = 1;
} else {
  console.log(`Link audit passed: ${publicRoutes.length} public routes are registered and internally reachable from ${sourceFileCount} app source files.`);
}
