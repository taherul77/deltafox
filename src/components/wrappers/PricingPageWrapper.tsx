'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PricingBanner from '../banners/PricingBanner';
import PricingSection from '../sections/PricingSection';
import CTASection from '../sections/CTASection';

const PricingPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <PricingBanner />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PricingPageWrapper;
