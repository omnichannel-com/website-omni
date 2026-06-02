"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import RoundedButton from "../buttons/rounded-button";
import Typewriter from "typewriter-effect/dist/core";
import Accordion from "./tab";
import Image from "next/image";
type Category = "Business" | "Professional" | "Social" | "Creative";

export default function AlterEgoSection() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Professional");

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };

  const typewriterInstanceRef = useRef<any>(null);
  const typewriterSpanRef = useRef<HTMLSpanElement | null>(null);

  const words = useMemo(() => [
    "can tackle your business problems",
    "is helping overcome writers block",
    "is rephrasing text",
    "can proofread your content",
    "is summarising text for you",
    "is translating into other languages",
    "can teaching you new tasks",
    "is a SaaS salesperson",
    "develops websites",
    "critiques ideas",
    "is a natural networker",
    "is your prompt engineer",
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeNextWord = () => {
      setCurrentIndex((currentIndex + 1) % words.length);
    };

    if (typewriterSpanRef.current) {
      typewriterInstanceRef.current = new Typewriter(
        typewriterSpanRef.current,
        {
          loop: true,
          delay: 75,
        }
      );

      typewriterInstanceRef.current
        .typeString(`<span class="gradient-text">${words[currentIndex]}</span>`)
        .pauseFor(1000)
        .deleteAll()
        .callFunction(typeNextWord)
        .start();
    }
    return () => {
      if (typewriterInstanceRef.current) {
        typewriterInstanceRef.current.stop();
      }
    };
  }, [currentIndex, words]);
  const usersData: Record<
    Category,
    { image: string; name: string; designation: string; description: string }[]
  > = {
    Business: [
      {
        image: "/faces/face-20.png",
        name: "Amy",
        designation: "Business Architect",
        description: "Operationalisation",
      },
      {
        image: "/faces/face-44.png",
        name: "Rics",
        designation: "Business Idea Critique",
        description: "Business Idea Critic",
      },
      {
        image: "/faces/face-04.png",
        name: "Mary",
        designation: "Management Consultant",
        description: "Management Consulting",
      },
      {
        image: "/faces/face-41.png",
        name: "Steview Jogs",
        designation: "Marketing Genius",
        description: "Marketing Genius",
      },
      {
        image: "/faces/face-32.png",
        name: "Drew",
        designation: "Business Networker",
        description: "Business Networker",
      },
      {
        image: "/faces/face-19.png",
        name: "Ivy",
        designation: "Management Frameworks",
        description: "Management Consulting",
      },
    ],
    Professional: [
      {
        image: "/faces/face-22.png",
        name: "Queenie",
        designation: "Quality Maestro",
        description: "Quality management",
      },
      {
        image: "/faces/face-27.png",
        name: "Victor",
        designation: "Visionary",
        description: "Futurist and visionary",
      },
      {
        image: "/faces/face-26.png",
        name: "Wally",
        designation: "Webdev",
        description: "Web Development",
      },
      {
        image: "/faces/face-14.png",
        name: "Wendy",
        designation: "Wellness Advocate",
        description: "Wellness Advocacy",
      },
      {
        image: "/faces/face-24.png",
        name: "Andy",
        designation: "Business Launch Advisor",
        description: "Small Business Launch Advisor",
      },
    ],
    Social: [
      {
        image: "/faces/face-39.png",
        name: "Colin",
        designation: "Social Media Advocate",
        description: "Detractors to advacates",
      },
      {
        image: "/faces/face-37.png",
        name: "Eddy",
        designation: "Employee Expert",
        description: "Employee Experience",
      },
      {
        image: "/faces/face-40.png",
        name: "Neil",
        designation: "Networker",
        description: "Business networker",
      },
      {
        image: "/faces/face-13.png",
        name: "Sarah",
        designation: "SaaS Salesperson",
        description:
          "Selling software",
      },
      {
        image: "/faces/face-42.png",
        name: "Stewart",
        designation: "Environmental Steward",
        description: "Environmental expert",
      },
      {
        image: "/faces/face-20.png",
        name: "Ava",
        designation: "Public Speaking",
        description: "Public Speaker",
      },
      {
        image: "/faces/face-31.png",
        name: "Hank",
        designation: "Social Environmental Expert",
        description: "Socially and environmental",
      },
    ],
    Creative: [
      {
        image: "/faces/face-44.png",
        name: "Del",
        designation: "Creative Analyst",
        description: "Creative Process Ideation",
      },
      {
        image: "/faces/face-17.png",
        name: "Rose",
        designation: "Art History and Theory",
        description: "Art History and Theory",
      },
      {
        image: "/faces/face-41.png",
        name: "Sam",
        designation: "Creative Process Ideation",
        description: "Process and Ideation",
      },
      {
        image: "/faces/face-21.png",
        name: "Tess",
        designation: "Ruthlessly pick apart Ideas",
        description: "Ruthlessly pick apart Ideas",
      },
      {
        image: "/faces/face-26.png",
        name: "Will",
        designation: "Art History and Theory",
        description: "Art History and Theory",
      },
    ],
  };

  return (
    <section className="relative scroll-section h-[80svh] mt-36 mb-16 bg-backgroundClr z-50 text-textClr alter-ego-section">
           <div className="absolute left-0 top-0">
        <Image
          src="/fourth-section.png"
          height="500"
          width="1200"
          style={{ objectFit: 'cover', objectPosition: 'top'}}
          alt=""
        />
      </div>
      <div className="py-14 xxl:py-24  absolute inset-0 flex flex-col justify-start items-center">
      <p
  className="xl:text-4xl md:text-2xl font-semibold self-center mx-auto text-center"
  style={{ lineHeight: "2" }}
>
  Your second self who <br className="md:hidden"/> 
  <span className="md:inline" ref={typewriterSpanRef}></span>
</p>

        <div className="w-full gap-4 hidden md:h-md:grid px-24 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1 md:col-span-1 flex items-start justify-start w-full list-none">
            <ul className="space-y-3 h-full bg-cardClr shadow-lg lg:shadow-none md:font-medium w-full md:p-3 lg:p-4 rounded-xl xl:p-8 lg:font-semibold fourth-list">
              {Object.keys(usersData).map((category) => (
                <li
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => handleCategoryClick(category as Category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-1 grid grid-cols-1 gap-3 md:max-h-[70vh] lg:max-h-[100%] lg:overflow-y-auto md:overflow-y-scroll lg:grid-cols-4 custom-scrollbar">
            {usersData[activeCategory].map((user, index) => (
              <div
                key={index}
                className="bg-cardClr shadow-lg lg:shadow-none w-[100%] py-4 px-8 mx-auto rounded-xl"
              >

                <div className="text-center mx-auto relative flex flex-col gap-4">
                  <div className="w-full h-[auto] relative">
                    <Image
                      src={user.image}
                      objectPosition="center"
                      alt={user.name}
                      width="60"
                      height="60"
                      className="self-center mx-auto mb-1"
                    />
                  <p className="w-full text-2xl font-bold">{user.name}</p>
                  </div>
                  <div>
                  <p className="font-semibold">{user.designation}</p>
                  <p className="text-md opacity-70">
                    {user.description}
                  </p>
                  </div>
                  <div>
                  <RoundedButton
                    text="Try now"
                    color="orange"
                    hover="white"
                    size="large"
                    customClass="!px-4 self-end !py-2 !px-3 text-md"
                    />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:h-md:hidden block w-full ">
          <Accordion categories={Object.keys(usersData)} data={usersData} />
        </div>
      {/* <div className="flex flex-col mt-8 items-center justify-center w-[75%]">
      <p className="md:text-xl text-[14px] lg:text-3xl font-bold self-center mx-auto text-center font-nunito">
          Focus on core business functions
        </p>
            </div> */}
      </div>
    </section>
  );
}
