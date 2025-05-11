'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PrivacyBanner from '../banners/PrivacyBanner';
import PrivacyContent from '../privacy/PrivacyContent';
import CTASection from '../sections/CTASection';

const PrivacyPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <PrivacyBanner />
        <PrivacyContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPageWrapper;
