import type { Metadata } from "next";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import HeroSection from "@/components/landing-sections/hero";
import ChallengeSection from "@/components/landing-sections/challenge";
import ServicesSection from "@/components/landing-sections/services";
import HowToStartSection from "@/components/landing-sections/how-to-start";
import QuizContainer from "@/components/quiz/quiz-container";
import ApproachSection from "@/components/landing-sections/approach";
import IndustryCardsSection from "@/components/landing-sections/industry-cards";
import WhyHicSection from "@/components/landing-sections/why-hic";
import FaqSection from "@/components/landing-sections/faq";
import CtaSection from "@/components/landing-sections/cta-section";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy | Agentic AI with Human Control | omnichannel",
  description:
    "Customer experience and service operations consultancy. We help organisations adopt agentic AI safely, transform CX, and keep humans in control — across APAC, Australia, New Zealand, and Asia.",
  alternates: {
    canonical: "https://omnichannel.cx/",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy | Agentic AI with Human Control | omnichannel",
    description:
      "Customer experience and service operations consultancy. We help organisations adopt agentic AI safely, transform CX, and keep humans in control — across APAC, Australia, New Zealand, and Asia.",
    url: "https://omnichannel.cx/",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy | Agentic AI with Human Control | omnichannel",
    description:
      "Customer experience and service operations consultancy. We help organisations adopt agentic AI safely, transform CX, and keep humans in control — across APAC, Australia, New Zealand, and Asia.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function Home() {
  return (
    <StickyScrollLayout>
      <HeroSection />
      <ChallengeSection />
      <ServicesSection />
      <HowToStartSection />
      <QuizContainer />
      <ApproachSection />
      <IndustryCardsSection />
      <WhyHicSection />
      <FaqSection />
      <CtaSection />
    </StickyScrollLayout>
  );
}
