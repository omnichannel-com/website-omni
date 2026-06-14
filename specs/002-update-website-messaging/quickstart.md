# Quickstart: Update Website Messaging

Validation guide to verify the feature works end-to-end after implementation.

## Prerequisites

- Node.js 20+
- `npm` or `pnpm`
- Git

## Setup

```bash
cd web
npm install
```

## Build & Preview

```bash
# Build static export
npm run build

# The `out/` directory contains the static HTML export
# Preview locally
npx serve out
```

**Expected outcome**: Site builds without errors. All pages render at:
- `http://localhost:3000/` (homepage)
- `http://localhost:3000/services`
- `http://localhost:3000/about`
- `http://localhost:3000/human-in-control`
- `http://localhost:3000/privacy-policy`
- `http://localhost:3000/glossary`
- `http://localhost:3000/apac`
- `http://localhost:3000/australia`
- `http://localhost:3000/new-zealand`
- `http://localhost:3000/asia`
- `http://localhost:3000/japan`
- `http://localhost:3000/south-korea`
- `http://localhost:3000/indonesia`
- `http://localhost:3000/philippines`
- `http://localhost:3000/fiji`

## Validation Scenarios

### 1. Consultancy Positioning Check

**Steps**:
1. Open `http://localhost:3000/`
2. Read the hero section within 30 seconds
3. Close the page

**Expected outcome**: You can articulate that Omnichannel is a consultancy (not a SaaS product). The hero contains "customer experience and service operations consultancy" in the first sentence. No "free trial", "demo", or "platform" language appears.

### 2. Quiz Functionality

**Steps**:
1. Scroll to the "Two-minute check" section
2. Answer all 5 questions
3. Observe the result card
4. Click "Reset"
5. Refresh the page and verify answers are preserved (same session)
6. Open in a new tab (new session) and verify quiz starts fresh

**Expected outcome**: 
- Result card shows band name, score (5–20), and "Book a working session" CTA linking to Calendly
- Reset clears answers and hides result
- Refresh preserves progress within same session
- New session starts from question 1

### 3. PostHog Event Tracking

**Steps**:
1. Open browser DevTools → Network tab
2. Load any page
3. Click a CTA button
4. Complete the quiz
5. Navigate to another page

**Expected outcome**: 
- `$pageview` events fire on each page load
- `cta_click` events contain button text and destination
- `quiz_complete` event contains band name and score
- Events appear in PostHog dashboard within 5 minutes (if connected to live project)

### 4. Cookie Consent

**Steps**:
1. Clear `localStorage` for the domain
2. Refresh the page
3. Decline cookies
4. Check DevTools → Application → localStorage
5. Verify PostHog is not initialized (no PostHog network requests)

**Expected outcome**: 
- Banner appears on first visit after clearing storage
- Declining records `omni-consent: {status: 'declined', ...}`
- No PostHog network requests after declining
- Site functions normally (no JS errors)

### 5. AEO Artifacts

**Steps**:
1. Open `out/robots.txt`
2. Open `out/llms.txt`
3. Open `out/sitemap.xml`
4. View page source of pillar page and verify JSON-LD

**Expected outcome**:
- `robots.txt` contains explicit `Allow` for GPTBot, ClaudeBot, PerplexityBot, etc.
- `llms.txt` lists pillar, glossary, and canonical definition URLs
- `sitemap.xml` contains all page URLs with lastmod dates
- Pillar page source contains FAQPage + Article schema with Graeme Provan as author
- Pillar page has `id="canonical-definition"` on the definition container

### 6. Cross-Page Navigation

**Steps**:
1. Start on homepage
2. Click through to services, about, pillar, privacy
3. Verify nav highlights current page context
4. Check footer on every page

**Expected outcome**:
- Each page has distinct nav state (services page shows "Services" tag)
- Footer contains tagline "AI does the work. You make the call." + privacy link + domain link
- All internal links use relative paths

### 7. Accessibility Basics

**Steps**:
1. Run axe DevTools or Lighthouse on each page
2. Tab through all interactive elements
3. Check image alt text

**Expected outcome**:
- No WCAG 2.1 AA violations (contrast, missing labels, empty links)
- All buttons and links reachable via keyboard
- All images have descriptive alt text
- Focus indicators visible (2px outline)

### 8. Mobile Responsiveness

**Steps**:
1. Open DevTools → Device emulation
2. Test at 375px, 680px, 860px, 1280px

**Expected outcome**:
- 375px: Single column, hamburger nav, readable text
- 680px: Mobile nav collapse breakpoint
- 860px: Grid stack breakpoint
- 1280px+: Full desktop layout

## Playwright E2E Tests

```bash
npm run test
```

**Expected outcome**: All existing tests pass. New tests for quiz, cookie banner, and AEO artifacts should be added in `e2e/`.

## Production Deployment Checklist

Before merging to main:
- [ ] `omnichannel.cx` DNS configured and serving the site (Cloudflare Pages or other host)
- [ ] PostHog project key updated for production
- [ ] Calendly URL confirmed active
- [x] `llms.txt` created at `web/public/llms.txt` with pillar, glossary, and canonical definition URLs
- [x] `robots.txt` created at `web/public/robots.txt` with AI crawler allowlist (GPTBot, ClaudeBot, PerplexityBot, etc.)
- [x] All page titles include "omnichannel" or "human in control"
- [x] Organization schema points to `omnichannel.cx`
- [x] No "omnichannel platform" or product references found via grep
- [x] All 9 geo landing pages (`/apac`, `/australia`, `/new-zealand`, `/asia`, `/japan`, `/south-korea`, `/indonesia`, `/philippines`, `/fiji`) have unique metadata
- [x] Sitemap includes all geo landing page URLs with correct domain `omnichannel.cx`
- [x] `areaServed` geo signals present in Organization schema
