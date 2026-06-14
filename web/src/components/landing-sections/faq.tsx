import FaqAccordion from "@/components/ui/faq-accordion";

const FAQS = [
  {
    question: "What is a Maturity Review?",
    answer:
      "A structured diagnostic of your current customer experience, service operations, and AI readiness. It produces a scored maturity band and a prioritised action plan.",
  },
  {
    question: "Do you advise or deliver?",
    answer:
      "Both. We diagnose and design, then stay hands-on through implementation, training, and handover. You choose the scope.",
  },
  {
    question: "Which platforms do you advise on?",
    answer:
      "We are platform-independent. We have deep experience with major contact centre and CX platforms, and we advise based on your needs, not vendor commissions.",
  },
  {
    question: "What is human-in-control AI?",
    answer:
      "Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights - the authority to approve, redirect, or stop any agent action at any time.",
  },
  {
    question: "How do you keep AI safe?",
    answer:
      "Every AI design includes authority, visibility, and revocability. We document decision rights, build audit trails, and ensure your team can intervene at any point. We design for SOC controls and Privacy Principles.",
  },
  {
    question: "How do engagements start and how are they priced?",
    answer:
      "Most start with a Maturity Review or a focused diagnostic. We then propose a fixed-price or time-boxed engagement. No open-ended retainers.",
  },
];

export default function FaqSection() {
  return <FaqAccordion faqs={FAQS} />;
}
