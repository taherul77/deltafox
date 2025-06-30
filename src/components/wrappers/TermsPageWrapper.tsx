'use client';

import React from 'react';

import TermsBanner from '../banners/TermsBanner';
import TermsContent from '../terms/TermsContent';
import CTASection from '../sections/CTASection';

const TermsPageWrapper = () => {
  return (
    <>
   
        <TermsBanner />
        <TermsContent />
        <CTASection />
   
    </>
  );
};

export default TermsPageWrapper;
