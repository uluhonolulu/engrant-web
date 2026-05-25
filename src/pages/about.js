import * as React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/Footer';

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
              Engrant helps nonprofit teams and grant professionals find matching funding opportunities faster. Instead of spending weeks searching databases and spreadsheets, you describe your organization and funding need—Engrant surfaces ranked grants with fit ratings, deadlines, and eligibility signals so you can focus on strong applications.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">What we build</h2>
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

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">Who we serve</h2>
            <p>
              Small and mid-size nonprofits, consultants, and development staff who need practical grant research—not another generic search box. We also publish guides and comparisons on{' '}
              <Link to="/learn-more" className="text-primary-600 hover:text-primary-700 underline">
                Learn More
              </Link>{' '}
              and in{' '}
              <Link to="/docs" className="text-primary-600 hover:text-primary-700 underline">
                Docs
              </Link>
              .
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">Contact</h2>
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

export const Head = () => (
  <>
    <title>About | Engrant</title>
    <meta
      name="description"
      content="Learn about Engrant—AI-powered grant matching for nonprofits, built in Vilnius, Lithuania."
    />
    <link rel="canonical" href="https://engrant.eu/about/" />
  </>
);
