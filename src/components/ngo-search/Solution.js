import React from 'react';
import { Search, Database, Target, Brain } from 'lucide-react';
import gotitImage from '../../images/gotit.jpg';

const Solution = () => {
  return (
    <section id="solution" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Your 10 best-fit grants. Every time.
            </h2>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Describe your nonprofit in plain language. Engrant's AI researches your organization, searches 400,000+ funders, and returns only the grants that match your mission, geography, and capacity. Each match includes eligibility requirements translated to plain English—so you can decide in seconds, not hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Search className="text-primary-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">Requirements translated</div>
                  <div className="text-neutral-600">Eligibility criteria in plain language</div>
                </div>
              </div>
              <div className="flex items-start">
                <Database className="text-green-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">400,000+ funders</div>
                  <div className="text-neutral-600">Foundation, corporate, and government</div>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="text-purple-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">10 curated matches</div>
                  <div className="text-neutral-600">Only grants you're actually eligible for</div>
                </div>
              </div>
              <div className="flex items-start">
                <Brain className="text-indigo-600 mt-1 mr-4" />
                <div>
                  <div className="font-semibold text-neutral-900">AI that learns</div>
                  <div className="text-neutral-600">Tell us why grants don't fit—we remember</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <img 
              className="w-full h-auto rounded-2xl shadow-xl" 
              src={gotitImage} 
              alt="Person working on research and finding opportunities - Photo by dd dd on Unsplash" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
