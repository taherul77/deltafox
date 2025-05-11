'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MembershipBanner from '../banners/MembershipBanner';
import MembershipContent from '../membership/MembershipContent';
import CTASection from '../sections/CTASection';

const MembershipPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <MembershipBanner />
        <MembershipContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default MembershipPageWrapper;
