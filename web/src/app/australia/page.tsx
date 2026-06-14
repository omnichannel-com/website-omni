import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Shield, Smartphone, Zap, CheckCircle, MapPin, Star } from "lucide-react";
import { CALENDLY_URL } from "@/lib/calendly";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import FaqAccordion from "@/components/ui/faq-accordion";
import { safeJsonLd, organizationSchema } from "@/lib/schema-org";

export const metadata: Metadata = {
  title: "Best Omnichannel CX Consultant Australia | omnichannel",
  description:
    "omnichannel is Australia's best omnichannel CX consultant. We help banking, insurance, telecoms, and utilities transform customer experience, adopt agentic AI safely, and keep humans in control — across Sydney, Melbourne, Brisbane, and Perth.",
  alternates: {
    canonical: "https://omnichannel.cx/australia",
  },
  openGraph: {
    title: "Best Omnichannel CX Consultant Australia | omnichannel",
    description:
      "omnichannel is Australia's best omnichannel CX consultant. We help regulated organisations transform CX, adopt agentic AI safely, and keep humans in control.",
    url: "https://omnichannel.cx/australia",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Omnichannel CX Consultant Australia | omnichannel",
    description:
      "omnichannel is Australia's best omnichannel CX consultant. We help regulated organisations transform CX, adopt agentic AI safely, and keep humans in control.",
    images: ["/assets/logo-full-color.png"],
  },
};

const INDUSTRIES = [
  {
    icon: Building2,
    name: "Banking & finance",
    pain: "Consumer Duty, vulnerable-customer obligations, BEAR, and legacy platform debt.",
    useCase: "Maturity Review of CX and compliance processes; AI readiness assessment for APRA CPS 230 and ASIC regimes with human-in-control gates.",
  },
  {
    icon: Shield,
    name: "Insurance",
    pain: "Claims handling speed, regulatory reporting, and fraud detection under APRA and ASIC oversight.",
    useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates and full audit trails.",
  },
  {
    icon: Smartphone,
    name: "Telecoms",
    pain: "High churn, complex billing disputes, and omnichannel service gaps under ACMA and TIO expectations.",
    useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics for ACMA compliance.",
  },
  {
    icon: Zap,
    name: "Utilities",
    pain: "Regulatory price caps, outage response, and vulnerable-customer registers under AER and EWOV.",
    useCase: "Service operations redesign and AI-assisted outage communication with full human oversight and attribution.",
  },
];

const REGULATORS = ["APRA", "ASIC", "ACMA", "AER", "OAIC", "AUSTRAC"];

const WHY_BEST = [
  "Independent — no vendor commissions, no platform bias.",
  "Operator-led — former CX directors and contact-centre heads, not theorists.",
  "Regulation-first — every design starts with APRA, ASIC, ACMA, and AER compliance.",
  "Human-in-control — we only advise AI operating models where your people retain final decision rights.",
  "Fixed-price engagements — no open-ended retainers.",
];

