import React, { useState } from "react";

interface HeroProps {
  activePlan: "monthly" | "yearly";
  setActivePlan: (plan: "monthly" | "yearly") => void;
}

function Hero({ activePlan, setActivePlan }: HeroProps) {
  const [active, setActive] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative z-10 py-4 scroll-section-1">
      <div className="h-[45vh] container mx-auto">
        <div className="h-full flex flex-col flex-grow items-center justify-center text-textClr relative top-[2%] space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-nunito font-semibold text-center py-2">
            AlterEgo <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg md:text-2xl text-center px-4 max-w-full md:max-w-[510px]">
            Create personalized customer experiences with real-time data and
            AI-driven insights.
          </p>
          <div className="relative flex items-center justify-center w-full max-w-xs mt-4">
            <div className="w-full border-2 border-borderClr rounded-full py-1 px-1 flex relative">
              <div
                className={`absolute top-0 rounded-full bg-secondaryColor  transition-transform duration-300 transform ${
                  activePlan === "monthly"
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
                style={{
                  width: "calc(50% - 4px)", // Adjust width to account for the margin
                  height: "calc(100% - 8px)", // Adjust height to account for padding
                  margin: "4px auto", // Adjust margin to center slider within border
                  zIndex: 1, // Place the slider behind the text
                }}
              ></div>
              <button
              
                className={`relative flex-1 px-5 py-2 rounded-full transition-colors duration-300 ${
                  activePlan === "monthly" ? "text-white" : "text-secondaryColor"
                }`}
                onClick={() => setActivePlan("monthly")}
                style={{ zIndex: 2 }} // Ensure the button text is above the slider
              >
                Monthly
              </button>
              <button
                className={`relative flex-1 px-5 py-2 rounded-full transition-colors duration-300 ${
                  activePlan === "yearly" ? "text-white" : "text-secondaryColor"
                }`}
                onClick={() => setActivePlan("yearly")}
                style={{ zIndex: 2 }} // Ensure the button text is above the slider
              >
                Yearly
              </button>

              
            </div>
          </div>

          {/* <p className="text-lg sm:text-xl text-center mt-4">
            Estimate your price
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
