import { test, expect } from "@playwright/test";

const OLD_BRAND_TERMS = ["2ai", "AlterEgo", "AI-enhanced AlterEgos", "alterego.com"];
const PAGES = ["/", "/about", "/blog", "/contact", "/pricing", "/privacy-policy", "/terms-of-service", "/disclaimer"];

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
