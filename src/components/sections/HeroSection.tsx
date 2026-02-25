'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-transparent pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold mb-4">
              WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!
            </p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We Make The <span className="block">Best IT Solutions</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/contact" className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 inline-block shadow-lg active:scale-95">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
