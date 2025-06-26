import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Gift } from 'lucide-react';
import logo from '../images/Logo_transparent_bg.png';

const BookPage = () => {
  return (
    <div className="bg-white text-neutral-700 font-sans min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="p-6 container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="EnGrant Logo" className="h-36 w-auto rounded-lg align-middle" />
        </div>
        <div>
          <Link to="/ngo-dash" className="text-primary-600 hover:text-primary-700 font-semibold">
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="grow flex items-center justify-center">
        <div className="text-center py-20 px-4 max-w-3xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}
            >
                <div className="inline-block bg-green-100 rounded-full p-4 mb-6">
                    <Gift className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
                    You're on the list! Thank you.
                </h1>
                <p className="text-xl text-neutral-600 mb-8">
                    Want to skip the line and get early access when we launch in early July 2025?
                </p>
                <div className="bg-neutral-50 p-8 rounded-2xl shadow-lg border">
                    <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Get a Free, Personalized Onboarding</h2>
                    <p className="text-neutral-600 mb-8">
                        As a thank you for being an early supporter, we're offering a free, 30-minute onboarding call. We'll personally help you set up your first grant dashboard and give you early access when Engrant launches in early July 2025.
                    </p>
                    <a 
                        href="https://calendly.com/uluhonolulu/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary-600 text-white px-10 py-4 rounded-full hover:bg-primary-700 transition-colors text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
                    >
                        <Calendar className="w-6 h-6 mr-3" />
                        Book Your Onboarding Call
                    </a>
                    <p className="text-sm text-neutral-500 mt-6">
                        Limited spots available. This is your chance to get a head start and help shape the future of Engrant.
                    </p>
                </div>
            </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 text-neutral-500 py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Engrant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BookPage;

export const Head = () => <title>Book Your Onboarding Call - Engrant</title>; 