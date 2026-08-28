import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/services",
  "/services/leak-repair",
  "/services/toilet-repair",
  "/plumbing-problems/water-coming-through-ceiling",
  "/plumbing-problems/toilet-wont-flush",
  "/plumbing-advice/blocked-toilet-or-broken-flush",
  "/plumbing-glossary",
  "/areas",
  "/areas/south-kensington",
  "/areas/west-kensington",
  "/areas/earls-court",
  "/areas/notting-hill",
  "/areas/north-kensington",
  "/areas/holland-park",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
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

  const contactContent = page.locator("main");
  const whatsApp = contactContent.getByRole("link", { name: /^Describe the problem on WhatsApp/ });
  await expect(whatsApp).toBeVisible();
  await expect(whatsApp).toHaveAttribute("href", /447405955956/);

  const email = contactContent.getByRole("link", { name: "Email info@plumberkensington.co.uk" });
  await expect(email).toBeVisible();
  await expect(email).toHaveAttribute("href", "mailto:info@plumberkensington.co.uk");
});

test("enquiry builder supports expanded locations and an other-area note", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const builder = page.locator("#enquiry-builder");
  const locationSelect = builder.locator("select").first();
  const locations = await locationSelect.locator("option").allTextContents();

  expect(locations).toEqual(expect.arrayContaining([
    "Kensington / W8",
    "South Kensington",
    "North Kensington",
    "West Kensington",
    "Notting Hill",
    "Holland Park",
    "Earl's Court",
    "Other London area / postcode",
  ]));

  await locationSelect.selectOption({ label: "Other London area / postcode" });
  const otherAreaInput = builder.locator(".enquiry-other-location input");
  await expect(otherAreaInput).toBeVisible();
  await otherAreaInput.fill("W2");
  await expect(builder.locator(".enquiry-message-preview")).toContainText("Area/postcode: W2");
});

test("enquiry builder creates a structured WhatsApp message", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const builder = page.locator("#enquiry-builder");
  const selects = builder.locator("select");
  await selects.nth(1).selectOption({ label: "Leak / water leak" });
  await selects.nth(2).selectOption({ label: "Bathroom" });
  await selects.nth(3).selectOption({ label: "Yes" });
  await builder.getByText("Urgent / active water problem", { exact: true }).click();
  await builder.locator("textarea").fill("Water is appearing through the ceiling.");

  const whatsAppLink = builder.getByRole("link", { name: "Send the details on WhatsApp as a structured plumbing enquiry" });
  const href = await whatsAppLink.getAttribute("href");
  const text = new URL(href ?? "", "https://plumberkensington.co.uk").searchParams.get("text") ?? "";

  expect(decodeURIComponent(text)).toContain("Problem: Leak / water leak");
  expect(decodeURIComponent(text)).toContain("Room/fixture: Bathroom");
  expect(decodeURIComponent(text)).toContain("What I can see: Yes");
  expect(decodeURIComponent(text)).toContain("Urgency: Urgent / active water problem");
  expect(decodeURIComponent(text)).toContain("Water is appearing through the ceiling.");
});

test("reviewed advice pages show their current review date", async ({ page }) => {
  const adviceRoutes = [
    "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling",
    "/plumbing-advice/blocked-toilet-or-broken-flush",
    "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry",
  ];

  for (const route of adviceRoutes) {
    await page.goto(route, { waitUntil: "networkidle" });
    await expect(page.locator(".content-reviewed")).toHaveText(/Last reviewed 25 August 2026/);
  }
});

test("glossary is linked internally, reviewed and has useful term cards", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.getByRole("link", { name: "Plumbing glossary" }).first()).toBeVisible();

  await page.goto("/plumbing-glossary", { waitUntil: "networkidle" });
  await expect(page.locator(".content-reviewed")).toHaveText(/Last reviewed 26 August 2026/);
  await expect(page.getByRole("heading", { name: "Plumbing terms, explained simply." })).toBeVisible();
  await expect(page.locator(".glossary-card")).toHaveCount(13);
  await expect(page.getByRole("link", { name: "Explore Leak repair" }).first()).toHaveAttribute("href", "/services/leak-repair");
  await expectNoHorizontalOverflow(page);
});

