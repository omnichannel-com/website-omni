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
  title: "How Humans Actually Intervene in an Agent Network",
  description:
    "Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights. Here is how intervention works at scale.",
  alternates: {
    canonical: "https://omnichannel.cx/how-humans-intervene",
  },
  openGraph: {
    title: "How Humans Actually Intervene in an Agent Network | omnichannel",
    description: "The operational reality of human intervention in large-scale agent deployments.",
    url: "https://omnichannel.cx/how-humans-intervene",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Humans Actually Intervene in an Agent Network | omnichannel",
    description: "The operational reality of human intervention in large-scale agent deployments.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function HowHumansIntervenePage() {
  const article = articleSchema({
    headline: "How Humans Actually Intervene in an Agent Network",
    description:
      "The operational reality of human intervention in large-scale agent deployments.",
    url: "https://omnichannel.cx/how-humans-intervene",
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
            <span>Operations</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary mb-4">
            How Humans Actually Intervene in an Agent Network
          </h1>
          <p className="text-lg text-ocx-fg-secondary leading-ocx-base mb-4">
            Most discussions of AI oversight treat the human as a theoretical checkpoint. In
            practice, intervention is a system design problem. Here is how it works when you have
            hundreds or thousands of agents running at once.
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
            The intervention stack
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Human in control is an operating model for AI agents in which autonomous agents execute
            the work while a human retains final decision rights. At scale, this requires a layered
            intervention architecture - not a single human watching a dashboard.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-ocx-bright-blue pl-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Layer 1: Guardrails (automatic)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                Hard limits that stop an agent before it acts - budget caps, forbidden actions,
                rate limits, data-access boundaries. These do not require a human in real time; they
                encode the human&apos;s intent into the system. The most common intervention at
                scale is automatic: the agent hits a guardrail and stops.
              </p>
            </div>

            <div className="border-l-4 border-ocx-mauve pl-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Layer 2: Escalation (agent-initiated)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                The agent recognises that it is outside its mandate - ambiguity, high cost,
                unfamiliar context - and hands the decision upward. A well-designed agent escalates
                before it makes a mistake, not after. Escalation rules are part of the agent&apos;s
                design: &quot;If confidence &lt; 0.85, queue for human review.&quot;
              </p>
            </div>

            <div className="border-l-4 border-ocx-royal pl-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Layer 3: Exception monitoring (human-initiated, reactive)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                A human overseer reviews alerts, anomalies, or flagged outcomes and intervenes.
                This is the classic &quot;human on the loop&quot; pattern - watching for what the
                automatic layers missed. The challenge is alert fatigue: too many exceptions and the
                human stops seeing them.
              </p>
            </div>

            <div className="border-l-4 border-ocx-fg-accent pl-6">
              <h3 className="font-display font-bold text-lg text-ocx-fg-primary mb-2">
                Layer 4: Strategic override (human-initiated, proactive)
              </h3>
              <p className="text-ocx-fg-secondary leading-ocx-base">
                The human changes the objective, revokes an agent&apos;s autonomy, or pauses an
                entire class of operations. This is the kill switch and the policy change. It
                happens rarely but must work instantly. Strategic override is the difference between
                governance and theater.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            What the data shows
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            In production agent networks we have observed, the distribution of intervention types is
            roughly:
          </p>
          <ul className="list-disc ml-8 space-y-3 text-lg leading-ocx-base mb-6">
            <li>
              <strong>85–95% automatic:</strong> Guardrails stop the action before a human is ever
              involved.
            </li>
            <li>
              <strong>4–12% escalation:</strong> The agent hands off because it recognises its own
              limits.
            </li>
            <li>
              <strong>1–3% exception monitoring:</strong> A human catches something the automatic
              layers missed.
            </li>
            <li>
              <strong>{'<'}1% strategic override:</strong> The human changes the rules of the game.
            </li>
          </ul>
          <p className="text-lg leading-ocx-base mb-6">
            The key insight: the human does not review 10,000 decisions. The human designs the
            system so that 9,900 decisions need no review, 90 escalate with context, and 10 receive
            full attention. The art is in the escalation design - what to surface, and how.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Designing escalation
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            Good escalation has three properties:
          </p>
          <ol className="list-decimal ml-8 space-y-3 text-lg leading-ocx-base mb-6">
            <li>
              <strong>Context-rich:</strong> The human receives not just the decision but the
              reasoning, the inputs, and the alternatives considered.
            </li>
            <li>
              <strong>Actionable:</strong> The human can approve, modify, or reject with a single
              interaction - not a five-email thread.
            </li>
            <li>
              <strong>Learned:</strong> The system records what the human did and why, so the
              escalation rules improve over time.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            The failure mode: alert fatigue
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            The most common failure of Layer 3 is noise. If the system escalates 500 items per day,
            the human will batch-process them at 4pm, spending 12 seconds each. At that rate, the
            oversight layer is worse than useless - it creates a false sense of security while
            burying the one signal that mattered.
          </p>
          <p className="text-lg leading-ocx-base mb-6">
            The fix is to tune the escalation threshold ruthlessly. Start conservative - escalate
            everything - and measure the human&apos;s actual review depth. Then tighten until the
            human has capacity to engage genuinely with every escalated item.
          </p>
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
