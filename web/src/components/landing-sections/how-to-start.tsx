"use client";

import { RefreshCw, ClipboardList, Wrench } from "lucide-react";

const STARTERS = [
  {
    icon: RefreshCw,
    title: "Transform or optimise",
    description:
      "A full service operations redesign - or a targeted optimisation of your existing setup. You choose the scope.",
  },
  {
    icon: ClipboardList,
    title: "Plan or review",
    description:
      "A strategic review of your CX maturity, technology stack, and AI readiness with a prioritised action plan.",
  },
  {
    icon: Wrench,
    title: "Fix one thing",
    description:
      "A focused engagement to solve a specific problem - a broken process, a platform decision, or a team bottleneck.",
  },
];

export default function HowToStartSection() {
  return (
    <section id="how-to-start" className="bg-ocx-bg py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4 text-center">
            How to start
          </h2>
          <p className="font-body text-lg text-ocx-fg text-center mb-12 max-w-2xl mx-auto">
            Three ways to engage, depending on where you are and what you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STARTERS.map((s) => (
              <div
                key={s.title}
                className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4 hover:shadow-ocx-md transition-shadow duration-ocx-fast"
              >
                <s.icon className="w-8 h-8 text-ocx-mauve" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ocx-fg-primary">{s.title}</h3>
                <p className="font-body text-sm text-ocx-fg leading-ocx-base">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
