import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { ClerkProvider, SignIn, Waitlist  } from '@clerk/clerk-react';
import WaitingList from '../WaitingList';


export default function WaitlistCTA() {

    return (
        <section id="waitlist" data-name="waitlist-cta" data-file="components/WaitlistCTA.js" className="py-20 bg-neutral-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">
                    Join the Waitlist
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Be among the first to experience our revolutionary grant tracking solution. 
                    Sign up now for early access and exclusive benefits.
                </p>
                <p className="text-lg text-yellow-200 mb-8 max-w-2xl mx-auto font-semibold">
                    Get a <span className="text-yellow-300">2-week free trial</span> when you join the waitlist!
                </p>
				<div className="max-w-md mx-auto">
					<Waitlist afterJoinWaitlistUrl="/book"/>
				</div>
            </div>
        </section>
    );
}
