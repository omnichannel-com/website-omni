<!--
Sync Impact Report
- Version change: N/A → 1.0.0 (initial ratification)
- Principles added: I. Brand Consistency, II. Accessibility First, III. Performance & Simplicity, IV. Content Clarity, V. Design System Discipline
- Sections added: Core Principles, Technology Standards, Development Workflow, Governance
- Templates requiring updates: none (initial creation)
- Follow-up TODOs: RATIFICATION_DATE set to 2026-06-02 based on first commit context; amend if project has an earlier formal adoption date.
- Amendments:
  - v1.1.0 — Added `uv` as preferred Python/dependency management tool.
  - v1.2.0 — Added CI/CD principle: Cloudflare Pages branch previews for copy validation before production deploy.
-->

# website-omni Constitution

## Core Principles

### I. Brand Consistency
Every surface — marketing page, tool, calculator, or preview — MUST visually and tonally belong to the omnichannel CX brand. Concrete rules:

- Use ONLY the five brand colors (`--ocx-dark-blue`, `--ocx-mauve`, `--ocx-bright-blue`, `--ocx-mid-grey`, `--ocx-black`) and their derived neutrals; never introduce arbitrary hex codes.
- Apply the signature gradient (`linear-gradient(135deg, #aa42dc 0%, #1b1464 50%, #0071bc 100%)`) at most once per page/screen.
- Respect logo rules: minimum 175px width for full logo, 32px for icon, never distort or recolor.
- Typography hierarchy is fixed: Overpass for display headings, Cormorant for serif sub-headings, Oxygen for body copy. Never use Cormorant for body or Oxygen for headlines.

Rationale: The brand guide is intentionally terse and strict. Consistency builds trust with CX professionals who value clarity and reliability.

### II. Accessibility First (NON-NEGOTIABLE)
All user-facing code MUST meet WCAG 2.1 AA minimum. Concrete rules:

- Color contrast MUST be ≥ 4.5:1 for normal text and ≥ 3:1 for large text/UI components. The dark-blue primary on white already satisfies this; verify before introducing new pairings.
- Focus indicators MUST remain visible: 2px outline in `--ocx-bright-blue` with 2px offset. Never remove outlines or replace with `outline: none` without a compliant substitute.
- All interactive elements MUST be keyboard-navigable and have discernible hover/press/focus states.
- Images and icons MUST have meaningful `alt` text or `aria-label` where they convey information.
- Respect `prefers-reduced-motion`: animations MUST degrade to instant or fade-only for users who request reduced motion.

Rationale: CX teams serve diverse end-customers; our surfaces must be usable by everyone without exception.

### III. Performance & Simplicity
The site is static-first and MUST remain fast. Concrete rules:

- Prefer vanilla HTML, CSS, and JavaScript. Frameworks and build tools require explicit justification in the plan.
- External dependencies (CDNs, libraries) MUST be justified; self-host critical assets if CDN reliability is a concern.
- Images and fonts MUST use `font-display: swap` and lazy-loading where appropriate.
- Bundle size is not currently a concern (no bundler), but any introduced build step MUST treeshake and minify.
- YAGNI: do not add complexity for hypothetical future needs. Each feature must solve a present problem.

Rationale: Static sites load instantly; adding build steps and frameworks erodes the performance advantage and increases maintenance.

### IV. Content Clarity
Copy and labels MUST reflect the brand voice: clear, calm, professional, composed under pressure. Concrete rules:

- Sentence case for headings and UI labels. Reserve ALL-CAPS for short eyebrows with `letter-spacing: 0.12em`.
- No emoji in product UI or marketing copy.
- No exclamation points on core surfaces.
- No em-dashes; rewrite as two sentences or use a comma / colon.
- Oxford comma. Numerals as digits from 10+.
- Address the user as **you**; the product team is **we**.

Rationale: The brand's emotional work is done by the mark, palette, and type — not by punctuation or emoji. Restraint signals confidence.

### V. Design System Discipline
All styling MUST flow through the established token system. Concrete rules:

- Use Tailwind utility classes and custom design tokens (`--ocx-*`) defined in `colors_and_type.css` and `tailwind.config.js`. Never hardcode magic numbers.
- Spacing MUST follow the 8-pt grid: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.
- Shadows MUST use the dark-blue-tinted system tokens (`--shadow-xs` through `--shadow-lg`); no generic grey shadows.
- Corner radii MUST use the system scale (`--r-md`, `--r-lg`, `--r-xl`, `--r-pill`); never sharp 90° corners on interactive elements.
- Iconography MUST use Lucide at 1.25px stroke weight, `currentColor`, single-color only. Do not mix with Heroicons solid or Material filled.
- Animation MUST use the standard easing (`cubic-bezier(0.2, 0.8, 0.2, 1)`) and duration tokens; no bounces or overshoots.

Rationale: Tokens ensure that any change to the brand (e.g., a color refresh) propagates everywhere without a find-and-replace hunt.

## Technology Standards

- **Markup**: HTML5, semantic elements, valid markup.
- **Styling**: Tailwind CSS v3 with custom brand tokens; `tailwind-brand.css` is the entry point.
- **Scripting**: Vanilla JavaScript (ES2022+); D3 is permitted for data visualization (e.g., calculator charts).
- **Fonts**: Self-hosted Overpass variable TTFs; Cormorant and Oxygen via Google Fonts with `display=swap`.
- **Icons**: Lucide (substitute until a house icon set is provided).
- **Build**: None for static pages; any build step must be documented in `plan.md` and approved.
- **Python / Dependencies**: `uv` is the preferred tool for Python environment and dependency management whenever possible. Use `uv tool install` for CLI tools, `uv pip` for packages, and `uv run` for scripts. Fall back to `pip` or `conda` only when `uv` does not support the required workflow.
- **Preview**: `npx http-server` or equivalent for local preview.
- **CI/CD**: Cloudflare Pages with branch previews. Every feature branch MUST be deployed to a preview URL (`*.pages.dev`) for stakeholder copy review before merging to `main`.

## Development Workflow

1. All features MUST have a spec, plan, and task list before implementation begins.
2. Design changes MUST be previewed in the `preview/` directory before integration into production pages.
3. Calculator/tools MUST work without JavaScript where feasible (progressive enhancement); at minimum, the UI must degrade gracefully.
4. Any deviation from the brand guide MUST be flagged in the spec with a substitution marker (e.g., `🚩 Substitution — Lucide used pending house icon set`).
5. Code review MUST verify: (a) token usage, (b) contrast compliance, (c) focus state presence, (d) copy tone.
6. Commit after each completed task or logical group.
7. **Deploy workflow**: Build (`npm run build`) → Deploy preview (`wrangler pages deploy out --branch=<feature>`) → Validate copy on preview URL → Merge to `main` → Auto-deploy production.

## Governance

This constitution supersedes all other style guides and conventions for the website-omni project.

- **Amendments**: Require a written proposal in the spec, explicit approval, and a migration plan for any breaking changes (e.g., removing a brand color).
- **Versioning**: Follows semantic versioning:
  - MAJOR: removal or redefinition of a principle
  - MINOR: addition of a new principle or section
  - PATCH: clarifications, wording refinements, typo fixes
- **Compliance review**: Every plan and spec MUST reference the relevant principles. Violations MUST be justified in the Complexity Tracking table of `plan.md`.
- **Ratification**: This constitution is ratified when accepted by the project lead.

**Version**: 1.2.0 | **Ratified**: 2026-06-02 | **Last Amended**: 2026-06-14
