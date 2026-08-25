import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/services",
  "/services/leak-repair",
  "/services/toilet-repair",
  "/plumbing-problems/water-coming-through-ceiling",
  "/plumbing-problems/toilet-wont-flush",
  "/plumbing-advice/blocked-toilet-or-broken-flush",
  "/areas",
  "/about",
  "/contact",
] as const;

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
}

test.describe("public route smoke", () => {
  for (const route of publicRoutes) {
    test(`${route} loads with one H1 and no horizontal overflow`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => pageErrors.push(error.message));

      const response = await page.goto(route, { waitUntil: "networkidle" });

      expect(response?.status()).toBeGreaterThanOrEqual(200);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator("h1")).toHaveCount(1);
      await expectNoHorizontalOverflow(page);

      const whatsAppLinks = page.locator('a[href*="wa.me/"]');
      await expect(whatsAppLinks.first()).toBeVisible();
      const whatsAppHrefs = await whatsAppLinks.evaluateAll((links) => links.map((link) => link.getAttribute("href") ?? ""));
      expect(whatsAppHrefs).not.toHaveLength(0);
      expect(whatsAppHrefs.every((href) => href.includes("447405955956"))).toBe(true);
      expect(pageErrors).toEqual([]);
      expect(consoleErrors).toEqual([]);
    });
  }
});

test("contact methods use the confirmed WhatsApp and email details", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "networkidle" });

  const whatsApp = page.getByRole("link", { name: "Send a plumbing enquiry on WhatsApp" }).last();
  await expect(whatsApp).toBeVisible();
  await expect(whatsApp).toHaveAttribute("href", /447405955956/);

  const email = page.getByRole("link", { name: "Email info@plumberkensington.co.uk" });
  await expect(email).toBeVisible();
  await expect(email).toHaveAttribute("href", "mailto:info@plumberkensington.co.uk");
});

test("desktop navigation reaches a service and the contact page", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium-desktop", "Desktop navigation is covered in Chromium desktop.");

  await page.goto("/services", { waitUntil: "networkidle" });
  const primaryNavigationLinks = page.getByRole("navigation", { name: "Main navigation" }).getByRole("link");
  for (let index = 0; index < await primaryNavigationLinks.count(); index += 1) {
    await primaryNavigationLinks.nth(index).focus();
    await expect(primaryNavigationLinks.nth(index)).toBeFocused();
  }
  await page.locator('a[href="/services/leak-repair"]').first().click();
  await expect(page).toHaveURL(/\/services\/leak-repair$/);
  await expect(page.locator("h1")).toHaveCount(1);

  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("plumbing enquiry");
});

test("mobile navigation opens, closes and stays within the viewport", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium", "Mobile navigation is covered in Chromium mobile.");

  await page.goto("/", { waitUntil: "networkidle" });
  const menuButton = page.getByRole("button", { name: "Open navigation" });
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await menuButton.click();
  await expect(page.getByRole("button", { name: "Close navigation", exact: true }).first()).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expectNoHorizontalOverflow(page);

  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Services" }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
});

test("interactive elements have accessible names and images declare alt text", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "networkidle" });

  const unnamedInteractiveElements = await page.locator("a, button").evaluateAll((elements) =>
    elements
      .filter((element) => (element as HTMLElement).offsetParent !== null)
      .filter((element) => !(element.getAttribute("aria-label") || element.textContent?.trim()))
      .map((element) => element.outerHTML),
  );
  const imagesWithoutAlt = await page.locator("img").evaluateAll((images) =>
    images.filter((image) => !image.hasAttribute("alt")).map((image) => image.outerHTML),
  );

  expect(unnamedInteractiveElements).toEqual([]);
  expect(imagesWithoutAlt).toEqual([]);
});

test("the not-found page is useful and returns a 404", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist", { waitUntil: "networkidle" });

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("not available");
  const notFoundContent = page.locator(".not-found-content");
  await expect(notFoundContent.getByRole("link", { name: "Home", exact: true })).toBeVisible();
  await expect(notFoundContent.getByRole("link", { name: "Services", exact: true })).toBeVisible();
  await expect(notFoundContent.getByRole("link", { name: "Plumbing problems", exact: true })).toBeVisible();
  await expectNoHorizontalOverflow(page);
});
