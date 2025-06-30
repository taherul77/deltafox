'use client';

import React from 'react';

import BlogBanner from '../banners/BlogBanner';
import BlogSection from '../sections/BlogSection';
import CTASection from '../sections/CTASection';

const BlogPageWrapper = () => {
  return (
    <>
  
        <BlogBanner />
        <BlogSection />
        <CTASection />
     
    </>
  );
};

export default BlogPageWrapper;
