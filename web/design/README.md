# omnichannel CX — Design System

A complete brand and UI system for **omnichannel CX** — a customer experience product whose visual identity is anchored by an interlaced heart-shaped knot mark and a confident purple→indigo→blue gradient. The system supports product UI, marketing surfaces, and presentation decks built on three voices in type: **Overpass** (display), **Cormorant** (serif sub-headings), and **Oxygen** (body).

---

## Source materials

This system was synthesised from the following uploads (kept in `/uploads`):

| File | Role |
|------|------|
| `omnichannel CX Brand Guide.pdf` | 11-page brand manual — logo rules, palette, type |
| `omnichannel-cx-black.png` | Full logo, black on transparent (light bg) |
| `omnichannel-cx-white.png` | Full logo, white on transparent (dark bg) |
| `omnichannel-cx-lightbg.png` | Full logo, color icon + black wordmark |
| `omnichannel-cx-darkbg.png` | Color icon only on transparent (dark bg) |
| `omnichannel-cx-icon-large.png` | Standalone icon — full color, large |
| `omnichannel-cx-icon-bg.png` | App-icon variant — color icon on dark gradient square |

All sources have been re-exported into `/assets` with semantic names (see _Index_ below). No web/codebase or Figma file was attached.

---

## Index

| Path | Purpose |
|------|---------|
| `README.md` | This file — brand context, content + visual foundations, iconography |
| `SKILL.md` | Agent-skill manifest for use in Claude Code |
| `colors_and_type.css` | All color + type CSS variables and semantic class presets |
| `assets/` | Logos, icon variants, app-icon |
| `preview/` | Design-system preview cards (palette, type, components, etc.) |

> **Caveat — no UI kit yet.** No product codebase, Figma file, or screenshots of the live `omnichannel CX` product were attached. UI kits are intentionally **not** included; building them from scratch would be invention, not recreation. Provide a Figma link or codebase import and we'll add `ui_kits/<product>/` next.

---

## Content fundamentals

The brand guide itself is **terse and instructional** — short imperative sentences ("Do not recolour the logo in any way."), sentence case, no marketing copy. From this we infer the product voice:

- **Tone** — clear, calm, professional. Confident without shouting. The product helps CX teams, so the voice should feel _composed under pressure_.
- **Casing** — Sentence case for headings and UI labels. Reserve ALL-CAPS for short eyebrows (`PLATFORM`, `CASE STUDY`) at small sizes with `letter-spacing: 0.12em`. The brand name itself is rendered "**omnichannel CX**" — lowercase _omnichannel_, uppercase _CX_, with _CX_ in a heavier weight than the rest.
- **Person** — Address the user as **you**; the product team is **we**. Avoid "us vs them" framing about end customers.
- **Emoji** — **No emoji** in product UI or marketing copy. The mark, palette, and type already do the emotional work.
- **Punctuation** — No exclamation points in core surfaces. **No em-dashes** anywhere in product or marketing copy; rewrite as two sentences, or use a comma / colon. Oxford comma. Numerals as digits from 10+.
- **Numbers / data** — Don't pad designs with vanity stats. When metrics appear, give them context (e.g. "_2.4× faster resolution_ vs. baseline") rather than naked numbers.
- **Vibe** — Considered, not loud. The hero says one thing well. White space is part of the message.

Examples (good ↔ avoid):

```
✓ "Resolve every conversation in one pane."
✗ "Resolve EVERY conversation, in JUST one pane! 🚀"

✓ "Built for teams who respond fast and care deeply."
✗ "We're SO excited to help YOU level up your CX game!"

✓ Eyebrow: PLATFORM   Title: One inbox, every channel.
✗ Eyebrow: 🌟 The Platform   Title: A truly amazing platform!!!
```

---

## Visual foundations

### Colors

