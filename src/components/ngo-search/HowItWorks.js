import React from 'react';
import { Edit, Globe, Brain, PenTool } from 'lucide-react';
import engrantExpanded from '../../images/Engrant-expanded.png';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit,
      step: '01',
      title: 'Describe your mission',
      description: 'Tell Engrant who you serve and what you need funding for. If you can write an email, you can use it.'
    },
    {
      icon: Globe,
      step: '02',
      title: 'Get matches from across the web',
      description: 'Engrant researches your org, then searches the whole web — not one database — and surfaces eligible grants, including funders you\'d never think to check.'
    },
    {
      icon: Brain,
      step: '03',
      title: 'Save or reject with feedback',
      description: 'Keep what fits, reject what doesn\'t and say why. Engrant learns your real constraints.'
    },
    {
      icon: PenTool,
      step: '04',
      title: 'See how to apply, and get help',
      description: 'Each grant comes with eligibility in plain English, the deadline, and what it takes to apply. When you\'re ready, Engrant drafts the proposal with you.'
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
        
        {/* Expanded screenshot under Step 4 */}
        <div className="mt-16 flex justify-center">
          <div className="relative max-w-5xl w-full">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
            <img 
              src={engrantExpanded} 
              alt="Engrant grant matching interface - expanded view" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
