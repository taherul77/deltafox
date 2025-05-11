'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import { FloatingElement } from '../animations/FloatingElements';

const AboutSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-[#13042a]">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-secondary/10 blur-md"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-primary/10 blur-md"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Purple Gradient Background */}
                {/* <div className="absolute inset-0 bg-purple-gradient opacity-20 rounded-3xl"></div> */}
                
                {/* Main Image */}
                <div className="relative z-10">
                  <Image 
                    width={600}
                    height={400}
                    src="/newImage/about.png" 
                    alt="About Us" 
                    className="w-full h-auto rounded-3xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=About+Us";
                    }}
                  />
                </div>
                
                {/* Floating Elements */}
                {/* <FloatingElement 
                  className="absolute top-10 left-0 transform -translate-x-1/3 z-20"
                  duration={4}
                  y={15}
                  x={5}
                >
                  <div className="glass-effect p-3 rounded-lg">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-dark font-bold">40+</span>
                    </div>
                  </div>
                </FloatingElement> */}
                
                {/* <FloatingElement 
                  className="absolute bottom-10 right-0 transform translate-x-1/3 z-20"
                  duration={5}
                  delay={0.5}
                  y={10}
                  x={-8}
                >
                  <div className="glass-effect p-3 rounded-lg">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">24/7</span>
                    </div>
                  </div>
                </FloatingElement> */}
                
                {/* Shape Elements */}
                <div className="absolute bottom-5 right-5 w-32 h-32 rounded-full border-4 border-[#529367] border-dashed animate-spin-slow"></div>
                <div className="absolute top-5 left-5 w-24 h-24 rounded-full border-4 border-primary/20 border-dashed animate-spin-slow"></div>
              </div>
            </motion.div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-4">
                WHO WE ARE
              </p>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We Are <span className="text-secondary">All In One</span> IT Solution &amp; Technology Company
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6"
            >
              {/* Feature Items */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-white">First Working Process</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-white">Dedicated Team Member</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-white">24/7 Support</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-white">Timely Deliverables</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Know More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
