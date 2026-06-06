import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import homepageFaqData from '../../data/homepageFaqData';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const faqData = homepageFaqData;

  return (
    <section id="faq" className="py-24 section-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            Questions? Answers.
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-neutral-100 warm-shadow overflow-hidden">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-teal-50/30 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-800 text-lg pr-4">
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openItems.has(index) ? 'bg-teal-500' : 'bg-teal-100'
                }`}>
                  <ChevronDown className={`transition-all duration-300 ${
                    openItems.has(index) ? 'rotate-180 text-white' : 'text-teal-600'
                  }`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.has(index) ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-8 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  function toggleFAQ(index) {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  }
};

export default FAQ;
