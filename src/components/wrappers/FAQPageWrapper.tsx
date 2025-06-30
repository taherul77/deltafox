'use client';

import React from 'react';

import FAQBanner from '../banners/FAQBanner';
import FAQContent from '../faq/FAQContent';
import CTASection from '../sections/CTASection';

const FAQPageWrapper = () => {
  return (
    <>
  
        <FAQBanner />
        <FAQContent />
        <CTASection />

    </>
  );
};

export default FAQPageWrapper;
