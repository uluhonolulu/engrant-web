import React from 'react';
import { Clock, Target, TrendingDown } from 'lucide-react';

export default function PainPoints() {
    return (
        <section id="problem" className="bg-neutral-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                    300 results. 15 hours. Still nothing that fits.
                </h2>
                
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                    You're the only development professional at your nonprofit. Your ED wants more applications. Your board wants higher win rates. And you're spending 15+ hours every week scrolling through clunky databases that return hundreds of irrelevant opportunities—just to find 2-3 that might actually work.
                </p>
                
                <p className="text-xl text-neutral-300 mb-12 leading-relaxed font-semibold">
                    One in three nonprofit applications go to grants they weren't even eligible for. That's not a strategy. That's exhaustion.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Clock className="text-red-400 text-3xl mb-4 mx-auto w-8 h-8" />
                        <div className="text-3xl font-bold text-red-400 mb-2">15+ hours/week</div>
                        <div className="text-neutral-400">spent on grant research</div>
                    </div>
                    <div className="text-center">
                        <Target className="text-red-400 text-3xl mb-4 mx-auto w-8 h-8" />
                        <div className="text-3xl font-bold text-red-400 mb-2">1 in 3 applications</div>
                        <div className="text-neutral-400">go to ineligible grants</div>
                    </div>
                    <div className="text-center">
                        <TrendingDown className="text-red-400 text-3xl mb-4 mx-auto w-8 h-8" />
                        <div className="text-3xl font-bold text-red-400 mb-2">Under 20%</div>
                        <div className="text-neutral-400">typical win rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
