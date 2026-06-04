# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: brand.spec.ts >> Design System Compliance >> page /blog renders no off-brand template imagery
- Location: e2e/brand.spec.ts:44:9

# Error details

```
Error: expect(received).not.toContain(expected) // indexOf

Expected substring: not "/blog/blog-2a.png"
Received string:        "/blog/blog-2a.png"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - article [ref=e3]:
      - generic [ref=e4]:
        - list [ref=e5]:
          - listitem [ref=e6] [cursor=pointer]: Good Afternoon!
        - list [ref=e7]:
          - listitem [ref=e8] [cursor=pointer]:
            - button "Toggle Search" [ref=e9]:
              - img [ref=e10]
          - listitem [ref=e13] [cursor=pointer]:
            - button "Switch to dark mode" [ref=e14]:
              - img [ref=e15]
          - listitem [ref=e17] [cursor=pointer]:
            - button "Help Center" [ref=e18]
          - listitem [ref=e19] [cursor=pointer]:
            - button "Log in" [ref=e20]
      - generic [ref=e22]:
        - link "omnichannel CX logo omnichannel CX" [ref=e24] [cursor=pointer]:
          - /url: /
          - generic [ref=e25]:
            - img "omnichannel CX logo" [ref=e26]
            - generic [ref=e27]: omnichannel CX
        - list [ref=e29]:
          - img [ref=e30] [cursor=pointer]
      - generic [ref=e33]:
        - heading "omnichannel CX Insights" [level=1] [ref=e34]
        - paragraph [ref=e35]: Explore insights, tips, and trends in tech, business, and innovation. Stay informed with our fresh articles.
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - textbox "Search..." [ref=e39]
            - img [ref=e41]
          - combobox [ref=e44]:
            - option "Newest to Oldest" [selected]
            - option "Oldest to Newest"
        - generic [ref=e45]:
          - generic [ref=e47]:
            - img "Selectively Curating and Greenlighting AI Models" [ref=e49] [cursor=pointer]
            - generic [ref=e50]:
              - heading "Selectively Curating and Greenlighting AI Models" [level=2] [ref=e51]
              - paragraph [ref=e52]: August 15, 2024
              - paragraph [ref=e53]: "Picture this: we're not just making another tech gadget; we're creating a masterpiece of artificial intelligence that is smart and classy."
              - button "Read more" [ref=e54] [cursor=pointer]:
                - img [ref=e55]
                - text: Read more
          - generic [ref=e58]:
            - 'img "Unlocking AI: Your Guide to the Future that Belongs to You" [ref=e60] [cursor=pointer]'
            - generic [ref=e61]:
              - 'heading "Unlocking AI: Your Guide to the Future that Belongs to You" [level=2] [ref=e62]'
              - paragraph [ref=e63]: August 10, 2024
              - paragraph [ref=e64]: You've likely heard whispers of an AI revolution transforming our world. It's not just about robots taking over; it's about intelligent technology enhancing every part of our lives.
              - button "Read more" [ref=e65] [cursor=pointer]:
                - img [ref=e66]
                - text: Read more
      - generic [ref=e68]:
        - generic [ref=e69]:
          - link "omnichannel CX Logo omnichannel CX" [ref=e71] [cursor=pointer]:
            - /url: /
            - img "omnichannel CX Logo" [ref=e72]
            - generic [ref=e73]: omnichannel CX
          - list [ref=e75]:
            - listitem [ref=e76]:
              - link "Home" [ref=e77] [cursor=pointer]:
                - /url: /
            - listitem [ref=e78]:
              - link "About" [ref=e79] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e80]:
              - link "Blog" [ref=e81] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e82]:
              - link "Pricing" [ref=e83] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e84]:
              - link "Contact" [ref=e85] [cursor=pointer]:
                - /url: /contact
          - generic [ref=e86]:
            - paragraph [ref=e87]: Stay updated
            - generic [ref=e88]:
              - textbox "Email address for newsletter" [ref=e89]:
                - /placeholder: Enter your email
              - button "Subscribe" [ref=e90] [cursor=pointer]
            - generic [ref=e91]:
              - link "X (Twitter)" [ref=e92] [cursor=pointer]:
                - /url: https://twitter.com
              - link "LinkedIn" [ref=e93] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/omnichannelcx
        - list [ref=e95]:
          - listitem [ref=e96]:
            - link "Privacy Policy" [ref=e97] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e98]: "|"
          - listitem [ref=e99]:
            - link "Terms of Service" [ref=e100] [cursor=pointer]:
              - /url: /terms-of-service
          - listitem [ref=e101]: "|"
          - listitem [ref=e102]:
            - link "Disclaimer" [ref=e103] [cursor=pointer]:
              - /url: /disclaimer
  - button "Open Next.js Dev Tools" [ref=e109] [cursor=pointer]:
    - img [ref=e110]
  - alert [ref=e113]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const OLD_BRAND_TERMS = ["2ai", "AlterEgo", "AI-enhanced AlterEgos", "alterego.com"];
  4  | const PAGES = ["/", "/about", "/blog", "/contact", "/pricing", "/privacy-policy", "/terms-of-service", "/disclaimer"];
  5  | 
  6  | test.describe("Brand Consistency", () => {
  7  |   for (const pagePath of PAGES) {
  8  |     test(`page ${pagePath} has no old brand references`, async ({ page }) => {
  9  |       const response = await page.goto(pagePath);
  10 |       expect(response?.status()).toBeLessThan(400);
  11 | 
  12 |       const bodyText = await page.locator("body").innerText();
  13 |       for (const term of OLD_BRAND_TERMS) {
  14 |         expect(bodyText.toLowerCase()).not.toContain(term.toLowerCase());
  15 |       }
  16 |     });
  17 |   }
  18 | 
  19 |   test("landing page has omnichannel CX branding", async ({ page }) => {
  20 |     await page.goto("/");
  21 | 
  22 |     const bodyText = await page.locator("body").innerText();
  23 |     expect(bodyText.toLowerCase()).toContain("omnichannel");
  24 |     expect(bodyText.toLowerCase()).toContain("customer experience");
  25 |   });
  26 | });
  27 | 
  28 | test.describe("Design System Compliance", () => {
  29 |   // Off-brand warm/template imagery that violates the cool-toned imagery rule.
  30 |   const FORBIDDEN_IMAGES = [
  31 |     "second-section.png",
  32 |     "waves.png",
  33 |     "fourth-section.png",
  34 |     "fifth-section.png",
  35 |     "orange.png",
  36 |     "/blog/blog-1a.png",
  37 |     "/blog/blog-1b.png",
  38 |     "/blog/blog-1c.png",
  39 |     "/blog/blog-2a.png",
  40 |   ];
  41 |   const IMAGE_PAGES = ["/", "/pricing", "/blog", "/blog/1", "/blog/2", "/about"];
  42 | 
  43 |   for (const pagePath of IMAGE_PAGES) {
  44 |     test(`page ${pagePath} renders no off-brand template imagery`, async ({ page }) => {
  45 |       await page.goto(pagePath);
  46 |       const srcs = await page.locator("img").evaluateAll((imgs) =>
  47 |         imgs.map((img) => (img as HTMLImageElement).getAttribute("src") || "")
  48 |       );
  49 |       for (const src of srcs) {
  50 |         for (const forbidden of FORBIDDEN_IMAGES) {
> 51 |           expect(src).not.toContain(forbidden);
     |                           ^ Error: expect(received).not.toContain(expected) // indexOf
  52 |         }
  53 |       }
  54 |     });
  55 |   }
  56 | 
  57 |   test("no placeholder Lorem Ipsum copy on pricing FAQ", async ({ page }) => {
  58 |     await page.goto("/pricing");
  59 |     const bodyText = (await page.locator("body").innerText()).toLowerCase();
  60 |     expect(bodyText).not.toContain("lorem ipsum");
  61 |     expect(bodyText).not.toContain("dolor sit amet");
  62 |   });
  63 | 
  64 |   test("navbar uses the icon-only logo mark, not the full-logo png", async ({ page }) => {
  65 |     await page.goto("/");
  66 |     const logo = page.locator('header img, nav img, a[href="/"] img').first();
  67 |     await expect(logo).toHaveAttribute("src", /omnichannel-cx-icon-large\.svg/);
  68 |   });
  69 | 
  70 |   test("primary CTAs use sentence case, not Title Case", async ({ page }) => {
  71 |     await page.goto("/pricing");
  72 |     const bodyText = await page.locator("body").innerText();
  73 |     expect(bodyText).toContain("Get started");
  74 |     expect(bodyText).not.toContain("Get Started");
  75 |   });
  76 | });
  77 | 
```