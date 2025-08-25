import React from 'react';
import { Edit, Target, Brain, Rocket, Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit,
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600',
      title: 'Tell us about your mission',
      description: 'Describe your nonprofit and current project in plain language - if you can write an email, you can use Engrant.'
    },
    {
      icon: Target,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Get your top 10 matches in minutes',
      description: 'Our AI searches 27,000+ EU funding opportunities and finds the hidden gems others miss - including past successful applications from similar nonprofits.'
    },
    {
      icon: Brain,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Train your AI with feedback',
      description: 'Mark grants as irrelevant and explain why. Your AI gets smarter with each search, understanding your unique needs better than any database.'
    },
    {
      icon: Rocket,
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'Focus on the best opportunities',
      description: 'Each match shows why it fits your mission, eligibility requirements, and deadlines - so you can spend time applying instead of searching.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            How Engrant Works
          </h2>
          <div className="flex items-center justify-center">
            <Check className="text-green-600 mr-2" />
            <span className="text-lg text-green-700 font-medium">No registration required to start searching</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200">
                <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className={`${step.iconColor} text-xl`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
