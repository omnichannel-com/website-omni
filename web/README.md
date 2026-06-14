# omnichannel CX Website

Static Next.js site for omnichannel — a customer experience and service operations consultancy.

## Prerequisites

- Node.js 18+
- npm 9+

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static export in `out/` (configured via `output: "export"` in `next.config.mjs`).
Pagefind search indexes are generated automatically in the `postbuild` step.

## Deploy to Cloudflare Pages

### One-time setup

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Create a Pages project (or use the Cloudflare dashboard):
   ```bash
   wrangler pages project create omnichannel-cx
   ```

### Production deploy

```bash
npm run build
wrangler pages deploy out --project-name=omnichannel-cx --branch=main
```

### Branch preview deploy (validate copy before publishing)

Every branch gets its own preview URL. This is the recommended workflow for reviewing copy changes before they go live.

```bash
# Build the site
npm run build

# Deploy from a feature branch — Cloudflare generates a unique preview URL
wrangler pages deploy out --project-name=omnichannel-cx --branch=preview-australia-copy
```

The preview URL will be:
`https://preview-australia-copy.omnichannel-cx.pages.dev`

Share this URL with stakeholders for copy review. When approved, merge the branch to `main` and deploy to production.

### Useful commands

| Command | Purpose |
|---------|---------|
| `wrangler pages deploy out --branch=main` | Production deploy |
| `wrangler pages deploy out --branch=<feature>` | Preview deploy |
| `wrangler pages deployment list` | List recent deployments |
| `wrangler pages deployment tail` | View realtime logs |

## GitHub Integration (optional)

Connect the repo in the Cloudflare dashboard under **Pages > omnichannel-cx > Git integration**. Set:

- **Build command**: `npm run build`
- **Build output directory**: `out`

Cloudflare will then auto-build preview deployments for every PR and production deployments for every push to `main`.

## Project structure

```
src/
  app/              — Next.js App Router pages
  components/       — React components
  lib/              — Utilities (schema-org, posthog, calendly, quiz)
  hooks/            — Custom React hooks
public/
  sitemap.xml       — Static sitemap
  robots.txt        — Crawler directives
  llms.txt          — AI search crawler content
out/                — Generated static export (gitignored)
```

## Technologies

- Next.js 16 (static export)
- React 18
- Tailwind CSS 3
- PostHog analytics
- Pagefind search
- Playwright (e2e tests)
