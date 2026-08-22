import * as React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/Footer';
import {
  AUDIENCE,
  GEOGRAPHY,
  MECHANISM,
  ONE_LINE_DEFINITION,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
} from '../constants/positioning';
import { OgTwitterMeta } from '../utils/seoMeta';

const LAST_REVIEWED = '22 August 2026';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link to="/" className="inline-block mb-8 text-primary-600 hover:text-primary-700">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-neutral-800 mb-4">About Engrant</h1>
          <p className="text-sm text-neutral-500 mb-8">Last reviewed: {LAST_REVIEWED}</p>

          <div className="prose prose-lg max-w-none text-neutral-700">
            <p className="text-xl leading-relaxed">
              {ONE_LINE_DEFINITION}
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">Who is Engrant for?</h2>
            <p>
              {AUDIENCE}
            </p>
            <p>
              If you are the only person doing grant research for your clients or your organization — without a dedicated research team behind you — Engrant is built for your workflow. You need funders you would never find in a database, already evaluated enough to decide whether to pursue them, not another list of names to investigate.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">Who runs Engrant?</h2>
            <p>
              Engrant is built by{' '}
              <a
                href="https://www.linkedin.com/in/artemsmirnov/"
                className="text-primary-600 hover:text-primary-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artem Smirnov
              </a>
              , a software developer of 25+ years who serves on the board of{' '}
              <a
                href="https://teplo.fr/"
                className="text-primary-600 hover:text-primary-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teplo
              </a>
              , a French nonprofit supporting Ukraine. He lives in Lithuania with his family.
            </p>
            <p>
              The board role matters: Artem sits on the grant-seeking side of the table, not only the software side. Engrant exists because the gap between what databases cover and what organizations actually need to find is widest for people doing this work alone — without staff to filter raw search results or maintain subscriptions to multiple regional databases.
            </p>
            <p>
              Artem founded Engrant on 23 December 2025. The product operates from Vilnius, Lithuania (Belmonto 17C-1).
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">Where do customers use Engrant?</h2>
            <p>
              {GEOGRAPHY}
            </p>
            <p>
              Paying customers span Africa, Latin America, Europe, and North America. A funder outside your region is often the purest instance of discovery — the kind of opportunity US-shaped databases structurally cannot surface because they were never included in those databases in the first place.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">How does Engrant work?</h2>
            <p>
              {MECHANISM}{' '}
              <Link to="/how-engrant-search-works/" className="text-primary-600 hover:text-primary-700 underline">
                Read how the parallel search agents work
              </Link>
              .
            </p>
            <p>
              Each search returns 30–50 funders pre-evaluated for fit, eligibility, competition, and red flags — not a raw dump to research yourself. Engrant also writes pipeline events to your calendar, offers proposal drafting help grounded in stated funder requirements, and learns constraints separately for each organization profile you create.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">Pricing</h2>
            <p>
              Engrant costs ${PRICE_MONTHLY}/month, or ${PRICE_ANNUAL_PER_MONTH}/month billed annually (${PRICE_ANNUAL_TOTAL}/year). Both tiers include unlimited searches, unlimited organization profiles, and all features. A 14-day free trial requires no credit card. See{' '}
              <Link to="/pricing/" className="text-primary-600 hover:text-primary-700 underline">
                pricing
              </Link>{' '}
              for details.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">Learn more</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>
                <Link to="/docs/" className="text-primary-600 hover:text-primary-700 underline">Docs</Link> — how to find grants, check eligibility, and write project descriptions
              </li>
              <li>
                <Link to="/features/" className="text-primary-600 hover:text-primary-700 underline">Features</Link> — calendar, proposal help, multi-org profiles, export
              </li>
              <li>
                <Link to="/compare/grantstation/" className="text-primary-600 hover:text-primary-700 underline">GrantStation comparison</Link>
              </li>
              <li>
                <Link to="/compare/fundsforngos/" className="text-primary-600 hover:text-primary-700 underline">fundsforNGOs comparison</Link>
              </li>
              <li>
                <Link to="/compare/instrumentl/" className="text-primary-600 hover:text-primary-700 underline">Instrumentl comparison</Link>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-10">Contact</h2>
            <p>
              Engrant
              <br />
              Belmonto 17C-1, Vilnius, Lithuania
              <br />
              Email:{' '}
              <a href="mailto:founder@engrant.eu" className="text-primary-600 hover:text-primary-700 underline">
                founder@engrant.eu
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer tagline={ONE_LINE_DEFINITION} />
    </div>
  );
};

export default AboutPage;

export const Head = () => {
  const pageTitle = 'About | Engrant';
  const pageDescription = ONE_LINE_DEFINITION;
  const canonicalUrl = 'https://engrant.eu/about/';

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Engrant',
    description: ONE_LINE_DEFINITION,
    url: canonicalUrl,
    dateModified: '2026-08-22',
    mainEntity: {
      '@type': 'Organization',
      name: 'Engrant',
      description: ONE_LINE_DEFINITION,
      foundingDate: '2025-12-23',
      founder: {
        '@type': 'Person',
        name: 'Artem Smirnov',
      },
    },
  };

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(aboutPageSchema)}</script>
    </>
  );
};
