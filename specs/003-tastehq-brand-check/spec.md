# Feature Specification: TasteHQ Brand Taste Checking

**Feature Branch**: `003-tastehq-brand-check`

**Created**: 2026-06-14

**Status**: Draft

**Input**: User description: "Integrate TasteHQ to evaluate and enforce brand taste consistency across the omnichannel CX website. Generate AGENTS.md brand contract from the live site, add CI workflow to score preview deployments against the brand contract, and provide developer tooling to judge any output against the brand's taste vector (palette, whitespace, voice, emphasis)."

## Overview

The omnichannel CX website is a statically-exported Next.js site with a strict brand system defined in the project constitution. As the site evolves across multiple contributors and deployment previews, visual and tonal drift is a real risk. TasteHQ is a brand-taste-as-a-service platform that vectorises any URL into a machine-readable taste grammar and can judge a preview URL against a target (canonical) URL, returning a 0–100 fidelity score and a ranked list of fixes.

This feature integrates TasteHQ into the repository as both a **one-time brand contract generator** and a **continuous enforcement mechanism** in CI. It does NOT modify the site's visual design; it only adds tooling to catch brand drift before it reaches production.

**Scope boundaries**:
- One-time generation of `AGENTS.md` from the canonical site (`https://omnichannel.cx`)
- GitHub Actions CI workflow that runs on every PR, scoring the preview deployment
- Optional local developer command (`npm run taste`) for manual checks
- No runtime code changes to the website itself
- No new pages, components, or visual changes

## User Scenarios & Testing

### User Story 1 — Generate Brand Contract (Priority: P1)

A maintainer wants to capture the current brand taste of the live site as a machine-readable contract so that automated tools can reason about it.

**Why this priority**: Without a contract, there is no canonical definition of "on-brand" to judge against. This is the foundation for everything else.

**Independent Test**: Run the TasteHQ vectoriser against `https://omnichannel.cx`, receive a JSON taste grammar, and verify the output contains axes relevant to the brand (palette, whitespace, voice, emphasis).

**Acceptance Scenarios**:

1. **Given** the live site is accessible at `https://omnichannel.cx`, **When** the maintainer runs the TasteHQ vectorise endpoint, **Then** the response contains a valid taste grammar with at least the axes: `palette`, `whitespace`, `voice`, `emphasis`.
2. **Given** the taste grammar response, **When** the maintainer saves it as `AGENTS.md` in the repo root, **Then** the file is valid YAML/MD frontmatter and contains a `taste.source_url` field pointing to `https://omnichannel.cx`.
3. **Given** `AGENTS.md` exists, **When** a developer reads it, **Then** they can understand the brand's taste vector without visiting the live site.

---

### User Story 2 — CI Enforcement on Pull Requests (Priority: P1)

A contributor opens a PR that accidentally changes a CSS variable or copy tone. The CI pipeline catches the drift before merge.

**Why this priority**: Brand drift is easiest to fix when caught early. Automated enforcement prevents "death by a thousand cuts" across many small PRs.

**Independent Test**: Open a PR that introduces a deliberate off-brand change (e.g., a bright red button). The CI workflow runs, the TasteHQ score drops below threshold, and the PR check fails.

**Acceptance Scenarios**:

1. **Given** a PR is opened with a preview deployment URL, **When** the GitHub Actions workflow runs, **Then** it calls the TasteHQ score endpoint with `target_url=https://omnichannel.cx` and `url=<preview-url>`.
2. **Given** the score endpoint returns a fidelity score, **When** the score is below the configured `min_fidelity` (default 0.75), **Then** the CI check fails and posts a comment listing the ranked fixes.
3. **Given** the score is at or above `min_fidelity`, **When** the CI check completes, **Then** it passes and posts a comment confirming the score.
4. **Given** the CI workflow is misconfigured (missing secrets, bad URL), **When** it runs, **Then** it fails gracefully with a clear error message rather than a silent pass.

---

### User Story 3 — Local Developer Taste Check (Priority: P2)

A developer wants to check their local branch against the brand contract before pushing.

**Why this priority**: Shorter feedback loop than CI. Not mandatory for merge, but speeds up development.

**Independent Test**: Run a local command that serves the `out/` directory and calls TasteHQ against it, receiving a score and fix list.

