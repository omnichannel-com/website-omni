import React, { useEffect, useState, useRef } from "react";
import RoundedButton from "../buttons/rounded-button";
import Typewriter from "typewriter-effect/dist/core";
import Image from "next/image";

export default function HeroSection() {
  const typewriterSpanRef = useRef<HTMLSpanElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words] = useState([
    "AI-powered AlterEgo",
    "Regional Marketing Director",
    "SEO Executive",
    "SVP of Sales",
    "Chief Customer Officer",
    "VP of Operations",
    "Chief Technology Officer",
    "Brand Executive",
    "Snr Designer",
    "Networker",
    "Critic",
  ]);

  useEffect(() => {
    const loadTypewriter = async () => {
      const Typewriter = await import("typewriter-effect/dist/core");

      if (typewriterSpanRef.current) {
        const typewriterInstance = new Typewriter.default(typewriterSpanRef.current, {
          loop: true,
          delay: 75,
        });

        words.forEach((word, index) => {
          typewriterInstance
            .typeString(`<span class="gradient-text">${word}</span>`)
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
              // Increment currentIndex
              setCurrentIndex((index + 1) % words.length);
            })
            .start();
        });
      }
    };

    loadTypewriter();
  }, [words]);

  return (
    <section className="relative top-[-50px] scroll-section text-textClr landscape:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="h-[65vh] flex flex-col justify-center items-center gap-8">
            <h1 className="xl:text-[54px] text-[25px] md:text-[35px] font-semibold font-nunito text-center">
              Your Expert <br className="md:hidden" /> <span className="md:inline" ref={typewriterSpanRef}></span>
            </h1>
            <p className="w-[80%] xl:text-2xl text-lg md:text-2xl mb-3 lg:mb-5 text-center">
              Immediately benefit from the power of generative AI without the heavy lifting of learning how to craft complex prompts.
            </p>
          </div>
          {/* features section*/}
          <div className="flex flex-col mb-16 gap-10 md:gap-20 md:px-6 lg:px-12 xl:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-gradient-to-t from-cardClr to-cardClr backdrop-blur-md shadow-lg p-6 sm:p-8 flex flex-col items-center gap-6 border-1 border-gray-500 rounded-xl">
                <Image src="/icons/task.png" alt="hero Icon" height={90} width={90} />
                <p className="font-nunito text-center text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
                  Task your master team of autonomous Ai agents to act as your AlterEgo, your operational other self that fills the needs and gaps in your work.
                </p>
              </div>
              <div className="bg-gradient-to-t from-cardClr to-cardClr backdrop-blur-md shadow-lg p-6 sm:p-8 flex flex-col items-center gap-6 border-1 border-gray-500 rounded-xl">
                <Image src="/icons/control.png" alt="control Icon" height={90} width={90} />
                <p className="font-nunito text-center text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
                  You’re in control. Your master team responds quickly and accurately and takes on all those routine tasks right alongside you.
                </p>
              </div>
              <div className="bg-gradient-to-t from-cardClr to-cardClr backdrop-blur-md shadow-lg p-6 sm:p-8 flex flex-col items-center gap-6 border-1 border-gray-500 rounded-xl">
                <Image src="/icons/improve.png" alt="hero Icon" height={90} width={90} />
                <p className="font-nunito text-center text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
                  Constantly learning and improving, reducing your workload and allowing you and your business to grow.
                </p>
              </div>
              <div className="bg-gradient-to-t from-cardClr to-cardClr backdrop-blur-md shadow-lg p-6 sm:p-8 flex flex-col items-center gap-6 border-1 border-gray-500 rounded-xl">
              <Image src="/icons/voice.png" alt="hero Icon" height={90} width={90} />
                <p className="font-nunito text-center text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
                  Solve business questions in your brand voice with workers who sound like you instead of a ChatGPT robot.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 lg:pt-10">
              <RoundedButton
                text="Sign up"
                color="orange"
                hover="white"
                size="small"
                customClass="min-w-[120px] px-6"
              />
              <RoundedButton
                text="Get a demo"
                color="white"
                hover="filledOrange"
                size="small"
                customClass="min-w-[120px] px-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
