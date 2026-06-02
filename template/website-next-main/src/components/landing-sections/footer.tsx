"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // console.log("Current theme (on mount):", theme);
  }, [theme]);

  useEffect(() => {
    // console.log("Current theme (on change):", theme);
  }, [theme]);

  if (!mounted) {
    return null; // Avoid SSR mismatch
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <div className="text-textClr bg-cardClr pt-10">
      <div className="px-4 md:px-12 py-10 flex flex-col justify-between md:grid md:grid-cols-6 gap-y-10 md:gap-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start order-1 md:order-none col-span-1">
          <div className="flex items-center space-x-2">
            <Image
              src={theme === "dark" ? "/white.png" : "/orange.png"}
              alt="AlterEgo Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-4xl md:text-2xl font-semibold">AlterEgo</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start md:order-none col-span-2 space-y-4 order-2">
          <ul className="text-center md:text-left space-y-2 md:space-y-5 text-lg md:text-xl">
            <li className="hover:text-primaryClr cursor-pointer">Home</li>
            <li className="hover:text-primaryClr cursor-pointer">Resources</li>
            <li className="hover:text-primaryClr cursor-pointer">Blogs</li>
            <li className="hover:text-primaryClr cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center order-3 md:order-none col-span-3 space-y-4">
          <p className="text-xl font-semibold text-center">Join Our Newsletter</p>

          <div className="relative flex items-center w-full max-w-md mx-auto mt-10">
            <input
              type="text"
              className={`relative flex-grow py-4 px-4 rounded-full items-center justify-center
                ${
                  // theme === "dark" ? "card" : "gradient-input-light"
                  "bg-backgroundClr"
                }
                
                focus:outline-none focus:ring-2 focus:ring-secondaryColor`}
              placeholder="Enter text"
            />
            <button className="absolute right-2 min-w-[80px] bg-secondaryColor cursor-pointer text-white rounded-full px-4 py-2 my-auto outline outline-0 hover:bg-white hover:text-primaryColor hover:outline-2 hover:outline-primaryColor">
              Submit
            </button>
          </div>
          <div className="flex gap-6">
            <Image 
              src="/icons/x.svg" 
              alt="X icon" 
              width={36} 
              height={36} 
              className="cursor-pointer hover:scale-110 transition-all duration-300" 
              onClick={() => handleSocialClick("https://twitter.com")}
            />
            <Image 
              src="/icons/in.svg" 
              alt="LinkedIn icon" 
              width={36} 
              height={36} 
              className="cursor-pointer hover:scale-110 transition-all duration-300" 
              onClick={() => handleSocialClick("https://www.linkedin.com/company/2aicx")}
            />
            <Image 
              src="/icons/insta.svg" 
              alt="Instagram icon" 
              width={36} 
              height={36} 
              className="cursor-pointer hover:scale-110 transition-all duration-300" 
              onClick={() => handleSocialClick("https://x.com/2aicx")}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-backgroundClr to-secondary-color/5 backdrop-blur-md py-5 flex justify-center items-center">
        <ul className="flex gap-1 md:gap-2 text-sm">
          <li className="hover:text-primaryClr cursor-pointer">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <p className="cursor-default">|</p>
          <li className="hover:text-primaryClr cursor-pointer">
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
          <p className="cursor-default">|</p>
          <li className="hover:text-primaryClr cursor-pointer">
            <Link href="/disclaimer">Disclaimer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
