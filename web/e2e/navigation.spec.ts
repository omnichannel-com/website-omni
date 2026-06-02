import { test, expect } from "@playwright/test";

const PAGES = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
  { path: "/pricing", name: "Pricing" },
  { path: "/privacy-policy", name: "Privacy Policy" },
  { path: "/terms-of-service", name: "Terms of Service" },
  { path: "/disclaimer", name: "Disclaimer" },
];

test.describe("Site Navigation", () => {
  for (const { path, name } of PAGES) {
    test(`page ${name} (${path}) loads successfully`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator("body")).toBeVisible();
    });
  }

  test("navbar is present on all pages", async ({ page }) => {
    for (const { path } of PAGES) {
      await page.goto(path);
      // Check for nav element or header
      const nav = page.locator("nav, header").first();
      await expect(nav).toBeVisible();
    }
  });
});
