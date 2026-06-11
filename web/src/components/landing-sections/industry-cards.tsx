"use client";

import { Building2, Shield, Smartphone, Zap } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Building2,
    name: "Banking & finance",
    pain: "Consumer Duty, vulnerable-customer obligations, and legacy platform debt.",
    useCase:
      "Maturity Review of CX and compliance processes; AI readiness assessment for FCA and APRA regimes.",
    regulators: "FCA, APRA, ASIC",
  },
  {
    icon: Shield,
    name: "Insurance",
    pain: "Claims handling speed, regulatory reporting, and fraud detection.",
    useCase:
      "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates.",
    regulators: "FCA, APRA",
  },
  {
    icon: Smartphone,
    name: "Telecoms",
    pain: "High churn, complex billing disputes, and omnichannel service gaps.",
    useCase:
      "CX strategy and platform advisory to unify service channels; operational performance diagnostics.",
    regulators: "ACMA, Ofcom",
  },
  {
    icon: Zap,
    name: "Utilities",
    pain: "Regulatory price caps, outage response, and vulnerable-customer registers.",
    useCase:
      "Service operations redesign and AI-assisted outage communication with full human oversight.",
    regulators: "AER, Ofgem, EWOV",
  },
];

export default function IndustryCardsSection() {
  return (
    <section className="bg-ocx-bg py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4 text-center">
            Built for your industry
          </h2>
          <p className="font-body text-lg text-ocx-fg text-center mb-12 max-w-2xl mx-auto">
            Regulated sectors where customer experience and operational safety matter most.
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
                <p className="font-body text-xs text-ocx-fg-muted uppercase tracking-ocx-caps">
                  Regulators: {ind.regulators}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
