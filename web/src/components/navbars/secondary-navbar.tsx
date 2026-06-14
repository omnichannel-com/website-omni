"use client"

import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CALENDLY_URL } from "@/lib/calendly";
import { usePosthogConsent } from "@/hooks/use-posthog";

interface SecondaryNavbarProps {
  isSticky: boolean;
}

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({ isSticky }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const activePath = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (itemName: string) => {
    setActiveSubMenu((prev) => (prev === itemName ? null : itemName));
  };

  const { capture } = usePosthogConsent();

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Human in control", link: "/human-in-control" },
  ];

  const signUpHandler = () => {
    capture({ event: "cta_click", properties: { cta_label: "book_call_nav", page: activePath } });
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-[50] transition-all duration-150">
      <div
        className={clsx(
          "py-6 md:py-4 landscape:py-8 items-center backdrop-blur-md z-[50] h-[7svh] md:h-[10svh] transition-all duration-150 flex justify-between text-md px-6 md:px-12",
          {
            "bg-ocx-bg/80 shadow-ocx-sm": isSticky,
            "bg-ocx-bg": !isSticky,
          }
        )}
      >
        <div className="py-6 flex list-none">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/omnichannel-cx-icon-large.svg"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                alt="omnichannel logo"
                height={40}
                width={40}
              />
              <span className="font-display text-ocx-fg-primary text-xl md:text-2xl font-bold tracking-ocx-tight">
                omnichannel<span className="text-ocx-mauve">.</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-7">
          <ul className="flex items-center space-x-3 md:space-x-7">
            {isMobile ? (
              isMobileMenuOpen ? (
                <X
                  onClick={toggleMobileMenu}
                  className="text-ocx-fg-primary w-6 h-6 cursor-pointer"
                />
              ) : (
                <Menu
                  onClick={toggleMobileMenu}
                  className="text-ocx-fg-primary w-6 h-6 cursor-pointer"
                />
              )
            ) : (
              <>
                {navItems.map((item) => {
                  const isActive = activePath === item.link;
                  return (
                    <li
                      key={item.name}
                      className={clsx(
                        "relative navitems group text-sm font-body",
                        { "text-ocx-fg-primary font-bold": isActive }
                      )}
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  );
                })}

                <button
                  onClick={signUpHandler}
                  className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-semibold text-sm px-6 py-2 rounded-ocx-pill hover:bg-[var(--btn-primary-bg-hover)] transition-colors duration-ocx-fast"
                >
                  Book a call
                </button>
              </>
            )}
          </ul>
        </div>
      </div>

      {isMobile && isMobileMenuOpen && (
        <div className="bg-ocx-bg px-4 pt-4 overflow-y-auto shadow-ocx-md">
          <ul>
            {navItems.map((item) => {
              const isActive = activePath === item.link;
              return (
                <li
                  key={item.name}
                  className={clsx("py-2 relative", {
                    "border-b border-ocx-border": activeSubMenu === item.name,
                    "text-ocx-fg-primary font-bold": isActive,
                  })}
                >
                  <div className="flex items-center justify-between w-full">
                    <Link href={item.link}>
                      <span className="flex-grow text-left font-body" onClick={toggleMobileMenu}>
                        {item.name}
                      </span>
                    </Link>
                    {item.name === "About" && (
                      <ChevronDown
                        onClick={() => toggleSubMenu(item.name)}
                        className={clsx("w-5 h-5 transition-transform", {
                          "transform rotate-180": activeSubMenu === item.name,
                        })}
                      />
                    )}
                  </div>
                  {activeSubMenu === item.name && (
                    <div className="nav-drop text-sm z-[50] w-full bg-ocx-bg-subtle overflow-y-auto transition-all duration-700 ease-in-out">
                      <div className="text-ocx-fg px-4 py-2">
                        <ul className="space-y-2">
                          {navItems.map((subItem) => (
                            <li
                              className="py-1 hover:bg-ocx-bg-muted px-2 rounded-ocx-md cursor-pointer font-body text-sm"
                              key={subItem.name}
                            >
                              <Link href={subItem.link}>{subItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </header>
  );
};

export default SecondaryNavbar;
