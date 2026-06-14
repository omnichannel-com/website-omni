import type { Metadata } from "next";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import ServicesSection from "@/components/landing-sections/services";
import IndustryCardsSection from "@/components/landing-sections/industry-cards";
import { CALENDLY_URL } from "@/lib/calendly";
import Link from "next/link";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy | omnichannel",
  description:
    "Customer experience and service operations consultancy. Maturity Review, CX strategy, AI with human control, and operational performance — across APAC, Australia, and New Zealand.",
  alternates: {
    canonical: "https://omnichannel.cx/services",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy | omnichannel",
    description:
      "Customer experience and service operations consultancy. Maturity Review, CX strategy, AI with human control, and operational performance — across APAC, Australia, and New Zealand.",
    url: "https://omnichannel.cx/services",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy | omnichannel",
    description:
      "Customer experience and service operations consultancy. Maturity Review, CX strategy, AI with human control, and operational performance — across APAC, Australia, and New Zealand.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function ServicesPage() {
  return (
    <StickyScrollLayout>
      {/* Hero */}
      <section className="relative min-h-[80dvh] flex flex-col justify-center bg-ocx-aurora text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-5xl mx-auto py-20 md:py-28">
            <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-85 mb-6 block">
              For COOs, heads of department, and customer service leaders
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-ocx-4xl font-black tracking-ocx-tight leading-ocx-tight mb-6 text-white">
              Lift customer experience.
              <br />
              Cut cost to serve.
              <br />
              Adopt AI without losing control.
            </h1>
            <p className="font-serif italic font-medium text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl">
              The consultancy that has designed, built, supported, developed and run the operation, not just advised on it.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
              >
                <ArrowRight className="w-5 h-5 stroke-[1.25]" />
                Book a working session
              </Link>
              <a
                href="#what-we-do"
                className="group inline-flex items-center gap-3 bg-transparent text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-ocx-fast"
              >
                What we do
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-ocx-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
              The problem you are living with
            </h2>
            <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base mb-6">
              You are under pressure to improve customer service, cut operating cost, and adopt AI
              - all at the same time. Your regulator watches every outcome. Your teams are flat out.
              And every vendor pitch sounds the same.
            </p>
            <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base">
              What you need is an independent partner who has actually run contact centres and
              back-office operations, who can tell you the truth about where you are, and who can
              move you toward AI without ever taking your people out of control.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ocx-bg-subtle py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
              Why us, and why now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex flex-col gap-3">
                <Users className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">
                  Practitioner credibility
                </h3>
                <p className="font-body text-sm text-ocx-fg">
                  We have sized queues, watched SLAs slip, and run operations under pressure. We
                  advise on what we have done.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Zap className="w-8 h-8 text-ocx-mauve" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">
                  Independence from platforms
                </h3>
                <p className="font-body text-sm text-ocx-fg">
                  No vendor commissions, no resale agreements. We recommend what fits your operation,
                  not what we need to sell.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Shield className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">
                  Safe AI introduction
                </h3>
                <p className="font-body text-sm text-ocx-fg">
                  Every AI design includes a human decision gate. Authority, visibility, and
                  revocability are built in, not bolted on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <ServicesSection />

      {/* How we work */}
      <section className="bg-ocx-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-6">
                How we work
              </h2>
              <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base mb-4">
                We start with your people and business outcomes, not a tool we want to sell. We diagnose the
                gap across people, process, platform, and policy, then build a plan that closes it
                in the shortest viable time.
              </p>
              <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base">
                We stay hands-on through delivery, measure results against the outcomes we agreed,
                and leave your team capable of running what we built.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-6">
                What to expect
              </h2>
              <ul className="space-y-3">
                {[
                  "Higher customer satisfaction",
                  "Lower cost to serve",
                  "Governed AI with human control",
                  "Independent, vendor-agnostic advice",
                  "A more capable team",
                ].map((item) => (
                  <li key={item} className="font-body text-base text-ocx-fg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we make AI safe */}
      <section className="bg-ocx-bg-subtle py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-12 text-center">
              How we make AI safe
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="font-display font-black text-4xl text-ocx-fg-primary/20">1</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary mb-2">
                    Accountability stays with a named person
                  </h3>
                  <p className="font-body text-base text-ocx-fg leading-ocx-base">
                    Every AI recommendation is attributed. A person with authority approves, redirects,
                    or stops every consequential action. The audit trail is automatic.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-display font-black text-4xl text-ocx-fg-primary/20">2</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary mb-2">
                    Gate by risk so you execute faster
                  </h3>
                  <p className="font-body text-base text-ocx-fg leading-ocx-base">
                    Low-risk, high-volume work flows through. High-risk, consequential work passes through
                    a human gate. You move faster where it is safe, and slower where it matters.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-display font-black text-4xl text-ocx-fg-primary/20">3</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary mb-2">
                    A better deal for your team
                  </h3>
                  <p className="font-body text-base text-ocx-fg leading-ocx-base">
                    AI removes drudgery. Your people spend their time on judgment, relationship, and
                    the exceptions that need the human touch. They become more capable, not less necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      <IndustryCardsSection />

      {/* Where we work */}
      <section className="bg-ocx-bg-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-6">
              Where we work
            </h2>
            <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base mb-8">
              We serve organisations across APAC, Australia, New Zealand, Japan, South Korea,
              Indonesia, the Philippines, Fiji, and Asia.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "APAC", href: "/apac" },
                { label: "Australia", href: "/australia" },
                { label: "New Zealand", href: "/new-zealand" },
                { label: "Japan", href: "/japan" },
                { label: "South Korea", href: "/south-korea" },
                { label: "Indonesia", href: "/indonesia" },
                { label: "Philippines", href: "/philippines" },
                { label: "Fiji", href: "/fiji" },
                { label: "Asia", href: "/asia" },
              ].map((geo) => (
                <Link
                  key={geo.href}
                  href={geo.href}
                  className="text-sm font-display uppercase tracking-ocx-caps font-bold bg-ocx-bg border border-ocx-border text-ocx-fg px-4 py-2 rounded-ocx-pill hover:bg-ocx-bright-blue hover:text-white hover:border-ocx-bright-blue transition-colors duration-ocx-fast"
                >
                  {geo.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocx-aurora py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-ocx-tight mb-6">
              Get started
            </h2>
            <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a working session. We will evaluate your current state and give you a clear plan.
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
