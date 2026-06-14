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

## Managing Cloudflare Deployments

### List all deployments

```bash
wrangler pages deployment list --project-name=omnichannel-web
```

Shows all branch previews and production deployments with their IDs, URLs, and timestamps.

### View deployment details

```bash
wrangler pages deployment describe <deployment-id> --project-name=omnichannel-c
```

Useful for checking which files were included and the exact build output for a deployment.

### View realtime logs

```bash
wrangler pages deployment tail --project-name=omnichannel-cx
```

Stream live request logs from the current production deployment. Helpful for debugging 404s or errors after publishing.

### Roll back to a previous deployment

Cloudflare Pages does not have a direct "rollback" command, but you can redeploy any previous build:

```bash
# Find the deployment ID from the list
wrangler pages deployment list --project-name=omnichannel-cx

# Redeploy that specific build to production
wrangler pages deploy out --project-name=omnichannel-cx --branch=main --commit-dirty=true
```

Alternatively, revert the Git commit and redeploy from `main`.

### Delete a branch preview

```bash
# Delete a specific branch's preview deployment
wrangler pages deployment delete --project-name=omnichannel-cx --branch=preview-australia-copy
```

### Change the production branch

If you initially set the wrong branch as production:

```bash
wrangler pages project modify omnichannel-cx --production-branch=main
```

### Add a custom domain

1. In the Cloudflare dashboard, go to **Pages > omnichannel-cx > Custom domains**.
2. Add your domain (e.g., `omnichannel.cx`).
3. Cloudflare auto-configures DNS and issues an SSL certificate.

### Set environment variables / secrets

```bash
# Add a secret (e.g., PostHog API key)
wrangler pages secret put POSTHOG_API_KEY --project-name=omnichannel-cx

# List all secrets
wrangler pages secret list --project-name=omnichannel-cx

# Delete a secret
wrangler pages secret delete POSTHOG_API_KEY --project-name=omnichannel-cx
```

Secrets are encrypted and only available to the build step and edge functions (not the static site itself unless explicitly passed through).

### Check project status

```bash
wrangler pages project list
wrangler pages project get omnichannel-cx
```

Shows project settings, production branch, and latest deployment info.

### Deployment command reference

| Command | Purpose |
|---------|---------|
| `wrangler pages deploy out --branch=main` | Production deploy |
| `wrangler pages deploy out --branch=<feature>` | Preview deploy |
| `wrangler pages deploy out --branch=main --commit-dirty=true` | Force deploy with uncommitted changes |
| `wrangler pages deployment list` | List all deployments |
| `wrangler pages deployment describe <id>` | Show deployment details |
| `wrangler pages deployment tail` | Stream live logs |
| `wrangler pages deployment delete --branch=<name>` | Delete a branch preview |
| `wrangler pages project get <name>` | Show project settings |
| `wrangler pages project modify <name> --production-branch=<branch>` | Change production branch |
| `wrangler pages secret put <key>` | Add an encrypted secret |
| `wrangler pages secret list` | List secrets |
| `wrangler pages secret delete <key>` | Remove a secret |
