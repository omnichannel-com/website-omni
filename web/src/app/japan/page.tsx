import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy Japan | omnichannel",
  description:
    "Customer experience and service operations consultancy in Japan. Agentic AI with human control for FSA-regulated banking, insurance, and utilities.",
  alternates: {
    canonical: "https://omnichannel.cx/japan",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy Japan | omnichannel",
    description:
      "Customer experience and service operations consultancy in Japan. Agentic AI with human control for FSA-regulated organisations.",
    url: "https://omnichannel.cx/japan",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy Japan | omnichannel",
    description:
      "Customer experience and service operations consultancy in Japan. Agentic AI with human control for FSA-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  region: "Japan",
  headline: "Transform CX and service operations in Japan.",
  subhead: "Independent consultancy for FSA-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping Japanese organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, and utilities across Tokyo, Osaka, and beyond.",
  regulators: ["FSA", "PSEMA", "MIC", "JFSA"],
  industries: [
    {
      name: "Banking & finance",
      pain: "Digital transformation pressure, shrinking branch networks, and FSA expectations for AI governance.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for FSA regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Claims speed, regulatory reporting, and fraud detection under FSA and JFSA oversight.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates and full audit trails.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex billing disputes, and MIC expectations for service quality.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics.",
    },
    {
      name: "Utilities",
      pain: "Price regulation, outage response, and energy transition demands.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "Japan's FSA has issued clear guidance on AI governance in financial services. The government's AI Strategy 2024 calls for human-centric AI. Organisations that operationalise human-in-control now will meet these expectations ahead of the curve.",
  geoContext:
    "Japanese regulated sectors where customer experience and operational safety matter most.",
};

export default function JapanPage() {
  return <GeoPage data={DATA} />;
}
