import React from 'react';
import { X, Check } from 'lucide-react';

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
                  <X className="text-red-500 mr-3" />
                  <span className="text-neutral-700">300+ results to filter through</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3" />
                  <span className="text-neutral-700">15+ hours/week searching</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3" />
                  <span className="text-neutral-700">1 in 3 applications to ineligible grants</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3" />
                  <span className="text-neutral-700">Clunky interfaces, constant clicking</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3" />
                  <span className="text-neutral-700">Confusing eligibility requirements</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3" />
                  <span className="text-neutral-700">$60-250/hour for consultants</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                With Engrant
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span className="text-neutral-700">10 curated matches</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span className="text-neutral-700">15 minutes to results</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span className="text-neutral-700">Only grants you qualify for</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span className="text-neutral-700">Describe your mission, get matches</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span className="text-neutral-700">Requirements in plain English</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span className="text-neutral-700">$47/month, cancel anytime</span>
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
