import React from 'react';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-primary-700 to-green-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Stop searching. Start winning.
        </h2>
        
        <p className="text-xl mb-10 text-blue-100">
          Get your 10 best-fit grants in 15 minutes. Spend your time writing proposals, not scrolling databases.
        </p>
        
        <a 
          href="https://app.engrant.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary-700 hover:bg-neutral-100 px-10 py-4 rounded-lg text-xl font-bold transition-colors duration-200 shadow-lg inline-block">
          Get My 10 Grants
        </a>
        
        <p className="text-primary-100 mt-6">
          14-day free trial • No credit card required
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
