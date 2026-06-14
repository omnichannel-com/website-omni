import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy New Zealand | omnichannel",
  description:
    "Customer experience and service operations consultancy in New Zealand. Agentic AI with human control for RBNZ and FMA-regulated banking, insurance, and utilities.",
  alternates: {
    canonical: "https://omnichannel.cx/new-zealand",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy New Zealand | omnichannel",
    description:
      "Customer experience and service operations consultancy in New Zealand. Agentic AI with human control for RBNZ and FMA-regulated organisations.",
    url: "https://omnichannel.cx/new-zealand",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy New Zealand | omnichannel",
    description:
      "Customer experience and service operations consultancy in New Zealand. Agentic AI with human control for RBNZ and FMA-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  region: "New Zealand",
  headline: "Transform CX and service operations in New Zealand.",
  subhead: "Independent consultancy for RBNZ and FMA-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping New Zealand organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, and utilities across Auckland, Wellington, and Christchurch.",
  regulators: ["RBNZ", "FMA", "Commerce Commission", "Privacy Commissioner"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Conduct and culture expectations, open banking transition, and customer vulnerability under RBNZ and FMA oversight.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for RBNZ and FMA regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Claims speed, regulatory reporting, and conduct expectations under FMA and RBNZ.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates and full audit trails.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex billing disputes, and Commerce Commission expectations.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics.",
    },
    {
      name: "Utilities",
      pain: "Regulatory price caps, outage response, and vulnerable-customer obligations.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "New Zealand's regulators are moving decisively on AI governance. The FMA's conduct expectations and RBNZ's focus on operational resilience both require demonstrable human control of consequential decisions. Build it now, not later.",
  geoContext:
    "New Zealand regulated sectors where customer experience and operational safety matter most.",
};

export default function NewZealandPage() {
  return <GeoPage data={DATA} />;
}
