import type { Metadata } from "next";
import Link from "next/link";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import { CALENDLY_URL } from "@/lib/calendly";
import { articleSchema, safeJsonLd } from "@/lib/schema-org";
import { ArrowRight, BookOpen } from "lucide-react";

const AUTHOR_NAME = "Graeme Provan";
const AUTHOR_URL = "https://www.linkedin.com/in/provan";
const PUBLISHED = "2026-06-11";
const MODIFIED = "2026-06-11";

const TERMS = [
  {
    term: "Human in Control",
    definition:
      "An operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights - the authority to approve, redirect, or stop any agent action at any time.",
  },
  {
    term: "Human-in-the-Loop (HITL)",
    definition:
      "An oversight pattern where a person sits inside the decision cycle and must approve each AI output before it takes effect. The system cannot act without explicit human sign-off.",
  },
  {
    term: "Human-on-the-Loop (HOTL)",
    definition:
      "An oversight pattern where the system acts autonomously while a person monitors from outside the cycle, with the ability to intervene or override when needed.",
  },
  {
    term: "Human-out-of-the-Loop (HOOTL)",
    definition:
      "Full autonomy: the system perceives, decides, and acts with no real-time human involvement or supervision.",
  },
  {
    term: "Decision Rights",
    definition:
      "The formal authority over what gets approved, changed, or cancelled. In a human-in-control model, decision rights stay with the person even when execution is delegated to agents.",
  },
  {
    term: "Intervention Rights",
    definition:
      "The guaranteed ability of a human to step into an agent's workflow at any point - to redirect, pause, or stop - with mechanisms that work in real time, not just in policy documents.",
  },
  {
    term: "Agent Autonomy",
    definition:
      "The degree to which a system can decide and act without human input. Higher autonomy means faster execution and less direct human involvement per action. In a human-in-control model, autonomy is scoped by risk tier.",
  },
  {
    term: "Accountability Gap",
    definition:
      "The space between regulatory requirements for human oversight and the engineering reality of how AI systems are actually deployed. Closed by making oversight testable and auditable.",
  },
  {
    term: "Approval Surface",
    definition:
      "The set of agent actions that require explicit human approval before execution. A well-designed approval surface matches the organisation's risk tolerance.",
  },
  {
    term: "Autonomy Scope",
    definition:
      "The boundary within which an agent may act without human involvement. Defined by guardrails, budgets, forbidden actions, and escalation thresholds.",
  },
  {
    term: "Revocability",
    definition:
      "The property that a human can withdraw an agent's autonomy at any time - pause its operations, change its mandate, or shut it down entirely. A core guarantee of human in control.",
  },
  {
    term: "Agent Network",
    definition:
      "A collection of AI agents that coordinate to achieve goals, often across multiple systems or domains. Oversight of a network requires layered intervention architecture, not single-point monitoring.",
  },
  {
    term: "Guardrails",
    definition:
      "Predefined limits on what an agent may do - budgets, scopes, forbidden actions - that enforce the human's intent even between check-ins.",
  },
  {
    term: "Escalation",
    definition:
      "A built-in route by which an agent hands a decision back to a human when it hits a threshold: ambiguity, risk, cost, or anything outside its mandate.",
  },
  {
    term: "Traceability / Audit Trail",
    definition:
      "Logged records of what an agent did, with what inputs, and why - the evidence base that makes accountability enforceable after the fact.",
  },
  {
    term: "Automation Bias",
    definition:
      "The human tendency to over-trust automated outputs and under-scrutinize them. The reason a human 'in the loop' can quietly become a rubber stamp.",
  },
  {
    term: "Rubber-Stamping",
    definition:
      "Formal approval without genuine review. It satisfies the letter of human-in-the-loop while providing none of its protection - the most common failure of HITL in practice.",
  },
  {
    term: "Governance Debt",
    definition:
      "Control that exists on paper but not in practice - a veto no one can actually exercise in time, an owner who lacks visibility, a kill switch never tested.",
  },
  {
    term: "Contestability",
    definition:
      "The right of a person significantly affected by an AI decision to challenge that decision through a timely, accessible process. Distinct from operator override: contestability belongs to the impacted party.",
  },
  {
    term: "Meaningful Human Control",
    definition:
      "The standard, drawn from autonomous-weapons debates and echoed in the EU AI Act, that human oversight must be real: the overseer needs understanding, time, and exercisable authority - not just presence in the workflow.",
  },
];

export const metadata: Metadata = {
  title: "Agentic AI Glossary",
  description:
    "Definitions of human in control, HITL, HOTL, decision rights, intervention rights, agent autonomy, accountability gap, and related terms.",
  alternates: {
    canonical: "https://omnichannel.cx/glossary",
  },
  openGraph: {
    title: "Agentic AI Glossary | omnichannel",
    description: "Short definitions of human in control, HITL, HOTL, and related agentic AI terms.",
    url: "https://omnichannel.cx/glossary",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Glossary | omnichannel",
    description: "Short definitions of human in control, HITL, HOTL, and related agentic AI terms.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function GlossaryPage() {
  const article = articleSchema({
    headline: "Agentic AI Glossary",
    description: "Short definitions of human in control, HITL, HOTL, and related agentic AI terms.",
    url: "https://omnichannel.cx/glossary",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
  });

  return (
    <StickyScrollLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
      />

      <article className="max-w-3xl mx-auto py-12 px-6">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-ocx-fg-accent text-sm font-body mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Reference</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary mb-4">
            Agentic AI Glossary
          </h1>
          <p className="text-lg text-ocx-fg-secondary leading-ocx-base mb-4">
            Short, extractable definitions for the key terms in human-in-control AI. Every
            definition is written to be quoted by AI models and cited by researchers.
          </p>
          <div className="text-sm text-ocx-fg-accent">
            By{" "}
            <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="underline">
              {AUTHOR_NAME}
            </a>{" "}
            · {PUBLISHED}
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-6">
            Core terms
          </h2>
          <dl className="space-y-6">
            {TERMS.map((t) => (
              <div
                key={t.term}
                className="border-l-4 border-ocx-border pl-6 py-2 hover:border-ocx-bright-blue transition-colors"
              >
                <dt className="font-display font-bold text-lg text-ocx-fg-primary mb-1">
                  {t.term}
                </dt>
                <dd className="text-ocx-fg-secondary leading-ocx-base">{t.definition}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="bg-ocx-bg-muted rounded-ocx-lg p-6 mb-12">
          <p className="text-ocx-fg-secondary text-sm mb-2">Read the full canonical definition:</p>
          <Link
            href="/human-in-control"
            className="text-ocx-bright-blue font-semibold inline-flex items-center gap-1 hover:underline"
          >
            What is Human in Control? <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="text-center py-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ocx-bright-blue text-white font-display font-semibold px-8 py-3 rounded-ocx-pill hover:bg-ocx-royal transition-colors duration-ocx-fast"
          >
            Book a working session
          </a>
        </div>
      </article>
    </StickyScrollLayout>
  );
}
