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
  title: "Human in Control vs Human-in-the-Loop vs Human-on-the-Loop",
  description:
    "Plain-English comparison of the three oversight models for AI agents. Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights.",
  alternates: {
    canonical: "https://omnichannel.cx/human-in-control-vs-hitl-hotl",
  },
  openGraph: {
    title: "Human in Control vs HITL vs HOTL | omnichannel",
    description: "Plain-English comparison of the three oversight models for AI agents.",
    url: "https://omnichannel.cx/human-in-control-vs-hitl-hotl",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human in Control vs HITL vs HOTL | omnichannel",
    description: "Plain-English comparison of the three oversight models for AI agents.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function ComparisonPage() {
  const article = articleSchema({
    headline: "Human in Control vs Human-in-the-Loop vs Human-on-the-Loop",
    description:
      "Plain-English comparison of the three oversight models for AI agents, with a worked example.",
    url: "https://omnichannel.cx/human-in-control-vs-hitl-hotl",
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
            <span>Comparison</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary mb-4">
            Human in Control vs Human-in-the-Loop vs Human-on-the-Loop
          </h1>
          <p className="text-lg text-ocx-fg-secondary leading-ocx-base mb-4">
            Four ways to wire a person into an automated decision loop. The first three describe
            <em>where the human is positioned</em>. The fourth,{" "}
            <strong>human in control</strong>, is different in kind: it is an operating model that
            defines <em>who holds final decision rights</em>, regardless of who does the work.
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
            The three loop positions
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            The in/on/out-of-the-loop taxonomy predates modern AI agents. It was formalised in the
            autonomous-weapons debate and builds on John Boyd&apos;s OODA decision cycle. Each
            position answers a single question: where does the human sit relative to the decision
            loop?
          </p>

          <div className="grid gap-6 mb-8">
            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-xl text-ocx-fg-primary mb-2">
                Human-in-the-Loop (HITL)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                <strong>Nothing executes without a person.</strong> The AI proposes; the human
                approves; then the action happens. Maximum control, minimum speed - the loop runs
                at human pace. The characteristic failure mode is the bottleneck: work piles up
                behind a single approver, or approval becomes rubber-stamping.
              </p>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-xl text-ocx-fg-primary mb-2">
                Human-on-the-Loop (HOTL)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                <strong>The loop runs by itself; a person watches.</strong> The human monitors
                from outside and steps in when something looks wrong. Fast, but intervention is
                reactive - after the fact. The characteristic failure mode is the &quot;polite
                fiction&quot;: events outpace the watcher, and interventions come too late.
              </p>
            </div>

            <div className="border border-ocx-border rounded-ocx-lg p-6">
              <h3 className="font-display font-bold text-xl text-ocx-fg-primary mb-2">
                Human-out-of-the-Loop (HOOTL)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                <strong>The system acts entirely on its own.</strong> No human sees the decisions
                in real time. Fastest of all - and the riskiest place to discover the system was
                wrong. The failure mode is silent failure with no recourse.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Human in control: an operating model, not a position
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Human in control is an operating model for AI agents in which autonomous agents execute
            the work while a human retains final decision rights - the authority to approve,
            redirect, or stop any agent action at any time.
          </p>
          <p className="text-lg leading-ocx-base mb-6">
            Unlike HITL or HOTL, human in control does not dictate where the human sits. It dictates
            what authority they retain. An agent under human control may propose, execute, or both -
            scoped by risk - while the human&apos;s standing authority never moves. The model is
            compatible with any loop position: low-risk tasks run autonomously (HOTL rhythm), while
            high-risk actions require explicit approval (HITL rhythm).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            The reference matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-ocx-border">
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent">
                    Dimension
                  </th>
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent">
                    HITL
                  </th>
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent">
                    HOTL
                  </th>
                  <th className="py-3 px-4 font-body text-sm uppercase tracking-ocx-caps text-ocx-fg-accent bg-ocx-bg-muted">
                    Human in Control
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Question it answers</td>
                  <td className="py-3 px-4">Where the human sits</td>
                  <td className="py-3 px-4">Where the human sits</td>
                  <td className="py-3 px-4 bg-ocx-bg-muted">Who holds authority</td>
                </tr>
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">What the AI may do</td>
                  <td className="py-3 px-4">Propose only</td>
                  <td className="py-3 px-4">Execute within bounds</td>
                  <td className="py-3 px-4 bg-ocx-bg-muted">
                    Propose and/or execute - scope set per risk tier
                  </td>
                </tr>
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Final decision rights</td>
                  <td className="py-3 px-4">Human, per action</td>
                  <td className="py-3 px-4">AI by default; human can override</td>
                  <td className="py-3 px-4 bg-ocx-bg-muted">
                    Human, always - standing authority to approve, redirect, stop
                  </td>
                </tr>
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Human intervention</td>
                  <td className="py-3 px-4">Before every action (gate)</td>
                  <td className="py-3 px-4">After detection (reactive)</td>
                  <td className="py-3 px-4 bg-ocx-bg-muted">At any time, by design</td>
                </tr>
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Accountability</td>
                  <td className="py-3 px-4">Clear; erodes if rubber-stamping</td>
                  <td className="py-3 px-4">Blurs at machine speed</td>
                  <td className="py-3 px-4 bg-ocx-bg-muted">
                    Explicitly retained by a named human owner
                  </td>
                </tr>
                <tr className="border-b border-ocx-border">
                  <td className="py-3 px-4 font-semibold">Characteristic failure</td>
                  <td className="py-3 px-4">Bottleneck; approval theater</td>
                  <td className="py-3 px-4">Events outpace the watcher</td>
                  <td className="py-3 px-4 bg-ocx-bg-muted">
                    Governance debt - control on paper but not in practice
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            A worked example
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Imagine a bank deploying an AI agent to process mortgage applications:
          </p>
          <ul className="list-disc ml-8 space-y-3 text-lg leading-ocx-base mb-6">
            <li>
              <strong>HITL mode:</strong> Every application stops at a loan officer. Safe, but the
              queue grows. The officer eventually clicks &quot;approve&quot; without reading -
              automation bias turns the gate into theater.
            </li>
            <li>
              <strong>HOTL mode:</strong> The agent approves routine applications and flags anomalies
              for review. Fast for the 95%, but when the model drifts, the watcher misses the shift.
            </li>
            <li>
              <strong>Human in control:</strong> The agent handles routine approvals (HOTL rhythm).
              High-value or borderline applications queue for human approval (HITL rhythm). The loan
              officer can pause the entire pipeline at any time. Every action is logged and
              attributed. The operating model is the same; the loop position changes with the risk.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Which should you start with?
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Start human-in-the-loop while the agent earns trust, then widen autonomy toward an
            on-the-loop rhythm - but build human-in-control guarantees (approval surface, logging,
            kill switch) from day one. The loop position is a dial you turn as trust grows. The
            control model is the foundation you never remove.
          </p>
        </section>

        <div className="bg-ocx-bg-muted rounded-ocx-lg p-6 mb-12">
          <p className="text-ocx-fg-secondary text-sm mb-2">
            Read the full canonical definition:
          </p>
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
