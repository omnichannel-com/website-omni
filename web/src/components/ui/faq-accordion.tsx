"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  id?: string;
  className?: string;
}

export default function FaqAccordion({
  faqs,
  title = "Frequently asked questions",
  id = "faq",
  className = "",
}: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={id} className={`bg-ocx-bg py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-12 text-center">
            {title}
          </h2>

          <div className="rounded-ocx-lg bg-gradient-to-t from-ocx-bg-subtle to-ocx-bg backdrop-blur-md shadow-ocx-sm border border-ocx-border px-4 md:px-8 py-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const panelId = `faq-answer-${id}-${index}`;
              return (
                <div
                  key={index}
                  className={`border-b py-4 border-ocx-border/50 ${
                    index === faqs.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="flex justify-between w-full py-2 md:py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ocx-bright-blue focus-visible:ring-offset-2 rounded-ocx-md"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="text-base md:text-lg font-bold text-ocx-fg pr-4">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`h-6 w-6 shrink-0 transition-transform duration-300 text-ocx-bright-blue ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={panelId}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <p className="mt-2 md:mt-4 text-ocx-fg text-sm md:text-base leading-ocx-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
