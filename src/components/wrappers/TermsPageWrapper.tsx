'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import TermsBanner from '../banners/TermsBanner';
import TermsContent from '../terms/TermsContent';
import CTASection from '../sections/CTASection';

const TermsPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <TermsBanner />
        <TermsContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default TermsPageWrapper;
