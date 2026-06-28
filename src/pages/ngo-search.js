import React from 'react';
import '../styles/shared.css';
import Header from '../components/ngo-search/Header';
import { OgTwitterMeta } from '../utils/seoMeta';
import Hero from '../components/ngo-search/Hero';
import PainPoints from '../components/ngo-search/PainPoints';
import Solution from '../components/ngo-search/Solution';
import HowItWorks from '../components/ngo-search/HowItWorks';
import ValueComparison from '../components/ngo-search/ValueComparison';
import Pricing from '../components/ngo-search/Pricing';
import WhoThisIsFor from '../components/ngo-search/WhoThisIsFor';
import Trust from '../components/ngo-search/Trust';
import Testimonials from '../components/ngo-search/Testimonials';
import RecentGrantsCarousel from '../components/ngo-search/RecentGrantsCarousel';
import LoomVideo from '../components/ngo-search/LoomVideo';
import FAQ from '../components/ngo-search/FAQ';
import FinalCTA from '../components/ngo-search/FinalCTA';
import Footer from '../components/Footer';

const NgoSearchPage = () => {
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
        <Footer />
    </div>
  );
};

export default NgoSearchPage;

export const Head = () => (
  <>
    <title>Find the Grants You Didn't Know Existed | Engrant</title>
    <meta 
      name="description" 
      content="You already know your usual funders. Engrant searches the whole web to find the eligible grants beyond your radar — then explains why you qualify, how to apply, and when it's due. $47/mo. 14-day free trial." 
    />
    <link rel="canonical" href="https://engrant.eu/ngo-search/" />
    <OgTwitterMeta
      title="Find the Grants You Didn't Know Existed | Engrant"
      description="You already know your usual funders. Engrant searches the whole web to find the eligible grants beyond your radar — then explains why you qualify, how to apply, and when it's due. $47/mo. 14-day free trial."
      url="https://engrant.eu/ngo-search/"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
);
