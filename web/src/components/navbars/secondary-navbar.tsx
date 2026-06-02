"use client"

import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SecondaryNavbarProps {
  isSticky: boolean;
}

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({ isSticky }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isPlatformHovered, setIsPlatformHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const activePath = usePathname();
  const isHovered = isPlatformHovered || isDropdownHovered;

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

  useEffect(() => {
    setIsNavbarSticky(isSticky);
  }, [isSticky]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (itemName: string) => {
    setActiveSubMenu((prev) => (prev === itemName ? null : itemName));
  };

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const platformItems = [
    { name: "Platform overview", link: "/about" },
    { name: "Features", link: "/about" },
    { name: "Integrations", link: "/about" },
  ];

  const companyItems = [
    { name: "About us", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const signUpHandler = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="sticky top-0 z-[50] transition-all duration-150">
      <div
        className={clsx(
          "py-6 md:py-4 landscape:py-8 items-center backdrop-blur-md z-[50] h-[7svh] md:h-[10svh] transition-all duration-150 flex justify-between text-md px-6 md:px-12",
          {
            "bg-ocx-bg/80 shadow-ocx-sm": isNavbarSticky,
            "bg-ocx-bg": !isNavbarSticky,
          }
        )}
      >
        <div className="py-6 flex list-none">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo-icon-color.png"
                className="w-8 h-8 md:w-10 md:h-10"
                alt="omnichannel CX logo"
                height={40}
                width={40}
              />
              <span className="font-display text-ocx-fg-primary text-xl md:text-2xl font-bold tracking-ocx-tight">
                omnichannel <span className="font-extrabold">CX</span>
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
                {navItems.map((item, index) => {
                  const isActive = activePath === item.link;
                  return (
                    <li
                      key={index}
                      className={clsx(
                        "relative navitems group text-sm font-body",
                        { "hover:text-ocx-bright-blue": item.name === "About" },
                        { "text-ocx-fg-primary font-bold": isActive }
                      )}
                      onMouseEnter={() => {
                        if (item.name === "About") setIsPlatformHovered(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === "About") setIsPlatformHovered(false);
                      }}
                    >
                      <Link href={item.link}>{item.name}</Link>
                      {item.name === "About" && (
                        <ChevronDown className="ms-1 inline-block w-4 h-4" strokeWidth={2} />
                      )}
                    </li>
                  );
                })}

                <button
                  onClick={() => signUpHandler("https://app.omnichannel.cx/")}
                  className="bg-ocx-dark-blue text-white font-display font-semibold text-sm px-6 py-2 rounded-ocx-pill hover:bg-ocx-mauve transition-colors duration-ocx-fast"
                >
                  Get started
                </button>
              </>
            )}
          </ul>
        </div>
      </div>

      {isMobile && isMobileMenuOpen && (
        <div className="bg-ocx-bg px-4 pt-4 overflow-y-auto shadow-ocx-md">
          <ul>
            {navItems.map((item, index) => {
              const isActive = activePath === item.link;
              return (
                <li
                  key={index}
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
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-ocx-mauve text-xs font-display uppercase tracking-ocx-caps mb-2 block">Platform</span>
                            <ul className="space-y-2">
                              {platformItems.map((pItem, listIndex) => (
                                <li
                                  className="py-1 hover:bg-ocx-bg-muted px-2 rounded-ocx-md cursor-pointer font-body text-sm"
                                  key={listIndex}
                                >
                                  <Link href={pItem.link}>{pItem.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-ocx-mauve text-xs font-display uppercase tracking-ocx-caps mb-2 block">Company</span>
                            <ul className="space-y-2">
                              {companyItems.map((cItem, listIndex) => (
                                <li
                                  className="py-1 hover:bg-ocx-bg-muted px-2 rounded-ocx-md cursor-pointer font-body text-sm"
                                  key={listIndex}
                                >
                                  <Link href={cItem.link}>{cItem.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!isMobile && (
        <div
          onMouseEnter={() => setIsDropdownHovered(true)}
          onMouseLeave={() => setIsDropdownHovered(false)}
          className={clsx(
            "nav-drop scrollbar-hide absolute text-sm z-[50] w-full bg-ocx-bg overflow-hidden transition-all duration-700 ease-in-out",
            {
              "max-h-80": isHovered,
              "max-h-0": !isHovered,
            }
          )}
        >
          <div className="text-ocx-fg px-4 md:px-10 lg:px-40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div>
                <span className="text-ocx-mauve text-xs font-display uppercase tracking-ocx-caps mb-4 mt-4 block">Platform</span>
                <ul className="space-y-2">
                  {platformItems.map((pItem, listIndex) => (
                    <li
                      className="py-1 hover:bg-ocx-bg-muted text-ocx-fg-primary hover:text-ocx-bright-blue px-2 rounded-ocx-md cursor-pointer font-body text-sm transition-colors duration-ocx-fast"
                      key={listIndex}
                    >
                      <Link href={pItem.link}>{pItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-ocx-mauve text-xs font-display uppercase tracking-ocx-caps mb-4 mt-4 block">Company</span>
                <ul className="space-y-2">
                  {companyItems.map((cItem, listIndex) => (
                    <li
                      className="py-1 hover:bg-ocx-bg-muted text-ocx-fg-primary hover:text-ocx-bright-blue px-2 rounded-ocx-md cursor-pointer font-body text-sm transition-colors duration-ocx-fast"
                      key={listIndex}
                    >
                      <Link href={cItem.link}>{cItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondaryNavbar;
