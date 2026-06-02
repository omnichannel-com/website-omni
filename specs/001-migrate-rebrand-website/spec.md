# Feature Specification: Migrate and Rebrand Website to omnichannel CX

**Feature Branch**: `001-migrate-rebrand-website`

**Created**: 2026-06-02

**Status**: Draft

**Input**: User description: "This website is being created from a template. The website template is in the template directory. Migrate the website across to the web directory and apply the branding in the design directory along the way. Keep the same layout and fundamentals. All 2ai.cx content becomes omnichannel.cx. Existing calculators in web/calculator/ should be rebranded but remain in their current location."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Branded Landing Page (Priority: P1)

A visitor lands on the omnichannel CX homepage and immediately recognizes the brand through its colors, typography, logo, and tone. The layout mirrors the original template but every visual and textual element speaks to omnichannel CX.

**Why this priority**: The landing page is the primary entry point and first impression. Without it, no other page matters.

**Independent Test**: Load the homepage and verify zero references to "2ai" or "AlterEgo", correct logo placement, and brand color usage in the hero section.

**Acceptance Scenarios**:

1. **Given** the migrated site is running, **When** a visitor opens the root URL, **Then** the page title reads "omnichannel CX" and the hero section displays the omnichannel CX logo and brand colors.
2. **Given** the original template hero section, **When** compared to the migrated hero, **Then** layout and component structure are preserved while colors, fonts, and copy reflect omnichannel CX.

---

### User Story 2 - Consistent Site-Wide Navigation and Pages (Priority: P1)

A visitor can navigate through all site pages — about, blog, contact, pricing, privacy policy, terms of service — and experience a unified omnichannel CX brand identity on every surface.

**Why this priority**: Brand inconsistency across pages erodes trust. All surfaces must belong to the same product.

**Independent Test**: Click through every page from the navigation menu and verify consistent header, footer, color scheme, and typography on each.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they click a nav link, **Then** the destination page loads with the same navbar, footer, and brand styling.
2. **Given** the template page structure, **When** migrated, **Then** all routes remain reachable and no pages are dropped.

---

### User Story 3 - Blog Content with Updated Brand Voice (Priority: P2)

A visitor reads blog posts that are styled with the omnichannel CX design system and written in the brand voice: clear, calm, professional, with no emoji or exclamation points.

**Why this priority**: Blog content reinforces product authority. Rebranding the presentation layer is essential even if copy is migrated as-is initially.

**Independent Test**: Open any blog post and confirm it uses Overpass/Cormorant/Oxygen typography, brand colors, and the omnichannel CX header/footer.

**Acceptance Scenarios**:

1. **Given** the template blog index, **When** migrated, **Then** post cards use brand card styling and the page uses omnichannel CX typography.
2. **Given** a blog post page, **When** viewed, **Then** the post body uses the body font (Oxygen) and the page metadata references omnichannel CX.

---

### User Story 4 - Rebranded Calculator Tools (Priority: P2)

A visitor opens the Genesys shrinkage calculator or queueing theory explainer and sees a visual presentation consistent with the omnichannel CX brand, while all calculation logic remains intact.

**Why this priority**: These tools are existing assets that currently use unrelated styling. Bringing them into the brand family creates cohesion without rebuilding functionality.

**Independent Test**: Open each calculator, verify the styling uses omnichannel CX colors and fonts, and confirm all inputs, charts, and outputs still function correctly.

**Acceptance Scenarios**:

1. **Given** the Genesys shrinkage calculator, **When** rebranded, **Then** its CSS uses `--ocx-dark-blue`, `--ocx-mauve`, and `--ocx-bright-blue` tokens and the page includes the omnichannel CX logo.
2. **Given** the queueing theory explainer, **When** rebranded, **Then** its typography loads Overpass and Oxygen, and the color palette matches the brand system.

---

### User Story 5 - Responsive and Accessible Experience (Priority: P3)

A visitor using a mobile device, keyboard navigation, or screen reader can fully use every page and tool.

**Why this priority**: Accessibility is a constitutional non-negotiable. It applies to the entire site, not a single feature.

**Independent Test**: Run Lighthouse accessibility audit on the landing page and a calculator page; verify keyboard navigation through the primary navbar.

**Acceptance Scenarios**:

1. **Given** a visitor on a 375px-wide viewport, **When** they view any page, **Then** content reflows without horizontal scroll and touch targets are ≥ 44×44px.
2. **Given** a visitor using keyboard-only navigation, **When** they Tab through the navbar, **Then** every interactive element shows a visible 2px `--ocx-bright-blue` focus outline.

---

### Edge Cases

