'use client';

import React from 'react';

import CareerBanner from '../banners/CareerBanner';
import CareerContent from '../career/CareerContent';
import CTASection from '../sections/CTASection';

const CareerPageWrapper = () => {
  return (
    <>
   
        <CareerBanner />
        <CareerContent />
        <CTASection />
   
    </>
  );
};

export default CareerPageWrapper;
