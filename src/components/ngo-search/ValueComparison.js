import React from 'react';

const ValueComparison = () => {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-neutral-900 text-center mb-16">
          The Engrant Advantage
        </h2>
        
        <div id="comparison-table" className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-red-50 p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                Traditional Search
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-times text-red-500 mr-3"></i>
                  <span className="text-neutral-700">2-4 weeks of manual searching</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-times text-red-500 mr-3"></i>
                  <span className="text-neutral-700">Miss 70% of opportunities</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-times text-red-500 mr-3"></i>
                  <span className="text-neutral-700">8-20% success rates</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-times text-red-500 mr-3"></i>
                  <span className="text-neutral-700">€50-250/hour for consultants</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-times text-red-500 mr-3"></i>
                  <span className="text-neutral-700">Static database searches</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-times text-red-500 mr-3"></i>
                  <span className="text-neutral-700">Information overload</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                With Engrant
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  <span className="text-neutral-700">15 minutes to curated matches</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  <span className="text-neutral-700">Find hidden grants others miss</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  <span className="text-neutral-700">Match like consultants (2-4x better)</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  <span className="text-neutral-700">AI expertise at fraction of cost</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  <span className="text-neutral-700">AI that learns your mission</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  <span className="text-neutral-700">Top 10 curated matches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
