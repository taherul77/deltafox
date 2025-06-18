'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    { image: '/images/partner/bkash1.avif', name: 'Partner 1' },
    { image: '/images/partner/rocket.png', name: 'Partner 2' },
    { image: '/images/partner/mcash.png', name: 'Partner 3' },
    { image: '/images/partner/google.png', name: 'Partner 4' },
    { image: '/images/partner/paypal.png', name: 'Partner 5' },
    { image: '/images/partner/city.avif', name: 'Partner 6' },
  ];

  return (
    <section className="py-20 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-primary/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            TRUSTED BY OVER 1500+ COMPANIES
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Trusted Partners
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="glass-effect rounded-xl  transition-all duration-300 h-24 w-full flex items-center justify-center">
                <Image
                  src={partner.image} 
                  alt={partner.name} 
                  width={200}
                  height={80}
                  className="h-full w-full  opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/200x80/7d2ae8/ffffff?text=Partner";
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
