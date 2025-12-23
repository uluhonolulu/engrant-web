import React from 'react';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-28 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
          Stop searching. Start winning.
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Get your best-fit grants in 15 minutes. Spend your time writing proposals, not scrolling databases.
        </p>
        
        <a 
          href="https://app.engrant.eu/"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_click', {
                location: 'final_cta'
              });
            }
          }}
          className="inline-flex items-center bg-white text-teal-700 hover:bg-amber-50 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 group">
          Get my matches
          <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        <p className="text-teal-200 mt-8 flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            14-day free trial
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            No credit card required
          </span>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
