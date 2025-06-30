'use client';

import React from 'react';

import AboutBanner from '../banners/AboutBanner';
import AboutContent from '../about/AboutContent';
import TeamSection from '../about/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PartnersSection from '../about/PartnersSection';
import CTASection from '../sections/CTASection';

const AboutPageWrapper = () => {
  return (
    <>

        <AboutBanner />
        <AboutContent />
        <TeamSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
    
    </>
  );
};

export default AboutPageWrapper;
