import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      question: "How is this different from other grant databases?",
      answer: "Other tools return 400+ results and leave you to evaluate each one. Engrant returns 30–50 pre-evaluated grants, each with fit analysis, eligibility breakdown, red flags, competition signals, and strategic considerations. Plus, Engrant isn't limited to a static database — our AI researches across the entire web, so you're not missing opportunities that aren't in someone else's index."
    },
    {
      question: "How does the AI understand the organization?",
      answer: "Enter the organization's name or website, and Engrant's AI researches it automatically. When you save or reject grants, you tell us why — \"wrong geographic focus,\" \"amount too large,\" \"requires consortium partner.\" The AI learns the real constraints for each organization you work with, not just keywords."
    },
    {
      question: "Can I use Engrant for multiple organizations?",
      answer: "Yes. You can create separate profiles for as many organizations as you need — whether you're a consultant serving multiple clients or managing grants for different programs within one nonprofit. Each profile gets its own AI learning, so feedback for one organization doesn't affect another's recommendations."
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
      answer: "$47/month with a 14-day free trial. No credit card required to start. Unlimited organizations, unlimited searches. That's less than one hour of consultant time — and you can cancel anytime. Proposal drafts included."
    },
    {
      question: "Do you have grants for [my sector/region]?",
      answer: "Engrant isn't limited to a static database. Our AI researches foundation, corporate, and government grant opportunities across the web — covering North America, Europe, and beyond. When you describe the organization and its location, the AI filters to opportunities the organization is actually eligible for."
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
