import React from 'react';
import { Users, Layers, MapPin } from 'lucide-react';

export default function PainPoints() {
    return (
        <section id="problem" className="section-warm-dark py-24 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <div className="inline-flex items-center bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    The real problem
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                    You're not losing the grants you applied for. You're missing the ones you never saw.
                </h2>
                
                <p className="text-xl text-slate-300 mb-16 leading-relaxed max-w-3xl mx-auto">
                    You know your local funders. You've probably got a spreadsheet of the usual names. So when it's time to find funding, you go back to the ones you already know — because what else is there to check? The problem isn't your shortlist. It's everything that isn't on it: the out-of-state family foundation that funds your exact cause, the corporate giving program no one told you about, the national funder that quietly supports work like yours. No amount of local knowledge — and no single database — puts those in front of you. They stay invisible until someone searches the whole web. That's the gap Engrant closes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
                            <Users className="text-rose-400 w-7 h-7" />
                        </div>
                        <div className="text-xl font-bold text-rose-400 mb-2">The funders you know</div>
                        <div className="text-slate-400">A fraction of what's actually out there</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
                            <Layers className="text-rose-400 w-7 h-7" />
                        </div>
                        <div className="text-xl font-bold text-rose-400 mb-2">One database</div>
                        <div className="text-slate-400">Only ever shows what someone chose to index</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
                            <MapPin className="text-rose-400 w-7 h-7" />
                        </div>
                        <div className="text-xl font-bold text-rose-400 mb-2">Out-of-region funders</div>
                        <div className="text-slate-400">Often the best fit, rarely on your list</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
