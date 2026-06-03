import Link from "next/link";
import { ArrowRight, Inbox, Gauge, ShieldCheck, Users } from "lucide-react";

const principles = [
  {
    icon: Inbox,
    title: "One place for every conversation",
    body: "Email, chat, voice, and social are threaded together so your team answers in the channel the customer chose.",
  },
  {
    icon: Gauge,
    title: "Built for speed under pressure",
    body: "Full customer context loads instantly, so agents respond faster without losing the thread.",
  },
  {
    icon: ShieldCheck,
    title: "Automation that stays human",
    body: "AI handles the routine and hands off cleanly, so people focus on the conversations that need them.",
  },
  {
    icon: Users,
    title: "Designed for teams who care",
    body: "Every detail is shaped around the people doing the work and the customers they serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-section relative bg-ocx-aurora text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[8%] w-[55%] h-[55%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[8%] w-[45%] h-[45%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto pt-36 md:pt-44 pb-16 md:pb-24">
            <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-85">
              About us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-ocx-5xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6">
              Customer experience, composed under pressure
            </h1>
            <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl leading-ocx-snug text-white/90 max-w-3xl">
              We build the platform that brings every channel into one calm, capable view.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="scroll-section py-16 md:py-24 lg:py-32 bg-ocx-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
              Our mission
            </span>
            <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6">
              Make great support feel effortless
            </h2>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-5">
              Customer teams are asked to be everywhere at once, across more channels every year, with less time to respond. We started omnichannel CX to give them one place to do their best work.
            </p>
            <p className="text-ocx-fg-muted text-lg md:text-xl leading-ocx-base">
              Every conversation, in one pane. Every customer, answered in the channel they chose. That is the experience we build for, every day.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="scroll-section py-16 md:py-24 lg:py-32 bg-ocx-whisper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
              What we value
            </span>
            <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6">
              Principles that shape the product
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {principles.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-ocx-lg border border-ocx-border bg-ocx-bg p-7 md:p-8 shadow-ocx-sm"
              >
                <div className="w-12 h-12 rounded-ocx-md bg-ocx-aurora flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 stroke-[1.25] text-white" />
                </div>
                <h3 className="font-display text-ocx-fg-primary text-xl md:text-2xl font-bold tracking-ocx-tight mb-3">
                  {title}
                </h3>
                <p className="text-ocx-fg-muted text-base md:text-lg leading-ocx-base">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-section py-16 md:py-24 lg:py-32 bg-ocx-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="relative overflow-hidden rounded-ocx-xl bg-ocx-aurora text-white px-8 py-14 md:px-16 md:py-20 text-center shadow-ocx-md">
            <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight max-w-3xl mx-auto">
              See every channel in one view
            </h2>
            <p className="font-serif italic font-medium text-xl md:text-2xl text-white/90 mt-5 mb-9 max-w-2xl mx-auto">
              Bring your team and your customers into one conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-ocx-dark-blue font-display font-bold text-sm md:text-base px-7 py-3.5 rounded-ocx-md shadow-ocx-md hover:-translate-y-px transition-transform duration-ocx-base"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              Get started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
