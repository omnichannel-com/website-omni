"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How can omnichannel CX help my business?',
      answer: 'omnichannel CX brings email, chat, voice, and social into one inbox, so your team can answer every customer in the channel they chose. Routine questions are handled automatically, freeing your team for the conversations that need a human.',
    },
    {
      question: 'What types of AI integration does omnichannel CX offer?',
      answer: 'Our AI drafts replies, summarizes long threads, routes conversations to the right agent, and surfaces customer context in real time. It works across every connected channel without extra setup.',
    },
    {
      question: 'What support options are available?',
      answer: 'Every plan includes community and email support. Professional and Premium plans add priority email and chat support, and Premium includes a dedicated account manager with 24/7 priority support.',
    },
    {
      question: 'Can I customize the AI for my business?',
      answer: 'Yes. You can tune tone, set escalation rules, and connect your own knowledge base so responses match your brand and stay accurate.',
    },
    {
      question: 'How does the integration process work?',
      answer: 'Connect your channels and tools in a few clicks, import your knowledge base, and invite your team. Most workspaces are live the same day, with no engineering work required.',
    },
    {
      question: 'What industries does omnichannel CX serve?',
      answer: 'Teams in software, retail, finance, healthcare, and education use omnichannel CX. Any team that handles customer conversations across more than one channel benefits.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="scroll-section-1 bg-ocx-bg z-10 relative">
      <div className="container mx-auto py-10 md:py-20 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-ocx-fg text-center">
          Frequently asked <span className="gradient-text">questions</span>
        </h1>
        <div className="rounded-ocx-lg mt-8 bg-gradient-to-t from-ocx-bg-subtle to-ocx-bg backdrop-blur-md shadow-ocx-sm border border-ocx-border w-full md:w-3/4 lg:w-2/3 px-4 md:px-8 py-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b py-4 border-ocx-border/50 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}>
              <button
                className="flex justify-between w-full py-2 md:py-4 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base text-left md:text-lg font-bold text-ocx-fg">{faq.question}</span>
                <ChevronRight
                  className={`h-6 w-6 mx-2 shrink-0 transition-transform duration-300 text-ocx-bright-blue ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}
                  strokeWidth={1.5}
                />
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ${activeIndex === index ? 'max-h-72' : 'max-h-0'}`}>
                <p className="mt-2 md:mt-4 text-ocx-fg text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
