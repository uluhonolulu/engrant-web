import * as React from "react"
import { Link } from "gatsby"

const PrivacyPolicyPage = () => {
  const [lastUpdated, setLastUpdated] = React.useState('');

  React.useEffect(() => {
    // Only set date on client to prevent hydration errors
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50">
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
            When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email addresses. You may opt out of receiving this advertising by visiting <a href="https://app.retention.com/optout" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">https://app.retention.com/optout</a>.
          </p>
          <p className="mt-4">
            You also have the option to opt out of the collection of your personal data in compliance with GDPR. To exercise this option, please visit <a href="https://www.rb2b.com/rb2b-gdpr-opt-out" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">https://www.rb2b.com/rb2b-gdpr-opt-out</a>.
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
  )
}

export default PrivacyPolicyPage

export const Head = () => <title>Privacy Policy | Engrant</title> 