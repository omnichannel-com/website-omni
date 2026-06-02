"use client";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";

import Footer from "@/components/landing-sections/footer";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import BlogHero from "@/components/blog-sections/blog-hero";
import BlogCards from "@/components/blog-sections/Blog-cards";
import BlogComingSoon from "@/components/blog-sections/blog-commingsoon";

export default function BlogsPage() {
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
    <article ref={scrollWrapperRef} className="bg-backgroundClr scroll-wrapper">
      <PrimaryNavbar />
      <SecondaryNavbar setISticky={isSticky} />
      <BlogHero />
      <BlogCards/>      
        <Footer />

    </article>
  );
}
