'use client';

import React from 'react';

import ServiceDetailsBanner from '../banners/ServiceDetailsBanner';
import ServiceDetailsContent from '../services/ServiceDetailsContent';
import ContactForm from '../services/ContactForm';
import ServicesShowcase from '../services/ServicesShowcase';
import CTASection from '../sections/CTASection';

const ServiceDetailsPageWrapper = () => {
  return (
    <>

        <ServiceDetailsBanner />
        <ServiceDetailsContent />
        <ContactForm />
        <ServicesShowcase />
        <CTASection />
  
    </>
  );
};

export default ServiceDetailsPageWrapper;
