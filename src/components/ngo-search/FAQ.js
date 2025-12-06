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
      question: "How is this different from other grant databases?",
      answer: "Traditional databases show you 300+ results and leave you to filter. Engrant shows you 10 curated matches that actually fit your mission, geography, and capacity. Each match includes eligibility requirements in plain English and an explanation of why it fits—so you can decide in seconds, not hours."
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
      answer: "We cover foundation, corporate, and government grants from 400,000+ funders across North America, Europe, and beyond. When you describe your mission and location, our AI filters to opportunities you're actually eligible for."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-neutral-900 text-center mb-16">
          Questions? Answers.
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-neutral-900">
                  {item.question}
                </span>
                <ChevronDown className={`text-neutral-500 transition-transform ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`px-6 pb-4 text-neutral-700 transition-all duration-300 ${
                openItems.has(index) ? 'block' : 'hidden'
              }`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
