import type { Metadata } from "next";
import Link from "next/link";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import { CALENDLY_URL } from "@/lib/calendly";
import { ArrowRight, Eye, Gavel, Hand, Fingerprint } from "lucide-react";
import { articleSchema, faqPageSchema, safeJsonLd } from "@/lib/schema-org";
import OversightModels from "@/components/human-in-control/oversight-models";
import FaqAccordion from "@/components/ui/faq-accordion";

const AUTHOR_NAME = "Graeme Provan";
const AUTHOR_URL = "https://www.linkedin.com/in/graemeprovan";
const PUBLISHED = "2026-06-10";
const MODIFIED = "2026-06-11";

const FAQS = [
  {
    question: "Is human in control the same as human oversight?",
    answer:
      "No. Human oversight is a broad regulatory term. Human in control is a specific operating model with three built-in guarantees: authority, visibility, and revocability.",
  },
  {
    question: "Does human in control slow agents down?",
    answer:
      "Not where it matters. Low-risk, high-volume work flows through. High-risk, consequential work stops at a human gate. You move faster where it is safe, and slower where it matters.",
  },
  {
    question: "Who is accountable when an agent makes a mistake?",
    answer:
      "The named person who approved the action. Human in control means every consequential decision is attributed to a person with authority. The audit trail is automatic.",
  },
  {
    question: "Is human in control required by regulation?",
    answer:
      "The EU AI Act and NIST AI RMF both call for human oversight of high-risk AI systems. In Australia, the 8 AI Ethics Principles and the National Framework for the Assurance of AI in Government require meaningful human accountability. New Zealand's Public Service AI Framework mandates oversight by accountable humans at every stage. Singapore's Model AI Governance Framework and Japan's AI governance guidelines also emphasise human accountability for consequential decisions. Human in control is a practical implementation of these requirements - an operating model, not a compliance checkbox.",
  },
];

