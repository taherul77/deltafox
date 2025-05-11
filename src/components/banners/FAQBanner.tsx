'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FAQBanner = () => {
  return (
    <section className="relative bg-[#13042a] pt-40 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-secondary/10 blur-md"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-primary/10 blur-md"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-md"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      
      {/* Banner Background Image */}
      <div className="absolute inset-0 bg-[url('/images/faq-bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Faq
          </motion.h1>
          
          <motion.div
            className="flex justify-center items-center space-x-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Faq</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQBanner;
