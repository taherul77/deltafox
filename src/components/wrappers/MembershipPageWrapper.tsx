'use client';

import React from 'react';

import MembershipBanner from '../banners/MembershipBanner';
import MembershipContent from '../membership/MembershipContent';
import CTASection from '../sections/CTASection';

const MembershipPageWrapper = () => {
  return (
    <>
    
        <MembershipBanner />
        <MembershipContent />
        <CTASection />
    
    </>
  );
};

export default MembershipPageWrapper;
