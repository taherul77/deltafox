'use client';

import React from 'react';

import CTASection from '../sections/CTASection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogDetailsContent from '../blog/BlogDetailsContent';

interface BlogDetailsPageWrapperProps {
  slug: string;
}

const BlogDetailsBanner = () => {
  return (
    <section className="relative py-32 bg-[#13042a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog Details
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Blog Details</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BlogDetailsPageWrapper = ({ slug }: BlogDetailsPageWrapperProps) => {
  console.log('BlogDetailsPageWrapper slug:', slug); // Use console.log directly without importing
  return (
    <>

        <BlogDetailsBanner />
        <BlogDetailsContent />
        <CTASection />
     
    </>
  );
};

export default BlogDetailsPageWrapper;