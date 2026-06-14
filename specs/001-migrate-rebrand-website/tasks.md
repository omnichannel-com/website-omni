# Tasks: Migrate and Rebrand Website to omnichannel CX

**Input**: Design documents from `/specs/001-migrate-rebrand-website/`

**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Manual verification only (Lighthouse, visual regression, calculator parity). No automated test tasks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Copy `template/website-next-main/` source files into `web/` preserving Next.js app router structure
- [x] T002 [P] Prune `package.json`: remove `@nextui-org/react`, `@nextui-org/tabs`, `@mui/material`, `@emotion/react`, `@emotion/styled`, `styled-components`, `react-simple-typewriter`, `react-typewriter-effect`, `typewriter-effect`, `react-slick`, `slick-carousel`, `react-datepicker`, `@tabler/icons-react`, `react-icons`, `tailwind-scrollbar`
- [x] T003 [P] Add `lucide-react` to dependencies in `web/package.json`
- [x] T004 Run `npm install` in `web/` to apply dependency changes
- [x] T005 [P] Copy Overpass font TTFs from `web/design/fonts/` to `web/public/fonts/`
- [x] T006 [P] Copy brand logo assets from `web/design/assets/` to `web/public/assets/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core brand system that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Replace `tailwind.config.ts` with brand token configuration derived from `web/design/tailwind.config.js` (colors, typography, spacing, radii, shadows)
- [x] T008 Replace `web/src/app/globals.css` with brand token imports: Overpass `@font-face` declarations, Cormorant and Oxygen Google Fonts, CSS custom properties for dark mode mapped to brand inverse surfaces
- [x] T009 Update `web/src/app/layout.tsx` to import new fonts, set metadata title/description to "omnichannel CX", remove w3.css link, update favicon path
- [x] T010 Remove `next-themes` theme provider from layout if no longer needed (decide based on dark mode approach); ensure dark mode class strategy maps to brand inverse surfaces
- [x] T011 Update `next.config.mjs` for static export and remove any template-specific configs

**Checkpoint**: Foundation ready — brand tokens, fonts, and global styles are applied. Site should build without errors.

---

## Phase 3: User Story 1 - Branded Landing Page (Priority: P1) 🎯 MVP

**Goal**: The homepage displays the omnichannel CX brand with correct logo, colors, typography, and copy. No references to "2ai" or "AlterEgo" remain.

**Independent Test**: Load `http://localhost:3000/` and verify: page title reads "omnichannel CX", hero shows brand logo and colors, zero "2ai"/"AlterEgo" references, Overpass font in headings.

### Implementation for User Story 1

- [x] T012 [US1] Rebrand `web/src/app/page.tsx`: remove w3.css link, update landing page component import
- [x] T013 [P] [US1] Rebrand `web/src/app/landing-page/page.tsx`: replace "2ai"/"AlterEgo" copy with omnichannel CX copy, update metadata
- [x] T014 [US1] Rebrand `web/src/components/navbars/primary-navbar.tsx`: replace logo with omnichannel CX logo, update nav links and colors to brand tokens, remove template styling
- [x] T015 [US1] Rebrand `web/src/components/navbars/secondary-navbar.tsx`: apply brand colors and typography, adapt sticky behavior
- [x] T016 [P] [US1] Rebrand `web/src/components/landing-sections/hero.tsx`: replace template images with brand-aligned content or gradient placeholders, apply brand colors and Overpass typography, remove typewriter effects, add single fade-in animation
- [x] T017 [P] [US1] Rebrand `web/src/components/landing-sections/image-section.tsx`: remove or replace template imagery with brand-aligned alternatives
- [x] T018 [P] [US1] Rebrand `web/src/components/landing-sections/testimonial-section.tsx`: update typography and colors to brand tokens
- [x] T019 [P] [US1] Rebrand `web/src/components/landing-sections/alteregos.tsx`: replace "AlterEgo" copy with omnichannel CX copy, update colors and fonts
- [x] T020 [US1] Rebrand `web/src/components/landing-sections/viewPricing.tsx`: update CTA copy and colors
- [x] T021 [US1] Rebrand `web/src/components/landing-sections/footer.tsx`: replace logo, update copy, apply brand colors and typography
- [x] T022 [P] [US1] Rebrand `web/src/components/landing-sections/testimonials.tsx`: update colors and fonts to brand tokens
- [x] T023 [US1] Remove unused template image files from `web/public/` (Ellipse, Group, waves, faces, orange-themed images)

