import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Results
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            The numbers
          </h2>
        </div>
        
        <div id="trust-stats" className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-2xl p-8 text-center border border-teal-100 warm-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-teal-600 mb-2">Curated matches</div>
              <div className="text-neutral-500">Not 300+ irrelevant results</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-2xl p-8 text-center border border-amber-100 warm-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-amber-600 mb-2">15 min</div>
              <div className="text-neutral-500">Average time to results</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-2xl p-8 text-center border border-teal-100 warm-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-teal-600 mb-2">$47/mo</div>
              <div className="text-neutral-500">Less than 1 hour of consultant time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
