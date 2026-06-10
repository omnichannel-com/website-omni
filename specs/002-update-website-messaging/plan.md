# Implementation Plan: Update Website Messaging

**Branch**: `002-update-website-messaging` | **Date**: 2026-06-10 | **Spec**: [`specs/002-update-website-messaging/spec.md`](./spec.md)

**Input**: Reposition the existing Next.js 16 static-export website from SaaS product to CX consultancy; add AEO pillar, quiz, privacy compliance, and content cluster.

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Evolve the existing Next.js 16 static-export site (`web/`) to reflect Omnichannel's consultancy positioning. Update copy, navigation, metadata, and Schema.org across all pages. Add a 5-question maturity quiz, a `/privacy.html` page with cookie consent, and a comprehensive AEO pillar page (`/human-in-control.html`) supported by 6 cluster articles. All booking CTAs route to a single Calendly URL. Maintain the existing Tailwind design system, PostHog analytics, and Pagefind search.

## Technical Context

**Language/Version**: TypeScript 5, Next.js 16.2.7, React 18, Node.js 20+

**Primary Dependencies**: Next.js (App Router, static export), React, Tailwind CSS v3, PostHog JS, Pagefind, Lucide React, date-fns, gray-matter

**Storage**: N/A — static HTML export; content in repo as Markdown/TSX

**Testing**: Playwright (E2E), manual AEO verification (search engine checks)

**Target Platform**: Web browsers (mobile 680px+, tablet 860px+, desktop)

**Project Type**: Web application (static marketing site with client-side interactivity)

**Performance Goals**: Static export < 100KB initial bundle per page; Pagefind index pre-built at build time

**Constraints**: `output: "export"` — no API routes, no SSR at runtime, no `next/image` optimization (unoptimized mode), all dynamic content must be client-side

**Scale/Scope**: ~5 core pages + 6 cluster articles + blog archive; single author, single deployment target

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Brand Consistency | ⚠️ REVIEW | Existing site uses `--ocx-*` tokens; spec introduces new color names but same hex values. Verify mapping in `tailwind.config.ts`. |
| II. Accessibility First | ✅ PASS | WCAG 2.1 AA required by spec (FR-005, SC-007). Existing focus states and contrast must be preserved. |
| III. Performance & Simplicity | ⚠️ VIOLATION — justified | Next.js 16 is a framework when constitution prefers vanilla HTML/CSS/JS. **Justification**: this is evolution of an existing production site, not greenfield. Rewriting to vanilla would add months for zero AEO benefit. Static export minimizes runtime JS. |
| IV. Content Clarity | ✅ PASS | Spec mandates consultancy tone, no product references, no emoji/exclamation points. |
| V. Design System Discipline | ✅ PASS | Spec requires shared CSS custom properties and component classes (FR-005). Tailwind token system already in place. |

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
website-omni/
├── web/                          # Next.js 16 application
│   ├── src/
│   │   ├── app/                  # App Router pages
│   │   │   ├── page.tsx          # Homepage (consultancy repositioning)
│   │   │   ├── about/
│   │   │   │   └── page.tsx      # About page (NEW)
│   │   │   ├── services/
│   │   │   │   └── page.tsx      # Services page (repositioned from pricing)
│   │   │   ├── human-in-control/
│   │   │   │   └── page.tsx      # AEO pillar page (NEW)
│   │   │   ├── privacy-policy/
│   │   │   │   └── page.tsx      # Privacy page (NEW — replaces old placeholder)
│   │   │   ├── glossary/
│   │   │   │   └── page.tsx      # Glossary page (NEW)
│   │   │   └── layout.tsx        # Root layout: metadata, Schema.org, PostHog, cookie banner
│   │   ├── components/
│   │   │   ├── navbars/          # Sticky nav (primary + services variant)
│   │   │   ├── landing-sections/ # Hero, challenge, services, approach, industry, FAQ, CTA
│   │   │   ├── quiz/             # Quiz component (NEW)
│   │   │   ├── cookie-banner/    # Cookie consent banner (NEW)
│   │   │   ├── footer/           # Site footer with tagline + privacy link
│   │   │   └── ui/               # Card, button, tag, arg (reusable primitives)
│   │   ├── hooks/
│   │   │   └── use-posthog.ts    # Safe PostHog initialization with consent gate
│   │   ├── lib/
│   │   │   ├── posthog.ts        # PostHog client config
│   │   │   ├── schema-org.ts     # JSON-LD generators (Organization, WebSite, FAQPage, Article)
│   │   │   ├── content.ts        # Markdown content loader for cluster articles
│   │   │   └── calendly.ts       # Calendly URL constant
│   │   └── types/
│   │       └── index.ts          # Shared TypeScript types
│   ├── blog/                     # Static content cluster articles (HTML/MD → TSX pages)
│   ├── content/                  # Content collections (Markdown front-matter)
│   ├── public/
│   │   ├── robots.txt            # AI crawler allowlist
│   │   ├── llms.txt              # AEO manifest
│   │   └── sitemap.xml           # Auto-generated at build
│   ├── design/                   # Brand assets, tokens, CSS
│   ├── e2e/                      # Playwright tests
│   └── package.json
├── specs/                        # Feature specs and plans
└── .specify/                     # Speckit workflow config
```

**Structure Decision**: Single Next.js app in `web/`. Existing `src/app/` structure is retained. New pages added as App Router routes. Content cluster articles may be sourced from `blog/` or `content/` Markdown and rendered via `content.ts` utility. No backend — all data is static or client-side.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Next.js 16 framework (vs vanilla HTML) | Existing production site with established build pipeline, Tailwind integration, and Pagefind search. Rewriting would delay AEO window. | Vanilla HTML would require rebuilding design system, search, and analytics from scratch. |
| Cookie consent banner (additional JS) | Regulatory compliance for UK ICO and Australian Privacy Act; PostHog requires consent for tracking. | No simpler alternative — tracking without consent violates regulation. |
