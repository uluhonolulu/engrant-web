import React from 'react';
import { Clock, Target, TrendingUp, Brain, Eye } from 'lucide-react';
import engrantCondensed from '../../images/Engrant-condensed.png';

// RULE: Always import images using ES6 imports (import imageName from 'path/to/image.png')
// Never use direct src paths like "/src/images/image.png" as they won't work in bundled builds

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient min-h-[720px] flex items-center pb-24 pt-12 relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div id="hero-content">
            <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
              Only the grants that fit. In 15 minutes.
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal">
              Stop scrolling through 300 irrelevant results. Engrant's AI matches your mission to grants you're actually eligible for—then explains each one in plain English.
            </h2>
            
            <div id="value-bullets" className="space-y-4 mb-10">
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Clock className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">15 min to matches</span>
                  <span className="text-neutral-500"> — Not weeks of searching</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Target className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">A shortlist, not 300</span>
                  <span className="text-neutral-500"> — Quality over quantity</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <TrendingUp className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Plain English requirements</span>
                  <span className="text-neutral-500"> — No more decoding bureaucracy</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Eye className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Context before commitment</span>
                  <span className="text-neutral-500"> — See considerations upfront</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Brain className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Learns what doesn't fit</span>
                  <span className="text-neutral-500"> — Gets smarter with your feedback</span>
                </div>
              </div>
            </div>
            
            <div id="hero-cta" className="mb-8">
              <a 
                href="https://app.engrant.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
                Get my matches
              </a>
              <p className="text-neutral-500 mt-4 mb-0 flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
          
          <div id="hero-visual" className="hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
              <img 
                className="relative w-full h-[420px] rounded-2xl shadow-2xl object-cover object-left" 
                src={engrantCondensed} 
                alt="Engrant grant matching interface" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl warm-shadow-lg border border-amber-100">
                <div className="text-3xl font-bold text-teal-600">400,000+</div>
                <div className="text-sm text-neutral-500 font-medium">funders in our database</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
