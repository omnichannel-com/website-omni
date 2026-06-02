import React, { useState } from 'react';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How can AlterEgo help my business?',
      answer: 'AlterEgo specializes in training AI bots to perform like professional accountants, lawyers, instructors, and more. Our technology automates routine tasks, freeing up your time to focus on strategic initiatives and business growth.',
    },
    {
      question: 'What types of AI Integration does AlterEgo offer?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'What support options are available?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      question: 'Can I customize the AI bots for my business?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      question: 'How does the integration process work?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
    {
      question: 'What support options are available?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="scroll-section-1 bg-backgroundClr z-10 relative">
      <div className="container mx-auto py-10 md:py-20 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-nunito font-bold text-textClr text-center">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <div className="rounded-xl mt-8 bg-gradient-to-t from-cardClr to-backgroundClrOp backdrop-blur-md shadow-lg border-1 w-full md:w-3/4 lg:w-2/3 px-4 md:px-8 py-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b py-4 border-borderClr/50 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}>
              <button
                className="flex justify-between w-full py-2 md:py-4 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base text-left md:text-lg font-bold text-textClr">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform mx-2 transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F45615"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ${activeIndex === index ? 'max-h-36' : 'max-h-0'}`}>
                <p className="mt-2 md:mt-4 text-textClr text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
