import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { ClerkProvider, SignIn, Waitlist  } from '@clerk/clerk-react';
import WaitingList from '../WaitingList';
import logo from '../../images/Logo_transparent_bg.png';


export default function WaitlistCTA() {

    return (
        <div className="min-h-screen bg-white">
            {/* Header with Logo */}
            <header className="w-full top-0 z-50 bg-white border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center py-4">
                        <div className="flex items-center">
                            <img src={logo} alt="EnGrant Logo" className="h-auto w-28 rounded-lg align-middle" />
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Main Content */}
            <section id="cta" data-name="cta" data-file="components/WaitlistCTA.js" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-neutral-700 mb-8">
                        Reserve Your 50% Discount
                    </h2>
                    <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto">
                        First 25 nonprofits only. 2-week free trial included.
                    </p>
                    <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto font-semibold">
                        Start tracking your grants in 5 minutes. Save 10+ hours per report.
                    </p>
                    <div className="max-w-md mx-auto">
                        <Waitlist afterJoinWaitlistUrl="/book"/>
                    </div>
                </div>
            </section>
        </div>
    );
}
