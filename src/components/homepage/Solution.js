import React from 'react';
import { Search, Globe, AlertTriangle, Brain } from 'lucide-react';
import gotitImage from '../../images/gotit.jpg';

const Solution = () => {
  return (
    <section id="solution" className="section-cream py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              The Solution
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Pre-evaluated grants. Not just search results.
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Describe your organization in plain language. Engrant's AI researches it automatically, then scours the web for grant opportunities that match the mission, geography, and capacity. Each result comes pre-evaluated — with fit analysis, eligibility breakdown, competition signals, red flags, and strategic considerations. You review the shortlist, not the entire internet.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <Search className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Fit analysis per grant</div>
                  <div className="text-neutral-500">Why it matches and what to watch for</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Globe className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Not limited to a database</div>
                  <div className="text-neutral-500">AI researches foundation, corporate, and government funders across the web</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <AlertTriangle className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Red flags surfaced</div>
                  <div className="text-neutral-500">Competition, effort, and deal-breakers upfront</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Brain className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">AI that learns</div>
                  <div className="text-neutral-500">Tell us why grants don't fit—we remember</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/50 to-teal-200/50 rounded-3xl transform -rotate-2"></div>
              <img 
                className="relative w-full h-auto rounded-2xl shadow-xl" 
                src={gotitImage} 
                alt="Person working on research and finding opportunities - Photo by dd dd on Unsplash" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
