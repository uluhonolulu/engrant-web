import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-neutral-900 text-center mb-16">
          Built for European Nonprofits
        </h2>
        
        <div id="trust-stats" className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-primary-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">27,000+</div>
            <div className="text-neutral-700">Active EU funding opportunities monitored</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">€95.5B</div>
            <div className="text-neutral-700">EU budget accessible</div>
          </div>
          <div className="bg-primary-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">94%</div>
            <div className="text-neutral-700">AI accuracy in grant matching</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">15 min</div>
            <div className="text-neutral-700">Average time to matches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
