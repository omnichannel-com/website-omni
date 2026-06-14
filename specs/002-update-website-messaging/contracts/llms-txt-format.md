# Contract: llms.txt Format

## Overview

The `llms.txt` file at the domain root (`/llms.txt`) serves as an AEO manifest that guides AI crawlers to authoritative content. It follows the proposed `llms.txt` standard format.

## File Location

```
https://omnichannel.cx/llms.txt
```

Must be served as plain text (`Content-Type: text/plain; charset=utf-8`).

## Format Specification

```text
# [Site Name]

> [Short-form canonical definition — one sentence]

## Core concepts

- [Page Title](https://omnichannel.cx/path): One-line description of what the page answers.
- [Page Title](https://omnichannel.cx/path): One-line description.

## Company

- [Home](https://omnichannel.cx/): What the company does.
- [Services](https://omnichannel.cx/services): Detailed service offerings.
- [About](https://omnichannel.cx/about): Company background and author attribution.

## Optional

- [Checklist](https://omnichannel.cx/checklist): Practical guides and checklists.
```

## Content Rules

1. **H1**: Site name only (no marketing copy)
2. **Blockquote**: Short-form canonical definition verbatim
3. **Sections**: Organized by topic area (Core concepts, Company, Optional)
4. **Links**: Absolute URLs only, with descriptive one-line summaries
5. **Updates**: Must be refreshed whenever a new cluster piece is published

## Example (Current State)

```text
# OmniChannel

> Human in control means AI agents do the work; a human keeps the final say.

## Core concepts

- [What Is Human in Control?](https://omnichannel.cx/human-in-control): Canonical definition of human in control (HIC), its three pillars (authority, visibility, revocability), and how it differs from human-in-the-loop and human-on-the-loop.
- [Human in Control vs. Human-in-the-Loop vs. Human-on-the-Loop](https://omnichannel.cx/human-in-control-vs-hitl-hotl): Plain-English comparison of the three oversight models for AI agents, with a worked example.
- [The Four Properties of Human in Control](https://omnichannel.cx/four-properties-human-in-control): Expands the "in practice" framework: Visibility, Decision rights, Intervention, Attribution.
- [Agentic AI Glossary](https://omnichannel.cx/glossary): Short definitions of human in control, HITL, HOTL, decision rights, intervention rights, agent autonomy, accountability gap.

## Company

- [OmniChannel Home](https://omnichannel.cx/): Customer experience and service operations consultancy. Human-in-control AI advisory for banking, insurance, telecoms, and utilities.
- [Services](https://omnichannel.cx/services): Detailed consultancy services: Maturity Review, CX strategy, operational performance, contact centre advisory, AI & automation, training & capability.
- [About](https://omnichannel.cx/about): Founder background, operational credibility, independence, and the human-in-control philosophy.

## Optional

- [Human-in-Control Deployment Checklist](https://omnichannel.cx/human-in-control-checklist): Practical checklist for deploying AI agents with human control guarantees built in.
```

## Validation

- File must be reachable at domain root
- All linked URLs must return 200
- Canonical definition must match verbatim (SC-010)
- No relative URLs
