import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleFAQ = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "I already know my local funders — what will Engrant find that I can't?",
      answer: "Plenty. Engrant searches the entire web, so it surfaces funders beyond your region and outside your usual list — out-of-state foundations, corporate programs, and national funders that support your cause but never show up on a local search. It then tells you why you qualify, how to apply, and when it's due."
    },
    {
      question: "How is this different from other grant databases?",
      answer: "A database only contains what someone chose to index, and you still do all the filtering yourself. Engrant researches the live web and returns eligible grants with the analysis already done — including opportunities no single database lists."
    },
    {
      question: "How does the AI understand my nonprofit?",
      answer: "You describe your mission in plain language, and our AI researches your organization online. When you save or reject grants, you tell us why—\"wrong geographic focus,\" \"amount too large,\" \"requires consortium partner.\" The AI learns your real constraints, not just keywords."
    },
    {
      question: "What about data privacy?",
      answer: "Your data is used for your searches only. We never share your information with other organizations or use it to help competitors. Every nonprofit is unique, and we treat your data that way."
    },
    {
      question: "Do I need technical skills?",
      answer: "If you can write an email, you can use Engrant. Describe your mission in plain language—that's it."
    },
    {
      question: "How quickly can I get started?",
      answer: "Sign up in under a minute. Describe your mission, and you'll have your curated matches within 15 minutes."
    },
    {
      question: "What if I only need one grant?",
      answer: "Perfect. You only need to win one. Many nonprofits find that one ideal grant through Engrant that makes all the difference."
    },
    {
      question: "How much does it cost?",
      answer: "$47/month with a 14-day free trial. No credit card required to start. That's less than one hour of consultant time—and you can cancel anytime. Proposal drafts included."
    },
    {
      question: "Do you have grants for [my sector/region]?",
      answer: "Engrant isn't limited to a fixed list. It researches foundation, corporate, and government funders across the web. Describe your mission and location, and it filters to the opportunities you're actually eligible for."
    }
  ];

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
};

export default FAQ;
