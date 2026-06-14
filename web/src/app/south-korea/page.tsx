import type { Metadata } from "next";
import GeoPage from "@/components/geo/geo-page";

export const metadata: Metadata = {
  title: "CX & Service Operations Consultancy South Korea | omnichannel",
  description:
    "Customer experience and service operations consultancy in South Korea. Agentic AI with human control for FSC and FSS-regulated banking, insurance, and telecoms.",
  alternates: {
    canonical: "https://omnichannel.cx/south-korea",
  },
  openGraph: {
    title: "CX & Service Operations Consultancy South Korea | omnichannel",
    description:
      "Customer experience and service operations consultancy in South Korea. Agentic AI with human control for FSC and FSS-regulated organisations.",
    url: "https://omnichannel.cx/south-korea",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX & Service Operations Consultancy South Korea | omnichannel",
    description:
      "Customer experience and service operations consultancy in South Korea. Agentic AI with human control for FSC and FSS-regulated organisations.",
    images: ["/assets/logo-full-color.png"],
  },
};

const DATA = {
  slug: "south-korea",
  region: "South Korea",
  headline: "Transform CX and service operations in South Korea.",
  subhead: "Independent consultancy for FSC and FSS-regulated organisations adopting agentic AI safely.",
  lede: "omnichannel is a customer experience and service operations consultancy helping South Korean organisations transform CX, adopt agentic AI safely, and keep humans in control. We serve banking, insurance, and telecoms across Seoul, Busan, and beyond.",
  regulators: ["FSC", "FSS", "KCC", "FTC", "PIPC"],
  industries: [
    {
      name: "Banking & finance",
      pain: "MyData transition, digital banking competition, and FSC expectations for AI governance.",
      useCase: "Maturity Review of CX and compliance; AI readiness assessment for FSC and FSS regimes with human-in-control gates.",
    },
    {
      name: "Insurance",
      pain: "Claims speed, regulatory reporting, and fraud detection under FSC and FSS oversight.",
      useCase: "Contact centre advisory and AI-assisted claims triage with human-in-control decision gates and full audit trails.",
    },
    {
      name: "Telecoms",
      pain: "High churn, complex billing disputes, and KCC expectations for service quality.",
      useCase: "CX strategy and platform advisory to unify service channels; operational performance diagnostics.",
    },
    {
      name: "Utilities",
      pain: "Price regulation, outage response, and energy transition demands.",
      useCase: "Service operations redesign and AI-assisted outage communication with full human oversight.",
    },
  ],
  whyNow:
    "South Korea's Digital New Deal and AI Strategy 2024 both emphasise trustworthy AI. The FSC has published guidance on AI use in financial services requiring human oversight. Build human-in-control operating models now to stay ahead.",
  geoContext:
    "South Korean regulated sectors where customer experience and operational safety matter most.",
};

export default function SouthKoreaPage() {
  return <GeoPage data={DATA} />;
}
