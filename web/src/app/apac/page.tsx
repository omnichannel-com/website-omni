import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy APAC | omnichannel",
  description:
    "Customer experience and service operations consultancy across APAC. Agentic AI with human control for banking, insurance, telecoms, and utilities in Australia, New Zealand, Japan, South Korea, Indonesia, Philippines, and Fiji.",
  alternates: {
    canonical: "https://omnichannel.cx/apac",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy APAC | omnichannel",
    description:
      "Customer experience and service operations consultancy across APAC. Agentic AI with human control for banking, insurance, telecoms, and utilities.",
    url: "https://omnichannel.cx/apac",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy APAC | omnichannel",
    description:
      "Customer experience and service operations consultancy across APAC. Agentic AI with human control for banking, insurance, telecoms, and utilities.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  slug: "apac",
  region: "Asia-Pacific",
  headline: "Transform CX and service operations across APAC.",
  subhead: "From Australia to Japan, New Zealand to Indonesia — we help regulated organisations adopt agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy serving the Asia-Pacific region. We help organisations adopt agentic AI with human control, transform CX, and reduce cost to serve — across every regulatory regime in APAC.",
  regulators: ["APRA", "ASIC", "RBNZ", "FMA", "FSA Japan", "FSC Korea", "OJK", "BSP", "RBF"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Consumer Duty, vulnerable-customer obligations, and legacy platform debt across multiple jurisdictions.",
      useCase: "Maturity Review of CX and compliance; AI readiness for APRA, RBNZ, and FSA regimes with human-in-control decision gates.",
    },
    {
      name: "Insurance",
      pain: "Claims speed, regulatory reporting, and fraud detection vary widely by market.",
      useCase: "Contact centre advisory and AI-assisted claims triage tailored to local regulator requirements.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex billing, and omnichannel gaps in diverse markets.",
      useCase: "CX strategy and platform advisory to unify channels; operational diagnostics for ACMA, DICT, and KCC.",
    },
    {
      name: "Utilities",
      pain: "Price caps, outage response, and vulnerable-customer registers.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "APAC is moving fast on AI adoption — but every regulator has different expectations. Organisations that build human-in-control operating models now will lead their markets. Those that wait will face retrofit costs and compliance gaps.",
  geoContext:
    "Regulated sectors across APAC where customer experience and operational safety matter most.",
};

export default function ApacPage() {
  return <GeoPage data={DATA} />;
}
