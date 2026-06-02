import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import HeroSection from "@/components/landing-sections/hero";
import ImageSection from "@/components/landing-sections/image-section";
import TestimonialSection from "@/components/landing-sections/testimonial-section";
import FeaturesSection from "@/components/landing-sections/alteregos";
import ViewPricing from "@/components/landing-sections/viewPricing";

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
