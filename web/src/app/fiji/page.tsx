import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy Fiji | omnichannel",
  description:
    "Customer experience and service operations consultancy in Fiji. Agentic AI with human control for RBF-regulated banking, insurance, and utilities.",
  alternates: {
    canonical: "https://omnichannel.cx/fiji",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy Fiji | omnichannel",
    description:
      "Customer experience and service operations consultancy in Fiji. Agentic AI with human control for RBF-regulated organisations.",
    url: "https://omnichannel.cx/fiji",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy Fiji | omnichannel",
    description:
      "Customer experience and service operations consultancy in Fiji. Agentic AI with human control for RBF-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  slug: "fiji",
  region: "Fiji",
  headline: "Transform CX and service operations in Fiji.",
  subhead: "Independent consultancy for RBF-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping Fijian organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, and utilities across Suva, Nadi, and beyond.",
  regulators: ["RBF", "FCCC", "FRCA"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Digital transformation pressure, financial inclusion goals, and RBF expectations for responsible innovation.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for RBF regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Low penetration, claims processing speed, and RBF regulatory oversight.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates.",
    },
    {
      name: "Telecoms",
      pain: "Island geography challenges, service quality, and regulatory expectations.",
      useCase: "CX strategy and platform advisory to improve service delivery across islands.",
    },
    {
      name: "Utilities",
      pain: "Climate resilience, outage response, and infrastructure investment.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "Fiji's National Development Plan and RBF's focus on financial inclusion both create opportunities for AI-powered service delivery. Human-in-control operating models ensure these innovations remain safe, accountable, and trusted by customers.",
  geoContext:
    "Fijian regulated sectors where customer experience and operational safety matter most.",
};

export default function FijiPage() {
  return <GeoPage data={DATA} />;
}
