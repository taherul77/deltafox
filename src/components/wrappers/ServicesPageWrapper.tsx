'use client';

import React from 'react';

import ServicesBanner from '../banners/ServicesBanner';
import ServicesSection from '../sections/ServicesSection';
import CTASection from '../sections/CTASection';

const ServicesPageWrapper = () => {
  return (
    <>
   
        <ServicesBanner />
        <ServicesSection />
        <CTASection />
    
    </>
  );
};

export default ServicesPageWrapper;
