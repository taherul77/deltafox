'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-secondary/70 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-primary/20 blur-md animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-accent/20 blur-md animate-float-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="w-full lg:w-2/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with Our IT Solutions?
            </h2>
            <p className="text-gray-200 text-lg">
              Get in touch with us today and discover how our services can help your business grow and succeed in the digital world.
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="bg-primary hover:bg-yellow-500 text-dark font-semibold py-4 px-8 rounded-md transition-colors duration-300">
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
