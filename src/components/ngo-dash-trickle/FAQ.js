import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function FAQ() {
    const faqs = [
        {
            question: "What is EnGrant?",
            answer: "EnGrant is a specialized platform that helps NGOs track and manage their grant agreements. It automatically creates a custom tracking dashboard from your grant agreement PDF, making it easy to monitor progress and ensure compliance."
        },
        {
            question: "How does it work?",
            answer: "Simply upload your grant agreement PDF, and our AI will automatically set up a custom tracking dashboard. You can then track your progress through weekly data entries, with automatic alerts for any potential issues."
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we take data security seriously. We use secure cloud storage and don't require any personal client information. You can export your data anytime."
        },
        {
            question: "What if I have existing data I want to bring into EnGrant?",
            answer: "No worries! If you have existing data, just let us know and we'll handle importing your data into EnGrant for you."
        }
    ];

	const [openIndex, setOpenIndex] = React.useState(null)

    return (
        <section id="faq" data-name="faq" data-file="components/FAQ.js" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Got Questions? We've Got Answers
                    </h2>
                    <p className="text-xl text-gray-600">
                        Real concerns from nonprofit leaders like you
                    </p>
                </div>
                
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg">
                            <button 
                                className="w-full p-6 text-left flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <DynamicIcon name={openIndex === index ? "chevron-up" : "chevron-down"} className="w-5 h-5 text-neutral-600" />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
