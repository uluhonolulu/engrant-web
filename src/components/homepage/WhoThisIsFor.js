import React from 'react';

const WhoThisIsFor = () => {
  return (
    <section id="who-this-is-for" className="py-24 section-cream relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            For You
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8">
            Built for grant consultants and boutique shops
          </h2>
        </div>
        
        <p className="text-lg text-neutral-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
          As a grant consultant or boutique shop, you spend as much time finding grants as writing them — and that research time caps how many clients you can serve. Other tools give you hundreds of raw results. Engrant gives you dozens of evaluated opportunities, ready to act on.
        </p>
        
        <p className="text-2xl text-teal-700 font-semibold text-center">
          Spend your time writing winning proposals, not evaluating dead ends.
        </p>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
