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

const NgoDashTricklePage = () => {
  return (
    <div className="bg-white text-neutral-700 font-sans">-----
      <Header />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Pricing />
      <Trust />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default NgoDashTricklePage;

export const Head = () => <title>NGO Dashboard - Engrant</title>;
