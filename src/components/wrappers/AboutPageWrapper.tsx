'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AboutBanner from '../banners/AboutBanner';
import AboutContent from '../about/AboutContent';
import TeamSection from '../about/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PartnersSection from '../about/PartnersSection';
import CTASection from '../sections/CTASection';

const AboutPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <AboutBanner />
        <AboutContent />
        <TeamSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPageWrapper;
