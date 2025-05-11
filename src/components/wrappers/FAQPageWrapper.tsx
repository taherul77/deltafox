'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import FAQBanner from '../banners/FAQBanner';
import FAQContent from '../faq/FAQContent';
import CTASection from '../sections/CTASection';

const FAQPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <FAQBanner />
        <FAQContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FAQPageWrapper;
