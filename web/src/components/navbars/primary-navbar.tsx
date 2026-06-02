"use client";
import { Search } from "lucide-react";
import { getGreeting } from "@/utils/greeting";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme/toggle";
import SearchModal from "@/utils/SearchModal";

export default function PrimaryNavbar() {
  const [greeting, setGreeting] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const greetingMessage = getGreeting();
    setGreeting(greetingMessage);
  }, []);

  const handleSigninClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <section className="z-[200] text-ocx-fg-muted border-b border-ocx-border/30 leading-4 py-3 scroll-section-nav list-none items-center h-[5svh] flex justify-between text-sm px-4 md:px-12 bg-ocx-bg">
        <div className="primary-nav py-2 flex flex-row gap-0 md:gap-2">
          <li className="text-xs md:text-sm font-body">{greeting}</li>
        </div>
        <div className="flex primary-nav list-none gap-2 px-1 md:px-2 justify-center items-center">
          <li className="relative">
            <button onClick={openModal} aria-label="Toggle Search" className="p-1 hover:text-ocx-dark-blue transition-colors duration-ocx-fast">
              <Search className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <button className="text-xs md:text-sm font-body hover:text-ocx-dark-blue cursor-pointer transition-colors duration-ocx-fast bg-transparent border-none p-0">Help Center</button>
          </li>
          <li>
            <button className="text-xs md:text-sm font-body hover:text-ocx-dark-blue cursor-pointer transition-colors duration-ocx-fast bg-transparent border-none p-0" onClick={() => handleSigninClick("https://app.omnichannel.cx/")}>Log in</button>
          </li>
        </div>

        {isOpen && (
          <SearchModal onClose={closeModal} />
        )}
      </section>
    </>
  );
}
