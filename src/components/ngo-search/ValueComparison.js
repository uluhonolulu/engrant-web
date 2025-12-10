import React from 'react';
import { X, Check } from 'lucide-react';

const ValueComparison = () => {
  return (
    <section id="comparison" className="py-24 section-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Compare
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            The Engrant Advantage
          </h2>
        </div>
        
        <div id="comparison-table" className="rounded-3xl overflow-hidden warm-shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="bg-slate-50 p-10 border-r border-slate-100">
              <div className="flex items-center justify-center mb-8">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700">
                  Traditional Search
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">300+ results to filter through</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">15+ hours/week searching</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">1 in 3 applications to ineligible grants</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Clunky interfaces, constant clicking</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Confusing eligibility requirements</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">$60-250/hour for consultants</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                  <Check className="text-white w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-teal-800">
                  With Engrant
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">10 curated matches</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">15 minutes to results</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">Only grants you qualify for</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">Describe your mission, get matches</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">Requirements in plain English</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">$47/month, cancel anytime</span>
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
