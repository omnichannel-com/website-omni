import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy Asia | omnichannel",
  description:
    "Customer experience and service operations consultancy across Asia. Agentic AI with human control for banking, insurance, telecoms, and utilities from Japan to Indonesia.",
  alternates: {
    canonical: "https://omnichannel.cx/asia",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy Asia | omnichannel",
    description:
      "Customer experience and service operations consultancy across Asia. Agentic AI with human control for banking, insurance, telecoms, and utilities.",
    url: "https://omnichannel.cx/asia",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy Asia | omnichannel",
    description:
      "Customer experience and service operations consultancy across Asia. Agentic AI with human control for banking, insurance, telecoms, and utilities.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  region: "Asia",
  headline: "Transform CX and service operations across Asia.",
  subhead: "Independent consultancy for regulated organisations adopting agentic AI safely from East Asia to Southeast Asia.",
  lede: "omnichannel is a customer experience and service operations consultancy helping Asian organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, telecoms, and utilities across Japan, South Korea, Indonesia, the Philippines, and beyond.",
  regulators: ["FSA Japan", "FSC Korea", "OJK", "BSP", "SEC", "DICT", "KCC"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Rapid digitalisation, open banking transitions, and varying AI governance expectations across Asian regulators.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for FSA, FSC, OJK, and BSP regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Claims speed, regulatory reporting, and fraud detection under diverse Asian regulatory frameworks.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates and local audit requirements.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex billing disputes, and omnichannel gaps in fast-growing Asian markets.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics.",
    },
    {
      name: "Utilities",
      pain: "Price regulation, outage response, and growing demand for clean energy transition.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "Asia is the fastest-growing region for AI adoption in financial services. Regulators in Japan, South Korea, and the Philippines have all issued AI governance guidance. Organisations that build human-in-control operating models now will capture market share while meeting emerging compliance expectations.",
  geoContext:
    "Asian regulated sectors where customer experience and operational safety matter most.",
};

export default function AsiaPage() {
  return <GeoPage data={DATA} />;
}
