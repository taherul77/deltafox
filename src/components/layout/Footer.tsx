'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#13042a] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center mb-6">
              <Image src="/logo/logo.png" alt="Logo" width={150} height={80} className="mr-3" />
              {/* <h2 className="text-2xl font-bold text-white">Stax</h2> */}
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions providing company all over the world doing over 40 years. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <FiMapPin className="text-primary" />
                </div>
                <span className="text-gray-300">2750 Quadra Street Victoria, Canada</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <FiMail className="text-primary" />
                </div>
                <a href="mailto:hello@stax.com" className="text-gray-300 hover:text-primary transition-colors">
                  hello@stax.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <FiPhone className="text-primary" />
                </div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                  +1 (123) 456 7890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item} className="flex items-center">
                  <FaArrowRight className="text-primary mr-2 text-xs" />
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'App Development', 'UI/UX Design', 'Cloud Services', 'IT Consulting'].map((item) => (
                <li key={item} className="flex items-center">
                  <FaArrowRight className="text-primary mr-2 text-xs" />
                  <Link 
                    href="/services"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive the latest updates and offers.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-yellow-500 text-[#13042a] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FiSend />
              </button>
            </form>
            
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#13042a] transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#13042a] transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#13042a] transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#13042a] transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#13042a] transition-all">
                <FaYoutube />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Delta Fox. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
