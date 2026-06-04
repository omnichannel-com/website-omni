# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Landing Page >> has correct title and brand elements
- Location: e2e/landing.spec.ts:4:7

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /omnichannel CX/
Received string:  "Customer Experience Platform"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Customer Experience Platform"

```

```yaml
- main:
  - article:
    - list:
      - listitem: Good Afternoon!
    - list:
      - listitem:
        - button "Toggle Search":
          - img
      - listitem:
        - button "Switch to dark mode":
          - img
      - listitem:
        - button "Help Center"
      - listitem:
        - button "Log in"
    - link "omnichannel CX logo omnichannel CX":
      - /url: /
      - img "omnichannel CX logo"
      - text: omnichannel CX
    - list:
      - listitem:
        - link "About":
          - /url: /about
        - img
      - listitem:
        - link "Pricing":
          - /url: /pricing
      - listitem:
        - link "Blog":
          - /url: /blog
      - listitem:
        - link "Contact":
          - /url: /contact
      - button "Get started"
    - text: Platform
    - list:
      - listitem:
        - link "Platform overview":
          - /url: /about
      - listitem:
        - link "Features":
          - /url: /about
      - listitem:
        - link "Integrations":
          - /url: /about
    - text: Company
    - list:
      - listitem:
        - link "About us":
          - /url: /about
      - listitem:
        - link "Blog":
          - /url: /blog
      - listitem:
        - link "Contact":
          - /url: /contact
    - img "omnichannel CX"
    - text: Customer Experience Platform
    - heading "One inbox, every channel." [level=1]
    - paragraph: Composed under pressure. Built for teams who care deeply.
    - paragraph: Email, chat, voice, and social, threaded together so your team can answer in the channel the customer chose. Every conversation, one pane.
    - link "Get started":
      - /url: /contact
      - img
      - text: Get started
    - link "Request a demo":
      - /url: /contact
      - img
      - text: Request a demo
    - text: Unified experience
    - heading "Every channel, one view" [level=2]
    - paragraph: Unify every channel into one seamless experience.
    - img
    - text: Email
    - img
    - text: Chat
    - img
    - text: Voice
    - img
    - text: Social
    - img
    - text: One inbox The platform
    - heading "Empower your team with AI" [level=2]
    - paragraph: Harness full potential alongside AI workers, taking on more responsibilities while working smarter, not harder.
    - paragraph: Brainstorm new ideas while eliminating repetitive work and flows. Our robust AI engine handles routine business tasks, allowing your AI assistants to ensure everything runs smoothly.
    - link "Read more about our platform":
      - /url: /about
      - img
      - text: Read more about our platform
    - text: Why omnichannel CX
    - heading "Built for teams who care" [level=2]
    - paragraph: Every feature is designed to help your team respond faster, stay informed, and deliver a consistently great customer experience.
    - paragraph: From the first message to resolution, your team has everything they need in one place.
    - text: "01"
    - paragraph: Unify every channel into one intelligent inbox
    - text: "02"
    - paragraph: Give agents full customer context instantly
    - text: "03"
    - paragraph: Measure response times and team health in real time
    - text: "04"
    - paragraph: Automate routine without losing the human touch
    - text: "05"
    - paragraph: Scale your support without scaling complexity
    - link "Explore the platform":
      - /url: /about
      - img
      - text: Explore the platform
    - text: Pricing
    - heading "Focus on core business functions" [level=2]
    - paragraph: Let our platform handle routine inquiries so you can focus on what matters most.
    - paragraph: Flexible plans that scale with your team. No hidden fees, no surprises.
    - link "View pricing":
      - /url: /pricing
      - img
      - text: View pricing
    - link "omnichannel CX Logo omnichannel CX":
      - /url: /
      - img "omnichannel CX Logo"
      - text: omnichannel CX
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "About":
          - /url: /about
      - listitem:
        - link "Blog":
          - /url: /blog
      - listitem:
        - link "Pricing":
          - /url: /pricing
      - listitem:
        - link "Contact":
          - /url: /contact
    - paragraph: Stay updated
    - textbox "Email address for newsletter":
      - /placeholder: Enter your email
    - button "Subscribe"
    - link "X (Twitter)":
      - /url: https://twitter.com
    - link "LinkedIn":
      - /url: https://www.linkedin.com/company/omnichannelcx
    - list:
      - listitem:
        - link "Privacy Policy":
          - /url: /privacy-policy
      - listitem:
        - link "Terms of Service":
          - /url: /terms-of-service
      - listitem:
        - link "Disclaimer":
          - /url: /disclaimer
- alert
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Landing Page", () => {
  4  |   test("has correct title and brand elements", async ({ page }) => {
  5  |     await page.goto("/");
  6  | 
  7  |     // Page title
> 8  |     await expect(page).toHaveTitle(/omnichannel CX/);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  9  | 
  10 |     // Hero heading
  11 |     const heading = page.locator("h1");
  12 |     await expect(heading).toContainText("One inbox, every channel");
  13 | 
  14 |     // No old brand references
  15 |     const bodyText = await page.locator("body").innerText();
  16 |     expect(bodyText).not.toContain("2ai");
  17 |     expect(bodyText).not.toContain("AlterEgo");
  18 | 
  19 |     // Brand colors applied (check computed style of hero heading)
  20 |     const heroHeading = page.locator("h1");
  21 |     await expect(heroHeading).toBeVisible();
  22 |   });
  23 | 
  24 |   test("has working navigation links", async ({ page }) => {
  25 |     await page.goto("/");
  26 | 
  27 |     const navLinks = ["/about", "/pricing", "/blog", "/contact"];
  28 |     for (const link of navLinks) {
  29 |       const navLink = page.locator(`a[href="${link}"]`).first();
  30 |       await expect(navLink).toBeVisible();
  31 |     }
  32 |   });
  33 | 
  34 |   test("has visible focus states on interactive elements", async ({ page }) => {
  35 |     await page.goto("/");
  36 | 
  37 |     // Tab to first interactive element
  38 |     await page.keyboard.press("Tab");
  39 | 
  40 |     // Check that some element has focus
  41 |     const focusedElement = page.locator("*:focus");
  42 |     await expect(focusedElement).toBeVisible();
  43 |   });
  44 | });
  45 | 
```