import type { Metadata } from "next";
import Link from "next/link";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import { CALENDLY_URL } from "@/lib/calendly";
import { articleSchema, safeJsonLd } from "@/lib/schema-org";
import { ArrowRight, BookOpen } from "lucide-react";

const AUTHOR_NAME = "Graeme Provan";
const AUTHOR_URL = "https://www.linkedin.com/in/";
const PUBLISHED = "2026-06-11";
const MODIFIED = "2026-06-11";

export const metadata: Metadata = {
  title: "Human in Control and the Accountability Gap",
  description:
    "Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights. How it closes the accountability gap in AI regulation.",
  alternates: {
    canonical: "https://omnichannel.cx/human-in-control-accountability-gap",
  },
  openGraph: {
    title: "Human in Control and the Accountability Gap | omnichannel",
    description: "How human-in-control closes the accountability gap in AI regulation.",
    url: "https://omnichannel.cx/human-in-control-accountability-gap",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human in Control and the Accountability Gap | omnichannel",
    description: "How human-in-control closes the accountability gap in AI regulation.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function AccountabilityGapPage() {
  const article = articleSchema({
    headline: "Human in Control and the Accountability Gap",
    description:
      "How human-in-control closes the accountability gap in AI regulation - connecting the EU AI Act and NIST AI RMF to a practical operating model.",
    url: "https://omnichannel.cx/human-in-control-accountability-gap",
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
            <span>Regulation</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary mb-4">
            Human in Control and the Accountability Gap
          </h1>
          <p className="text-lg text-ocx-fg-secondary leading-ocx-base mb-4">
            Regulators worldwide demand human oversight of AI systems. But what does oversight
            mean in practice? Human in control is an operating model for AI agents in which
            autonomous agents execute the work while a human retains final decision rights. It is a
            practical answer to a regulatory requirement that is often left vague.
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
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            The gap
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            The EU AI Act requires high-risk AI systems to be designed for &quot;effective human
            oversight&quot; - to monitor, intervene, override, and deactivate. Australia&apos;s AI
            Ethics Principles demand &quot;appropriate levels of human control or oversight for the
            particular AI system or use case.&quot; NIST&apos;s AI Risk Management Framework calls
            for human &quot;in the loop, on the loop, or in command.&quot;
          </p>
          <p className="text-lg leading-ocx-base mb-6">
            None of these documents tells you how to build it. They say you must, not how. The
            accountability gap is the space between the regulatory sentence and the engineering
            reality - the space where organisations install a dashboard, assign an owner, and call
            it done.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            What the regulators actually mean
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Read closely, the regulatory texts converge on four requirements that map directly to
            the human-in-control operating model:
          </p>

          <div className="space-y-6 mb-8">
            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                EU AI Act Article 14 - Natural persons overseeing high-risk AI
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                Requires deployers to assign overseers with &quot;real authority, competence, and
                support.&quot; The human-in-control model answers this by naming a decision owner,
                logging their approvals, and ensuring the overseer has the tools to exercise their
                authority - not just the title.
              </p>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                EU AI Act Article 26(2) - Transparency obligations
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                Requires systems to be &quot;sufficiently transparent&quot; so that overseers can
                understand their capabilities and limitations. The visibility property of
                human-in-control - real-time view of actions, reasoning, and plans - directly
                satisfies this.
              </p>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Australia&apos;s AI Ethics Principle 8 - Accountability
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                Requires organisations to &quot;consider the appropriate level of human control or
                oversight.&quot; Human-in-control makes this consideration explicit: a documented
                operating model with named owners, not an undocumented assumption.
              </p>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                NIST AI RMF - Human oversight and governance
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                Frames oversight as a governance function - not a technical feature - embedded in
                organisational structures. Human-in-control treats oversight as an operating model
                owned by a named person, which aligns with NIST&apos;s governance-first approach.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Why compliance checkboxes fail
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            The gap persists because organisations treat oversight as a checkbox. A person is
            &quot;assigned.&quot; A dashboard is &quot;deployed.&quot; A policy is
            &quot;written.&quot; But the assigned person lacks authority. The dashboard shows metrics,
            not decisions. The policy is never tested. The system passes audit but fails reality.
          </p>
          <p className="text-lg leading-ocx-base mb-6">
            Human-in-control closes this gap by making oversight testable. Can the named person stop
            the agent in under 60 seconds? Can they see what it is doing right now? Is every
            consequential action linked to their name? These are yes/no questions. The model
            either works or it does not.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            What to document
          </h2>
          <ul className="list-disc ml-8 space-y-3 text-lg leading-ocx-base">
            <li>
              <strong>Named owner:</strong> A specific person, not a role, who holds decision
              rights for this agent or agent class.
            </li>
            <li>
              <strong>Authority scope:</strong> What the owner can approve, redirect, or stop -
              and what they cannot.
            </li>
            <li>
              <strong>Intervention mechanism:</strong> How the owner exercises authority - UI,
              API, escalation path - and how long it takes.
            </li>
            <li>
              <strong>Audit trail:</strong> What is logged, where it is stored, and who can access
              it.
            </li>
            <li>
              <strong>Test record:</strong> When the kill switch was last tested, and what happened.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            External sources
          </h2>
          <ul className="list-disc ml-8 space-y-3 text-lg leading-ocx-base">
            <li>
              <a
                href="https://www.nist.gov/itl/ai-risk-management-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocx-bright-blue underline"
              >
                NIST AI Risk Management Framework
              </a>
            </li>
            <li>
              <a
                href="https://artificial-intelligence-act.com/the-act/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocx-bright-blue underline"
              >
                EU AI Act - human oversight requirements
              </a>
            </li>
            <li>
              <a
                href="https://www.industry.gov.au/publications/australias-ai-ethics-principles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocx-bright-blue underline"
              >
                Australia&apos;s AI Ethics Principles
              </a>
            </li>
          </ul>
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
