import React from 'react';
import { Edit, Target, Brain, Rocket, Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit,
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600',
      title: 'Tell us about your mission',
      description: 'Describe your nonprofit, who you serve, and what you need funding for. If you can write an email, you can use Engrant.'
    },
    {
      icon: Target,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Get your matches in minutes',
      description: 'Our AI researches your organization online, then searches 400,000+ funders to find grants that match your mission, geography, and capacity—not just keywords.'
    },
    {
      icon: Brain,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Save or reject with feedback',
      description: 'Keep grants worth pursuing. Reject ones that don\'t fit and tell us why—wrong geography, amount too large, need consortium partner. Your AI learns your real constraints.'
    },
    {
      icon: Rocket,
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'Focus on writing, not searching',
      description: 'Each match shows eligibility in plain English, estimated effort level, deadline, and why it fits. Spend your time on proposals, not research.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            How Engrant Works
          </h2>
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
