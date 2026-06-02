"use client";
import { useState } from "react";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import Hero from "@/components/pricing-sections/hero-section";
import PricePlans from "@/components/pricing-sections/price-plans";
import Faqs from "@/components/pricing-sections/faqs";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <StickyScrollLayout>
      <Hero activePlan={activePlan} setActivePlan={setActivePlan} />
      <PricePlans activePlan={activePlan} />
      <Faqs />
    </StickyScrollLayout>
  );
}