const EXTERNAL_LINKS = [
  { text: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  { text: "EU AI Act - human oversight requirements", url: "https://artificial-intelligence-act.com/the-act/" },
  { text: "Australia's AI Ethics Principles", url: "https://www.industry.gov.au/publications/australias-ai-ethics-principles" },
  { text: "Singapore Model AI Governance Framework", url: "https://www.imda.gov.sg/about-imda/emerging-tech-and-research/artificial-intelligence/ai-governance" },
  { text: "ISO/IEC 23894 - AI risk management", url: "https://www.iso.org/standard/77304.html" },
];

export const metadata: Metadata = {
  title: "What is Human in Control?",
  description:
    "Human in control means AI agents do the work; a human keeps the final say. Learn the operating model, how it differs from human-in-the-loop, and why it matters for safe AI adoption.",
  alternates: {
    canonical: "https://omnichannel.cx/human-in-control",
  },
  openGraph: {
    title: "What is Human in Control? | omnichannel",
    description: "Human in control means AI agents do the work; a human keeps the final say.",
    url: "https://omnichannel.cx/human-in-control",
    type: "article",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Human in Control? | omnichannel",
    description: "Human in control means AI agents do the work; a human keeps the final say.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function HumanInControlPage() {
  const article = articleSchema({
    headline: "What is Human in Control?",
    description:
      "Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights.",
    url: "https://omnichannel.cx/human-in-control",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
  });

  const faqSchema = faqPageSchema(
    FAQS.map((f) => ({
      "@type": "Question" as const,
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: f.answer,
      },
    }))
  );

  return (
    <StickyScrollLayout>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-ocx-aurora text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[8%] w-[55%] h-[55%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[8%] w-[45%] h-[45%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto pt-36 md:pt-44 pb-16 md:pb-24">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-ocx-5xl font-black tracking-ocx-tight leading-ocx-tight mb-8">
              What is Human in Control?
            </h1>
            <p
              id="canonical-definition"
              className="font-body text-lg md:text-xl text-white/90 leading-ocx-base max-w-3xl"
            >
              Human in control is an operating model for AI agents in which autonomous agents execute
              the work while a human retains final decision rights - the authority to approve,
              redirect, or stop any agent action at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Oversight model diagrams */}
      <OversightModels />

      {/* Comparison table */}
      <section id="comparison" className="bg-ocx-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
              How is human in control different from human-in-the-loop?
            </h2>
            <p className="font-body text-base md:text-lg text-ocx-fg mb-8 leading-ocx-base">
              Human-in-the-loop (HITL) and human-on-the-loop (HOTL) are interaction patterns.
              Human in control is an architectural guarantee.
            </p>

            <p className="font-body text-base text-ocx-fg-muted mb-6 leading-ocx-base">
              Two different questions are being answered here. The loop positions (in / on / out) answer{" "}
              <strong className="text-ocx-fg-primary">&ldquo;where does the human sit in the decision cycle?&rdquo;</strong>{" "}
              Human in control answers{" "}
              <strong className="text-ocx-fg-primary">&ldquo;who holds final authority and accountability?&rdquo;</strong>{" "}
              - and is compatible with any execution mode.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-ocx-border bg-ocx-bg-muted">
                    <th className="text-left py-3 px-4 font-mono text-[11px] uppercase tracking-wider text-ocx-fg-muted">
                      Dimension
                    </th>
                    <th className="text-left py-3 px-4 font-mono text-[11px] uppercase tracking-wider text-ocx-fg-muted">
                      HITL
                    </th>
                    <th className="text-left py-3 px-4 font-mono text-[11px] uppercase tracking-wider text-ocx-fg-muted">
                      HOTL
                    </th>
                    <th className="text-left py-3 px-4 font-mono text-[11px] uppercase tracking-wider text-ocx-fg-muted">
                      HOOTL
                    </th>
                    <th className="text-left py-3 px-4 font-mono text-[11px] uppercase tracking-wider text-ocx-bright-blue bg-ocx-dark-blue/[0.04]">
                      Human in Control
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted w-36">Question it answers</td>
                    <td className="py-3 px-4 text-ocx-fg">Where the human sits</td>
                    <td className="py-3 px-4 text-ocx-fg">Where the human sits</td>
                    <td className="py-3 px-4 text-ocx-fg">Where the human sits</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">Who holds authority</td>
                  </tr>
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted">What the AI may do</td>
                    <td className="py-3 px-4 text-ocx-fg">Propose only; nothing executes unapproved</td>
                    <td className="py-3 px-4 text-ocx-fg">Execute within set bounds</td>
                    <td className="py-3 px-4 text-ocx-fg">Execute fully, end to end</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">Propose <em>and/or</em> execute - scope set per risk tier</td>
                  </tr>
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted">Final decision rights</td>
                    <td className="py-3 px-4 text-ocx-fg">Human, per action</td>
                    <td className="py-3 px-4 text-ocx-fg">AI by default; human can override</td>
                    <td className="py-3 px-4 text-ocx-fg">AI alone at runtime</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">Human, always - standing authority to approve, redirect, stop</td>
                  </tr>
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted">Human intervention</td>
                    <td className="py-3 px-4 text-ocx-fg">Before every action (gate)</td>
                    <td className="py-3 px-4 text-ocx-fg">After detection (reactive)</td>
                    <td className="py-3 px-4 text-ocx-fg">None in real time</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">At any time, by design</td>
                  </tr>
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted">Accountability</td>
                    <td className="py-3 px-4 text-ocx-fg">Clear on paper; erodes if approval becomes rubber-stamping</td>
                    <td className="py-3 px-4 text-ocx-fg">Blurs at machine speed - who owns a missed intervention?</td>
                    <td className="py-3 px-4 text-ocx-fg">Hard to assign after the fact</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">Explicitly retained by a named human owner</td>
                  </tr>
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted">Characteristic failure</td>
                    <td className="py-3 px-4 text-ocx-fg">Bottleneck; automation bias turns the gate into theater</td>
                    <td className="py-3 px-4 text-ocx-fg">&ldquo;Polite fiction&rdquo; - events outpace the watcher</td>
                    <td className="py-3 px-4 text-ocx-fg">Silent failure with no recourse</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">Governance debt - control that exists on paper but is never exercisable</td>
                  </tr>
                  <tr className="border-b border-ocx-border/50">
                    <td className="py-3 px-4 font-mono text-xs text-ocx-fg-muted">Regulatory alignment</td>
                    <td className="py-3 px-4 text-ocx-fg">EU AI Act Art. 14 (high-risk gate); GDPR Art. 22</td>
                    <td className="py-3 px-4 text-ocx-fg">EU AI Act Art. 14 (effective oversight)</td>
                    <td className="py-3 px-4 text-ocx-fg">Fails EU AI Act Art. 14 for high-risk systems</td>
                    <td className="py-3 px-4 text-ocx-fg bg-ocx-dark-blue/[0.04]">Designed to satisfy EU AI Act Art. 14 &amp; 26(2); AU Principles 2, 6, 7 &amp; 8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-body text-sm text-ocx-fg-muted mt-6">
              Sources:{" "}
              {EXTERNAL_LINKS.map((link, i) => (
                <span key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocx-bright-blue hover:underline"
                  >
                    {link.text}
                  </a>
                  {i < EXTERNAL_LINKS.length - 1 ? "; " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section id="why-matters" className="bg-ocx-bg-subtle py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-12">
              Why does human in control matter?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="font-display font-black text-4xl text-ocx-fg-primary/20">1</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary mb-2">
                    Accountability
                  </h3>
                  <p className="font-body text-base text-ocx-fg leading-ocx-base">
                    When something goes wrong, you can point to the person who approved the action.
                    That is not blame - it is governance. Regulators, auditors, and customers all
                    demand it.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-display font-black text-4xl text-ocx-fg-primary/20">2</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary mb-2">
                    Trust
                  </h3>
                  <p className="font-body text-base text-ocx-fg leading-ocx-base">
                    Customers and regulators trust AI only when they know a person is watching.
                    Human in control makes that promise explicit and verifiable.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-display font-black text-4xl text-ocx-fg-primary/20">3</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary mb-2">
                    Error containment
                  </h3>
                  <p className="font-body text-base text-ocx-fg leading-ocx-base">
                    A bad AI decision can be stopped before it reaches a customer. The human gate
                    limits the blast radius of any failure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it looks like in practice */}
      <section id="in-practice" className="bg-ocx-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-12">
              What does human in control look like in practice?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4">
                <Eye className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">Visibility</h3>
                <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                  The human sees what the AI is doing, what it has done, and what it plans to do
                  next. No black boxes.
                </p>
              </div>
              <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4">
                <Gavel className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">
                  Decision rights
                </h3>
                <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                  A named person holds the authority to approve, redirect, or stop any agent action.
                  The AI proposes; the person decides.
                </p>
              </div>
              <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4">
                <Hand className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">
                  Intervention
                </h3>
                <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                  The human can intervene at any point - before, during, or after an agent action.
                  Revocability is built in, not bolted on.
                </p>
              </div>
              <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4">
                <Fingerprint className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">
                  Attribution
                </h3>
                <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                  Every consequential action is linked to a named person. The audit trail is
                  automatic and complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we run it */}
      <section id="how-we-run" className="bg-ocx-bg-subtle py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
              How omnichannel runs human in control
            </h2>
            <p className="font-body text-base md:text-lg text-ocx-fg mb-8 leading-ocx-base">
              We design every engagement with human-in-control guardrails. Here is how we
              operationalise the model:
            </p>
            <div className="bg-ocx-bg rounded-ocx-lg border border-ocx-border shadow-ocx-sm p-6 md:p-8">
              <ul className="space-y-4">
                <li className="font-body text-base text-ocx-fg">
                  <span className="font-semibold text-ocx-fg-primary">Gate by risk:</span>{" "}
                  Low-risk work flows through. High-risk work stops at a human gate.
                </li>
                <li className="font-body text-base text-ocx-fg">
                  <span className="font-semibold text-ocx-fg-primary">Named approvers:</span>{" "}
                  Every consequential action is linked to a person with authority.
                </li>
                <li className="font-body text-base text-ocx-fg">
                  <span className="font-semibold text-ocx-fg-primary">Audit trail:</span>{" "}
                  Every decision is recorded - what the AI proposed, what the person decided, and
                  why.
                </li>
                <li className="font-body text-base text-ocx-fg">
                  <span className="font-semibold text-ocx-fg-primary">Revocability:</span>{" "}
                  A human can stop or reverse any agent action at any time.
                </li>
              </ul>
              <p className="font-body text-sm text-ocx-fg-muted mt-6">
                Specific operational metrics are captured per engagement and shared with the client
                leadership team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />

      {/* CTA */}
      <section className="bg-ocx-aurora py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-ocx-tight mb-6">
              Adopt AI safely
            </h2>
            <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a working session to learn how human in control can work in your organisation.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.25]" />
              Book a working session
            </Link>
          </div>
        </div>
      </section>
    </StickyScrollLayout>
  );
}
