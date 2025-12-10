import React from 'react';
import { Search, Database, Target, Brain } from 'lucide-react';
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
              Your best-fit grants. Every time.
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Describe your nonprofit in plain language. Engrant's AI researches your organization, searches 400,000+ funders, and returns only the grants that match your mission, geography, and capacity. Each match includes eligibility requirements translated to plain English—so you can decide in seconds, not hours.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <Search className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Requirements translated</div>
                  <div className="text-neutral-500">Eligibility criteria in plain language</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Database className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">400,000+ funders</div>
                  <div className="text-neutral-500">Foundation, corporate, and government</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <Target className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Curated matches</div>
                  <div className="text-neutral-500">Only grants you're actually eligible for</div>
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
