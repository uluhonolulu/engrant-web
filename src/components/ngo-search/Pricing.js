import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">One simple plan. Built for nonprofits.</h2>
          <p className="text-xl text-neutral-600">Less than one hour of consultant time. Cancel anytime.</p>
        </div>
        
        <div id="pricing-cards" className="max-w-lg mx-auto">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-amber-400 rounded-3xl opacity-20 blur"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border border-teal-100 warm-shadow-lg">
              <h3 className="text-sm font-bold text-teal-600 tracking-wider mb-3">GRANT DISCOVERY PRO</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-slate-800">$47</span>
                <span className="text-xl text-neutral-500 ml-2">/month</span>
              </div>
              <p className="text-teal-600 font-medium mb-8 flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                14-day free trial included
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Unlimited grant searches</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Curated matches per search</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">AI that learns your constraints</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-teal-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Requirements in plain English</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-amber-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">AI proposal draft generation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-amber-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Match explanations and eligibility breakdown</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-amber-600 w-4 h-4" />
                  </div>
                  <span className="text-neutral-600">Priority email support</span>
                </div>
              </div>
              
              <a 
                href="https://app.engrant.eu/?utm_source=landing&utm_medium=pricing&utm_campaign=free_trial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg">
                Start Finding Grants
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-neutral-500 flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>No credit card required to start</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>Proposal drafts included</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>Cancel anytime</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
