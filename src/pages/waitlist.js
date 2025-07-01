import React from 'react';
import WaitlistCTA from '../components/ngo-dash-trickle/WaitlistCTA';
import { ClerkProvider } from '@clerk/clerk-react';

const WaitlistPage = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .nonprofit-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
        }

        .glass-effect {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.90);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .waitlist-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>
      <div className="bg-white text-neutral-700 font-sans min-h-screen">
        <ClerkProvider publishableKey={process.env.GATSBY_CLERK_PUBLISHABLE_KEY}>
          <WaitlistCTA />
        </ClerkProvider>
      </div>
    </>
  );
};

export default WaitlistPage;

export const Head = () => <title>Reserve Your Discount - Engrant</title>; 