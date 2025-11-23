import React from 'react';
import { Search, Clock, Target, TrendingUp, Brain } from 'lucide-react';
import ngoSearchHero from '../../images/ngo-search-hero.jpg';

// RULE: Always import images using ES6 imports (import imageName from 'path/to/image.png')
// Never use direct src paths like "/src/images/image.png" as they won't work in bundled builds

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary-50 via-white to-green-50 min-h-[700px] flex items-center pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div id="hero-content">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Search className="mr-2" />
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
                <Clock className="text-primary mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">2-4 weeks → 15 minutes</span>
                <span className="text-neutral-700">- From weeks of searching to minutes</span>
              </div>
              <div className="flex items-center text-lg">
                <Target className="text-green-600 mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">Find the hidden 70%</span>
                <span className="text-neutral-700">- Discover grants others miss</span>
              </div>
              <div className="flex items-center text-lg">
                <TrendingUp className="text-primary mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">2-4x higher success rates</span>
                <span className="text-neutral-700">- Match like the consultants do</span>
              </div>
              <div className="flex items-center text-lg">
                <Brain className="text-green-600 mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">AI that learns your mission</span>
                <span className="text-neutral-700">- Gets smarter with every search</span>
              </div>
            </div>
            
            <div id="hero-cta" className="mb-8">
              <a 
                href="https://app.engrant.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg inline-block">
                Find Your Perfect Grant
              </a>
              <p className="text-neutral-600 mt-3 mb-0">No registration required • 3 free searches</p>
            </div>
          </div>
          
          <div id="hero-visual" className="hidden lg:block">
            <div className="relative">
              <img 
                className="w-full h-96 rounded-xl shadow-2xl object-cover" 
                src={ngoSearchHero} 
                alt="Diverse team working together on community projects - Photo by Rineshkumar Ghirao on Unsplash" 
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
