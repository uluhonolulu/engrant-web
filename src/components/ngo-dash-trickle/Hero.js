import React from 'react';

export default function Hero() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
    };
	
    return (
        <section data-name="hero" data-file="components/Hero.js" className="nonprofit-gradient min-h-screen flex items-center relative overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Never Count Papers for 
                            <span className="text-yellow-300"> Grant Reports</span> Again
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Track grant outcomes in real-time with dashboards that build themselves from your grant agreements
                        </p>
                        <div className="mb-8">
                            <button 
                                onClick={scrollToWaitlist}
                                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg waitlist-glow cursor-pointer">
                                Join the Waiting List
                            </button>
                            <p className="text-sm text-blue-200 mt-3">
                                Be first to access • 50% lifetime discount for early adopters
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="animate-float">
                            <img 
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Modern dashboard interface showing multiple grant progress bars, pie charts for demographics served, and a weekly data entry modal - style: clean, professional, light background with blue and green accents"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
