import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Pricing() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="pricing" data-name="pricing" data-file="components/Pricing.js" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Join the Waiting List for 50% Off Forever
                    </h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <div className="text-center mb-8">
                            <p className="text-gray-600 mb-2">Regular price:</p>
                            <p className="text-3xl font-bold text-gray-400 line-through">$200/month</p>
                            <p className="text-sm text-gray-500">(coming soon)</p>
                        </div>
                        <div className="text-center mb-8">
                            <p className="text-blue-600 font-semibold mb-2">Waitlist price:</p>
                            <p className="text-5xl font-bold text-blue-600">$100/month</p>
                            <p className="text-blue-600 font-semibold">for lifetime</p>
                        </div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <DynamicIcon name="check" className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-600">Unlimited users and grants</span>
                            </li>
                            <li className="text-center text-gray-600 italic">
                                Need an additional nonprofit discount? Just ask.
                            </li>
                        </ul>
                        <button 
                            onClick={scrollToWaitlist}
                            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                            Join the Waiting List - 50% Off Forever
                        </button>
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                            alt="Split screen showing before and after - left side: person surrounded by stacks of paper looking stressed, right side: same person relaxed at computer with dashboard on screen - style: friendly illustration, diverse representation"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
