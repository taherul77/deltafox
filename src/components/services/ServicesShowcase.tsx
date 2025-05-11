'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ServicesShowcase = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore.',
      image: '/images/services/software-dev.jpg',
      link: '/services/service-details'
    },
    {
      title: 'App Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore.',
      image: '/images/services/app-dev.jpg',
      link: '/services/service-details'
    },
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore.',
      image: '/images/services/web-dev.jpg',
      link: '/services/service-details'
    }
  ];

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We Provide the Best <br />
              Quality <span className="text-primary">Services</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 max-w-md">
              We are a technology solutions provider with over 40 years of experience delivering innovative IT services.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-white/5 group relative overflow-hidden"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  width={600}
                  height={400}
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/7d2ae8/ffffff?text=${service.title.replace(' ', '+')}`;
                  }}
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <Link 
                href="/services/service-details"
                className="text-primary font-medium hover:text-white transition-colors duration-300"
              >
                View More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
