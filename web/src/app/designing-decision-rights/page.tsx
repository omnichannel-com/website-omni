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

export const metadata: Metadata = {
  title: "Designing Decision Rights for AI Agents",
  description:
    "Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights. A practical guide to gating agent actions.",
  alternates: {
    canonical: "https://omnichannel.cx/designing-decision-rights",
  },
  openGraph: {
    title: "Designing Decision Rights for AI Agents | omnichannel",
    description: "A practical guide: which agent actions to gate, which to free-run, and how to decide.",
    url: "https://omnichannel.cx/designing-decision-rights",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing Decision Rights for AI Agents | omnichannel",
    description: "A practical guide: which agent actions to gate, which to free-run, and how to decide.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function DecisionRightsPage() {
  const article = articleSchema({
    headline: "Designing Decision Rights for AI Agents",
    description:
      "A practical guide to gating agent actions: which to approve, which to free-run, and how to decide.",
    url: "https://omnichannel.cx/designing-decision-rights",
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
            <span>Guide</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary mb-4">
            Designing Decision Rights for AI Agents
          </h1>
          <p className="text-lg text-ocx-fg-secondary leading-ocx-base mb-4">
            The hardest part of human in control is not the technology. It is the design choice:
            which actions can the agent take alone, and which need a human gate? Human in control
            is an operating model for AI agents in which autonomous agents execute the work while a
            human retains final decision rights. Here is how to decide what those rights cover.
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
            The decision-rights framework
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Every agent action can be scored on two axes: <strong>reversibility</strong> (can you
            undo it?) and <strong>stakes</strong> (what happens if it is wrong?). The combination
            tells you where the human belongs.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-ocx-border">
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent">
                    Reversibility
                  </th>
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent">
                    Low stakes
                  </th>
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent">
                    High stakes
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Reversible</td>
                  <td className="py-3 px-4">
                    <strong>Free-run.</strong> Let the agent act. Monitor for drift.
                  </td>
                  <td className="py-3 px-4">
                    <strong>HOTL rhythm.</strong> Agent acts; human reviews within a time window.
                  </td>
                </tr>
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Irreversible</td>
                  <td className="py-3 px-4">
                    <strong>HITL rhythm.</strong> Human approves before execution.
                  </td>
                  <td className="py-3 px-4">
                    <strong>Named owner approval.</strong> Single human gate with audit trail.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Examples by domain
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Customer service (low stakes, mostly reversible)
              </h3>
              <ul className="list-disc ml-8 space-y-2 text-ocx-fg-secondary leading-ocx-base">
                <li>
                  <strong>Free-run:</strong> Routine responses, appointment booking, balance
                  inquiries.
                </li>
                <li>
                  <strong>HOTL review:</strong> Complaint handling, refund authorisation up to a
                  threshold.
                </li>
                <li>
                  <strong>HITL gate:</strong> Refunds above threshold, account closure,
                  complaints flagged for regulatory risk.
                </li>
              </ul>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Financial services (high stakes, many irreversible)
              </h3>
              <ul className="list-disc ml-8 space-y-2 text-ocx-fg-secondary leading-ocx-base">
                <li>
                  <strong>Free-run:</strong> Data retrieval, report generation, scheduled
                  communications.
                </li>
                <li>
                  <strong>HOTL review:</strong> Portfolio rebalancing within mandate, routine
                  trade execution.
                </li>
                <li>
                  <strong>HITL gate:</strong> Discretionary trades, mandate changes, client
                  onboarding approvals.
                </li>
              </ul>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Healthcare (high stakes, often irreversible)
              </h3>
              <ul className="list-disc ml-8 space-y-2 text-ocx-fg-secondary leading-ocx-base">
                <li>
                  <strong>Free-run:</strong> Appointment scheduling, patient communication,
                  inventory checks.
                </li>
                <li>
                  <strong>HOTL review:</strong> Diagnostic imaging triage, medication interaction
                  alerts.
                </li>
                <li>
                  <strong>HITL gate:</strong> Treatment plans, discharge decisions, anything
                  affecting patient safety.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            The design process
          </h2>
          <ol className="list-decimal ml-8 space-y-4 text-lg leading-ocx-base mb-6">
            <li>
              <strong>Inventory every action.</strong> List everything the agent might do, from the
              trivial to the consequential. Do not skip the edge cases.
            </li>
            <li>
              <strong>Score each action.</strong> Reversible or irreversible? Low stakes or high
              stakes? Use the framework above.
            </li>
            <li>
              <strong>Assign a rhythm.</strong> Free-run, HOTL review, or HITL gate? Document the
              rule, not just the example.
            </li>
            <li>
              <strong>Name the owner.</strong> For every HITL-gated action, name the person who
              holds decision rights. A role is not enough.
            </li>
            <li>
              <strong>Build the audit trail.</strong> Every gated action must be logged: what the
              agent proposed, what the human decided, and why.
            </li>
            <li>
              <strong>Test the override.</strong> Simulate a scenario where the human must stop
              the agent. How long does it take? Does it actually work?
            </li>
            <li>
              <strong>Review quarterly.</strong> Agents learn; their action inventory changes. The
              decision-rights matrix must be a living document.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Common mistakes
          </h2>
          <ul className="list-disc ml-8 space-y-3 text-lg leading-ocx-base">
            <li>
              <strong>Everything gated:</strong> If every action needs approval, the human becomes
              a bottleneck and the agent is pointless.
            </li>
            <li>
              <strong>Nothing gated:</strong> If no action needs approval, you have human-out-of-the-loop
              with a fancy name.
            </li>
            <li>
              <strong>Thresholds without exceptions:</strong> A &pound;500 refund limit is useful
              until a &pound;501 situation requires three days of escalation.
            </li>
            <li>
              <strong>Named owner on vacation:</strong> Decision rights must have a deputy or a
              timeout - or the system stops when the owner does.
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
