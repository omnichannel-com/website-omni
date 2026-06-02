"use client";
import React, { useEffect, useRef, useState } from "react";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";
import HeroSection from "@/components/landing-sections/hero";
import ImageSection from "@/components/landing-sections/image-section";
import TestimonialSection from "@/components/landing-sections/testimonial-section";
import AlterEgoSection from "@/components/landing-sections/alteregos";
import ViewPricing from "@/components/landing-sections/viewPricing";
import Footer from "@/components/landing-sections/footer";
import { RefObject } from "react";
import Testimonials from "@/components/landing-sections/testimonials";

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
      className="bg-backgroundClr scroll-wrapper"
    >
      <PrimaryNavbar />
      <SecondaryNavbar setISticky={isSticky} />
      <HeroSection />
      <ImageSection />
      <TestimonialSection />
      <AlterEgoSection />
      <section className="md:h-md:scroll-section">
        <ViewPricing />
        <Footer />
      </section>
    </article>
  );
}
