import * as React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/Footer';
import { OgTwitterMeta } from '../utils/seoMeta';

const TermsOfServicePage = () => {
  const [lastUpdated, setLastUpdated] = React.useState('');

  React.useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link to="/" className="inline-block mb-8 text-primary-600 hover:text-primary-700">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-neutral-800 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-neutral-700">
            {lastUpdated && <p className="text-neutral-600">Last updated: {lastUpdated}</p>}

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">1. Agreement</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the Engrant website at engrant.eu and the Engrant application at app.engrant.eu (together, the &quot;Service&quot;). By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">2. The Service</h2>
            <p>
              Engrant provides AI-assisted grant discovery, eligibility analysis, and related tools for nonprofit organizations and grant professionals. Features, availability, and pricing may change as we improve the product. We do not guarantee that any grant opportunity listed or recommended will result in funding.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">3. Accounts and Subscriptions</h2>
            <p>
              You must provide accurate information when creating an account. You are responsible for keeping your login credentials secure and for activity under your account. Paid subscriptions renew according to the plan you select unless cancelled before the renewal date. Free trials convert to paid plans unless cancelled during the trial period shown at signup.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Use the Service for unlawful purposes or in violation of applicable grant rules or funder requirements</li>
              <li>Attempt to access systems, data, or accounts you are not authorized to use</li>
              <li>Scrape, reverse engineer, or resell the Service without written permission</li>
              <li>Upload content that infringes intellectual property or privacy rights of others</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">5. Your Content and Data</h2>
            <p>
              You retain ownership of information you submit to Engrant (organization profiles, project descriptions, notes, and similar inputs). You grant us a limited license to process that content solely to operate and improve the Service. Our handling of personal data is described in our{' '}
              <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">
                Privacy Policy
              </Link>
              .
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">6. Intellectual Property</h2>
            <p>
              Engrant, its branding, software, and documentation are owned by us or our licensors. These Terms do not grant you any right to use our trademarks except as needed to use the Service in the ordinary course.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">7. Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available.&quot; Grant research outputs, fit ratings, and AI-generated text are informational aids only—not legal, financial, or professional advice. You are responsible for verifying eligibility, deadlines, and application requirements with funders before applying.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Engrant and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, data, or grant awards arising from your use of the Service. Our total liability for any claim related to the Service is limited to the amount you paid us in the twelve months before the claim, or €100 if you have not paid for a subscription.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">9. Termination</h2>
            <p>
              You may stop using the Service and cancel your subscription at any time through your account or by contacting us. We may suspend or terminate access if you breach these Terms or if required for security or legal reasons. Sections that by nature should survive termination (including disclaimers, liability limits, and governing law) will survive.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Lithuania, without regard to conflict-of-law rules. Disputes will be subject to the exclusive jurisdiction of the courts of Vilnius, Lithuania, unless mandatory consumer protection rules in your country require otherwise.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">11. Contact</h2>
            <p>
              Questions about these Terms:
            </p>
            <p className="mt-4">
              Email:{' '}
              <a href="mailto:founder@engrant.eu" className="text-primary-600 hover:text-primary-700 underline">
                founder@engrant.eu
              </a>
              <br />
              Address: Belmonto 17C-1, Vilnius, Lithuania
            </p>
          </div>
        </div>
      </main>
      <Footer tagline="AI-powered grant matching for nonprofits" />
    </div>
  );
};

export default TermsOfServicePage;

export const Head = () => (
  <>
    <title>Terms of Service | Engrant</title>
    <meta
      name="description"
      content="Terms of Service for Engrant grant search software, including subscriptions, acceptable use, and liability."
    />
    <link rel="canonical" href="https://engrant.eu/terms-of-service/" />
    <OgTwitterMeta
      title="Terms of Service | Engrant"
      description="Terms of Service for Engrant grant search software, including subscriptions, acceptable use, and liability."
      url="https://engrant.eu/terms-of-service/"
    />
  </>
);
