import React from 'react';
import Header from '../components/ngo-dash-trickle/Header';
import Hero from '../components/ngo-dash-trickle/Hero';
import PainPoints from '../components/ngo-dash-trickle/PainPoints';
import HowItWorks from '../components/ngo-dash-trickle/HowItWorks';
import Features from '../components/ngo-dash-trickle/Features';
import Pricing from '../components/ngo-dash-trickle/Pricing';
import Trust from '../components/ngo-dash-trickle/Trust';
import FAQ from '../components/ngo-dash-trickle/FAQ';
import WaitlistCTA from '../components/ngo-dash-trickle/WaitlistCTA';
import Footer from '../components/ngo-dash-trickle/Footer';
import Testimonials from '../components/ngo-dash-trickle/Testimonials';
import { ClerkProvider, Waitlist, SignIn  } from '@clerk/clerk-react';


const NgoDashTricklePage = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        // * {
        //   margin: 0;
        //   padding: 0;
        //   box-sizing: border-box;
        // }

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

        .feature-card:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }

        .pain-point:hover {
          transform: scale(1.02);
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }

        .waitlist-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>
      <div className="bg-white text-neutral-700 font-sans">
        <Header />
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Pricing />
        <Trust />
        <FAQ />
		<ClerkProvider publishableKey={process.env.GATSBY_CLERK_PUBLISHABLE_KEY}  >
      		<WaitlistCTA />
  		</ClerkProvider>
        <Footer />
      </div>
    </>
  );
};

export default NgoDashTricklePage;

export const Head = () => <title>NGO Dashboard - Engrant</title>;
