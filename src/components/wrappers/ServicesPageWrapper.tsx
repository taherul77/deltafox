'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServicesBanner from '../banners/ServicesBanner';
import ServicesSection from '../sections/ServicesSection';
import CTASection from '../sections/CTASection';

const ServicesPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <ServicesBanner />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPageWrapper;
