import Image from "next/image";
import { Pause, Play } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote:
        "Our robust AI engine meticulously handles all your routine business tasks, allowing your AI assistants to ensure everything runs smoothly.",
      author: "Michael Gough",
      position: "CEO at Google",
    },
    {
      quote:
        "With our innovative AI solutions, your business can reach new heights of efficiency and productivity.",
      author: "Michael Gough",
      position: "CEO at Google",
    },
    {
      quote:
        "Our AI technology empowers enterprises to harness the full potential of their data, driving smarter decisions.",
      author: "Michael Gough",
      position: "CEO at Google",
    },
    {
      quote:
        "Leveraging AI, we streamline complex processes, ensuring your business operates with unparalleled precision.",
      author: "Michael Gough",
      position: "CEO at Google",
    },
    {
      quote:
        "The future of customer experience is here, and it's powered by intelligent automation that truly understands your needs.",
      author: "Sarah Chen",
      position: "CTO at Amazon",
    },
  ];

  const showTestimonial = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <div id="indicators-carousel" className="relative w-full">

      <div className="relative flex justify-center h-[210px] rounded-lg md:h-72">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === activeIndex ? "slide-enter-active" : "hidden"
            }`}
          >
            <div className="absolute z-50 top-[-24px] left-[50%] transform -translate-x-1/2">
              <Image src="/quote-marks.svg" alt="" width={60} height={60} />
            </div>
            <section className="bg-ocx-dark-blue h-[210px] md:h-[270px] z-40 rounded-lg flex self-center mx-auto relative mb-7 text-white overflow-hidden">
              <div className="max-w-screen-xl px-2 md:px-4 pt-8 pb-4 mx-auto text-center lg:pt-16 lg:pb-8 lg:px-6 relative">
                <figure className="max-w-screen-md mx-auto">
                  <div className="w3-animate-right">
                    <blockquote>
                      <p className="text-xs md:text-sm lg:text-lg leading-5 font-medium">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <div>
                        <div className="font-semibold md:text-lg text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-sm">{testimonial.position}</div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </section>
          </div>
        ))}
      </div>

      <div className="absolute z-30 mt-3 -translate-x-1/2 left-1/2 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsPaused((p) => !p)}
          aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          className="text-ocx-mauve hover:text-ocx-fg-primary transition-colors duration-ocx-fast"
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
        <div className="space-x-3 rtl:space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? "bg-ocx-mauve"
                  : "bg-ocx-mauve bg-opacity-15"
              }`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => showTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
