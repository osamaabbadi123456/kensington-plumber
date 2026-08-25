import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const prohibitedTerms = ["Wolverhampton", "Camden", "Brent"];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".mdx", ".json"]);
const scanRoots = ["app", "content"];
const matches = [];

async function scan(directory) {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") return;
    throw error;
  }

  for (const entry of entries) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await scan(filePath);
      continue;
    }

    if (!sourceExtensions.has(extname(entry.name))) continue;

    const contents = await readFile(filePath, "utf8");
    const foundTerms = prohibitedTerms.filter((term) => new RegExp(`\\b${term}\\b`, "i").test(contents));

    if (foundTerms.length > 0) matches.push({ filePath, foundTerms });
  }
}

await Promise.all(scanRoots.map(scan));

if (matches.length > 0) {
  for (const { filePath, foundTerms } of matches) {
    console.error(`${filePath}: ${foundTerms.join(", ")}`);
  }

  process.exitCode = 1;
} else {
  console.log("Contamination check passed: no prohibited city references in app/content.");
}
