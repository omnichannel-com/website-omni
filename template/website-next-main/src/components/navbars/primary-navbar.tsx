"use client";
import { IoSearchOutline } from "react-icons/io5";
import { getGreeting } from "@/utils/greeting";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme/toggle";
import SearchModal from "@/utils/SearchModal";

export default function PrimaryNavbar() {
  const [greeting, setGreeting] = useState<string>("");
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const greetingMessage = getGreeting();
    setGreeting(greetingMessage);
  }, []);

  const handleSigninClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <section className="z-[200] text-textClr border-b-2 border-borderClr/20 leading-4 py-4 scroll-section-nav list-none items-center h-[5svh] flex justify-between text-sm px-1 md:px-12">
        <div className="primary-nav py-2 flex flex-row gap-0 md:gap-2">
          <li className="text-xs md:text-base">{greeting}</li>
        </div>
        <div className="flex primary-nav list-none gap-0 px-1 md:px-2 justify-center items-center">
          <li className="relative">
            <button onClick={openModal} aria-label="Toggle Search">
              <IoSearchOutline className="box-content text-icon-sm sm:text-icon-md lg:text-icon-lg" />
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li className="text-xs md:text-base">Help Center</li>
          <li className="text-xs md:text-base" onClick={() => handleSigninClick("https://app.2ai.cx/")}>Log in</li>
        </div>

        {isOpen && (
          <SearchModal onClose={closeModal} />
        )}
      </section>
    </>
  );
}
