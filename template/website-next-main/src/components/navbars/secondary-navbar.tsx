
"use client"

import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface SecondaryNavbarProps {
  setISticky: React.SetStateAction<boolean>;
}

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({ setISticky }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isPlatformHovered, setIsPlatformHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);
  const [isPath, setIsPath] = useState("");
  const [activePath, setActivePath] = useState("");
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
    setIsNavbarSticky(setISticky);
  }, [setISticky]);

  useEffect(() => {
    if (isNavbarSticky) {
      closeLogo();
      setTimeout(() => {
        openLogoIcon();
      }, 200);
    } else {
      closeLogoIcon();
      setTimeout(() => {
        openLogo();
      }, 200);
    }
  }, [isNavbarSticky]);

  useEffect(() => {
    setIsPath(isHovered || isBarHovered ? "/nav-hover.png" : "/nav.png");
  }, [isHovered, isBarHovered]);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const closeLogo = () => {
    const logoElement = document.getElementById("vanish-element");
    if (logoElement) {
      logoElement.style.width = "0";
    }
  };

  const openLogo = () => {
    const logoElement = document.getElementById("vanish-element");
    if (logoElement) {
      logoElement.style.width = "100%";
    }
  };

  const closeLogoIcon = () => {
    const iconElement = document.getElementById("vanish-element-icon");
    if (iconElement) {
      iconElement.style.width = "0";
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (itemName: string) => {
    setActiveSubMenu((prev) => (prev === itemName ? null : itemName));
  };

  const openLogoIcon = () => {
    const iconElement = document.getElementById("vanish-element-icon");
    if (iconElement) {
      const width = window.innerWidth > 768 ? "35px" : "25px";
      iconElement.style.width = width;
    }
  };

  const [isDDOpen, setIsDDOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDDOpen(!isDDOpen);
  };

  const navItems = [
    { name: "About", link: "#" },
    { name: "Pricing", link: "/pricing" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const navContentHeaders = ["AlterEgo", "Company"];

  const alterEgoItems = [
    { name: "Introduction", link: "/about/introduction" },
    { name: "Solution", link: "/" },
    { name: "Automation", link: "/" },
    { name: "Work automation", link: "/" },
    { name: "Alter Ego Workflows", link: "/s" },
    { name: "Greenlit models", link: "/about/greenlit-models" },
    { name: "Request a model", link: "/" },
    { name: "Autonomous AI AlterEgo Agents (coming soon)", link: "/" },
    { name: "BYO AI (coming soon)", link: "/" },
  ];
  const companyItems = [
    { name: "About 2AI", link: "#" },
    { name: "Newsroom", link: "/newsroom" },
    { name: "Reviews", link: "/reviews" },
    { name: "FAQ", link: "/faq" },
    { name: "Security", link: "/security" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const signUpHandler = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="sticky top-0 z-[50] transition-all duration-150">
      <div
        onMouseEnter={() => setIsBarHovered(true)}
        onMouseLeave={() => setIsBarHovered(false)}
        style={{
          backgroundColor: isNavbarSticky ? "secondary-navbar" : isHovered ? "white" : "",
          color: isHovered ? "#232426" : "",
        }}
        className={` py-6 md:py-4 landscape:py-8 items-center text-textClr backdrop-blur-md 
          z-[50] h-[7svh] md:h-[10svh] transition-all duration-150 flex justify-between text-md px-12 
          ${
          (isHovered || isMobileMenuOpen) && isPlatformHovered
            ? "bg-cardClr hover:bg-white !text-primaryColorr"
            : "text-textClr hover:bg-white hover:!text-primaryColor"
        }`}
      >
        <div className="py-6 flex list-none">
          <Link href="/">
            <div className="flex items-center md:relative">
              <div
                className="flex gap-2 vanish-element items-center overflow-hidden"
                id="vanish-element"
              >
                <Image
                  src="/orange.png"
                  className="md:w-auto w-6 md:h-auto"
                  alt=""
                  height={30}
                  width={30}
                />
                <p className="flex w-full h-full gap-2 items-center text-xl md:text-3xl font-semibold">
                  AlterEgo
                </p>
              </div>
              <Image
                id="vanish-element-icon"
                src={`${isBarHovered ? "/orange.png" : "/orange.png"}`}
                className="h-auto w-0 vanish-element"
                alt="text"
                width={35}
                height={35}
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-7">
          <ul className="flex items-center space-x-3 md:space-x-7">
            {isMobile ? (
              isMobileMenuOpen ? (
                <MdClose
                  onClick={toggleMobileMenu}
                  className={`${
                    isBarHovered ? "text-secondaryColor" : "text-black"
                  } text-2xl`}
                />
              ) : (
                <MdMenu
                  onClick={toggleMobileMenu}
                  className={`${
                    isBarHovered ? "text-secondaryColor" : "text-textClr"
                  } text-2xl`}
                />
              )
            ) : (
              <>
                {navItems.map((item, index) => {
                  const isActive = activePath === item.link;
                  return (
                    <li
                      key={index}
                      className={classNames(
                        "relative navitems group ",
                        { "hover:text-secondaryColor ": item.name === "About" },
                        { "text-secondaryColor font-bold": isActive }
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
                        <MdKeyboardArrowDown className="ms-1 inline-block" />
                      )}
                      <span className="block"></span>
                    </li>
                  );
                })}

                <button
                  onClick={() => signUpHandler("https://app.2ai.cx/")}
                  className="bg-secondaryColor text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:border-1 hover:border-primaryColor hover:text-primaryColor"
                >
                  Sign up
                </button>
              </>
            )}
          </ul>
        </div>
      </div>

      {isMobile && isMobileMenuOpen && (
        <div className="bg-cardClr px-4 pt-4 overflow-y-auto">
          <ul>
            {navItems.map((item, index) => {
              const isActive = activePath === item.link;
              return (
                <li
                  key={index}
                  className={classNames("py-2 relative", {
                    "border-b-2 border-theme": activeSubMenu === item.name,
                    "text-textClr font-bold": isActive,
                  })}
                >
                  <div className="flex items-center justify-between w-full">
                    <Link href={item.link}>
                      <span className="flex-grow text-left" onClick={toggleMobileMenu}>
                        {item.name}
                      </span>
                    </Link>
                    {item.name === "About" && (
                      <MdKeyboardArrowDown
                        onClick={() => {
                          toggleDropdown();
                          toggleSubMenu(item.name);
                        }}
                        className={` text-xl transition-transform ${
                          activeSubMenu === item.name ? "transform rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                  {isDDOpen && activeSubMenu === item.name && (
                    <div
                      onMouseEnter={() => setIsDropdownHovered(true)}
                      onMouseLeave={() => setIsDropdownHovered(false)}
                      className={`nav-drop text-sm z-[50] w-full bg-cardClr overflow-y-auto transition-all duration-700 ease-in-out`}
                    >
                      <div className="text-textClr px-4 md:px-10 lg:px-40">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                          {navContentHeaders.map((header, headerIndex) => (
                            <div key={headerIndex} className="">
                              <button className="text-[#ef6351] text-medium mb-6 mt-4 px-2">
                                {header}
                              </button>

                              {header === "AlterEgo" && (
                                <ul className="space-y-2">
                                  {alterEgoItems.map((alterEgoItem, listIndex) => (
                                    <li
                                      className="py-1 hover:bg-textClr hover:text-backgroundClr px-2 rounded-lg cursor-pointer"
                                      key={listIndex}
                                    >
                                      <Link href={alterEgoItem.link}>
                                        {alterEgoItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {header === "Company" && (
                                <ul className="space-y-4">
                                  {companyItems.map((companyItem, listIndex) => (
                                    <li
                                      className="py-1 hover:bg-textClr hover:text-backgroundClr px-2 rounded-lg cursor-pointer"
                                      key={listIndex}
                                    >
                                      <Link href={companyItem.link}>
                                        {companyItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
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
      <div
        onMouseEnter={() => setIsDropdownHovered(true)}
        onMouseLeave={() => setIsDropdownHovered(false)}
        className={`nav-drop scrollbar-hide absolute text-sm z-[50] w-full bg-white h-[100svh] overflow-y-auto overflow-hidden transition-all duration-700 ease-in-out ${
          isHovered && !isMobile ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <div className="text-textClr px-4 md:px-10 lg:px-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {navContentHeaders.map((header, headerIndex) => (
              <div key={headerIndex} className="">
                <button className="text-[#ef6351] text-medium mb-6 mt-4 px-2">
                  {header}
                </button>

                {header === "AlterEgo" && (
                  <ul className="space-y-2">
                    {alterEgoItems.map((alterEgoItem, listIndex) => (
                      <li
                        className="py-1 hover:bg-[#F8F3EE] text-primaryColor hover:text-secondaryColor hover:font-bold px-2 rounded-lg cursor-pointer"
                        key={listIndex}
                      >
                        <Link href={alterEgoItem.link}>
                          {alterEgoItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {header === "Company" && (
                  <ul className="space-y-4">
                    {companyItems.map((companyItem, listIndex) => (
                      <li
                        className="py-1 hover:bg-[#F8F3EE] text-primaryColor hover:text-secondaryColor active:text-secondaryColor hover:font-bold px-2 rounded-lg cursor-pointer"
                        key={listIndex}
                      >
                        <Link href={companyItem.link}>
                          {companyItem.name}
                          
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
