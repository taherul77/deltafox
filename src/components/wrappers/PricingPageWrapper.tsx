'use client';

import React from 'react';

import PricingBanner from '../banners/PricingBanner';
import PricingSection from '../sections/PricingSection';
import CTASection from '../sections/CTASection';

const PricingPageWrapper = () => {
  return (
    <>
   
        <PricingBanner />
        <PricingSection />
        <CTASection />

    </>
  );
};

export default PricingPageWrapper;
