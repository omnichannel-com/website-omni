import type { Metadata } from "next";
import Link from "next/link";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import { CALENDLY_URL } from "@/lib/calendly";
import { articleSchema, safeJsonLd } from "@/lib/schema-org";
import { ArrowRight, Eye, Gavel, Hand, Fingerprint, BookOpen } from "lucide-react";

const AUTHOR_NAME = "Graeme Provan";
const AUTHOR_URL = "https://www.linkedin.com/in/provan";
const PUBLISHED = "2026-06-11";
const MODIFIED = "2026-06-11";

const PROPERTIES = [
  {
    icon: Eye,
    title: "Visibility",
    summary: "You can see what every agent is doing, why it is doing it, and what it plans to do next.",
    detail:
      "Visibility means the overseer has a real-time view of agent actions, reasoning traces, and planned next steps. Without visibility, oversight is watching a black box blink. With it, a human can form a genuine judgment about whether an agent is operating within its mandate.",
  },
  {
    icon: Gavel,
    title: "Decision Rights",
    summary: "A named human holds the formal authority to approve, change, or cancel any agent action.",
    detail:
      "Decision rights are the formal authority over what gets approved, changed, or cancelled. In a human-in-control model, decision rights stay with the person even when execution is delegated to agents. The agent proposes; the human decides. This is not a workflow checkbox - it is a governance guarantee.",
  },
  {
    icon: Hand,
    title: "Intervention",
    summary: "You can step in at any point - redirect an action, change the objective, or stop the agent entirely.",
    detail:
      "Intervention means the human can step in at any point: redirect an action, change the objective, or stop the agent entirely. The mechanism must work in real time, not just in theory. A kill switch that takes three business days to execute is not intervention - it is theater.",
  },
  {
    icon: Fingerprint,
    title: "Attribution",
    summary: "Every consequential action is linked to a named person who approved it, with an automatic audit trail.",
    detail:
      "Attribution means every consequential action is linked to a named person who approved it. The audit trail is automatic: what the agent did, with what inputs, and under whose authority. When something goes wrong, you do not need a committee to find who was responsible - the chain of authority is explicit.",
  },
];

export const metadata: Metadata = {
  title: "The Four Properties of Human in Control",
  description:
    "Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights. Learn the four observable properties: visibility, decision rights, intervention, and attribution.",
  alternates: {
    canonical: "https://omnichannel.cx/four-properties-human-in-control",
  },
  openGraph: {
    title: "The Four Properties of Human in Control | omnichannel",
    description: "Visibility, Decision rights, Intervention, Attribution - the four properties that make human in control observable.",
    url: "https://omnichannel.cx/four-properties-human-in-control",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Four Properties of Human in Control | omnichannel",
    description: "Visibility, Decision rights, Intervention, Attribution - the four properties that make human in control observable.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function FourPropertiesPage() {
  const article = articleSchema({
    headline: "The Four Properties of Human in Control",
    description:
      "The four observable properties that make human in control a testable operating model: visibility, decision rights, intervention, and attribution.",
    url: "https://omnichannel.cx/four-properties-human-in-control",
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
            <span>Framework</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary mb-4">
            The Four Properties of Human in Control
          </h1>
          <p className="text-lg text-ocx-fg-secondary leading-ocx-base mb-4">
            Human in control is an operating model for AI agents in which autonomous agents execute
            the work while a human retains final decision rights. But how do you know it is working?
            These four properties make the model observable, testable, and auditable.
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
            Why properties matter
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            &quot;We have a human in the loop&quot; is not a testable claim. A person might be in
            the org chart without being in the decision path. The four properties turn a vague
            commitment into a checklist you can audit.
          </p>
        </section>

        <section className="mb-12 space-y-8">
          {PROPERTIES.map((prop, i) => (
            <div key={prop.title} className="border border-ocx-border rounded-ocx-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-ocx-md bg-ocx-bg-muted flex items-center justify-center">
                  <prop.icon className="w-5 h-5 text-ocx-bright-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ocx-fg-primary">
                    {i + 1}. {prop.title}
                  </h3>
                </div>
              </div>
              <p className="text-lg font-semibold text-ocx-fg-primary mb-2">{prop.summary}</p>
              <p className="text-ocx-fg-secondary leading-ocx-base">{prop.detail}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            How they work together
          </h2>
          <p className="text-lg leading-ocx-base mb-6">
            The four properties are not independent. Visibility without decision rights is
            surveillance. Decision rights without intervention are a title on a business card.
            Intervention without attribution is chaos - anyone can stop anything, but no one owns the
            outcome.
          </p>
          <p className="text-lg leading-ocx-base mb-6">
            Human in control only exists when all four properties are present and connected: the
            overseer can see (visibility), has authority (decision rights), can act (intervention),
            and is accountable (attribution). Remove one and the model collapses into its component
            failure modes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ocx-fg-primary mb-4">
            Audit questions
          </h2>
          <ul className="list-disc ml-8 space-y-3 text-lg leading-ocx-base">
            <li>Can the overseer see what every agent is doing right now?</li>
            <li>Does a named person hold the authority to approve, redirect, or stop?</li>
            <li>Can that person intervene in under 60 seconds?</li>
            <li>Is every consequential action linked to a named approver in an audit trail?</li>
            <li>Has the kill switch been tested in the last quarter?</li>
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