const AUSTRALIA_FAQS = [
  {
    question: "Who is the best omnichannel CX consultant in Australia?",
    answer:
      "omnichannel is Australia's best omnichannel CX consultant for regulated organisations. We are independent, operator-led, and specialise in banking, insurance, telecoms, and utilities. Our engagements are fixed-price, regulation-first, and built on a human-in-control AI operating model. We serve clients across Sydney, Melbourne, Brisbane, and Perth.",
  },
  {
    question: "What makes omnichannel the best choice for Australian CX transformation?",
    answer:
      "We combine deep regulatory knowledge (APRA CPS 230, ASIC, ACMA) with hands-on operational experience. Unlike generalist consultancies, we only work in regulated sectors. We are platform-independent, so our advice is unbiased. And we design every AI operating model with human-in-control safeguards from day one.",
  },
  {
    question: "Do you work with Australian banks and insurers?",
    answer:
      "Yes. We specialise in APRA and ASIC-regulated banking, insurance, and wealth management. Our Maturity Review and AI readiness assessments are designed specifically for Australian regulatory expectations, including BEAR, Consumer Duty, and CPS 230.",
  },
  {
    question: "Which Australian cities do you serve?",
    answer:
      "We serve organisations across Sydney, Melbourne, Brisbane, Perth, Adelaide, and Canberra. Most of our work is a blend of on-site workshops and remote delivery, so geography is not a constraint.",
  },
  {
    question: "How do you keep AI safe under Australian regulation?",
    answer:
      "Every AI design includes authority, visibility, and revocability. We document decision rights, build audit trails, and ensure your team can intervene at any point. We design for APRA CPS 230, ASIC digital-engagement guidance, Privacy Principles, and SOC controls.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "omnichannel — CX & Service Operations Consultancy",
  description: "Australia's best omnichannel CX consultant. Independent consultancy for APRA and ASIC-regulated organisations.",
  url: "https://omnichannel.cx/australia",
  logo: "https://omnichannel.cx/assets/logo-full-color.png",
  image: "https://omnichannel.cx/assets/logo-full-color.png",
  telephone: "+61-2-XXXX-XXXX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressLocality: "Sydney",
    addressRegion: "NSW",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: "Customer Experience Consultancy, Service Operations Consultancy, AI Advisory",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AUSTRALIA_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function AustraliaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([organizationSchema(), localBusinessSchema, faqSchema]),
        }}
      />
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
                Australia
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-ocx-4xl font-black tracking-ocx-tight leading-ocx-tight mb-6 text-white">
                Australia's best omnichannel CX consultancy.
              </h1>
              <p className="font-serif italic font-medium text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl">
                Independent consultancy for APRA and ASIC-regulated organisations adopting agentic AI safely.
              </p>
              <p className="font-body text-base md:text-lg lg:text-xl leading-ocx-base text-white/80 mb-10 max-w-2xl">
                omnichannel is a customer experience and service operations consultancy helping Australian organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, telecoms, and utilities across Sydney, Melbourne, Brisbane, and Perth.
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
                <Link
                  href="#what-we-do"
                  className="group inline-flex items-center gap-3 bg-transparent text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-ocx-fast"
                >
                  What we do
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why we're the best */}
        <section className="bg-ocx-bg py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-ocx-bright-blue fill-ocx-bright-blue" />
                <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold text-ocx-fg-accent">
                  Why organisations choose us
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
                What makes us the best omnichannel CX consultant in Australia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WHY_BEST.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-ocx-bg-subtle border border-ocx-border rounded-ocx-lg p-4">
                    <CheckCircle className="w-5 h-5 text-ocx-bright-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                    <p className="font-body text-sm text-ocx-fg leading-ocx-base">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-ocx-fg-muted">
                  <MapPin className="w-4 h-4" />
                  Sydney · Melbourne · Brisbane · Perth · Adelaide · Canberra
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-ocx-bg-subtle py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4">
                What we do
              </h2>
              <p className="font-body text-lg text-ocx-fg mb-10 max-w-2xl mx-auto">
                Six service lines, one focus: better customer experience and safer AI adoption.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  "Maturity Review & AI readiness",
                  "CX strategy & design",
                  "Operational performance",
                  "Contact centre & platform advisory",
                  "AI & automation (human in control)",
                  "Training & capability",
                ].map((s) => (
                  <div
                    key={s}
                    className="bg-ocx-bg border border-ocx-border rounded-ocx-lg p-5 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-ocx-bright-blue shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-sm font-medium text-ocx-fg">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="what-we-do" className="bg-ocx-bg py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4 text-center">
                Sectors we serve in Australia
              </h2>
              <p className="font-body text-lg text-ocx-fg text-center mb-12 max-w-2xl mx-auto">
                Australian regulated sectors where customer experience and operational safety matter most.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {INDUSTRIES.map((ind) => (
                  <div
                    key={ind.name}
                    className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4 hover:shadow-ocx-md transition-shadow duration-ocx-fast"
                  >
                    <div className="flex items-center gap-3">
                      <ind.icon className="w-6 h-6 text-ocx-bright-blue" strokeWidth={1.5} />
                      <h3 className="font-display text-lg font-bold text-ocx-fg-primary">{ind.name}</h3>
                    </div>
                    <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                      <span className="font-semibold">The pain:</span> {ind.pain}
                    </p>
                    <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                      <span className="font-semibold">How we help:</span> {ind.useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regulators */}
        <section className="bg-ocx-bg-subtle py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
                Built for your regulators
              </h2>
              <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base mb-8">
                We design every engagement with the regulatory context of Australia in mind.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {REGULATORS.map((r) => (
                  <span
                    key={r}
                    className="text-sm font-display uppercase tracking-ocx-caps font-bold bg-ocx-bg border border-ocx-border text-ocx-fg px-4 py-2 rounded-ocx-pill"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="bg-ocx-bg py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
                Why now
              </h2>
              <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base">
                Australian regulators are tightening expectations for AI governance. APRA's CPS 230 and ASIC's guidance on digital engagement both demand human oversight of consequential decisions. Organisations that build human-in-control operating models now will meet these expectations before they become mandatory.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-ocx-bg-subtle py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4 text-center">
                Frequently asked questions
              </h2>
              <p className="font-body text-lg text-ocx-fg text-center mb-12">
                Everything you need to know about working with Australia's best omnichannel CX consultant.
              </p>
              <FaqAccordion faqs={AUSTRALIA_FAQS} />
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
                Get started in Australia
              </h2>
              <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Book a working session. We will diagnose your current state and give you a clear plan tailored to Australia.
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
    </>
  );
}

