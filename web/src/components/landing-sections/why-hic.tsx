"use client";

export default function WhyHicSection() {
  return (
    <section className="bg-ocx-bg-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
            Why human in control matters
          </h2>
          <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base mb-6">
            AI can draft responses, triage queues, and surface insights faster than any human. But
            the decision - whether to approve, redirect, or stop - must stay with a person who
            understands the customer, the regulator, and the business.
          </p>
          <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base mb-6">
            We design every AI recommendation with a human decision gate. That means your team gets
            the speed of automation without the risk of unchecked automation.
          </p>
          <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base">
            <span className="font-semibold text-ocx-fg-primary">
              AI does the preparation. Your people keep the authority.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
