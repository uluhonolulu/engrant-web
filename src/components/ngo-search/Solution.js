import React from 'react';
import { Globe, Search, CheckCircle, PenTool } from 'lucide-react';
import gotitImage from '../../images/gotit.jpg';

const Solution = () => {
  return (
    <section id="solution" className="section-cream py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              The solution
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Your best-fit grants — including the ones you'd never have found.
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Describe your nonprofit in plain language. Engrant's AI researches your organization, then searches across the web — foundation, corporate, and government funders — for grants that match your mission, geography, and capacity. It surfaces the eligible opportunities you already know and the ones you don't. Each match comes with eligibility in plain English, how to apply, and the deadline — and when you're ready, Engrant drafts the application with you.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <Globe className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Beyond your radar</div>
                  <div className="text-neutral-500">Funders outside your region and your usual list</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Search className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">The whole web, not a database</div>
                  <div className="text-neutral-500">Live research, not a static index someone else built</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <CheckCircle className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Eligibility, explained</div>
                  <div className="text-neutral-500">Why you qualify, and what to watch for</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <PenTool className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Help to apply</div>
                  <div className="text-neutral-500">Deadlines, requirements, and a proposal draft when you need it</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 hidden lg:block">
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
