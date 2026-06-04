import type { Metadata } from "next";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import HeroSection from "@/components/landing-sections/hero";
import ImageSection from "@/components/landing-sections/image-section";
import TestimonialSection from "@/components/landing-sections/testimonial-section";
import FeaturesSection from "@/components/landing-sections/alteregos";
import ViewPricing from "@/components/landing-sections/viewPricing";

export const metadata: Metadata = {
  title: "Customer Experience Platform",
  description:
    "Email, chat, voice, and social in one inbox. A customer experience platform built for teams who respond fast and care deeply.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <StickyScrollLayout>
      <HeroSection />
      <ImageSection />
      <TestimonialSection />
      <FeaturesSection />
      <section className="scroll-section">
        <ViewPricing />
      </section>
    </StickyScrollLayout>
  );
}
