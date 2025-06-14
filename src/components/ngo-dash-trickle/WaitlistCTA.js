import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function WaitlistCTA() {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
        setEmail('');
    };

    return (
        <section data-name="waitlist-cta" data-file="components/WaitlistCTA.js" className="py-20 bg-blue-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">
                    Join the Waitlist
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Be among the first to experience our revolutionary grant tracking solution. 
                    Sign up now for early access and exclusive benefits.
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                    Join Waitlist
                </button>
            </div>
        </section>
    );
}
