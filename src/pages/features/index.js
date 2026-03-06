import React from 'react';
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
              href="https://app.engrant.eu/"
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
          <p className="text-lg text-neutral-700 leading-relaxed mb-10">
            Explore product features built for nonprofit grant professionals and consultants.
          </p>

          <section className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-700 mb-3">Export Your Pipeline</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Generate a polished funding strategy report or export your full pipeline as structured data for deeper analysis.
            </p>
            <a
              href="/features/export-your-pipeline"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
            >
              View feature details →
            </a>
          </section>
        </div>
      </main>

      <Footer tagline="Feature pages for grant research, reporting, and pipeline workflows" />
    </div>
  );
};

export default FeaturesIndexPage;

export const Head = () => (
  <>
    <title>Features | Engrant</title>
    <meta
      name="description"
      content="Explore Engrant product features for nonprofit grant professionals, including pipeline export and funding strategy reporting."
    />
    <link rel="canonical" href="https://engrant.io/features" />
  </>
);
