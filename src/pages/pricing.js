import React from 'react';
import '../styles/shared.css';
import logo from '../images/logo-horizontal-remove-background.com.png';
import Footer from '../components/Footer';

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
            One simple plan for nonprofit grant professionals with a 14-day free trial.
          </p>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">Grant Research Pro</h2>
            <p className="text-neutral-700 mb-2"><span className="font-semibold text-neutral-700">$47/month</span> after trial</p>
            <p className="text-neutral-700 leading-relaxed">
              Includes unlimited grant searches, fit analysis, strategic notes, and proposal drafting support.
            </p>
          </section>

          <section className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-4">Included: Pipeline Export &amp; Reporting</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Export your full grant pipeline as structured data and generate a polished Word funding strategy report for clients or leadership updates.
            </p>
            <a
              href="/features/export-your-pipeline"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
            >
              See export and report details →
            </a>
          </section>
        </div>
      </main>

      <Footer tagline="Simple pricing with export and reporting workflows included" />
    </div>
  );
};

export default PricingPage;

export const Head = () => (
  <>
    <title>Pricing | Engrant</title>
    <meta
      name="description"
      content="Simple Engrant pricing for nonprofit grant professionals, including pipeline export and funding strategy reporting features."
    />
    <link rel="canonical" href="https://engrant.io/pricing" />
  </>
);
