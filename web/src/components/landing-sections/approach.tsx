"use client";

import { Check } from "lucide-react";

const CREDIBILITY_CLAIMS = [
  "Operators, not theorists - we have run the operations we advise on.",
  "Independent - no platform commissions, no vendor lock-in.",
  "Safe AI path - every recommendation includes a human-in-control guardrail.",
  "Regulator-aware - we design for FCA, APRA, ASIC, ACMA, Ofcom, Ofgem, and EWOV obligations.",
  "Fixed-price or time-boxed - no open-ended engagements.",
];

export default function ApproachSection() {
  return (
    <section className="bg-ocx-bg-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Our approach */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-6">
              Our approach
            </h2>
            <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base mb-4">
              We start with your people and business outcomes, not with technology. Every engagement begins by
              understanding the business outcomes you are trying to achieve for customers, employees, and the bottom line.
            </p>
            <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base mb-4">
              Then we diagnose the gap - people, process, platform, or policy - and partner to build the plan
              that closes it in the shortest viable time.
            </p>
            <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base">
              We stay hands-on through delivery, measure results against the outcomes we agreed,
              and leave your team capable of running what we built.
            </p>
          </div>

          {/* Why work with us */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-6">
              Why work with us
            </h2>
            <ul className="space-y-4">
              {CREDIBILITY_CLAIMS.map((claim) => (
                <li key={claim} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocx-bright-blue shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-base text-ocx-fg leading-ocx-base">{claim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
