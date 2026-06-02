"use client";
import React, { useEffect, useRef, useState, RefObject } from "react";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";
import HeroSection from "@/components/landing-sections/hero";
import ImageSection from "@/components/landing-sections/image-section";
import TestimonialSection from "@/components/landing-sections/testimonial-section";
import FeaturesSection from "@/components/landing-sections/alteregos";
import ViewPricing from "@/components/landing-sections/viewPricing";
import Footer from "@/components/landing-sections/footer";

export default function LandingPage() {
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
    <article
      ref={scrollWrapperRef}
      className="bg-ocx-bg scroll-wrapper"
    >
      <PrimaryNavbar />
      <SecondaryNavbar isSticky={isSticky} />
      <HeroSection />
      <ImageSection />
      <TestimonialSection />
      <FeaturesSection />
      <section className="scroll-section">
        <ViewPricing />
        <Footer />
      </section>
    </article>
  );
}
