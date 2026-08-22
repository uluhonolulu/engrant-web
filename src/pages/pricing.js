import React from 'react';
import '../styles/shared.css';
import logo from '../images/logo-horizontal-remove-background.com.png';
import Footer from '../components/Footer';
import {
  AUDIENCE,
  GEOGRAPHY,
  MECHANISM,
  ONE_LINE_DEFINITION,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
  PRICE_VALID_UNTIL,
} from '../constants/positioning';
import {
  buildAnnualOffer,
  buildMonthlyOffer,
  buildProductSchema,
} from '../utils/siteSchema';
import { buildFaqSchema, OgTwitterMeta } from '../utils/seoMeta';

const PRICING_FAQ = [
  {
    question: 'How much does Engrant cost?',
    answer: `Engrant costs $${PRICE_MONTHLY}/month, or $${PRICE_ANNUAL_PER_MONTH}/month billed annually ($${PRICE_ANNUAL_TOTAL}/year). Both tiers include unlimited searches, unlimited organization profiles, and all features. 14-day free trial, no credit card required. Pricing guaranteed through ${PRICE_VALID_UNTIL}.`,
  },
  {
    question: 'What is included in the Engrant plan?',
    answer:
      'Both tiers include unlimited grant searches, 30-50 pre-evaluated grants per search, AI fit analysis, eligibility signals, red flag warnings, pipeline events in your calendar, proposal drafting help, pipeline export, and priority email support.',
  },
  {
    question: 'How does Engrant compare to GrantStation or Instrumentl?',
    answer:
      'Grant databases search their own listings. Engrant searches the live web and returns each funder pre-evaluated for your organization. Instrumentl starts at $299/month (checked August 2026). GrantStation full access is ~$894/year. Engrant is $47/month or $444/year.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. 14 days, no credit card required, all features included. The monthly email update on new matching funders arrives after 30 days, so it falls outside a 14-day trial by nature.',
  },
  {
    question: 'Can I use Engrant for multiple nonprofit clients?',
    answer:
      'Yes. Unlimited organization profiles are included. Each profile maintains its own constraint history.',
  },
];

const features = [
  'Unlimited grant searches',
  'Unlimited organization profiles',
  '30-50 pre-evaluated grants per search',
  'Fit analysis, red flags, and strategic considerations per grant',
  'AI that learns each organization\'s constraints',
  'Grant calendar with deadline reminders',
  'Proposal drafting help',
  'Requirements in plain English',
  'Pipeline export',
  'Priority email support',
];

const PricingPage = () => {
  return (
    <div className="bg-[#fffbf5] min-h-screen w-full">
      <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
            </a>
            <nav className="hidden md:flex items-center space-x-10">
              <a href="/features/" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="/learn-more/" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Learn More
              </a>
            </nav>
            <a
              href="https://app.engrant.eu/?utm_source=pricing&utm_medium=cta&utm_campaign=header_cta"
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-700 mb-4">Pricing</h1>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            {ONE_LINE_DEFINITION}
          </p>
          <p className="text-neutral-600 mb-10">
            Built for {AUDIENCE}. Unlimited searches and organizations. No per-seat pricing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h2 className="text-sm font-bold text-neutral-500 tracking-wider mb-3">MONTHLY</h2>
              <p className="text-4xl font-bold text-neutral-700 mb-1">${PRICE_MONTHLY}<span className="text-xl font-normal text-neutral-500">/month</span></p>
              <p className="text-neutral-600 mb-6">Cancel anytime</p>
              <a
                href="https://app.engrant.eu/?utm_source=pricing&utm_medium=cta&utm_campaign=plan_monthly"
                className="btn-primary text-white px-6 py-3 rounded-full font-semibold inline-block shadow-md"
              >
                Start Free Trial
              </a>
            </section>

            <section className="bg-white border-2 border-teal-300 rounded-2xl p-8 relative">
              <span className="absolute -top-3 right-6 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">Best value</span>
              <h2 className="text-sm font-bold text-teal-600 tracking-wider mb-3">ANNUAL</h2>
              <p className="text-4xl font-bold text-neutral-700 mb-1">${PRICE_ANNUAL_PER_MONTH}<span className="text-xl font-normal text-neutral-500">/month</span></p>
              <p className="text-neutral-600 mb-1">Billed annually (${PRICE_ANNUAL_TOTAL}/year)</p>
              <p className="text-teal-600 font-medium mb-6">Save $120/year</p>
              <a
                href="https://app.engrant.eu/?utm_source=pricing&utm_medium=cta&utm_campaign=plan_annual"
                className="btn-primary text-white px-6 py-3 rounded-full font-semibold inline-block shadow-md"
              >
                Start Free Trial
              </a>
            </section>
          </div>

          <section className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">Both include</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc pl-5">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="text-neutral-600 mt-6">14-day free trial · No credit card required</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">Coverage</h2>
            <p className="text-neutral-700 leading-relaxed">{GEOGRAPHY}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">How it works</h2>
            <p className="text-neutral-700 leading-relaxed">{MECHANISM}</p>
          </section>

          <section id="faq" className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-6">Frequently asked questions about Engrant pricing</h2>
            <div className="space-y-6">
              {PRICING_FAQ.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-neutral-700 mb-2">{faq.question}</h3>
                  <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;

export const Head = () => {
  const pageTitle = 'Pricing | Engrant';
  const pageDescription = `Engrant costs $${PRICE_MONTHLY}/month or $${PRICE_ANNUAL_PER_MONTH}/month billed annually ($${PRICE_ANNUAL_TOTAL}/year). Unlimited grant searches and organization profiles. 14-day free trial.`;
  const canonicalUrl = 'https://engrant.eu/pricing/';

  const productSchema = buildProductSchema({
    description: pageDescription,
    offers: [buildMonthlyOffer(), buildAnnualOffer()],
  });

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(buildFaqSchema(PRICING_FAQ))}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
    </>
  );
};
