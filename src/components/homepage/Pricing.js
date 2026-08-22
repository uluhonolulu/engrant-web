import React from 'react';
import { Check } from 'lucide-react';
import {
  AUDIENCE_SHORT,
  CTA_LABEL,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
  TRIAL_MICRO,
} from '../../constants/positioning';

const Pricing = () => {
  const features = [
    'Unlimited grant searches',
    'Unlimited organization profiles',
    '30–50 pre-evaluated grants per search',
    'Fit analysis, red flags, and strategic considerations per grant',
    'AI that learns each organization\'s constraints',
    'Grant calendar with deadline reminders',
    'Proposal drafting help',
    'Requirements in plain English',
    'Pipeline export',
    'Priority email support',
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Built for {AUDIENCE_SHORT}
          </h2>
          <p className="text-xl text-neutral-600">
            Unlimited searches and organizations. No per-seat pricing.
          </p>
        </div>

        <div id="pricing-cards" className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl p-8 border border-neutral-200 warm-shadow-lg">
            <h3 className="text-sm font-bold text-neutral-500 tracking-wider mb-3">MONTHLY</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-bold text-slate-800">${PRICE_MONTHLY}</span>
              <span className="text-xl text-neutral-500 ml-2">/month</span>
            </div>
            <p className="text-neutral-600 mb-6">Cancel anytime</p>
            <a
              href="https://app.engrant.eu/?utm_source=landing&utm_medium=pricing&utm_campaign=pricing_monthly_cta"
              className="w-full btn-primary text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg"
            >
              {CTA_LABEL}
            </a>
          </div>

          <div className="relative bg-white rounded-3xl p-8 border-2 border-teal-300 warm-shadow-lg">
            <div className="absolute -top-3 right-6 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Best value
            </div>
            <h3 className="text-sm font-bold text-teal-600 tracking-wider mb-3">ANNUAL</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-bold text-slate-800">${PRICE_ANNUAL_PER_MONTH}</span>
              <span className="text-xl text-neutral-500 ml-2">/month</span>
            </div>
            <p className="text-neutral-600 mb-1">
              Billed annually (${PRICE_ANNUAL_TOTAL}/year)
            </p>
            <p className="text-teal-600 font-medium mb-6">Save $120/year</p>
            <a
              href="https://app.engrant.eu/?utm_source=landing&utm_medium=pricing&utm_campaign=pricing_annual_cta"
              className="w-full btn-primary text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg"
            >
              {CTA_LABEL}
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold text-neutral-500 tracking-wider mb-4 text-center">Both include:</p>
          <div className="space-y-3 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <Check className="text-teal-600 w-4 h-4" />
                </div>
                <span className="text-neutral-600">{feature}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-500">{TRIAL_MICRO}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
