import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { ClerkProvider, Waitlist  } from '@clerk/clerk-react';
import WaitingList from '../WaitingList';


export default function WaitlistCTA() {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
        setEmail('');
    };

    return (
        <section data-name="waitlist-cta" data-file="components/WaitlistCTA.js" className="py-20 bg-neutral-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">
                    Join the Waitlist
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Be among the first to experience our revolutionary grant tracking solution. 
                    Sign up now for early access and exclusive benefits.
                </p>
				<div className="max-w-md mx-auto">
					<ClerkProvider publishableKey={process.env.GATSBY_CLERK_PUBLISHABLE_KEY} waitlistUrl="http://localhost" >
					<Waitlist  />
					</ClerkProvider>
				</div>
            </div>
        </section>
    );
}
