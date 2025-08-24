import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary-50 via-white to-green-50 h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div id="hero-content">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <i className="fa-solid fa-search mr-2"></i>
              No registration required to start searching
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Stop competing for the same crowded EU grants
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-neutral-700 mb-8 leading-relaxed">
              While others spend weeks finding the obvious funds, Engrant's AI discovers all your matches in minutes—including the 70% everyone else misses
            </h2>
            
            <div id="value-bullets" className="space-y-4 mb-8">
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-clock text-primary mr-3"></i>
                <span className="font-semibold text-neutral-900 mr-2">2-4 weeks → 15 minutes</span>
                <span className="text-neutral-700">- From weeks of searching to minutes</span>
              </div>
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-bullseye text-green-600 mr-3"></i>
                <span className="font-semibold text-neutral-900 mr-2">Find the hidden 70%</span>
                <span className="text-neutral-700">- Discover grants others miss</span>
              </div>
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-chart-line text-primary mr-3"></i>
                <span className="font-semibold text-neutral-900 mr-2">2-4x higher success rates</span>
                <span className="text-neutral-700">- Match like the consultants do</span>
              </div>
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-brain text-green-600 mr-3"></i>
                <span className="font-semibold text-neutral-900 mr-2">AI that learns your mission</span>
                <span className="text-neutral-700">- Gets smarter with every search</span>
              </div>
            </div>
            
            <div id="hero-cta">
              <button className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg">
                Get Your First Search Results
              </button>
              <p className="text-neutral-600 mt-3">No registration required • 3 free searches</p>
            </div>
          </div>
          
          <div id="hero-visual" className="hidden lg:block">
            <div className="relative">
              <img 
                className="w-full h-96 rounded-xl shadow-2xl object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/55a033f98f-34a37c774f029fc15534.png" 
                alt="EU grants dashboard interface with interconnected nodes, modern blue and green color scheme, professional nonprofit technology illustration" 
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold text-primary">27,000+</div>
                <div className="text-sm text-neutral-600">Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
