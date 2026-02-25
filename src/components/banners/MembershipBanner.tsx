'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MembershipBanner = () => {
  return (
    <section className="relative bg-transparent pt-48 pb-24 overflow-hidden min-h-[60vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 text-white/60 font-medium tracking-widest text-sm uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Membership</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-[100px] font-bold text-white mb-8 tracking-tighter leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Membership <span className="text-white/40">Levels</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2E2B37] pointer-events-none opacity-40" />
    </section>
  );
};

export default MembershipBanner;
