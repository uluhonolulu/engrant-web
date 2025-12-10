import React from 'react';
import Header from '../components/ngo-search/Header';
import Hero from '../components/ngo-search/Hero';
import PainPoints from '../components/ngo-search/PainPoints';
import Solution from '../components/ngo-search/Solution';
import HowItWorks from '../components/ngo-search/HowItWorks';
import ValueComparison from '../components/ngo-search/ValueComparison';
import Pricing from '../components/ngo-search/Pricing';
import WhoThisIsFor from '../components/ngo-search/WhoThisIsFor';
import Trust from '../components/ngo-search/Trust';
import FAQ from '../components/ngo-search/FAQ';
import FinalCTA from '../components/ngo-search/FinalCTA';

const NGOSearchPage = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
          line-height: 1.7;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Source Serif 4', Georgia, serif;
        }

        .warm-gradient {
          background: linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #0d9488 100%);
        }

        .hero-gradient {
          background: 
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(251, 191, 36, 0.08), transparent),
            linear-gradient(180deg, #fefdfb 0%, #fffbf5 100%);
        }

        .section-cream {
          background: linear-gradient(180deg, #fffbf5 0%, #fef7ed 100%);
        }

        .section-warm-dark {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .warm-shadow {
          box-shadow: 0 4px 24px rgba(13, 148, 136, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .warm-shadow-lg {
          box-shadow: 0 8px 40px rgba(13, 148, 136, 0.15), 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .btn-primary {
          background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }

        .organic-blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>
      <div className="bg-[#fffbf5] text-neutral-700 min-h-screen">
        <Header />
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <ValueComparison />
        <Pricing />
        <WhoThisIsFor />
        <Trust />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
};

export default NGOSearchPage;

export const Head = () => (
  <>
    <title>Only the Grants That Fit in 15 Minutes | Engrant</title>
    <meta 
      name="description" 
      content="Stop scrolling through 300 irrelevant results. Engrant's AI finds your best-fit grants in minutes and explains why each one fits your mission." 
    />
  </>
);