**Checkpoint**: Landing page fully rebranded and independently testable. Run `npm run dev` and verify visually.

---

## Phase 4: User Story 2 - Consistent Site-Wide Navigation and Pages (Priority: P1)

**Goal**: All site pages share the same navbar, footer, and brand styling. No pages are dropped.

**Independent Test**: Navigate through every page from the navbar and verify consistent styling, correct metadata, and zero "2ai"/"AlterEgo" references.

### Implementation for User Story 2

- [x] T024 [P] [US2] Rebrand `web/src/app/about/page.tsx` and `web/src/components/about-pages/`: update copy, colors, fonts
- [x] T025 [P] [US2] Rebrand `web/src/app/contact/page.tsx` and `web/src/components/contact-sections/`: update copy, colors, fonts
- [x] T026 [P] [US2] Rebrand `web/src/app/blog/page.tsx` and `web/src/components/blog-sections/`: update card styling, typography, colors
- [x] T027 [US2] Rebrand `web/src/app/privacy-policy/page.tsx`: update metadata and any visible styling
- [x] T028 [US2] Rebrand `web/src/app/terms-of-service/page.tsx`: update metadata and any visible styling
- [x] T029 [US2] Rebrand `web/src/app/disclaimer/page.tsx`: update metadata and any visible styling
- [x] T030 [US2] Rebrand `web/src/components/searchUI/`: apply brand tokens to search input and results
- [x] T031 [US2] Rebrand `web/src/components/buttons/`: replace with Tailwind + brand token buttons, remove MUI/NextUI button dependencies
- [x] T032 [US2] Rebrand `web/src/components/styles/` and `web/src/components/theme/`: remove template-specific styles, apply brand tokens
- [x] T033 [US2] Verify all navbar links point to correct routes; no broken links

**Checkpoint**: All site pages are reachable, consistently styled, and free of old brand references.

---

## Phase 5: User Story 3 - Blog Content with Updated Brand Voice (Priority: P2)

**Goal**: Blog index and posts use brand typography, colors, and voice. Pagefind search works.

**Independent Test**: Open `/blog`, verify post cards use brand styling. Open a blog post, verify body uses Oxygen font and metadata references omnichannel CX. Test search functionality.

### Implementation for User Story 3

- [x] T034 [US3] Rebrand `web/src/components/blog-sections/` post card components with brand card styling (`--ocx-grey-50` bg, `--r-lg` radius, `--shadow-sm`)
- [x] T035 [US3] Rebrand blog post layout: apply Oxygen body font, Overpass/Cormorant headings, remove template styling
- [x] T036 [US3] Update blog post metadata (titles, descriptions) to reference omnichannel CX where visible
- [x] T037 [US3] Rebrand Pagefind search UI: search input and results use brand colors and typography
- [x] T038 [US3] Rebuild Pagefind search index with `npm run postbuild` and verify search works

**Checkpoint**: Blog section fully rebranded and functional with working search.

---

## Phase 6: User Story 4 - Rebranded Calculator Tools (Priority: P2)

**Goal**: Both calculators display brand colors and fonts while preserving all calculation logic.

**Independent Test**: Open each calculator, verify brand colors in inputs/buttons/charts, verify Overpass/Oxygen fonts loaded, run sample calculations and confirm outputs match pre-rebrand values.

### Implementation for User Story 4

- [x] T039 [P] [US4] Rebrand `web/calculator/genesys-shrinkage-calculator.html` CSS: replace color variables with `--ocx-*` tokens, add Overpass/Oxygen font imports, add omnichannel CX logo header
- [x] T040 [P] [US4] Rebrand `web/calculator/queueing-theory-explainer.html` CSS: replace color variables with `--ocx-*` tokens, add Overpass/Oxygen font imports, add omnichannel CX logo header
- [x] T041 [US4] Verify both calculators' JavaScript logic is untouched and all inputs/charts/outputs function correctly
- [x] T042 [US4] Run identical inputs through both calculators and confirm numerical outputs match pre-rebrand values

