'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProjectDetailsBanner from '../banners/ProjectDetailsBanner';
import ProjectDetailsContent from '../projects/ProjectDetailsContent';
import ContactForm from '../services/ContactForm';
import CTASection from '../sections/CTASection';

const ProjectDetailsPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <ProjectDetailsBanner />
        <ProjectDetailsContent />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPageWrapper;
