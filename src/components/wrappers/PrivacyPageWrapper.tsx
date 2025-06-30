'use client';

import React from 'react';

import PrivacyBanner from '../banners/PrivacyBanner';
import PrivacyContent from '../privacy/PrivacyContent';
import CTASection from '../sections/CTASection';

const PrivacyPageWrapper = () => {
  return (
    <>
  
        <PrivacyBanner />
        <PrivacyContent />
        <CTASection />
 
    </>
  );
};

export default PrivacyPageWrapper;
