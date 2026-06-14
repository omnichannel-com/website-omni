"use client";

import Link from 'next/link';
import React from 'react';
import { usePosthogConsent } from "@/hooks/use-posthog";

const planButtonClass =
  "inline-flex items-center justify-center px-6 py-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm rounded-ocx-md mt-6 shadow-ocx-sm hover:bg-[var(--btn-primary-bg-hover)] hover:shadow-ocx-md hover:-translate-y-px active:translate-y-0 transition-all duration-ocx-base";

interface PricePlansProps {
  activePlan: string;
}

function PricePlans({ activePlan }: PricePlansProps) {
  const { capture } = usePosthogConsent();
  const monthlyPrices = {
    starter: 'Free',
    professional: '$45',
    premium: '$60',
    suffix: '/ Per Month',
  };

  const yearlyPrices = {
    starter: 'Free',
    professional: '$30',
    premium: '$45',
    suffix: '/ Per Month (billed annually)',
  };

  const prices = activePlan === 'monthly' ? monthlyPrices : yearlyPrices;

  return (
    <section className="relative bg-transparent pb-10 md:pb-20 landscape:pt-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-between relative z-10">

        <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border w-full md:w-1/3 px-8 py-4 border-ocx-border rounded-ocx-lg flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-ocx-fg text-lg">Starter Plan</h3>
            <h1 className="text-4xl font-bold text-ocx-fg-primary">{prices.starter}</h1>
            <p className="text-ocx-fg">Perfect for getting started and trying out the omnichannel CX platform to access the best AI functionalities.</p>
            <div>
              <Link
                href="/contact"
                onClick={() => capture({ event: "cta_click", properties: { cta_label: `pricing_plan_starter_${activePlan}`, page: "/pricing" } })}
                className={planButtonClass}
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="border-ocx-border border-b-2"></div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-ocx-fg">
              <li>Access to basic AI bot functionalities</li>
              <li>Limited to 1 active profile</li>
              <li>Up to 100 monthly AI-driven tasks</li>
              <li>Standard response time for queries</li>
              <li>Community forum support</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-t from-ocx-bg-subtle to-ocx-bg-subtle backdrop-blur-md shadow-ocx-sm border w-full md:w-1/3 sm:w-full px-8 py-4 border-ocx-border rounded-ocx-lg flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-ocx-fg text-lg">Professional Plan</h3>
            <h1 className="text-4xl font-bold text-ocx-fg-primary">{prices.professional} <span className="text-ocx-fg text-base font-medium">{prices.suffix}</span></h1>
            <p className="text-ocx-fg">Elevate your business with full access, priority support, and seamless integration.</p>
            <div>
              <Link
                href="/contact"
                onClick={() => capture({ event: "cta_click", properties: { cta_label: `pricing_plan_professional_${activePlan}`, page: "/pricing" } })}
                className={planButtonClass}
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="border-ocx-border border-b-2"></div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-ocx-fg">
              <li>Supports up to 10 active profiles</li>
              <li>Up to 1,000 monthly AI-driven tasks</li>
              <li>Access to all professional AI bot types</li>
              <li>Priority email and chat support</li>
              <li>Includes integration with standard business tools</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border w-full md:w-1/3 px-8 py-4 border-ocx-border rounded-ocx-lg flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-ocx-fg text-lg">Premium Plan</h3>
            <h1 className="text-4xl font-bold text-ocx-fg-primary">{prices.premium} <span className="text-ocx-fg text-base font-medium">{prices.suffix}</span></h1>
            <p className="text-ocx-fg">Maximize your potential with unlimited profiles, advanced customization, and analytics.</p>
            <div>
              <Link
                href="/contact"
                onClick={() => capture({ event: "cta_click", properties: { cta_label: `pricing_plan_premium_${activePlan}`, page: "/pricing" } })}
                className={planButtonClass}
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="border-ocx-border border-b-2"></div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-ocx-fg">
              <li>Unlimited active profiles</li>
              <li>Up to 5,000 monthly AI-driven tasks</li>
              <li>Access to all professional AI bot types</li>
              <li>Advanced customization options</li>
              <li>Dedicated account manager</li>
              <li>24/7 priority support</li>
              <li>Comprehensive analytics and insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricePlans;
