
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RatingsTable from '@/components/RatingsTable';
import Reasons from '@/components/Reasons';
import GrokConclusion from '@/components/GrokConclusion';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Add a smooth scrolling effect for anchor links
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => document.removeEventListener('click', handleAnchorLinkClick);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <RatingsTable />
      <Reasons />
      <GrokConclusion />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
