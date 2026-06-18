import React from 'react';
import { Compass, Globe, CheckCircle, Calendar, PenTool } from 'lucide-react';
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
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              For in-house nonprofit fundraisers
            </div>

            <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
              Find the grants that aren't on your radar.
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal">
              You've got a mental shortlist — the local foundations, the names you apply to every year. But the grant that fits you best might come from a funder you'd never think to check. Engrant searches the entire web, surfaces the eligible grants beyond your radar, and tells you why you qualify, how to apply, and when it's due.
            </h2>
            
            <div id="value-bullets" className="space-y-4 mb-10">
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Compass className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Grants beyond your radar</span>
                  <span className="text-neutral-500"> — not just the funders you already know</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Globe className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Searches the whole web</span>
                  <span className="text-neutral-500"> — not one fixed database</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <CheckCircle className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Eligibility, explained</span>
                  <span className="text-neutral-500"> — why you actually qualify, in plain English</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Calendar className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">How and when to apply</span>
                  <span className="text-neutral-500"> — requirements and deadlines upfront</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <PenTool className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Application help when you need it</span>
                  <span className="text-neutral-500"> — drafts the proposal with you once you've found the one</span>
                </div>
              </div>
            </div>
            
            <div id="hero-cta" className="mb-8">
              <a 
                href="https://app.engrant.eu/?utm_source=ngo_search&utm_medium=cta&utm_campaign=hero_cta"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      location: 'hero'
                    });
                  }
                }}
                className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
                Find grants I'm missing
              </a>
              <p className="text-neutral-500 mt-4 mb-0 flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
          
          <div id="hero-visual" className="mt-12 lg:mt-0">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
              <img 
                className="relative w-full h-auto rounded-2xl shadow-2xl" 
                src={engrantCondensed} 
                alt="Engrant grant matching interface" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
