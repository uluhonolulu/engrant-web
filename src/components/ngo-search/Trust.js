import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-neutral-900 text-center mb-16">
          The numbers
        </h2>
        
        <div id="trust-stats" className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-green-600 mb-2">Curated matches</div>
            <div className="text-neutral-700">Not 300+ irrelevant results</div>
          </div>
          <div className="bg-primary-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">15 min</div>
            <div className="text-neutral-700">Average time to results</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">$47/mo</div>
            <div className="text-neutral-700">Less than 1 hour of consultant time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
