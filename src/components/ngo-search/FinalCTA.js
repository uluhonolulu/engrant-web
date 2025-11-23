import React from 'react';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-primary-700 to-green-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Stop missing opportunities. Start winning grants.
        </h2>
        
        <p className="text-xl mb-10 text-blue-100">
          Join smart nonprofits who find better grants in minutes, not weeks
        </p>
        
        <a 
          href="https://app.engrant.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary-700 hover:bg-neutral-100 px-10 py-4 rounded-lg text-xl font-bold transition-colors duration-200 shadow-lg inline-block">
          Get Your First Matches Free
        </a>
        
        <p className="text-primary-100 mt-6">
          No registration required • 3 free searches • Takes just minutes
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
