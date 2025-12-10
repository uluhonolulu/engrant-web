import React from 'react';
import { Edit, Target, Brain, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit,
      step: '01',
      title: 'Tell us about your mission',
      description: 'Describe your nonprofit, who you serve, and what you need funding for. If you can write an email, you can use Engrant.'
    },
    {
      icon: Target,
      step: '02',
      title: 'Get your matches in minutes',
      description: 'Our AI researches your organization online, then searches 400,000+ funders to find grants that match your mission, geography, and capacity—not just keywords.'
    },
    {
      icon: Brain,
      step: '03',
      title: 'Save or reject with feedback',
      description: 'Keep grants worth pursuing. Reject ones that don\'t fit and tell us why—wrong geography, amount too large, need consortium partner. Your AI learns your real constraints.'
    },
    {
      icon: Rocket,
      step: '04',
      title: 'Focus on writing, not searching',
      description: 'Each match shows eligibility in plain English, estimated effort level, deadline, and why it fits. Spend your time on proposals, not research.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            How Engrant Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            return (
              <div key={index} className="relative group h-full">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-200 to-amber-200"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 warm-shadow border border-neutral-100 hover:border-teal-200 transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${isEven ? 'bg-amber-100' : 'bg-teal-100'} flex items-center justify-center`}>
                      <IconComponent className={`${isEven ? 'text-amber-600' : 'text-teal-600'} w-6 h-6`} />
                    </div>
                    <span className={`text-4xl font-bold ${isEven ? 'text-amber-200' : 'text-teal-200'}`}>{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-neutral-500 leading-relaxed flex-grow">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
