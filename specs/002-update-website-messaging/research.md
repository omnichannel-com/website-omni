# Research: Update Website Messaging

## Decisions

### 1. Keep Next.js 16 with Static Export (not migrate to Astro)
- **Decision**: Evolve the existing Next.js 16 app configured with `output: "export"` rather than migrating to Astro.
- **Rationale**: The existing site already has a working build pipeline, Tailwind CSS design system, Pagefind search integration, PostHog analytics, and Playwright E2E tests. Rewriting in Astro would require rebuilding all of these for zero AEO benefit since Next.js static export produces equally crawlable static HTML.
- **Alternatives considered**: Astro (rejected due to migration cost), vanilla HTML (rejected due to design system rebuild), hybrid Next.js+Astro (rejected due to operational complexity).

### 2. Calendly as Single Booking Destination
- **Decision**: All booking CTAs link to `https://calendly.com/graeme-omnichannel/30min`.
- **Rationale**: The user specified this URL. It keeps the site static (no backend), provides a controlled calendar experience, and simplifies implementation by removing the need for multiple CTA handlers.
- **Alternatives considered**: Calendly embed (rejected — adds iframe complexity and cookie issues), custom form + serverless handler (rejected — adds backend complexity), multiple Calendly event types (rejected — user chose single URL).

### 3. Cookie Consent: Minimal Banner + /privacy.html
- **Decision**: A minimal banner with Accept/Decline buttons, plus a standalone privacy policy page.
- **Rationale**: Meets UK ICO and Australian Privacy Act requirements with minimal UI disruption. Declining prevents PostHog initialization entirely. The site functions fully without tracking.
- **Alternatives considered**: Granular consent categories (rejected — overkill for single analytics provider), no consent (rejected — violates regulation), Implied consent (rejected — not valid under GDPR/Privacy Act).

### 4. Quiz Persistence: sessionStorage
- **Decision**: Store quiz answers in `sessionStorage` for the current browsing session only.
- **Rationale**: Balances user convenience (refresh doesn't lose progress) with privacy (no long-term storage without consent). Reset button clears storage.
- **Alternatives considered**: localStorage (rejected — persists across sessions, raises privacy questions), no persistence (rejected — poor UX on refresh).

### 5. Content Cluster Format: Next.js App Router Pages
- **Decision**: Content cluster articles are built as Next.js App Router pages (`page.tsx`), with content sourced from Markdown where appropriate.
- **Rationale**: Consistent with the existing site architecture. Markdown front-matter provides type-safe metadata (author, dates, tags). `gray-matter` is already a dependency.
- **Alternatives considered**: Astro content collections (rejected — requires framework migration), pure MDX (rejected — adds complexity for simple static content).

## AEO Research Notes

### AI Crawler Allowlist (robots.txt)
Current best practice is to explicitly allow specific crawlers rather than blanket `User-Agent: * Allow: /`. The following crawlers should be allowed:
- `GPTBot`, `OAI-SearchBot` (OpenAI)
- `ClaudeBot`, `Claude-SearchBot` (Anthropic)
- `PerplexityBot` (Perplexity)
- `Google-Extended` (Google SGE)
- `CCBot` (Common Crawl)
- `Amazonbot` (Alexa AI)
- `Applebot-Extended` (Apple Intelligence)

### `llms.txt` Format
The `llms.txt` file should follow the proposed standard:
- Plain text, markdown-style links
- Organized sections (Core concepts, Product, Optional)
- Absolute URLs to canonical content
- Updated whenever cluster pieces are published

### Schema.org for AEO
- **Article schema**: Required on pillar and all cluster pieces with `author`, `datePublished`, `dateModified`
- **FAQPage schema**: Required on pillar with Q/A pairs matching visible content
- **Organization schema**: Must be updated from SaaS to consultancy positioning
- **BreadcrumbList schema**: Optional but helpful for navigation context

### External Authority Links
For topical authority, the pillar page should link to:
- NIST AI Risk Management Framework (`https://www.nist.gov/itl/ai-risk-management-framework`)
- EU AI Act (`https://artificial-intelligence-act.com/` or official EU source)
- Academic papers on human oversight in autonomous systems (e.g., IEEE, ACM)

## Unknowns Resolved

| Unknown | Resolution |
|---------|------------|
| Framework choice | Keep Next.js 16 static export (existing site) |
| Booking mechanism | Calendly URL (user specified) |
| Cookie consent approach | Minimal banner + privacy page |
| Quiz persistence | `sessionStorage` for current session |
| Content cluster build | Next.js App Router pages with Markdown |
| AEO artifact generation | Build-time generation via Next.js metadata + manual `llms.txt` |
