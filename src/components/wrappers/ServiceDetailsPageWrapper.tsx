'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServiceDetailsBanner from '../banners/ServiceDetailsBanner';
import ServiceDetailsContent from '../services/ServiceDetailsContent';
import ContactForm from '../services/ContactForm';
import ServicesShowcase from '../services/ServicesShowcase';
import CTASection from '../sections/CTASection';

const ServiceDetailsPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <ServiceDetailsBanner />
        <ServiceDetailsContent />
        <ContactForm />
        <ServicesShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetailsPageWrapper;
