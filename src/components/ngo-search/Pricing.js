import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">One simple plan. Built for nonprofits.</h2>
          <p className="text-xl text-neutral-700">Less than one hour of consultant time. Cancel anytime.</p>
        </div>
        
        <div id="pricing-cards" className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">GRANT DISCOVERY PRO</h3>
            <div className="text-3xl font-bold text-primary-700 mb-2">$47<span className="text-lg text-neutral-600">/month</span></div>
            <p className="text-neutral-600 mb-6">14-day free trial included</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Unlimited grant searches</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Curated matches per search</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">AI that learns your constraints</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Requirements in plain English</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">AI proposal draft generation</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Match explanations and eligibility breakdown</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Priority email support</span>
              </div>
            </div>
            
            <a 
              href="https://app.engrant.eu/?utm_source=landing&utm_medium=pricing&utm_campaign=free_trial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-block text-center">
              Start Finding Grants
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-neutral-600">
            No credit card required to start • Proposal drafts included • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
