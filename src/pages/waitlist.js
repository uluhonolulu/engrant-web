import React from 'react';
import '../styles/shared.css';
import WaitlistCTA from '../components/ngo-dash-trickle/WaitlistCTA';
import { ClerkProvider } from '@clerk/clerk-react';

const WaitlistPage = () => {
  return (
    <div className="bg-white text-neutral-700 font-inter min-h-screen">
      <ClerkProvider publishableKey={process.env.GATSBY_CLERK_PUBLISHABLE_KEY}>
        <WaitlistCTA />
      </ClerkProvider>
    </div>
  );
};

export default WaitlistPage;

export const Head = () => (
  <>
    <title>Reserve Your Discount - Engrant</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
); 