test("footer provides current resources and confirmed contact routes", async ({ page }) => {
  await page.goto("/services", { waitUntil: "networkidle" });

  const footer = page.getByRole("contentinfo", { name: "Site footer" });
  await expect(footer).toBeVisible();
  await expect(footer.getByRole("link", { name: "Plumbing glossary" })).toHaveAttribute("href", "/plumbing-glossary");
  await expect(footer.getByRole("link", { name: "Privacy", exact: true })).toHaveAttribute("href", "/privacy");
  await expect(footer.getByRole("link", { name: "Terms", exact: true })).toHaveAttribute("href", "/terms");
  await expect(footer.getByRole("link", { name: "Cookies", exact: true })).toHaveAttribute("href", "/cookies");
  await expect(footer.getByRole("link", { name: /^WhatsApp enquiry/ })).toHaveAttribute("href", /447405955956/);
  await expect(footer.getByRole("link", { name: "Email info@plumberkensington.co.uk" })).toHaveAttribute("href", "mailto:info@plumberkensington.co.uk");
});

test("desktop does not show the mobile conversion dock", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium-desktop", "The conversion dock is mobile-only.");

  await page.goto("/services/leak-repair", { waitUntil: "networkidle" });
  await expect(page.getByRole("navigation", { name: "Quick enquiry actions" })).toBeHidden();
});

test("mobile conversion dock routes to the builder and keeps the footer reachable", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium", "The conversion dock is mobile-only.");

  await page.goto("/services/leak-repair", { waitUntil: "networkidle" });
  const dock = page.getByRole("navigation", { name: "Quick enquiry actions" });
  await expect(dock).toBeVisible();

  const dockWhatsApp = dock.getByRole("link", { name: /^WhatsApp/ });
  await expect(dockWhatsApp).toHaveAttribute("href", /447405955956/);

  const footerEmail = page.getByRole("contentinfo", { name: "Site footer" }).getByRole("link", { name: "Email info@plumberkensington.co.uk" });
  await footerEmail.scrollIntoViewIfNeeded();
  await expect(footerEmail).toBeVisible();

  const dockBox = await dock.boundingBox();
  const footerEmailBox = await footerEmail.boundingBox();
  expect(dockBox).not.toBeNull();
  expect(footerEmailBox).not.toBeNull();
  expect((footerEmailBox?.y ?? 0) + (footerEmailBox?.height ?? 0)).toBeLessThanOrEqual((dockBox?.y ?? 0) + 1);

  await dock.getByRole("link", { name: /^Build enquiry/ }).click();
  await expect(page).toHaveURL(/\/contact\?problem=leak#build-enquiry$/);
  await expect(page.locator("#build-enquiry select").nth(1)).toHaveValue("Leak / water leak");
  await expectNoHorizontalOverflow(page);
});

test("controlled builder prefill accepts known values and ignores an unknown value", async ({ page }) => {
  const cases = [
    { query: "leak", expected: "Leak / water leak" },
    { query: "blocked-toilet", expected: "Blocked toilet" },
    { query: "shower", expected: "Shower problem" },
    { query: "not-a-real-problem", expected: "" },
  ];

  for (const item of cases) {
    await page.goto(`/contact?problem=${item.query}#build-enquiry`, { waitUntil: "networkidle" });
    await expect(page.locator("#build-enquiry select").nth(1)).toHaveValue(item.expected);
  }
});

test("controlled area prefill accepts confirmed coverage and ignores an unknown value", async ({ page }) => {
  const cases = [
    { query: "south-kensington", expected: "South Kensington" },
    { query: "west-kensington", expected: "West Kensington" },
    { query: "earls-court", expected: "Earl's Court" },
    { query: "not-a-covered-area", expected: "Kensington / W8" },
  ];

  for (const item of cases) {
    await page.goto(`/contact?location=${item.query}#build-enquiry`, { waitUntil: "networkidle" });
    await expect(page.locator("#build-enquiry select").first()).toHaveValue(item.expected);
  }
});

test("hub cards and covered-area cards use real routes or controlled enquiry links", async ({ page }) => {
  for (const route of ["/services", "/plumbing-problems", "/plumbing-advice"]) {
    await page.goto(route, { waitUntil: "networkidle" });
    const cards = page.locator(".hub-card");
    await expect(cards).toHaveCount(await page.locator("a.hub-card").count());
  }

  await page.goto("/areas", { waitUntil: "networkidle" });
  const areaCards = page.locator("a.area-coverage-card");
  await expect(areaCards).toHaveCount(7);
  await expect(areaCards.first()).toHaveAttribute("href", "/#area-coverage-home-title");
  await expect(areaCards.nth(1)).toHaveAttribute("href", "/areas/south-kensington");
  await expect(areaCards.nth(6)).toHaveAttribute("href", "/areas/holland-park");

  await page.goto("/services", { waitUntil: "networkidle" });
  await expect(page.getByRole("link", { name: /Pipework and visible fittings/ })).toHaveAttribute("href", "/services/leak-repair#pipework");
  await expect(page.getByRole("link", { name: /Radiator or heating plumbing enquiry/ })).toHaveAttribute("href", "/services#radiator-heating");

  await page.goto("/plumbing-problems", { waitUntil: "networkidle" });
  await expect(page.getByRole("link", { name: /Water pressure/ })).toHaveAttribute("href", "/plumbing-problems#water-pressure");
  await expect(page.getByRole("link", { name: /Not sure/ })).toHaveAttribute("href", "/contact?problem=other#build-enquiry");
});

