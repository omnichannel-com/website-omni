import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy Indonesia | omnichannel",
  description:
    "Customer experience and service operations consultancy in Indonesia. Agentic AI with human control for OJK and BI-regulated banking, insurance, and telecoms.",
  alternates: {
    canonical: "https://omnichannel.cx/indonesia",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy Indonesia | omnichannel",
    description:
      "Customer experience and service operations consultancy in Indonesia. Agentic AI with human control for OJK and BI-regulated organisations.",
    url: "https://omnichannel.cx/indonesia",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy Indonesia | omnichannel",
    description:
      "Customer experience and service operations consultancy in Indonesia. Agentic AI with human control for OJK and BI-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  slug: "indonesia",
  region: "Indonesia",
  headline: "Transform CX and service operations in Indonesia.",
  subhead: "Independent consultancy for OJK and BI-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping Indonesian organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, and telecoms across Jakarta, Surabaya, and beyond.",
  regulators: ["OJK", "BI", "BAPPEBTI", "KOMINFO"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Rapid digitalisation, unbanked population outreach, and OJK expectations for responsible AI.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for OJK and BI regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Low penetration, claims processing speed, and OJK regulatory reporting.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex prepaid billing, and KOMINFO expectations for service quality.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics.",
    },
    {
      name: "Utilities",
      pain: "Infrastructure gaps, outage response, and growing urban demand.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "Indonesia's AI Roadmap 2045 and OJK's digital innovation framework both call for trustworthy AI in financial services. Organisations that build human-in-control operating models now will be ready for the next wave of regulation.",
  geoContext:
    "Indonesian regulated sectors where customer experience and operational safety matter most.",
};

export default function IndonesiaPage() {
  return <GeoPage data={DATA} />;
}
