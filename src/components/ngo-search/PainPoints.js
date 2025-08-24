import React from 'react';
import { Clock, Target, TrendingDown } from 'lucide-react';

export default function PainPoints() {
    return (
        <section id="problem" className="bg-neutral-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                    The EU grant search is broken
                </h2>
                
                <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
                    Nonprofits waste 2-4 weeks searching for EU grants and miss 70% of suitable opportunities, forcing them to compete for the same well-known programs where success rates drop below 20%.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Clock className="text-red-400 text-3xl mb-4 mx-auto w-8 h-8" />
                        <div className="text-3xl font-bold text-red-400 mb-2">60+ hours</div>
                        <div className="text-neutral-400">wasted weekly on grant research</div>
                    </div>
                    <div className="text-center">
                        <Target className="text-red-400 text-3xl mb-4 mx-auto w-8 h-8" />
                        <div className="text-3xl font-bold text-red-400 mb-2">70% missed</div>
                        <div className="text-neutral-400">suitable opportunities</div>
                    </div>
                    <div className="text-center">
                        <TrendingDown className="text-red-400 text-3xl mb-4 mx-auto w-8 h-8" />
                        <div className="text-3xl font-bold text-red-400 mb-2">8-20% success</div>
                        <div className="text-neutral-400">typical grant success rates</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
