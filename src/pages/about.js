import * as React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/Footer';
import { OgTwitterMeta } from '../utils/seoMeta';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link to="/" className="inline-block mb-8 text-primary-600 hover:text-primary-700">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-neutral-800 mb-8">About Engrant</h1>

          <div className="prose prose-lg max-w-none text-neutral-700">
            <p>
              <strong>Engrant is</strong> an AI-powered grant discovery platform for nonprofit teams and grant professionals. It returns 30–50 pre-evaluated grants per search — each with fit analysis, eligibility signals, and strategic considerations — so you can focus on strong applications instead of weeks of manual research.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">What does Engrant do?</h2>
            <p>
              Engrant helps nonprofit teams and grant professionals find matching funding opportunities faster. Instead of spending weeks searching databases and spreadsheets, you describe your organization and funding need — Engrant surfaces ranked grants with fit ratings, deadlines, and eligibility signals.
            </p>
            <p>
              Our product combines grant discovery, eligibility checks, pipeline export, and AI-assisted project descriptions. The application runs at{' '}
              <a href="https://app.engrant.eu" className="text-primary-600 hover:text-primary-700 underline">
                app.engrant.eu
              </a>
              . Sensitive processing uses our own infrastructure; see our{' '}
              <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">
                Privacy Policy
              </Link>{' '}
              for how we handle data under GDPR.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">Who is Engrant for?</h2>
            <p>
              Small and mid-size nonprofits, consultants, and development staff who need practical grant research — not another generic search box that returns hundreds of unfiltered results.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">Where can I learn more?</h2>
            <p>
              We publish step-by-step guides, tool comparisons, and grant-writing resources:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>
                <Link to="/docs" className="text-primary-600 hover:text-primary-700 underline">Docs</Link> — how to find grants, check eligibility, and write project descriptions
              </li>
              <li>
                <Link to="/learn-more" className="text-primary-600 hover:text-primary-700 underline">Learn More</Link> — guides and resources hub
              </li>
              <li>
                <Link to="/compare/grantstation" className="text-primary-600 hover:text-primary-700 underline">GrantStation comparison</Link>
              </li>
              <li>
                <Link to="/compare/instrumentl" className="text-primary-600 hover:text-primary-700 underline">Instrumentl comparison</Link>
              </li>
              <li>
                <Link to="/compare/grantwatch" className="text-primary-600 hover:text-primary-700 underline">GrantWatch comparison</Link>
              </li>
              <li>
                <Link to="/compare/candid-foundation-directory-online" className="text-primary-600 hover:text-primary-700 underline">Candid / Foundation Directory comparison</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary-600 hover:text-primary-700 underline">Pricing</Link> — $47/month with a 14-day free trial
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">How do I contact Engrant?</h2>
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
      <Footer tagline="AI-powered grant matching for nonprofits" />
    </div>
  );
};

export default AboutPage;

export const Head = () => {
  const pageTitle = 'About | Engrant';
  const pageDescription =
    'Learn about Engrant — AI-powered grant matching for nonprofits, built in Vilnius, Lithuania.';
  const canonicalUrl = 'https://engrant.eu/about/';

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
    </>
  );
};
