"use client";
import Hero from "@/components/pricing-sections/hero-section";
import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import PricePlans from "@/components/pricing-sections/price-plans";
import Faqs from "@/components/pricing-sections/faqs";
import Footer from "@/components/landing-sections/footer";

export default function Pricing() {
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

  const [activePlan, setActivePlan] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <article ref={scrollWrapperRef} className="bg-backgroundClr scroll-wrapper">
      <PrimaryNavbar />
      <SecondaryNavbar setISticky={isSticky}/>
      <Hero activePlan={activePlan} setActivePlan={setActivePlan}/>
      <PricePlans activePlan={activePlan}/>
      <Faqs />
      <Footer />
    </article>
  );
}
