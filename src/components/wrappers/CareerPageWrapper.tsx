'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CareerBanner from '../banners/CareerBanner';
import CareerContent from '../career/CareerContent';
import CTASection from '../sections/CTASection';

const CareerPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <CareerBanner />
        <CareerContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default CareerPageWrapper;
