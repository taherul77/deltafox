'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {  FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const ComingSoonContent = () => {
  const [days, setDays] = useState(30);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

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
              src="/images/logo.png" 
              alt="Stax Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We&apos;re Coming Soon
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our website is under construction. We&apos;ll be here soon with our new awesome site.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{days}</span>
              <span className="text-gray-400 text-sm">Days</span>
            </div>
            <div className="w-20 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{hours}</span>
              <span className="text-gray-400 text-sm">Hours</span>
            </div>
            <div className="w-20 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{minutes}</span>
              <span className="text-gray-400 text-sm">Minutes</span>
            </div>
            <div className="w-20 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{seconds}</span>
              <span className="text-gray-400 text-sm">Seconds</span>
            </div>
          </motion.div>
          
          <motion.form 
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-r-lg transition-colors duration-300"
              >
                Notify Me
              </button>
            </div>
          </motion.form>
          
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-300">
              <FiFacebook />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-300">
              <FiTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-300">
              <FiInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-300">
              <FiLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonContent;
