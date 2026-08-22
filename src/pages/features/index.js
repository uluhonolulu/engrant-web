import React from 'react';
import { OgTwitterMeta } from '../../utils/seoMeta';
import {
  AUDIENCE,
  GEOGRAPHY,
  MECHANISM,
  ONE_LINE_DEFINITION,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
} from '../../constants/positioning';
import '../../styles/shared.css';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import Footer from '../../components/Footer';

const FeaturesIndexPage = () => {
  return (
    <div className="bg-[#fffbf5] min-h-screen w-full">
      <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
            </a>
            <a
              href="https://app.engrant.eu/?utm_source=features&utm_medium=cta&utm_campaign=header_cta"
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-700 mb-6">Engrant Features</h1>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            {ONE_LINE_DEFINITION}
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Built for {AUDIENCE}.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-10">
            {GEOGRAPHY} The features below support what happens after Engrant surfaces funders you would not have found in a database — tracking deadlines, drafting proposals, managing multiple clients, and exporting your pipeline.
          </p>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Live-web grant discovery</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              {MECHANISM} Each search returns 30-50 funders pre-evaluated for fit, eligibility, competition, and red flags — not a raw list to research yourself.
            </p>
            <a href="/how-engrant-search-works/" className="text-primary-700 hover:text-primary-800 font-semibold">
              How the parallel search agents work →
            </a>
          </section>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Grant calendar</h2>
            <p className="text-neutral-700 leading-relaxed">
              Pipeline events — expected call open, deadline, decision date — are written into the calendar app you already use. Set as many reminders as you want through that calendar. Engrant does not run a separate reminder system; deadlines show up where you already look.
            </p>
          </section>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Proposal drafting help</h2>
            <p className="text-neutral-700 leading-relaxed">
              Engrant offers a first draft grounded in the funder&apos;s stated requirements — a starting point to work from, not a submission-ready proposal. The draft reflects what the funder actually asks for, so you spend time refining rather than reconstructing requirements from a PDF.
            </p>
          </section>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Unlimited organization profiles</h2>
            <p className="text-neutral-700 leading-relaxed">
              Create a separate profile for each organization you serve. Each profile learns its own constraints — geographic limits, budget bands, partnership requirements — without mixing feedback across clients. Consultants and development staff managing multiple programmes use this as their default workflow.
            </p>
          </section>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Monthly funder updates</h2>
            <p className="text-neutral-700 leading-relaxed">
              Once per month, Engrant emails you about new funders matching your saved organization profiles. This is separate from search results — it catches opportunities that appeared after your last search without requiring you to re-run discovery manually.
            </p>
          </section>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Requirements in plain English</h2>
            <p className="text-neutral-700 leading-relaxed">
              Each grant arrives with eligibility requirements translated into plain language — what the funder actually expects, who qualifies, and what would disqualify you — so you can decide quickly whether to pursue without decoding a 40-page RFP first.
            </p>
          </section>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Export Your Pipeline</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Generate a polished funding strategy report or export your full pipeline as structured data for board reporting, client updates, or deeper analysis in your own tools.
            </p>
            <a
              href="/features/export-your-pipeline/"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
            >
              View export feature details →
            </a>
          </section>

          <section className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Pricing</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              ${PRICE_MONTHLY}/month, or ${PRICE_ANNUAL_PER_MONTH}/month billed annually (${PRICE_ANNUAL_TOTAL}/year). All features included on both tiers. 14-day free trial, no credit card required.
            </p>
            <a href="/pricing/" className="text-primary-700 hover:text-primary-800 font-semibold">
              View pricing →
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesIndexPage;

export const Head = () => {
  const pageTitle = 'Features | Engrant';
  const pageDescription = ONE_LINE_DEFINITION;
  const canonicalUrl = 'https://engrant.eu/features/';

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Engrant',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: ONE_LINE_DEFINITION,
    offers: {
      '@type': 'Offer',
      price: String(PRICE_MONTHLY),
      priceCurrency: 'USD',
    },
    featureList: [
      'Live-web grant discovery with parallel AI agents',
      'Grant calendar integration',
      'Proposal drafting help',
      'Unlimited organization profiles',
      'Monthly funder email updates',
      'Pipeline export',
    ],
  };

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
    </>
  );
};