test("service and problem hubs clearly distinguish detail, guidance and enquiry destinations", async ({ page }) => {
  await page.goto("/services", { waitUntil: "networkidle" });
  await expect(page.locator(".hub-card-detail")).toHaveCount(7);
  await expect(page.locator(".hub-card-detail").getByText("View service", { exact: true })).toHaveCount(7);
  await expect(page.locator(".hub-depth-guidance")).toHaveCount(3);
  await expect(page.locator(".hub-depth-guidance").getByText("Read guidance", { exact: true })).toHaveCount(3);

  await page.goto("/plumbing-problems", { waitUntil: "networkidle" });
  await expect(page.locator(".hub-card-detail")).toHaveCount(4);
  await expect(page.locator(".hub-card-detail").getByText("View problem", { exact: true })).toHaveCount(4);
  await expect(page.locator(".hub-depth-enquiry")).toHaveCount(1);
  await expect(page.locator(".hub-depth-enquiry").getByText("Build enquiry", { exact: true })).toHaveCount(1);
});

test("routing anchors are visible below the fixed header and above the mobile dock", async ({ page }, testInfo) => {
  const anchors = [
    ["/services/leak-repair#pipework", "#pipework"],
    ["/services/bathroom-plumbing#basin-sink", "#basin-sink"],
    ["/plumbing-problems#water-pressure", "#water-pressure"],
    ["/services#radiator-heating", "#radiator-heating"],
    ["/contact#build-enquiry", "#build-enquiry"],
  ] as const;

  for (const [route, target] of anchors) {
    await page.goto(route, { waitUntil: "networkidle" });
    const targetLocator = page.locator(target);
    await expect(targetLocator).toBeVisible();
    const scrollMarginTop = await targetLocator.evaluate((element) => Number.parseFloat(getComputedStyle(element).scrollMarginTop));
    expect(scrollMarginTop).toBeGreaterThanOrEqual(100);

    const targetBox = await targetLocator.boundingBox();
    const headerBox = await page.getByRole("banner").boundingBox();
    expect(targetBox).not.toBeNull();
    expect(headerBox).not.toBeNull();
    expect(targetBox?.y ?? 0).toBeGreaterThanOrEqual((headerBox?.height ?? 0) - 1);
    expect(targetBox?.y ?? Number.POSITIVE_INFINITY).toBeLessThan(page.viewportSize()?.height ?? 0);

    if (testInfo.project.name === "mobile-chromium") {
      const dock = page.getByRole("navigation", { name: "Quick enquiry actions" });
      const dockBox = await dock.boundingBox();
      if (dockBox) expect(targetBox?.y ?? Number.POSITIVE_INFINITY).toBeLessThan(dockBox.y);
    }
  }
});

test("area pages use controlled location-prefilled enquiry actions", async ({ page }) => {
  const routes = [
    ["/areas/south-kensington", "south-kensington"],
    ["/areas/west-kensington", "west-kensington"],
    ["/areas/earls-court", "earls-court"],
    ["/areas/notting-hill", "notting-hill"],
    ["/areas/north-kensington", "north-kensington"],
    ["/areas/holland-park", "holland-park"],
  ] as const;

  for (const [route, location] of routes) {
    await page.goto(route, { waitUntil: "networkidle" });
    await expect(page.locator(".area-detail-cta").getByRole("link", { name: /^Build enquiry/ })).toHaveAttribute("href", `/contact?location=${location}#build-enquiry`);
    await expect(page.locator(".area-route-card")).toHaveCount(5);
  }
});

test("production smoke output has no Next development indicator", async ({ page }) => {
  await page.goto("/plumbing-glossary", { waitUntil: "networkidle" });
  await expect(page.locator("nextjs-portal")).toHaveCount(0);
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

test("reduced-motion preference disables smooth scrolling and lengthy card transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/services", { waitUntil: "networkidle" });

  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  const transitionDuration = await page.locator(".hub-card").first().evaluate(
    (element) => getComputedStyle(element).transitionDuration,
  );
  expect(Number.parseFloat(transitionDuration)).toBeLessThanOrEqual(0.01);
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
