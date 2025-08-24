import React, { useState } from 'react';

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
      answer: "Unlike traditional databases that require manual searching, Engrant's AI actively matches your unique mission with opportunities, including the 70% of grants others miss. We find different grants, not just the same ones faster."
    },
    {
      question: "How does the AI understand my nonprofit?",
      answer: "You describe your mission in plain language, and our AI researches your organization online. As you mark grants as relevant or not, it learns your specific needs—getting smarter with each search."
    },
    {
      question: "What about data privacy?",
      answer: "Every nonprofit is unique, so your data is used for your searches only. We never share your information with other organizations or use it to help competitors."
    },
    {
      question: "Do I need technical skills?",
      answer: "If you can write an email, you can use Engrant. There's nothing to learn—it's much easier than traditional search tools."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get your first matches in minutes without even registering. Just describe your mission and go."
    },
    {
      question: "What if I only need one grant?",
      answer: "Perfect! You only need to win one. Many nonprofits find that one ideal grant through Engrant that makes all the difference."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-neutral-900 text-center mb-16">
          Frequently Asked Questions
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
                <i className={`fa-solid fa-chevron-down text-neutral-500 transition-transform ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}></i>
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