Five brand colors, used as instructed by the guide: **bright colors are accents, used sparingly to highlight content.** Dark Blue is the primary; Mauve and Bright Blue are supporting accents that combine into the signature gradient.

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--ocx-dark-blue` | `#1b1464` | 27 20 100 | **Primary** — headings, primary buttons, dark surfaces |
| `--ocx-mauve` | `#aa42dc` | 170 66 220 | Accent — highlights, gradient terminus |
| `--ocx-bright-blue` | `#0071bc` | 0 113 188 | Accent — links, gradient terminus |
| `--ocx-mid-grey` | `#575757` | 87 87 87 | Body / muted foreground |
| `--ocx-black` | `#000000` | 0 0 0 | Primary text on light bg |

Derived neutrals (`--ocx-grey-50…900`) and tints of dark blue are defined in `colors_and_type.css` for surfaces, dividers, and hover states.

### The signature gradient

```
linear-gradient(135deg, #aa42dc 0%, #1b1464 50%, #0071bc 100%)
```

Pulled directly from the icon mark — purple → deep indigo → bright blue. Use it for:

- Hero backgrounds and section dividers
- Single emphasis elements (one CTA, one chart accent) — never multiple per surface
- Gradient text (`.ocx-gradient-text`) for very short phrases

### Typography

- **Overpass** — display / BIG BOLD statements, headings. 700–900 weight. Tight tracking (-0.02em) at large sizes.
- **Cormorant** — serif, used for sub-headings. _Italic_ at the lede / sub-head level reads as warm and human against Overpass's geometric authority.
- **Oxygen** — body copy and longform blocks. 400 default; **bold** and _italic_ to break up sections.

Pairing rule: pick one of `display + body` (Overpass + Oxygen) or `display + serif sub + body` (Overpass + Cormorant + Oxygen). Never use Cormorant for body, never use Oxygen for headlines, never run all three weights of one family on the same screen.

### Spacing & layout

- 8-pt grid: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.
- Generous outer margins. Hero sections use `--sp-9` (96px) of vertical breathing room minimum.
- Maximum content measure: ~64ch for body copy, ~18 words per line for headings.

### Backgrounds

- **Default surface is plain white** (`--bg`) or near-white (`--bg-subtle`).
- **Inverse surfaces** use `--ocx-dark-blue` solid, with white type. Heroes can use the signature gradient — once per page.
- No repeating textures, no noise / grain, no hand-drawn illustrations. The brand is geometric and clean.
- Imagery, when used, should be **cool-toned** (skewing blue/violet) and high-contrast. Avoid warm sepia, avoid heavy color-grade filters.

### Corners & shape

- Default radius `--r-md` (8px) for inputs and buttons.
- Cards `--r-lg` (14px). Hero / spotlight cards `--r-xl` (22px).
- Pill `--r-pill` for tags, status chips, segmented controls.
- The icon's flowing curves are echoed in generous corner radii — never sharp 90° corners on interactive elements.

### Borders & dividers

- 1px `--border` (`#d8d8e0`) for subtle separation.
- 1px `--border-strong` for emphasised groupings.
- Inverse surfaces: `rgba(255,255,255,0.12)` for dividers.
- Avoid colored left-border accent stripes on cards — that's not in the language.

### Shadows / elevation

All shadows tinted with the dark-blue primary so they feel like part of the system, not generic grey:

| Token | Use |
|-------|-----|
| `--shadow-xs` | Hairline lift on inputs |
| `--shadow-sm` | Resting cards |
| `--shadow-md` | Hovered cards, dropdowns |
| `--shadow-lg` | Modals, important spotlights |
| `--shadow-glow` | Mauve glow under primary CTA on dark bg only |

### Hover & press states

- **Hover** on primary buttons: lift 1px (`translateY(-1px)`), shadow steps up `sm → md`.
- **Hover** on links / ghost buttons: foreground darkens 10% _or_ the underline appears.
- **Press**: shrink to `scale(0.98)`, shadow drops back to resting.
- **Focus**: 2px outline in `--ocx-bright-blue` with 2px offset — never remove outlines.
- Transitions: `all var(--dur-base) var(--ease-standard)` — 220ms, gentle ease.

### Animation

