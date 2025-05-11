'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import TeamBanner from '../banners/TeamBanner';
import TeamSection from '../about/TeamSection';
import CTASection from '../sections/CTASection';

const TeamPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <TeamBanner />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default TeamPageWrapper;
