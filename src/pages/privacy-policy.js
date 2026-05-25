import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const PrivacyPolicyPage = () => {
  const [lastUpdated, setLastUpdated] = React.useState('');

  React.useEffect(() => {
    // Only set date on client to prevent hydration errors
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link to="/" className="inline-block mb-8 text-primary-600 hover:text-primary-700">
            ← Back to Home
          </Link>
        
          <h1 className="text-4xl font-bold text-neutral-800 mb-8">Privacy Policy</h1>
        
          <div className="prose prose-lg max-w-none text-neutral-700">
            {lastUpdated && <p className="text-neutral-600">Last updated: {lastUpdated}</p>}

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">1. Introduction</h2>
            <p>
              At Engrant, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable EU data protection laws.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">2. Data Protection</h2>
            <p>
              We implement robust security measures to protect your data. All sensitive information is encrypted and stored securely. We use a private, self-hosted Large Language Model (LLM) for our services, ensuring that:
            </p>
            <ul className="list-disc pl-6">
              <li>No data is sent to public AI services</li>
              <li>Your data is not used for training purposes</li>
              <li>All processing occurs within our secure infrastructure</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">3. Your Rights</h2>
            <p>
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">4. Data Deletion</h2>
            <p>
              You can request the deletion of your data at any time. Upon receiving a deletion request, we will:
            </p>
            <ul className="list-disc pl-6">
              <li>Permanently delete your data from our systems</li>
              <li>Remove any backups containing your data</li>
              <li>Provide confirmation of deletion</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">5. Data Processing</h2>
            <p>
              We process your data only for the purposes of providing our services. All processing is done in accordance with GDPR principles:
            </p>
            <ul className="list-disc pl-6">
              <li>Lawfulness, fairness, and transparency</li>
              <li>Purpose limitation</li>
              <li>Data minimization</li>
              <li>Accuracy</li>
              <li>Storage limitation</li>
              <li>Integrity and confidentiality</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">6. Cookies and Tracking Technologies</h2>
            <p>
              Our marketing website (engrant.eu) may use cookies and similar technologies to understand how visitors use the site and to measure advertising performance. These may include:
            </p>
            <ul className="list-disc pl-6">
              <li>Google Tag Manager and Google Analytics</li>
              <li>Hotjar (session analytics)</li>
              <li>LinkedIn Insight Tag</li>
              <li>Facebook Pixel</li>
            </ul>
            <p className="mt-4">
              You can limit tracking through your browser cookie settings or industry opt-out tools offered by those providers. When you use the Engrant application at app.engrant.eu, separate product terms and in-app notices may apply.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mt-8">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights under GDPR, please contact us at:
            </p>
            <p className="mt-4">
              Email: founder@engrant.eu<br />
              Address: Belmonto 17C-1, Vilnius, Lithuania
            </p>
          </div>
        </div>
      </main>
      <Footer tagline="AI-powered grant matching for nonprofits" />
    </div>
  )
}

export default PrivacyPolicyPage

export const Head = () => (
  <>
    <title>Privacy Policy | Engrant</title>
    <meta
      name="description"
      content="Engrant Privacy Policy: how we collect, use, and protect personal data for nonprofit grant search, in compliance with GDPR."
    />
    <link rel="canonical" href="https://engrant.eu/privacy-policy/" />
  </>
)
