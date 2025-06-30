'use client';

import React from 'react';

import ProjectsBanner from '../banners/ProjectsBanner';
import ProjectsSection from '../sections/ProjectsSection';
import CTASection from '../sections/CTASection';

const ProjectsPageWrapper = () => {
  return (
    <>
    
        <ProjectsBanner />
        <ProjectsSection />
        <CTASection />
 
    </>
  );
};

export default ProjectsPageWrapper;
