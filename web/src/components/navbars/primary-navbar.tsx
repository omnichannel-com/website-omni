"use client";
import { Search } from "lucide-react";
import { getGreeting } from "@/utils/greeting";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../theme/toggle";
import SearchModal from "@/utils/SearchModal";
import { usePosthogConsent } from "@/hooks/use-posthog";

export default function PrimaryNavbar() {
  const [greeting, setGreeting] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { capture } = usePosthogConsent();

  useEffect(() => {
    const greetingMessage = getGreeting();
    setGreeting(greetingMessage);
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <section className="z-[200] text-ocx-fg-muted border-b border-ocx-border/30 leading-4 py-3 list-none items-center h-[5svh] flex justify-between text-sm px-4 md:px-12 bg-ocx-bg">
        <ul className="primary-nav py-2 flex flex-row gap-0 md:gap-2">
          <li className="text-xs md:text-sm font-body">{greeting}</li>
        </ul>
        <ul className="flex primary-nav list-none gap-2 px-1 md:px-2 justify-center items-center">
          <li className="relative">
            <button onClick={openModal} aria-label="Toggle Search" className="p-1 hover:text-ocx-fg-primary transition-colors duration-ocx-fast">
              <Search className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link
              href="/#what-we-do"
              className="text-xs md:text-sm font-body hover:text-ocx-fg-primary cursor-pointer transition-colors duration-ocx-fast"
              onClick={() => capture({ event: "nav_click", properties: { nav_label: "what_we_do", page: pathname } })}
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              href="/#how-to-start"
              className="text-xs md:text-sm font-body hover:text-ocx-fg-primary cursor-pointer transition-colors duration-ocx-fast"
              onClick={() => capture({ event: "nav_click", properties: { nav_label: "how_to_start", page: pathname } })}
            >
              How to start
            </Link>
          </li>
          <li>
            <Link
              href="/#faq"
              className="text-xs md:text-sm font-body hover:text-ocx-fg-primary cursor-pointer transition-colors duration-ocx-fast"
              onClick={() => capture({ event: "nav_click", properties: { nav_label: "faq", page: pathname } })}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </section>

      {isOpen && (
        <SearchModal onClose={closeModal} />
      )}
    </>
  );
}
