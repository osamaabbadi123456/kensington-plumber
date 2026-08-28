import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.VISUAL_QA_BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = path.resolve("test-results/visual-qa");

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

const routes = [
  { slug: "home", route: "/", visual: true },
  { slug: "areas", route: "/areas" },
  { slug: "south-kensington", route: "/areas/south-kensington" },
  { slug: "west-kensington", route: "/areas/west-kensington" },
  { slug: "earls-court", route: "/areas/earls-court" },
  { slug: "notting-hill", route: "/areas/notting-hill" },
  { slug: "north-kensington", route: "/areas/north-kensington" },
  { slug: "holland-park", route: "/areas/holland-park" },
  { slug: "services", route: "/services" },
  { slug: "plumbing-problems", route: "/plumbing-problems" },
  { slug: "contact", route: "/contact" },
  { slug: "privacy", route: "/privacy" },
  { slug: "terms", route: "/terms" },
  { slug: "cookies", route: "/cookies" },
  { slug: "leak-repair", route: "/services/leak-repair", visual: true },
  { slug: "bathroom-plumbing", route: "/services/bathroom-plumbing" },
  { slug: "tap-repair", route: "/services/tap-repair", visual: true },
];

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch();
const problems = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    for (const item of routes) {
      const response = await page.goto(`${baseUrl}${item.route}`, { waitUntil: "networkidle" });
      const label = `${viewport.name}:${item.route}`;

      if (!response?.ok()) problems.push(`${label} returned ${response?.status() ?? "no response"}`);

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 1) problems.push(`${label} has ${overflow}px horizontal overflow`);

      await page.screenshot({
        path: path.join(outputDir, `${viewport.name}-${item.slug}.png`),
        fullPage: true,
      });

      if (item.visual) {
        const visual = page.locator(".content-visual");
        if ((await visual.count()) !== 1) {
          problems.push(`${label} expected exactly one integrated visual`);
        } else {
          const image = visual.locator("img");
          await image.scrollIntoViewIfNeeded();
          const loaded = await image.evaluate((node) => {
            if (node.complete && node.naturalWidth > 0) return true;

            return new Promise((resolve) => {
              const timeout = setTimeout(() => resolve(false), 10_000);
              node.addEventListener("load", () => {
                clearTimeout(timeout);
                resolve(node.naturalWidth > 0);
              }, { once: true });
              node.addEventListener("error", () => {
                clearTimeout(timeout);
                resolve(false);
              }, { once: true });
            });
          });
          if (!loaded) problems.push(`${label} visual did not load`);
          await visual.screenshot({ path: path.join(outputDir, `${viewport.name}-${item.slug}-visual.png`) });
        }
      }
    }

    if (viewport.name === "mobile") {
      await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
      const menuButton = page.locator(".mobile-menu-button");
      if ((await menuButton.count()) !== 1 || !(await menuButton.isVisible())) {
        problems.push("mobile navigation menu button is not visible");
      } else {
        await menuButton.click();
        await page.screenshot({ path: path.join(outputDir, "mobile-navigation-open.png"), fullPage: false });
        await page.locator(".mobile-nav-backdrop").click();
      }
    }

    await context.close();
  }
} finally {
  await browser.close();
}

if (problems.length > 0) {
  console.error("Visual QA failed:\n" + problems.map((problem) => `- ${problem}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Visual QA passed for ${routes.length} routes at ${viewports.length} viewports.`);
}
