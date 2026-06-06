import React from 'react';
import '../styles/shared.css';
import logo from '../images/logo-horizontal-remove-background.com.png';
import Footer from '../components/Footer';
import { buildFaqSchema, OgTwitterMeta } from '../utils/seoMeta';

const PRICING_FAQ = [
  {
    question: 'How much does Engrant cost?',
    answer:
      'Engrant costs $47/month with a 14-day free trial. No credit card is required to start. You get unlimited organizations, unlimited searches, fit analysis, strategic notes, and proposal drafting support. Cancel anytime.',
  },
  {
    question: 'What is included in the Engrant plan?',
    answer:
      'The Grant Research Pro plan includes unlimited grant searches, AI fit analysis, eligibility signals, red flag warnings, competition levels, pipeline export, and AI-assisted proposal drafts. Pipeline export and Word funding strategy reports are included at no extra cost.',
  },
  {
    question: 'How does Engrant compare to GrantStation or Instrumentl?',
    answer:
      'GrantStation (~$199/year) and Instrumentl ($179–899/month) are database or workflow platforms you search manually. Engrant ($47/month) uses AI to research your organization and return 30–50 pre-evaluated grants with fit scores — so you spend less time filtering and more time applying.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. Engrant offers a 14-day free trial with no credit card required. You can run unlimited searches and evaluate fit analysis before subscribing.',
  },
  {
    question: 'Can I use Engrant for multiple nonprofit clients?',
    answer:
      'Yes. Consultants and grant professionals can create separate organization profiles. Each profile has its own AI learning, so feedback for one client does not affect another.',
  },
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
              <a href="/features" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="/learn-more" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
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
          <p className="text-lg text-neutral-700 leading-relaxed mb-10">
            <strong>Short answer:</strong> Engrant costs $47/month with a 14-day free trial and no credit card required. One plan covers unlimited grant searches, fit analysis, pipeline export, and proposal drafting for nonprofit grant professionals.
          </p>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">How much does Engrant cost?</h2>
            <p className="text-neutral-700 mb-2">
              <span className="font-semibold text-neutral-700">$47/month</span> after your 14-day free trial
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Includes unlimited grant searches, fit analysis, strategic notes, and proposal drafting support. Unlimited organizations — ideal for consultants managing multiple nonprofit clients.
            </p>
            <a
              href="https://app.engrant.eu/?utm_source=pricing&utm_medium=cta&utm_campaign=plan_cta"
              className="btn-primary text-white px-6 py-3 rounded-full font-semibold inline-block shadow-md"
            >
              Start Free Trial
            </a>
          </section>

          <section className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">What&apos;s included?</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc pl-5">
              <li>30–50 pre-evaluated grants per search with fit scores and red flags</li>
              <li>AI organization profiling from name or website</li>
              <li>Eligibility screening and competition level indicators</li>
              <li>Pipeline export and Word funding strategy reports</li>
              <li>AI-assisted proposal draft generation</li>
            </ul>
            <a
              href="/features/export-your-pipeline"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold mt-6"
            >
              See export and report details →
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">How does Engrant compare to other grant tools?</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full min-w-[640px] text-left text-neutral-700">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="p-4 font-semibold text-neutral-600">Approach</th>
                    <th className="p-4 font-semibold text-primary-700">Engrant</th>
                    <th className="p-4 font-semibold text-neutral-600">Manual search / databases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200 bg-white">
                    <td className="p-4 font-medium">Results per search</td>
                    <td className="p-4">30–50 pre-evaluated grants</td>
                    <td className="p-4">100–400+ raw listings to filter yourself</td>
                  </tr>
                  <tr className="border-t border-neutral-200 bg-neutral-50">
                    <td className="p-4 font-medium">Fit analysis</td>
                    <td className="p-4">AI fit scores, red flags, competition levels</td>
                    <td className="p-4">Manual eligibility review for each result</td>
                  </tr>
                  <tr className="border-t border-neutral-200 bg-white">
                    <td className="p-4 font-medium">Setup</td>
                    <td className="p-4">Enter org name or URL — AI researches automatically</td>
                    <td className="p-4">Configure keywords, filters, and search parameters</td>
                  </tr>
                  <tr className="border-t border-neutral-200 bg-neutral-50">
                    <td className="p-4 font-medium">Monthly cost</td>
                    <td className="p-4">$47/month</td>
                    <td className="p-4">$199/year (GrantStation) to $179+/month (Instrumentl)</td>
                  </tr>
                  <tr className="border-t border-neutral-200 bg-white">
                    <td className="p-4 font-medium">Free trial</td>
                    <td className="p-4">14 days, no credit card</td>
                    <td className="p-4">Varies by platform</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-neutral-600 mt-4 text-sm">
              See detailed comparisons:{' '}
              <a href="/compare/grantstation" className="text-primary-700 hover:text-primary-800 underline">GrantStation</a>,{' '}
              <a href="/compare/instrumentl" className="text-primary-700 hover:text-primary-800 underline">Instrumentl</a>,{' '}
              <a href="/compare/grantwatch" className="text-primary-700 hover:text-primary-800 underline">GrantWatch</a>.
            </p>
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

      <Footer tagline="Simple pricing with export and reporting workflows included" />
    </div>
  );
};

export default PricingPage;

export const Head = () => {
  const pageTitle = 'Pricing | Engrant';
  const pageDescription =
    'Engrant costs $47/month with a 14-day free trial. Unlimited grant searches, fit analysis, pipeline export, and proposal drafting for nonprofit grant professionals.';
  const canonicalUrl = 'https://engrant.eu/pricing/';

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Engrant Grant Research Pro',
    description: pageDescription,
    brand: {
      '@type': 'Organization',
      name: 'Engrant',
      url: 'https://engrant.eu',
    },
    offers: {
      '@type': 'Offer',
      price: '47',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://app.engrant.eu',
      description: '14-day free trial, no credit card required',
    },
  };

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
