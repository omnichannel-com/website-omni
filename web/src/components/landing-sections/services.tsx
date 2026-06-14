"use client";

import { BarChart3, Compass, Gauge, Headset, Bot, GraduationCap } from "lucide-react";

const SERVICES = [
  {
    icon: BarChart3,
    title: "Maturity Review & AI readiness",
    description:
      "Assess where you are, identify quick wins, and build a credible roadmap to AI adoption.",
  },
  {
    icon: Compass,
    title: "CX strategy & design",
    description:
      "Design customer journeys, service models, and channel strategies that match your business goals.",
  },
  {
    icon: Gauge,
    title: "Operational performance",
    description:
      "Improve speed, quality, and cost across your service operations with data-driven diagnostics.",
  },
  {
    icon: Headset,
    title: "Contact centre & platform advisory",
    description:
      "Select, configure, and optimise the platforms that power your customer conversations.",
  },
  {
    icon: Bot,
    title: "AI & automation (human in control)",
    description:
      "Deploy AI agents that do the work while your people retain authority, visibility, and revocability.",
  },
  {
    icon: GraduationCap,
    title: "Training & capability",
    description:
      "Build the skills your team needs to run modern CX and AI-enabled service operations.",
  },
];

export default function ServicesSection() {
  return (
    <section id="what-we-do" className="bg-ocx-bg-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4 text-center">
            What we do
          </h2>
          <p className="font-body text-lg text-ocx-fg text-center mb-12 max-w-2xl mx-auto">
            Six ways we help organisations transform customer experience and service operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4 hover:shadow-ocx-md transition-shadow duration-ocx-fast"
              >
                <s.icon className="w-8 h-8 text-ocx-bright-blue" strokeWidth={1.5} />
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
