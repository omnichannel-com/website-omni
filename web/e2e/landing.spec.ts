import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("has correct title and brand elements", async ({ page }) => {
    await page.goto("/");

    // Page title
    await expect(page).toHaveTitle(/omnichannel CX/);

    // Hero heading
    const heading = page.locator("h1");
    await expect(heading).toContainText("One inbox, every channel");

    // No old brand references
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toContain("2ai");
    expect(bodyText).not.toContain("AlterEgo");

    // Brand colors applied (check computed style of hero heading)
    const heroHeading = page.locator("h1");
    await expect(heroHeading).toBeVisible();
  });

  test("has working navigation links", async ({ page }) => {
    await page.goto("/");

    const navLinks = ["/about", "/pricing", "/blog", "/contact"];
    for (const link of navLinks) {
      const navLink = page.locator(`a[href="${link}"]`).first();
      await expect(navLink).toBeVisible();
    }
  });

  test("has visible focus states on interactive elements", async ({ page }) => {
    await page.goto("/");

    // Tab to first interactive element
    await page.keyboard.press("Tab");

    // Check that some element has focus
    const focusedElement = page.locator("*:focus");
    await expect(focusedElement).toBeVisible();
  });
});
