"use client";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";
import Footer from "@/components/landing-sections/footer";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";

export default function AboutPage() {
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
      <SecondaryNavbar setISticky={isSticky} />
      <section className="container mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-ocx-dark-blue text-center mb-8">
          About omnichannel CX
        </h1>
        <p className="text-lg text-ocx-fg-muted text-center max-w-2xl mx-auto">
          We build customer experience platforms that help teams respond faster and care deeply.
        </p>
      </section>
      <Footer />
    </article>
  );
}
