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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .nonprofit-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
        }

        .glass-effect {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.90);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <div className="bg-white text-neutral-700 font-sans min-h-screen">
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
