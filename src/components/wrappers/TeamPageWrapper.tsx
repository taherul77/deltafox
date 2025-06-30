'use client';

import React from 'react';

import TeamBanner from '../banners/TeamBanner';
import TeamSection from '../about/TeamSection';
import CTASection from '../sections/CTASection';

const TeamPageWrapper = () => {
  return (
    <>
   
        <TeamBanner />
        <TeamSection />
        <CTASection />
   
    </>
  );
};

export default TeamPageWrapper;
