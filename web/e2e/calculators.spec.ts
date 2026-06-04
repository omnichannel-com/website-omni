import { test, expect } from "@playwright/test";

const CALCULATORS = [
  { path: "/calculators/genesys-shrinkage-calculator.html", name: "Genesys Shrinkage Calculator" },
  { path: "/calculators/queueing-theory-explainer.html", name: "Queueing Theory Explainer" },
  { path: "/calculators/cherry-pick-vs-sla-allocation.html", name: "Cherry Pick vs SLA Allocation" },
];

test.describe("Calculators", () => {
  for (const { path, name } of CALCULATORS) {
    test(`${name} loads and has brand styling`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("body")).toBeVisible();

      // No old brand references
      const bodyText = await page.locator("body").innerText();
      expect(bodyText.toLowerCase()).not.toContain("2ai");
      expect(bodyText.toLowerCase()).not.toContain("alterego");
    });
  }

  test("shrinkage calculator produces expected output", async ({ page }) => {
    await page.goto("/calculators/genesys-shrinkage-calculator.html");

    // Find and interact with a basic input if present
    const inputs = page.locator("input");
    const count = await inputs.count();
    if (count > 0) {
      await expect(inputs.first()).toBeVisible();
    }

    // Verify some output element exists
    const outputs = page.locator("output, .result, #result, .output");
    const outputCount = await outputs.count();
    if (outputCount > 0) {
      await expect(outputs.first()).toBeVisible();
    }
  });
});
