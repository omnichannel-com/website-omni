# Implementation Plan: Migrate and Rebrand Website to omnichannel CX

**Branch**: `001-migrate-rebrand-website` | **Date**: 2026-06-02 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-migrate-rebrand-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Migrate the Next.js 14 website from `template/website-next-main/` to `web/` and apply the omnichannel CX brand system (`web/design/`). Rebrand all surfaces: replace "2ai"/"AlterEgo" with "omnichannel CX", swap Tailwind tokens for brand tokens, replace fonts with Overpass/Cormorant/Oxygen, update logo assets, remove third-party UI libraries (NextUI, MUI), remove decorative animation libraries, adapt the pricing page to a contact CTA, and rebrand both standalone calculators while preserving all functionality.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.x, React 18, Next.js 14.2.3

**Primary Dependencies**:
- **Keep**: `next`, `react`, `react-dom`, `typescript`, `tailwindcss`, `postcss`, `eslint`, `eslint-config-next`, `sharp`, `pagefind`, `next-themes`, `date-fns`
- **Add**: `lucide-react` (brand-specified icon library)
- **Remove**: `@nextui-org/react`, `@nextui-org/tabs`, `@mui/material`, `@emotion/react`, `@emotion/styled`, `styled-components`, `react-simple-typewriter`, `react-typewriter-effect`, `typewriter-effect`, `react-slick`, `slick-carousel`, `react-datepicker`, `@tabler/icons-react`, `react-icons`, `tailwind-scrollbar`

**Storage**: N/A — static/marketing site, no database

**Testing**: Manual verification (Lighthouse accessibility audit, visual regression via screenshot comparison, calculator output parity). No automated test framework currently in use.

**Target Platform**: Static web (Next.js static export or ISR), modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions)

**Project Type**: Web application — marketing site with blog and standalone HTML tools

**Performance Goals**: Lighthouse Performance >= 90, LCP < 2.5s, CLS < 0.1

**Constraints**:
- WCAG 2.1 AA contrast ratios (>= 4.5:1 normal text, >= 3:1 large text)
- `font-display: swap` for all web fonts
- All interactive elements keyboard-navigable with visible focus states
- Bundle size reduction through dependency removal (target: < 200KB JS initial)
- No new features — rebrand only

**Scale/Scope**: ~15 pages (landing, about, blog index, N blog posts, contact, pricing->CTA, privacy, terms, disclaimer), ~30 components, 2 standalone calculators

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I — Brand Consistency
- **Status**: PASS — Plan replaces all template colors with brand tokens, uses Overpass/Cormorant/Oxygen, applies logo rules

### Principle II — Accessibility First
- **Status**: PASS — Focus states retained, contrast requirements enforced, `prefers-reduced-motion` respected (single fade-in only)

### Principle III — Performance & Simplicity
- **Status**: JUSTIFIED VIOLATION — Keeping Next.js build step (see Complexity Tracking). Removing 10+ dependencies to offset framework overhead. All other assets are static.

### Principle IV — Content Clarity
- **Status**: PASS — All copy rewritten per brand voice guidelines; no emoji, no exclamation points, sentence case

### Principle V — Design System Discipline
- **Status**: PASS — All styling flows through Tailwind + `--ocx-*` tokens; no magic numbers

## Project Structure

### Documentation (this feature)

```text
specs/001-migrate-rebrand-website/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
web/                          # Next.js app root (migrated from template/)
├── public/
│   ├── assets/               # Brand logos from web/design/assets/
│   ├── fonts/                # Overpass variable TTFs from web/design/fonts/
│   ├── blog/                 # Blog images (preserved)
│   ├── pagefind/             # Search index (rebuilt post-migration)
│   └── favicon.ico           # Brand favicon
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page (rebranded)
│   │   ├── layout.tsx        # Root layout with brand fonts + metadata
│   │   ├── globals.css       # Brand tokens + font imports + dark mode
│   │   ├── landing-page/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── pricing/          # Contact CTA page
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   └── disclaimer/
│   ├── components/
│   │   ├── navbars/
│   │   ├── landing-sections/
│   │   ├── blog-sections/
│   │   ├── about-pages/
│   │   ├── contact-sections/
│   │   ├── pricing-sections/ # Repurposed for CTA
│   │   ├── searchUI/
│   │   ├── buttons/
│   │   ├── styles/
│   │   └── theme/
│   ├── types/
│   └── utils/
├── tailwind.config.ts        # Brand token configuration
├── next.config.mjs           # Static export config
├── package.json              # Pruned dependencies
└── [config files...]

web/calculator/
├── genesys-shrinkage-calculator.html   # Rebranded CSS, preserved JS
└── queueing-theory-explainer.html      # Rebranded CSS, preserved JS

web/design/
├── assets/                   # Source of truth for logos
├── fonts/                    # Overpass TTFs
├── colors_and_type.css       # CSS variable reference
├── tailwind.config.js        # Tailwind token reference
├── tailwind-brand.css        # Brand CSS utilities
└── preview/                  # Design system preview cards
```

**Structure Decision**: The Next.js app lives at `web/` root, sharing the directory with `calculator/` and `design/`. This preserves the existing calculator location requirement and keeps the design system as a shared sibling resource.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Next.js build step (constitution prefers static-first) | Template is already a Next.js 14 app with ~30 components, blog routing, and Pagefind search integration. Converting to vanilla HTML/CSS/JS would require rebuilding the blog system, routing, component composition, and search from scratch — a multi-week rewrite vs. a focused rebrand. | Removing Next.js would force rebuilding: (1) app router with ~15 pages, (2) component system, (3) blog markdown processing, (4) Pagefind search integration, (5) dark mode toggle state management. The dependency removal and static export minimize framework overhead while preserving these capabilities. |
| No automated testing | Marketing site with no business logic; visual and accessibility verification via Lighthouse is sufficient | Adding Jest/Playwright would increase complexity beyond the rebrand scope; manual QA covers the surface area |
