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
                  Other Grant Tools
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">400+ results to filter through</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">You do all the evaluation yourself</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Limited to what's in their database</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Enterprise pricing for features you don't need</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Raw results with no strategic context</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="text-rose-400 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Built for large teams, not solopreneurs</span>
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
                  <span className="text-neutral-700 font-medium">30–50 pre-evaluated grants</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">AI does the vetting for you</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">Searches the entire web, not just a database</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">$47/month — built for how you actually work</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">Every grant evaluated with fit, flags, and context</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-700 font-medium">Built for solo grant professionals and small teams</span>
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
