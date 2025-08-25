import React from 'react';
import { Check, X, Heart } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-neutral-700">Start with 3 free searches. No credit card required.</p>
        </div>
        
        <div id="pricing-cards" className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Try It First</h3>
            <div className="text-4xl font-bold text-primary-700 mb-2">Free</div>
            <p className="text-neutral-600 mb-6">3 searches included</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Core search functionality</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">AI training & feedback</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Basic match explanations</span>
              </div>
              <div className="flex items-center">
                <X className="text-neutral-400 mr-3" />
                <span className="text-neutral-400">Email alerts</span>
              </div>
              <div className="flex items-center">
                <X className="text-neutral-400 mr-3" />
                <span className="text-neutral-400">Proposal drafts</span>
              </div>
            </div>
            
            <button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-3 px-6 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
          </div>
          
          {/* Pay-What-You-Can Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative border-2 border-primary-700">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-700 text-white px-4 py-1 rounded-full text-sm font-medium">MOST FLEXIBLE</span>
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">For Nonprofits</h3>
            <div className="text-4xl font-bold text-primary-700 mb-2">€20-50<span className="text-lg text-neutral-600">/month</span></div>
            <p className="text-neutral-600 mb-6">You choose what works</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Unlimited searches</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">AI training & feedback</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Weekly email alerts</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Full match explanations</span>
              </div>
              <div className="flex items-center">
                <X className="text-neutral-400 mr-3" />
                <span className="text-neutral-400">Proposal drafts</span>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Professional</h3>
            <div className="text-4xl font-bold text-primary-700 mb-2">€50<span className="text-lg text-neutral-600">/month</span></div>
            <p className="text-neutral-600 mb-6">For serious grant seekers</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Everything in Pay-What-You-Can</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Daily priority alerts</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">AI proposal draft generation</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Priority support</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" />
                <span className="text-neutral-700">Advanced analytics</span>
              </div>
            </div>
            
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Go Professional
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-neutral-600">
            <Heart className="text-green-500 mr-2 inline" />
            Nonprofit-friendly pricing • Cancel anytime • Success fee option available (1% of grants won)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
