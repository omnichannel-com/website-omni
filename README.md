# website-omni

Migrating and rebranding the omnichannel CX website from a Next.js template. All `2ai.cx` / `AlterEgo` content becomes `omnichannel.cx`, with the full design system applied across every surface.

## Overview

This repository contains the source for the **omnichannel CX** marketing website — a customer-experience platform site built on Next.js, styled with a custom brand design system, and deployed as a static export.

- **Live site target**: `omnichannel.cx`
- **Original template**: `template/website-next-main/`
- **Active build**: `web/`

## Repository Structure

| Path | Purpose |
|------|---------|
| `web/` | Active Next.js application — pages, components, styles, assets |
| `web/src/app/` | Next.js App Router pages and layouts |
| `web/src/components/` | Shared React components |
| `web/src/utils/` | Utility functions and helpers |
| `web/public/` | Static assets served at root (images, favicon, etc.) |
| `web/design/` | Design system — brand guide, CSS tokens, fonts, logo assets |
| `web/calculator/` | Standalone HTML tools (shrinkage calculator, queueing explainer) |
| `template/website-next-main/` | Original unbranded template (reference / migration source) |
| `specs/` | Spec Kit feature specifications and implementation plans |
| `.github/agents/` & `.github/prompts/` | AI agent prompts and Copilot instructions |
| `.specify/` & `.windsurf/` | Spec Kit and Windsurf workspace configuration |
| `environment.yml` | Conda environment definition for local tooling |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js](https://nextjs.org/) 14 (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3.x |
| UI / Icons | [Lucide React](https://lucide.dev/) |
| Themes | [next-themes](https://github.com/pacocoursey/next-themes) |
| Search | [Pagefind](https://pagefind.app/) (static search index) |
| Analytics | [PostHog](https://posthog.com/) |
| Testing | [Playwright](https://playwright.dev/) |
| Build output | Static export (`dist/`) |

## Design System

The omnichannel CX brand system lives in `web/design/` and defines:

- **Colors**: Dark blue (`#1b1464`), mauve (`#aa42dc`), bright blue (`#0071bc`), mid-grey (`#575757`)
- **Signature gradient**: `linear-gradient(135deg, #aa42dc, #1b1464, #0071bc)`
- **Typography**: Overpass (display), Cormorant (serif), Oxygen (body)
- **Spacing**: 8-pt grid with generous whitespace
- **Voice**: Clear, calm, professional. No emoji, no exclamation points.

See `web/design/README.md` for the full brand guide, usage rules, and asset index.

## Getting Started

### Prerequisites

- **Node.js** 18+ (check with `node --version`)
- **npm** (ships with Node.js)

### Install Dependencies

```bash
cd web
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

Produces a static export in `web/dist/`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the static site |
| `npm run postbuild` | Generate the Pagefind search index |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Playwright end-to-end tests |
| `npm run test:ui` | Run Playwright tests with UI mode |

## Project Conventions

- **Sentence case** for headings and UI labels.
- **No emoji** in product UI or marketing copy.
- **No exclamation points** in core surfaces.
- Commit `next-env.d.ts` — do not ignore it.
- Use `uv` (or `uv pip`) for any Python packages; do not add `pip` dependencies to `environment.yml`.

## Testing

Playwright tests cover critical user journeys. Run them with:

```bash
npm run test
```

Or launch the interactive UI:

```bash
npm run test:ui
```

## License

See `LICENSE` for details.