**Checkpoint**: Both calculators visually rebranded with identical functionality.

---

## Phase 7: User Story 5 - Responsive and Accessible Experience (Priority: P3)

**Goal**: All pages and tools are responsive, keyboard-navigable, and meet WCAG 2.1 AA.

**Independent Test**: Run Lighthouse accessibility audit on landing page and a calculator page. Keyboard-navigate through navbar on desktop and mobile widths.

### Implementation for User Story 5

- [x] T043 [US5] Audit all interactive elements for visible focus states: add 2px `--ocx-bright-blue` outline with 2px offset where missing
- [x] T044 [US5] Verify all touch targets are ≥ 44×44px on mobile viewports
- [x] T045 [US5] Run Lighthouse accessibility audit on landing page; score must be ≥ 90
- [x] T046 [US5] Run Lighthouse accessibility audit on `genesys-shrinkage-calculator.html`; score must be ≥ 90
- [x] T047 [US5] Verify no horizontal scroll on viewports ≥ 320px across all pages
- [x] T048 [US5] Test dark mode on all pages: verify `--ocx-dark-blue` background with white text, no broken contrast

**Checkpoint**: Accessibility and responsiveness criteria met across all surfaces.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final sweep and verification

- [x] T049 [P] Global copy sweep: search all `web/src/` and `web/app/` files for "2ai", "AlterEgo", "AI-enhanced" and replace with omnichannel CX equivalents
- [x] T050 [P] Global color sweep: search for template hex codes (`#F45615`, `#F7931F`, `#1F3138`, `#232426`, etc.) and replace with brand tokens
- [x] T051 Verify `web/package.json` has no remaining references to removed packages
- [x] T052 Run `npm run build` in `web/` and verify zero blocking errors
- [x] T053 Verify all pages from template are present: `/`, `/about`, `/blog`, `/contact`, `/pricing`, `/privacy-policy`, `/terms-of-service`, `/disclaimer`
- [x] T054 [P] Remove unused component files and orphaned imports after dependency removals
- [x] T055 Verify brand logo files in `web/public/assets/` are correctly sized: full logo ≥ 175px wide, icon ≥ 32px
- [x] T056 Verify Cormorant and Oxygen Google Fonts load with `display=swap`
- [x] T057 Commit all changes with descriptive messages

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) — No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) — Builds on US1 navbar/footer but can proceed in parallel
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) — Builds on US2 page structure
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) — Independent of site pages; only depends on brand tokens
- **User Story 5 (P3)**: Must run after all user stories are substantially complete — cross-cutting audit

### Within Each User Story

- Components with [P] can be worked on in parallel
- Footer should follow hero/navbar within a story (they share layout context)
- Blog posts follow blog index (shared card component)
- Calculators are independent of each other

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks can run in parallel (within Phase 2) after T001/T004
- US1, US2, and US4 can start in parallel once Foundational is complete
- US3 can start once US2 blog structure is available
- US5 (audit) runs last
- All Polish tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all landing section rebrands together:
Task: "Rebrand hero.tsx with brand colors and Overpass typography"
Task: "Rebrand image-section.tsx with brand-aligned content"
Task: "Rebrand testimonial-section.tsx with brand tokens"
Task: "Rebrand alteregos.tsx with omnichannel CX copy"
Task: "Rebrand testimonials.tsx with brand colors"

# Then footer (depends on above for layout context):
Task: "Rebrand footer.tsx with omnichannel CX logo and copy"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (landing page)
4. **STOP and VALIDATE**: Test landing page independently — verify brand, no old references, builds cleanly
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test landing page → Deploy/Demo (MVP!)
3. Add User Story 2 → Test all pages → Deploy/Demo
4. Add User Story 3 → Test blog + search → Deploy/Demo
5. Add User Story 4 → Test calculators → Deploy/Demo
6. Add User Story 5 → Run Lighthouse audit → Final validation
7. Run Polish phase → Final commit

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (landing page)
   - Developer B: User Story 2 (site-wide pages) + User Story 3 (blog)
   - Developer C: User Story 4 (calculators)
3. All meet for User Story 5 (accessibility audit) and Polish phase

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