- Fades (220ms) and small translations (8–16px). No bounces, no overshoots.
- Easing leans soft and confident (`cubic-bezier(0.2, 0.8, 0.2, 1)`).
- Reserve motion for: page entry, modal open, list-item insertion, button press feedback. Don't decorate with idle animation.

### Transparency & blur

- Modal scrims: `rgba(27, 20, 100, 0.55)` with a 4px backdrop blur.
- Glass surfaces (rare): `rgba(255,255,255,0.7)` + `backdrop-filter: blur(20px)` over photography only.
- Don't stack glass on glass.

### Cards

```
background: var(--bg);
border: 1px solid var(--border);
border-radius: var(--r-lg);
box-shadow: var(--shadow-sm);
padding: var(--sp-5) var(--sp-6);
```

On hover: `box-shadow: var(--shadow-md); transform: translateY(-2px);`. The border stays — the lift comes from shadow + translate, not border color change.

---

## Iconography

The brand guide does **not** specify an icon system, and no codebase was provided. Recommendation:

- **Icon library** — **Lucide** ([lucide.dev](https://lucide.dev)) at 1.25px stroke weight, `currentColor`. Lucide's geometric, lightly-rounded line style harmonises with the heart-knot mark's flowing curves and Overpass's geometric letterforms.
- **Sizing** — 16, 20, 24px in product UI; 32, 48px for feature blocks.
- **Color** — `currentColor` by default. Single-color only; do not duotone.
- **Stroke weight** — 1.25px is the house weight. Don't mix Lucide with Heroicons solid or Material filled within the same surface.

> **🚩 Substitution flag** — Lucide is a substitute. If `omnichannel CX` ships its own icon set, replace `assets/icons/` with the production glyphs and update this section.

### Logo & icon assets

| File | Use case |
|------|----------|
| `assets/logo-full-color.png` | Default — full logo on light backgrounds |
| `assets/logo-full-black.png` | Light backgrounds, color-restricted output |
| `assets/logo-full-white.png` | Dark backgrounds |
| `assets/logo-icon-color.png` | Icon-only color mark on light or dark backgrounds |
| `assets/logo-icon-large.png` | Standalone icon for hero / app store / social |
| `assets/logo-icon-app.png` | Pre-composed app icon (icon on gradient square) |

**Logo rules** (from the brand guide, paraphrased):
- The full logo never appears smaller than **175px wide**.
- The icon never appears smaller than **32px** (a custom 16px version exists — request from the brand team).
- Always preserve clearspace using the cap-height of the **X** in "CX" as the minimum.
- **Never** squish, scale-distort, rotate, or recolor the logo. Use only the supplied files.
- **Never** resize the logotype out of proportion to the icon.

### Emoji & unicode characters

**Not used.** Don't substitute unicode glyphs (★, ✓, →) for proper icons. The arrow icon from Lucide replaces `→`; the check icon replaces `✓`.

---

## Font sources

- **Overpass** — brand-supplied variable TTFs in `fonts/` (`Overpass-VariableFont_wght.ttf` + italic). Loaded via `@font-face` in `colors_and_type.css`.
- **Cormorant** — loaded from Google Fonts. _🚩 Substitution — no brand files supplied._
- **Oxygen** — loaded from Google Fonts. _🚩 Substitution — no brand files supplied._

If the brand team has hand-tuned WOFF2/TTF files for Cormorant or Oxygen, drop them in `fonts/` and we'll swap the `@import` for `@font-face` declarations.

---

## Open questions for the brand team

1. **Icon system** — Is there a house icon library? If yes, please share it.
2. **Product surfaces** — What are the core products / surfaces (web app, marketing site, mobile, in-product email)? Without this, we can't build UI kits.
3. **Photography** — Any guidance on photographic style? Stock library? Illustration system?
4. **Charts & data viz** — Does the product surface metrics? If so, we should define a categorical palette and chart styling.
5. **Voice samples** — A handful of real product copy strings (button labels, empty states, error messages) would tighten the content fundamentals beyond inference from the brand guide.
