import Image from 'next/image';
import React from 'react';

interface PricePlansProps {
  activePlan: string;
}

function PricePlans({ activePlan }: PricePlansProps) {
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
    <section className="relative scroll-section-1 bg-transparent pb-10 md:pb-20  landscape:pt-20">
      <div className="absolute bottom-0 z-0 w-full">
        <Image
          src="/waves.png"
          fill
          alt="background-waves"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-between relative z-10">

        <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-lg border w-full md:w-1/3 sm:w-full px-8 py-4 border-ocx-border rounded-xl flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-ocx-fg text-lg">Starter Plan</h3>
            <h1 className="text-4xl font-bold text-ocx-mauve">{prices.starter}</h1>
            <p className="text-ocx-fg">Perfect for getting started and trying out the omnichannel CX platform to access best Ai functionalities.</p>
            <div>
              <button className="price-button px-4 py-2 bg-ocx-mauve rounded-full mt-6 outline outline-0 text-white hover:bg-white hover:outline-2 hover:outline-ocx-dark-blue hover:text-ocx-dark-blue" >Get Started</button>
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

        <div className="bg-gradient-to-t from-ocx-bg-subtle to-ocx-bg-subtle backdrop-blur-md shadow-lg border w-full md:w-1/3 sm:w-full px-8 py-4 border-ocx-border rounded-xl flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-ocx-fg text-lg">Professional Plan</h3>
            <h1 className="text-4xl font-bold text-ocx-fg">{prices.professional} <span className="text-base font-medium ">{prices.suffix}</span></h1>
            <p className="text-ocx-fg">Elevate your business with full access, priority support, & seamless integration.</p>
            <div>
              <button className="price-button px-4 py-2 bg-ocx-mauve rounded-full mt-6 outline outline-0 text-white hover:bg-white hover:outline-2 hover:outline-ocx-dark-blue hover:text-ocx-dark-blue" >Get Started</button>
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

        <div className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-lg border w-full md:w-1/3 sm:w-full px-8 py-4 border-ocx-border rounded-xl flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-ocx-fg text-lg">Premium Plan</h3>
            <h1 className="text-4xl font-bold text-ocx-mauve">{prices.premium} <span className="text-ocx-fg text-base font-medium ">{prices.suffix}</span></h1>
            <p className="text-ocx-fg">Maximize your potential with unlimited profiles, advanced customization, & analytics.</p>
            <div>
              <button className="price-button px-4 py-2 bg-ocx-mauve rounded-full mt-6 outline outline-0 text-white hover:bg-white hover:outline-2 hover:outline-ocx-dark-blue hover:text-ocx-dark-blue" >Get Started</button>
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
