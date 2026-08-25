import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const expected = {
  domain: "plumberkensington.co.uk",
  email: "info@plumberkensington.co.uk",
  whatsapp: "447405955956",
};
const allowedExternalHosts = new Set(["schema.org", "wa.me"]);
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".mdx"]);
const issues = [];

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

function addIssue(filePath, message) {
  issues.push(`${relative(process.cwd(), filePath)}: ${message}`);
}

for (const filePath of await sourceFiles("app")) {
  const source = await readFile(filePath, "utf8");

  if (/localhost/i.test(source)) addIssue(filePath, "localhost reference in public app/config source");

  for (const match of source.matchAll(/https?:\/\/([^/"'\s)]+)/g)) {
    const host = match[1].toLowerCase();

    if (host !== expected.domain && !allowedExternalHosts.has(host)) {
      addIssue(filePath, `unapproved URL host ${host}`);
    }
  }

  for (const match of source.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)) {
    if (match[0].toLowerCase() !== expected.email) addIssue(filePath, `unexpected email ${match[0]}`);
  }

  for (const match of source.matchAll(/(?:\+?44)[\d\s()-]{8,}\d/g)) {
    const normalised = match[0].replace(/\D/g, "");

    if (normalised !== expected.whatsapp) addIssue(filePath, `unexpected phone number ${match[0]}`);
  }

  for (const match of source.matchAll(/https?:\/\/wa\.me\/(\d+)/g)) {
    if (match[1] !== expected.whatsapp) addIssue(filePath, `unexpected WhatsApp number ${match[1]}`);
  }
}

const siteConfig = await readFile("app/_data/siteConfig.ts", "utf8");

for (const value of Object.values(expected)) {
  if (!siteConfig.includes(value)) issues.push(`app/_data/siteConfig.ts: missing expected business value ${value}`);
}

if (issues.length > 0) {
  for (const issue of issues) console.error(`Business consistency failure: ${issue}`);
  process.exitCode = 1;
} else {
  console.log("Business consistency check passed: public app/config source matches the confirmed domain, email and WhatsApp number.");
}
