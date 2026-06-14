import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy Philippines | omnichannel",
  description:
    "Customer experience and service operations consultancy in the Philippines. Agentic AI with human control for BSP and SEC-regulated banking, insurance, and BPO.",
  alternates: {
    canonical: "https://omnichannel.cx/philippines",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy Philippines | omnichannel",
    description:
      "Customer experience and service operations consultancy in the Philippines. Agentic AI with human control for BSP and SEC-regulated organisations.",
    url: "https://omnichannel.cx/philippines",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy Philippines | omnichannel",
    description:
      "Customer experience and service operations consultancy in the Philippines. Agentic AI with human control for BSP and SEC-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  slug: "philippines",
  region: "the Philippines",
  headline: "Transform CX and service operations in the Philippines.",
  subhead: "Independent consultancy for BSP and SEC-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping Philippine organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, telecoms, and BPO across Manila, Cebu, and beyond.",
  regulators: ["BSP", "SEC", "DICT", "NTC", "IC"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Digital banking competition, financial inclusion goals, and BSP expectations for AI governance.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for BSP and SEC regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Low penetration, claims processing speed, and IC regulatory reporting.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates.",
    },
    {
      name: "Telecoms & BPO",
      pain: "High agent attrition, complex billing, and NTC expectations for service quality.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics for BPO operations.",
    },
    {
      name: "Utilities",
      pain: "Infrastructure resilience, outage response, and growing urban demand.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "The Philippines is a global BPO hub and a fast-growing digital economy. BSP Circular 1149 on digital banks and DICT's National AI Strategy both call for human oversight of AI in financial services. Build human-in-control operating models now to lead the market.",
  geoContext:
    "Philippine regulated sectors where customer experience and operational safety matter most.",
};

export default function PhilippinesPage() {
  return <GeoPage data={DATA} />;
}
