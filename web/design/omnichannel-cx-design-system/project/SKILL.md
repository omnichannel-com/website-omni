---
name: omnichannel-cx-design
description: Use this skill to generate well-branded interfaces and assets for omnichannel CX, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always link or inline `colors_and_type.css` so the design uses the real brand tokens, and reference logos from `assets/` rather than re-drawing them.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, scope, variations), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Primary** `#1b1464` (Dark Blue). Use for headings, primary buttons, dark surfaces.
- **Accents** `#aa42dc` Mauve, `#0071bc` Bright Blue — _used sparingly_ per the brand guide.
- **Signature gradient** `linear-gradient(135deg, #b45fe0 0%, #2a2585 50%, #0086c8 100%)` — sampled from the logo ribbon (orchid → indigo-violet → azure); once per page, not everywhere. Dark/light hero variants: `--ocx-gradient-dark`, `--ocx-gradient-light`.
- **Type** Overpass (display, 700–900) · Cormorant (serif sub-heads, often italic) · Oxygen (body, 400/700).
- **No emoji.** No noise textures. No left-border-accent cards. No bouncy animation.
- **Theme-aware.** Light by default; dark via `[data-theme="dark"]` or `prefers-color-scheme`. Build on semantic tokens (`--bg`, `--fg`, `--surface`, `--btn-primary-bg`…) so components adapt to both modes automatically.
- **Logos** in `assets/`. Never recolor, never rotate, never squish. Full logo ≥ 175px, icon ≥ 32px.
