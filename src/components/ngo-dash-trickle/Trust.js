import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Trust() {
    const trustPoints = [
        {
            icon: "shield-check",
            title: "No personal client information needed"
        },
        {
            icon: "cloud",
            title: "Secure cloud storage"
        },
        {
            icon: "download",
            title: "Export your data anytime"
        }
    ];

    return (
        <section data-name="trust" data-file="components/Trust.js" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Your Data is Safe
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {trustPoints.map((point, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <DynamicIcon name={point.icon} className="w-8 h-8 text-blue-600" />
                            </div>
                            <p className="text-lg font-medium text-gray-900">{point.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
