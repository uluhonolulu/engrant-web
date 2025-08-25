import React from 'react';
import { Search, Database, Target, Brain } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Get your perfect EU funding matches in minutes, not weeks
            </h2>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Engrant's AI does the searching so you can focus on changing the world. Our deep research technology understands your unique mission and finds grants that others miss—including successful applications from similar nonprofits.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Search className="text-primary-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">Deep AI Research</div>
                  <div className="text-neutral-600">Not just keyword matching</div>
                </div>
              </div>
              <div className="flex items-start">
                <Database className="text-green-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">27,000+ Opportunities</div>
                  <div className="text-neutral-600">Complete EU funding landscape</div>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="text-purple-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">Top 10 Curated Matches</div>
                  <div className="text-neutral-600">Quality over quantity</div>
                </div>
              </div>
              <div className="flex items-start">
                <Brain className="text-indigo-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">Learning Algorithm</div>
                  <div className="text-neutral-600">Gets better with your feedback</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <img 
              className="w-full h-auto rounded-2xl shadow-xl" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/52e74dd4b1-7029acae420f973020ba.png" 
              alt="AI technology analyzing EU grant documents with interconnected nodes showing funding opportunities" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
