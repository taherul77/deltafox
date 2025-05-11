'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';

const ServiceDetailsContent = () => {
  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Service Image */}
        <div className="mb-16">
          <Image 
            width={1200}
            height={600}
            src="/images/services/software-development.jpg" 
            alt="Software Development" 
            className="w-full h-auto rounded-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/1200x600/7d2ae8/ffffff?text=Software+Development";
            }}
          />
        </div>
        
        {/* Service Title and Description */}
        <div className="mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Software Development
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
            </p>
          </motion.div>
        </div>
        
        {/* What You Will Get Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What You Will Get Under This Service
          </motion.h3>
          
          <motion.ul 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <FiCheck className="w-5 h-5" />
              </div>
              <p className="text-gray-300">
                Dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <FiCheck className="w-5 h-5" />
              </div>
              <p className="text-gray-300">
                Consulting with our team of experts to identify your specific needs and goals.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <FiCheck className="w-5 h-5" />
              </div>
              <p className="text-gray-300">
                Customized solutions that address your unique business challenges and opportunities.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <FiCheck className="w-5 h-5" />
              </div>
              <p className="text-gray-300">
                Sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
              </p>
            </li>
          </motion.ul>
        </div>
        
        {/* Service Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image 

              width={600}
              height={400}
              src="/images/services/service-details-1.jpg" 
              alt="Service Details" 
              className="w-full h-auto rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=Service+Details";
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image 
              width={600}
              height={400}
              src="/images/services/service-details-2.jpg" 
              alt="Service Details" 
              className="w-full h-auto rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=Service+Details";
              }}
            />
          </motion.div>
        </div>
        
        {/* Additional Description */}
        <div className="mb-16">
          <motion.div 
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
            </p>
          </motion.div>
        </div>
        
        {/* Blockquote */}
        <div className="mb-16">
          <motion.blockquote 
            className="border-l-4 border-primary pl-6 py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl italic text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
            </p>
          </motion.blockquote>
        </div>
        
        {/* Final Description */}
        <div>
          <motion.div 
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;
