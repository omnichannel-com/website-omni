"use client";
import Link from "next/link";

export default function AlterEgoSection() {

  const features = [
    "Unify every channel into one intelligent inbox",
    "Give agents full customer context instantly",
    "Measure response times and team health in real time",
    "Automate routine without losing the human touch",
    "Scale your support without scaling complexity",
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 bg-ocx-bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 mb-12">
          <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
            Why omnichannel CX
          </span>
          <h2 className="font-display text-ocx-dark-blue text-3xl md:text-4xl lg:text-ocx-3xl font-extrabold tracking-ocx-tight leading-ocx-tight max-w-[20ch]">
            Built for teams who care
          </h2>
          <p className="font-body text-ocx-fg-muted text-lg md:text-xl max-w-[50ch] leading-ocx-base">
            Every feature is designed to help your team respond faster, stay informed, and deliver a consistently great customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-ocx-bg border border-ocx-border rounded-ocx-lg p-6 md:p-8 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast"
            >
              <div className="w-10 h-10 rounded-ocx-md bg-ocx-gradient-soft flex items-center justify-center mb-4">
                <span className="font-display text-ocx-dark-blue font-bold text-sm">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <p className="font-body text-ocx-fg text-base leading-ocx-base">{feature}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/about"
            className="bg-ocx-dark-blue text-white font-display font-semibold text-sm px-8 py-3 rounded-ocx-pill hover:bg-ocx-mauve transition-all duration-ocx-fast shadow-ocx-md hover:shadow-ocx-lg"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
