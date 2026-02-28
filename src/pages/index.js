import React from 'react';
import '../styles/shared.css';
import Header from '../components/homepage/Header';
import Hero from '../components/homepage/Hero';
import PainPoints from '../components/homepage/PainPoints';
import Solution from '../components/homepage/Solution';
import HowItWorks from '../components/homepage/HowItWorks';
import ValueComparison from '../components/homepage/ValueComparison';
import Pricing from '../components/homepage/Pricing';
import WhoThisIsFor from '../components/homepage/WhoThisIsFor';
import Trust from '../components/homepage/Trust';
import Testimonials from '../components/homepage/Testimonials';
import RecentGrantsCarousel from '../components/ngo-search/RecentGrantsCarousel';
import LoomVideo from '../components/ngo-search/LoomVideo';
import FAQ from '../components/homepage/FAQ';
import FinalCTA from '../components/homepage/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen">
        <Header />
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <LoomVideo />
        <ValueComparison />
        <Pricing />
        <WhoThisIsFor />
        <Trust />
        <Testimonials />
        <RecentGrantsCarousel />
        <FAQ />
        <FinalCTA />
        <Footer tagline="AI-powered grant research for nonprofit professionals" />
    </div>
  );
};

export default HomePage;

export const Head = () => (
  <>
    <title>Pre-Evaluated Grant Opportunities for Nonprofit Professionals | Engrant</title>
    <meta 
      name="description" 
      content="30–50 vetted grants per search — not 400 to sift through. Engrant's AI evaluates each opportunity with fit analysis, red flags, and strategic considerations. Built for freelance grant writers and nonprofit development staff. $47/month. Try free for 14 days." 
    />
    <link rel="canonical" href="https://engrant.eu/" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://widget.senja.io/widget/eb3ea723-1cc7-49fa-bcd3-f8b3bee50ded/platform.js"
      type="text/javascript"
      async
    />
  </>
);
