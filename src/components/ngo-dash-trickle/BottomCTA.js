import React from 'react';

export default function BottomCTA() {
    const navigateToWaitlist = () => {
        window.location.href = '/waitlist';
    };

    return (
        <section id="cta" data-name="bottom-cta" data-file="components/BottomCTA.js" className="py-20 bg-neutral-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">
                    Reserve Your 50% Discount
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    First 25 nonprofits only. 2-week free trial included.
                </p>
                <p className="text-lg text-yellow-200 mb-8 max-w-2xl mx-auto font-semibold">
                    Start tracking your grants in 5 minutes. Save 10+ hours per report.
                </p>
                <div className="max-w-md mx-auto">
                    <button 
                        onClick={navigateToWaitlist}
                        className="w-full bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg waitlist-glow cursor-pointer">
                        Get Your Dashboard
                    </button>
                </div>
            </div>
        </section>
    );
} 