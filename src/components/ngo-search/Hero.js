import React from 'react';
import { Clock, Target, TrendingUp, Brain } from 'lucide-react';
import ngoSearchHero from '../../images/ngo-search-hero.jpg';

// RULE: Always import images using ES6 imports (import imageName from 'path/to/image.png')
// Never use direct src paths like "/src/images/image.png" as they won't work in bundled builds

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary-50 via-white to-green-50 min-h-[700px] flex items-center pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div id="hero-content">
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              10 perfect grants. 15 minutes.
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-neutral-700 mb-8 leading-relaxed">
              Stop scrolling through 300 irrelevant results. Engrant's AI matches your mission to grants you're actually eligible for—then explains each one in plain English.
            </h2>
            
            <div id="value-bullets" className="space-y-4 mb-8">
              <div className="flex items-center text-lg">
                <Clock className="text-primary mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">15 min to matches</span>
                <span className="text-neutral-700">- Not weeks of searching</span>
              </div>
              <div className="flex items-center text-lg">
                <Target className="text-green-600 mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">Only 10, not 300</span>
                <span className="text-neutral-700">- Quality over quantity</span>
              </div>
              <div className="flex items-center text-lg">
                <TrendingUp className="text-primary mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">Plain English requirements</span>
                <span className="text-neutral-700">- No more decoding bureaucracy</span>
              </div>
              <div className="flex items-center text-lg">
                <Brain className="text-green-600 mr-3" />
                <span className="font-semibold text-neutral-900 mr-2">Learns what doesn't fit</span>
                <span className="text-neutral-700">- Gets smarter with your feedback</span>
              </div>
            </div>
            
            <div id="hero-cta" className="mb-8">
              <a 
                href="https://app.engrant.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg inline-block">
                Get My 10 Grants
              </a>
              <p className="text-neutral-600 mt-3 mb-0">14-day free trial • No credit card required</p>
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
                <div className="text-2xl font-bold text-primary">400,000+</div>
                <div className="text-sm text-neutral-600">funders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
