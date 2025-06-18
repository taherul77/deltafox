'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ErrorContent = () => {
  return (
    <section className="min-h-screen bg-[#13042a] flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Link href="/" className="inline-block mb-10">
            <Image 
              src="/logo/logo.png" 
              alt="Stax Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>
          
          <motion.h1 
            className="text-8xl md:text-9xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/" 
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-block"
            >
              Back to Homepage
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ErrorContent;
