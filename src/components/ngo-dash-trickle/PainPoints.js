import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function PainPoints() {
    const painPoints = [
        {
            icon: "alert-triangle",
            text: "Manual tracking in spreadsheets is error-prone and time-consuming"
        },
        {
            icon: "clock",
            text: "Late reports due to scattered data across multiple systems"
        },
        {
            icon: "file-x",
            text: "Missing compliance requirements leading to grant penalties"
        },
        {
            icon: "users",
            text: "Team members struggle to find the information they need"
        }
    ];

    return (
        <section data-name="pain-points" data-file="components/PainPoints.js" className="py-20 bg-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Are You Drowning in Grant Paperwork?
                    </h2>
                    <p className="text-xl text-gray-600">
                        You're spending 80% of your time on reporting, not serving your community
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {painPoints.map((point, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <DynamicIcon name={point.icon} className="w-6 h-6 text-red-600" />
                            </div>
                            <p className="text-gray-600">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
