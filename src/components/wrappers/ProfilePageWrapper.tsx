'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProfileContent from '../auth/ProfileContent';

const ProfilePageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <ProfileContent />
      </main>
      <Footer />
    </>
  );
};

export default ProfilePageWrapper;
