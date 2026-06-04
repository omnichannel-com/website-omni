import type { Metadata } from "next";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import ContactHero from "@/components/contact-sections/contact-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with omnichannel CX. Request a demo or start a conversation with our team.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <StickyScrollLayout>
      <ContactHero />
    </StickyScrollLayout>
  );
}
