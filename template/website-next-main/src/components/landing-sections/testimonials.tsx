import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("slide-enter-active");

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Our robust AI engine meticulously handles all your routine business tasks, allowing your AI AlterEgos to ensure everything runs smoothly.",
        author: "Micheal Gough",
        position: "CEO at Google",
      },
      {
        quote:
          "With our innovative AI solutions, your business can reach new heights of efficiency and productivity.",
        author: "Micheal Gough",
        position: "CEO at Google",
      },
      {
        quote:
          "Our AI technology empowers enterprises to harness the full potential of their data, driving smarter decisions.",
        author: "Micheal Gough",
        position: "CEO at Google",
      },
      {
        quote:
          "Leveraging AI, we streamline complex processes, ensuring your business operates with unparalleled precision.",
        author: "Micheal Gough",
        position: "CEO at Google",
      },      {
        quote:
          "Leveraging AI, we streamline complex processes, ensuring your business operates with unparalleled precision.",
        author: "Micheal Gough",
        position: "CEO at amazon",
      },
    ],
    []
  );

  const showTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const showNextTestimonial = () => {
      setSlideDirection("slide-enter-active");
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    const interval = setInterval(showNextTestimonial, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials]);

  return (
    <div id="indicators-carousel" className="relative w-full">

      <div className="relative flex justify-center !h-[210px] h-md:!h-[250px] rounded-lg md:h-72">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === activeIndex ? slideDirection : "hidden"
            }`}
          >
            <div className="absolute z-50 top-[-24px] left-[50%] transform -translate-x-1/2">
              <Image src="/Group.svg" alt="" width={60} height={60} />
            </div>
            <section className="bg-[#464545] !h-[210px] h-md:!h-[240px] md:h-[270px] z-40 rounded-lg flex self-center mx-auto relative mb-7 text-white overflow-hidden">
              <div className="max-w-screen-xl px-2 md:px-4 pt-8 pb-4 mx-auto text-center lg:pt-16 lg:pb-8 lg:px-6 relative">
                <figure className="max-w-screen-md mx-auto">
                  <div className="w3-animate-right">
                    <blockquote>
                      <p className="text-[12px] md:h-md:text-2xl md:text-sm h-md:text-lg leading-3 font-medium">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <div>
                        <div className="font-semibold md:text-lg !text-sm h-md:!text-lg">
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

      <div className="absolute z-30 mt-3 -translate-x-1/2 space-x-3 rtl:space-x-reverse left-1/2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex
                ? "bg-secondaryColor"
                : "bg-secondaryColor bg-opacity-15"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => showTestimonial(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
