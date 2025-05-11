'use client';

import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BlogBanner from '../banners/BlogBanner';
import BlogSection from '../sections/BlogSection';
import CTASection from '../sections/CTASection';

const BlogPageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <BlogBanner />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default BlogPageWrapper;