**Acceptance Scenarios**:

1. **Given** the developer has built the site to `web/out/`, **When** they run `npm run taste` (or equivalent), **Then** the command starts a local server, calls the TasteHQ score endpoint, and prints the score + top 5 fixes.
2. **Given** the local server is running, **When** the TasteHQ call fails (network, timeout), **Then** the command exits with a clear error and a non-zero status code.

---

### Edge Cases

- What happens if the live site (`omnichannel.cx`) is down when the vectoriser runs? The contract generation should fail with a retry or manual fallback.
- What happens if the preview URL is not yet available when the CI workflow runs? The workflow should poll briefly or accept a configurable delay.
- What happens if TasteHQ API returns an unexpected schema? The CI workflow should fail gracefully, not crash.
- What happens if the PR does not produce a preview deployment (e.g., docs-only change)? The workflow should skip with an informative message.

## Requirements

### Functional Requirements

- **FR-001**: A maintainer MUST be able to generate an `AGENTS.md` brand contract by calling the TasteHQ `api/vectorize` or `api/agents-md` endpoint with `https://omnichannel.cx` as the source URL.
- **FR-002**: The generated `AGENTS.md` MUST be committed to the repo root and include: `taste.source_url`, `grammar.palette`, `grammar.whitespace`, `grammar.voice`, `grammar.emphasis`, and `verify` section with `judge`, `target_url`, and `min_fidelity`.
- **FR-003**: A GitHub Actions workflow MUST run on every PR, calling the TasteHQ `api/score` endpoint with the preview URL and `target_url=https://omnichannel.cx`.
- **FR-004**: The CI workflow MUST fail if the returned `fidelity` score is below `min_fidelity` (default 0.75) and post a PR comment with the score, verdict, and ranked fix list.
- **FR-005**: The CI workflow MUST pass if the score is at or above `min_fidelity` and post a confirming PR comment.
- **FR-006**: The CI workflow MUST handle missing preview URLs, TasteHQ API failures, and unexpected response schemas gracefully — never silently pass.
- **FR-007**: A local npm script MUST exist (`npm run taste`) that builds the site, serves `out/` locally, calls TasteHQ, and prints score + fixes.
- **FR-008**: All TasteHQ API calls MUST include the correct `Content-Type: application/json` header and a timeout (e.g., 30 seconds).
- **FR-009**: The TasteHQ API key/token MUST be stored as a GitHub secret (`TASTEHQ_API_KEY` or similar) and referenced in the workflow; it MUST NOT be hardcoded.

### Key Entities

- **Brand Contract (`AGENTS.md`)**: Machine-readable YAML/MD file defining the brand's taste vector. Generated once, committed, read by CI and local tooling.
- **TasteHQ Score Response**: JSON object containing `score` (0–100), `verdict` (pass/fail), and `fixes` (array of axis-level deltas with `current`, `target`, `action`).
- **CI Workflow (`.github/workflows/taste.yml`)**: GitHub Actions workflow triggered on PR `opened`, `synchronize`, `reopened`.
- **Local Taste Script**: npm script wrapping build, serve, and API call.

## Success Criteria

- **SC-001**: A PR introducing an off-brand visual change is caught by CI with a failing check and a readable fix list within 2 minutes of the preview deployment being ready.
- **SC-002**: The `AGENTS.md` contract is generated, committed, and readable by a non-designer developer within 10 minutes of running the generation command.
- **SC-003**: The CI workflow has a false-negative rate (off-brand change that passes) below 10% for obvious visual drift (color, spacing, typography).
- **SC-004**: The local `npm run taste` command completes end-to-end (build → serve → score → print) in under 60 seconds.
- **SC-005**: No sensitive credentials (API keys, tokens) appear in the repository history.

## Assumptions

- TasteHQ API endpoints (`www.tastehq.w230.net/api/*`) are stable and documented at the time of implementation.
- The live site `https://omnichannel.cx` is the canonical brand reference and will not be redesigned during this feature's implementation.
- GitHub Actions is the CI platform; no support for GitLab CI, CircleCI, etc. is required in v1.
- The preview deployment provider (Vercel, Netlify, etc.) exposes a predictable preview URL that can be interpolated in the workflow.
- The project already has a working build (`npm run build`) that produces a static `out/` directory.
