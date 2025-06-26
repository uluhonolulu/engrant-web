import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Features() {
    const features = [
        {
            icon: "upload",
            title: "Upload Grant Agreement",
            description: "Simply upload your grant agreement PDF and we'll automatically create a custom tracking dashboard."
        },
        {
            icon: "bar-chart",
            title: "Track Progress",
            description: "Monitor your progress with weekly data entries and automatic alerts for any potential issues."
        },
        {
            icon: "file-text",
            title: "Generate Reports",
            description: "Reports are automatically generated and sent to your board, keeping everyone informed without manual effort."
        }
    ];

    return (
        <section id="features" data-name="features" data-file="components/Features.js" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to manage your grants effectively
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <DynamicIcon name={feature.icon} className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
