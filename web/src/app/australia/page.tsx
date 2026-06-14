import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy Australia | omnichannel",
  description:
    "Customer experience and service operations consultancy in Australia. Agentic AI with human control for APRA and ASIC-regulated banking, insurance, telecoms, and utilities.",
  alternates: {
    canonical: "https://omnichannel.cx/australia",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy Australia | omnichannel",
    description:
      "Customer experience and service operations consultancy in Australia. Agentic AI with human control for APRA and ASIC-regulated organisations.",
    url: "https://omnichannel.cx/australia",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy Australia | omnichannel",
    description:
      "Customer experience and service operations consultancy in Australia. Agentic AI with human control for APRA and ASIC-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  region: "Australia",
  headline: "Transform CX and service operations in Australia.",
  subhead: "Independent consultancy for APRA and ASIC-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping Australian organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, telecoms, and utilities across Sydney, Melbourne, Brisbane, and beyond.",
  regulators: ["APRA", "ASIC", "ACMA", "AER", "OAIC", "AUSTRAC"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Consumer Duty, vulnerable-customer obligations, BEAR, and legacy platform debt.",
      useCase: "Maturity Review of CX and compliance processes; AI readiness assessment for APRA CPS 230 and ASIC regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Claims handling speed, regulatory reporting, and fraud detection under APRA and ASIC oversight.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates and full audit trails.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex billing disputes, and omnichannel service gaps under ACMA and TIO expectations.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics for ACMA compliance.",
    },
    {
      name: "Utilities",
      pain: "Regulatory price caps, outage response, and vulnerable-customer registers under AER and EWOV.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight and attribution.",
    },
  ],
  whyNow:
    "Australian regulators are tightening expectations for AI governance. APRA's CPS 230 and ASIC's guidance on digital engagement both demand human oversight of consequential decisions. Organisations that build human-in-control operating models now will meet these expectations before they become mandatory.",
  geoContext:
    "Australian regulated sectors where customer experience and operational safety matter most.",
};

export default function AustraliaPage() {
  return <GeoPage data={DATA} />;
}
