import React from 'react';
import { Clock, Target, TrendingDown } from 'lucide-react';

export default function PainPoints() {
    return (
        <section id="problem" className="section-warm-dark py-24 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                    400 results. Half a day gone. Still nothing worth pursuing.
                </h2>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                    If you're a grant consultant or run a boutique fundraising shop, you win or lose on one thing: how fast you can put fundable, eligible grants in front of each client. Every hour spent sifting raw search results is an hour you can't bill — or a client you can't take on.
                </p>
                
                <p className="text-xl text-amber-200 mb-16 leading-relaxed font-medium">
                    Checking eligibility. Researching funders. Assessing competition. Flagging red flags. That's hours of work per search — and one in three applications still go to grants the organization wasn't even eligible for. That's not a workflow. That's a tax on your time.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
                            <Clock className="text-rose-400 w-7 h-7" />
                        </div>
                        <div className="text-3xl font-bold text-rose-400 mb-2">12+ days</div>
                        <div className="text-slate-400">1 in 5 grant writers need this long just to find five good-fit funders (Instrumentl)</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
                            <Target className="text-rose-400 w-7 h-7" />
                        </div>
                        <div className="text-3xl font-bold text-rose-400 mb-2">6–8 hours/week</div>
                        <div className="text-slate-400">lost to manual prospecting across databases and funder sites</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
                            <TrendingDown className="text-rose-400 w-7 h-7" />
                        </div>
                        <div className="text-3xl font-bold text-rose-400 mb-2">34% of nonprofits</div>
                        <div className="text-slate-400">have lost federal funding or expect to (CEP, 2025)</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
