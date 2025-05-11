'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProjectsBanner from '../banners/ProjectsBanner';
import ProjectsSection from '../sections/ProjectsSection';
import CTASection from '../sections/CTASection';

const ProjectsPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <ProjectsBanner />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPageWrapper;
