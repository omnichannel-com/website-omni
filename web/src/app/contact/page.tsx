"use client";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";

import Footer from "@/components/landing-sections/footer";
import { useEffect, useRef, useState, RefObject } from "react";
import ContactHero from "@/components/contact-sections/contact-hero";

export default function ContactPage() {
  const scrollWrapperRef: RefObject<HTMLDivElement> = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    
    const handleScroll = () => {
      if (scrollWrapper) {
        const offset = scrollWrapper.scrollTop;
        setIsSticky(offset > 0);
      }
    };

    if (scrollWrapper) {
      scrollWrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollWrapper) {
        scrollWrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <article ref={scrollWrapperRef} className="bg-ocx-bg scroll-wrapper">
      <PrimaryNavbar />
        <SecondaryNavbar isSticky={isSticky} />
          <ContactHero/>      
        <Footer />
    </article>
  );
}
