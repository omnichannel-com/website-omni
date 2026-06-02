"use client";

import PrimaryNavbar from "@/components/navbars/primary-navbar";
import SecondaryNavbar from "@/components/navbars/secondary-navbar";
import Footer from "@/components/landing-sections/footer";
import { useStickyScroll } from "@/hooks/useStickyScroll";
import { ReactNode } from "react";

interface StickyScrollLayoutProps {
  children: ReactNode;
}

export default function StickyScrollLayout({ children }: StickyScrollLayoutProps) {
  const { scrollWrapperRef, isSticky } = useStickyScroll();

  return (
    <article ref={scrollWrapperRef} className="bg-ocx-bg scroll-wrapper">
      <PrimaryNavbar />
      <SecondaryNavbar isSticky={isSticky} />
      {children}
      <Footer />
    </article>
  );
}
