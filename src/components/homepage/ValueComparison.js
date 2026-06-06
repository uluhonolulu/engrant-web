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
            <div className="bg-slate-50 p-10 border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">
                  Grant databases (Instrumentl, Candid, GrantStation)
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Comprehensive lists — but you do all the vetting yourself, you're limited to what they've indexed, and they're priced and built for bigger teams.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-b border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">
                  Manual research (Google, funder sites, 990s)
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Free, but it eats 6–8 hours a week and often surfaces only a handful of viable opportunities.
              </p>
            </div>

            <div className="bg-slate-50 p-10 md:border-r border-b md:border-b-0 border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">
                  General AI (ChatGPT, Gemini)
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Fast and conversational — but it invents grants that don't exist, cites programs that closed years ago, can't verify eligibility, and forgets everything about your client between sessions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-teal-800">
                  Engrant
                </h3>
              </div>
              <p className="text-neutral-700 font-medium leading-relaxed">
                Searches the live web (not a static index), pre-evaluates every grant for fit, eligibility, competition, and red flags, and remembers each client's constraints. Built and priced for solo pros and boutique shops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
