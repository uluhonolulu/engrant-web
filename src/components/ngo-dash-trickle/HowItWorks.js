import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Upload Grant Agreement",
            description: "Simply upload your grant agreement PDF and we'll automatically create a custom tracking dashboard."
        },
        {
            number: "02",
            title: "Auto-Setup Dashboard",
            description: "Our AI analyzes your grant document and sets up a custom tracking dashboard with all the metrics you need to monitor."
        },
        {
            number: "03",
            title: "Track Progress",
            description: "Enter your data weekly and track the progress in real time for any potential issues or compliance concerns."
        }
    ];

    return (
        <section id="how-it-works" data-name="how-it-works" data-file="components/HowItWorks.js" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600">
                        Three simple steps to transform your grant tracking
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="text-6xl font-bold text-blue-100 mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16">
                    <img 
                        src="/dashboard-preview.png" 
                        alt="Dashboard Preview" 
                        className="rounded-lg shadow-xl max-w-4xl mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
