'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContactBanner from '../banners/ContactBanner';
import ContactSection from '../sections/ContactSection';

const ContactPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <ContactBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPageWrapper;
