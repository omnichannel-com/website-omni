import { test, expect } from "@playwright/test";

const OLD_BRAND_TERMS = ["2ai", "AlterEgo", "AI-enhanced AlterEgos", "alterego.com"];
const PAGES = ["/", "/about", "/blog", "/services", "/privacy-policy", "/human-in-control"];

test.describe("Brand Consistency", () => {
  for (const pagePath of PAGES) {
    test(`page ${pagePath} has no old brand references`, async ({ page }) => {
      const response = await page.goto(pagePath);
      expect(response?.status()).toBeLessThan(400);

      const bodyText = await page.locator("body").innerText();
      for (const term of OLD_BRAND_TERMS) {
        expect(bodyText.toLowerCase()).not.toContain(term.toLowerCase());
      }
    });
  }

  test("landing page has omnichannel CX branding", async ({ page }) => {
    await page.goto("/");

    const bodyText = await page.locator("body").innerText();
    expect(bodyText.toLowerCase()).toContain("omnichannel");
    expect(bodyText.toLowerCase()).toContain("customer experience");
  });
});

test.describe("Design System Compliance", () => {
  // Off-brand warm/template imagery that violates the cool-toned imagery rule.
  const FORBIDDEN_IMAGES = [
    "second-section.png",
    "waves.png",
    "fourth-section.png",
    "fifth-section.png",
    "orange.png",
    "/blog/blog-1a.png",
    "/blog/blog-1b.png",
    "/blog/blog-1c.png",
    "/blog/blog-2a.png",
  ];
  const IMAGE_PAGES = ["/", "/blog", "/blog/greenlighting-ai-models", "/blog/unlocking-ai-guide", "/about"];

  for (const pagePath of IMAGE_PAGES) {
    test(`page ${pagePath} renders no off-brand template imagery`, async ({ page }) => {
      await page.goto(pagePath);
      const srcs = await page.locator("img").evaluateAll((imgs) =>
        imgs.map((img) => (img as HTMLImageElement).getAttribute("src") || "")
      );
      for (const src of srcs) {
        for (const forbidden of FORBIDDEN_IMAGES) {
          expect(src).not.toContain(forbidden);
        }
      }
    });
  }

  test("navbar uses the icon-only logo mark, not the full-logo png", async ({ page }) => {
    await page.goto("/");
    const logo = page.locator('header img, nav img, a[href="/"] img').first();
    await expect(logo).toHaveAttribute("src", /omnichannel-cx-icon-large\.svg/);
  });

  test("primary CTAs use sentence case, not Title Case", async ({ page }) => {
    await page.goto("/services");
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).toContain("Book a working session");
    expect(bodyText).not.toContain("Book A Working Session");
  });
});
