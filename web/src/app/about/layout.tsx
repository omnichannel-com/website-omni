"use client"
import Footer from "@/components/landing-sections/footer";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";
import { RefObject, useEffect, useRef, useState } from "react";

export default function AboutLayout({

    
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const scrollWrapperRef: RefObject<HTMLDivElement> = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      // mixpanel.track("Blog Page Loaded");
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
        <article className="bg-ocx-bg scroll-wrapper">
      <PrimaryNavbar />
      <SecondaryNavbar isSticky={isSticky} />

      {children}
      
        <Footer />

    </article>

      );
    }