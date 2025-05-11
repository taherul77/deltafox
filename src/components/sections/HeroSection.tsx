'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface SlideProps {
  isActive: boolean;
  index: number;
}

const Slide1: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We Make The <span className="block">Best IT Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-xl"
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
              <Link href="/contact" className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 inline-block">
                Get Started
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image with 3D Character */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* 3D Character */}
              <div className="relative z-10">
                <Image

                  
                  src="/images/home-slides/slides-1.png" 
                  alt="IT Solutions" 
                  className="w-full h-auto"
                  width={600}
                  height={400}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=IT+Solutions";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Slide2: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-semibold mb-4">
                INNOVATIVE IT SOLUTIONS FOR YOUR BUSINESS
              </p>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Best IT Services <span className="block">For Your Business</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We provide top-notch IT solutions to help your business grow and succeed in the digital world. Our expert team is dedicated to delivering innovative technology services tailored to your needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/services" className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 inline-block">
                Our Services
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image with 3D Character */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* 3D Character */}
              <div className="relative z-10">
                <Image 
                  width={600}
                  height={400}
                  src="/images/home-slides/slides-2.png" 
                  alt="IT Solutions" 
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=IT+Solutions";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#13042a] pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Floating Shapes */}
      <div className="absolute top-1/3 left-20 z-10">
        <motion.img 
          src="/images/home-slides/slides-shape-1.png" 
          alt="Shape" 
          className="w-16 h-16 md:w-24 md:h-24"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="absolute bottom-1/4 right-10 z-10">
        <motion.img 
          src="/images/home-slides/slides-shape-2.png" 
          alt="Shape" 
          className="w-20 h-20 md:w-32 md:h-32"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="absolute top-1/2 right-1/4 z-10">
        <motion.img
          src="/images/home-slides/slides-shape-3.png" 
          alt="Shape" 
          className="w-12 h-12 md:w-16 md:h-16"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 z-10">
        <motion.img
          src="/images/home-slides/slides-shape-4.png" 
          alt="Shape" 
          className="w-16 h-16 md:w-20 md:h-20"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
      
      <div className="absolute top-1/4 right-20 z-10">
        <motion.img
          src="/images/home-slides/slides-shape-5.png" 
          alt="Shape" 
          className="w-14 h-14 md:w-16 md:h-16"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-20">
        {/* Slides */}
        <Slide1 isActive={activeSlide === 0} index={0} />
        <Slide2 isActive={activeSlide === 1} index={1} />
      </div>
      
      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-20">
        <button 
          className={`w-3 h-3 rounded-full bg-white transition-opacity duration-300 ${activeSlide === 0 ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => setActiveSlide(0)}
          aria-label="Slide 1"
        ></button>
        <button 
          className={`w-3 h-3 rounded-full bg-white transition-opacity duration-300 ${activeSlide === 1 ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => setActiveSlide(1)}
          aria-label="Slide 2"
        ></button>
      </div>
    </section>
  );
};

export default HeroSection;