- **Missing image assets**: The template references images (Ellipse, Group, waves, faces, etc.) that may not align with the omnichannel CX brand. If no replacement is available, the image should be removed or replaced with a brand-gradient placeholder rather than left as a broken reference.
- **Dark mode toggle**: The template supports dark mode via CSS variables. The rebranded site must ensure dark mode uses inverse brand surfaces (`--ocx-dark-blue` background with white text) rather than the template's grey/black palette.
- **Calculator JavaScript dependencies**: Both calculators load D3 and other scripts from CDNs. The rebrand must not break these script references or their load order.
- **Font loading failures**: If Overpass variable fonts fail to load, the site must gracefully fall back to the specified fallback stack without layout shift.
- **Pagefind search index**: The template uses Pagefind for blog search. After migration, the search index must be rebuilt and functional.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: All source files from `template/website-next-main/` MUST be migrated into `web/` directly, preserving the Next.js app structure. The site will live at the `web/` root alongside existing `web/calculator/` and `web/design/` directories. [CLARIFIED: Option A — site root at `web/`]
- **FR-002**: Every visible reference to "2ai", "AlterEgo", "AI-enhanced AlterEgos", or related product copy MUST be replaced with "omnichannel CX" and appropriate CX-focused copy.
- **FR-003**: The Tailwind configuration MUST be updated to use omnichannel CX brand colors, typography, spacing, radii, and shadow tokens as defined in `web/design/tailwind.config.js` and `web/design/colors_and_type.css`.
- **FR-004**: The global CSS (`globals.css`) MUST import the brand font system: Overpass (self-hosted from `web/design/fonts/`), Cormorant and Oxygen (Google Fonts with `display=swap`).
- **FR-005**: Logo assets MUST be replaced with files from `web/design/assets/` using the appropriate variant for each context (light bg, dark bg, icon-only).
- **FR-006**: Page metadata (`<title>`, `<meta name="description">`, Open Graph, favicon) MUST reference omnichannel CX on every page.
- **FR-007**: The two calculator files in `web/calculator/` MUST have their CSS refactored to use omnichannel CX color and typography tokens while keeping all JavaScript logic, D3 references, and file paths unchanged.
- **FR-008**: Template imagery that conflicts with the brand (e.g., orange-themed stock images, faces, abstract ellipses) MUST be removed or replaced with brand-aligned alternatives.
- **FR-009**: All interactive elements MUST retain visible focus states (2px `--ocx-bright-blue` outline, 2px offset) and meet WCAG 2.1 AA contrast requirements.
- **FR-010**: The site MUST remain fully responsive; no page should introduce horizontal scroll on viewports ≥ 320px.
- **FR-011**: The blog section, including Pagefind search integration, MUST be preserved and functional after migration.
- **FR-012**: Dark mode support MUST be retained and mapped to the brand's inverse surface palette (`--ocx-dark-blue` background, white foreground). All components, pages, and calculators MUST support both light and dark variants. [CLARIFIED: Option A — keep dark mode toggle, map to brand inverse surfaces]
- **FR-013**: The `/pricing` page MUST be replaced with a single CTA page directing visitors to contact for pricing information, rather than displaying specific product tiers. The template pricing page structure may be reused for layout but all tier-specific copy and pricing data must be removed. [CLARIFIED: Option D — replace with 'Contact us for pricing' CTA page]

### Key Entities

- **Page**: A routed surface in the Next.js app router (e.g., `/`, `/about`, `/blog`, `/contact`). Each page has metadata, layout, and content. All pages must be migrated and rebranded.
- **Component**: A reusable React component in `src/components/` (e.g., navbar, hero, footer). Components must apply brand tokens and must not hardcode template colors or fonts.
- **Asset**: Static files in `public/` (images, logos, favicon, fonts) and `web/design/assets/` (brand logos and icons). Assets must be correctly referenced after migration.
- **Calculator**: Standalone HTML file with embedded CSS and JavaScript (`genesys-shrinkage-calculator.html`, `queueing-theory-explainer.html`). Calculators must be visually rebranded while preserving all functionality.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A text search across all migrated source files finds zero occurrences of "2ai" or "AlterEgo" in user-visible strings (excluding git history, comments documenting the migration, and original template archive).
- **SC-002**: Every page uses ONLY the five brand colors (`--ocx-dark-blue`, `--ocx-mauve`, `--ocx-bright-blue`, `--ocx-mid-grey`, `--ocx-black`) and derived neutrals; no arbitrary hex codes remain in component or page styling.
- **SC-003**: Lighthouse accessibility score is ≥ 90 on the landing page and ≥ 90 on at least one calculator page.
- **SC-004**: The site builds successfully with `next build` (or equivalent documented build step) with zero blocking errors.
- **SC-005**: All pages present in the template (landing, about, blog, contact, pricing, privacy policy, terms of service, disclaimer) are reachable in the migrated site.
- **SC-006**: Both calculators produce identical numerical outputs before and after the rebrand (verified by running the same inputs through each).

## Assumptions

- **Framework retention**: The existing Next.js 14 framework and its build pipeline will be retained from the template. Justification for keeping a build step (rather than converting to fully static HTML) MUST be documented in `plan.md` per constitution §Technology Standards.
- **Content scope**: Marketing copy will be rewritten to reflect omnichannel CX. Where exact replacement copy is not provided, the migration team will draft copy following the brand voice guidelines in `web/design/README.md`.
- **Asset availability**: Brand logos, fonts, and color tokens in `web/design/` are the source of truth and are sufficient for the rebrand. No new brand assets will be created.
- **Calculator logic**: The JavaScript logic inside both calculators is correct and complete; only visual styling will change.
- **Hosting**: The deployment target supports Next.js static export or server-side rendering; the exact hosting mechanism is out of scope for this spec.
- **No new features**: This is a migration and rebrand. No new pages, components, or functionality beyond what exists in the template will be added.
- **Third-party UI libraries**: NextUI and MUI will be removed and replaced with Tailwind CSS + brand tokens. The heading design from the template will be preserved and adapted to use Overpass display typography. [CLARIFIED: Option B — remove NextUI/MUI, keep heading design adapted to brand]
- **Animation**: All typewriter effect libraries will be removed. Hero text will use a single subtle fade-in on page load (220ms, standard easing) instead of idle decorative animation. [CLARIFIED: Option C — remove typewriters, single subtle fade-in on load only]
