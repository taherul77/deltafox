'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';

const ProjectDetailsContent = () => {
  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
          >
            <Image 

            height={600}
            width={600}
              src="/images/projects/messaging-app.png" 
              alt="Messaging App" 
              className="w-full h-auto rounded-3xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x600/7d2ae8/ffffff?text=Messaging+App";
              }}
            />
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-pink-500/20 blur-xl"></div>
            <div className="absolute top-10 -right-10 w-16 h-16 rounded-full bg-yellow-500/20 blur-xl"></div>
          </motion.div>
          
          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <h3 className="text-primary font-semibold mb-4">PROJECT DETAILS</h3>
              <h2 className="text-3xl font-bold text-white mb-8">Messaging App</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 mb-2">Category:</p>
                  <p className="text-white">App Development</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-2">Client:</p>
                  <p className="text-white">Soft IT Group</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-2">Duration:</p>
                  <p className="text-white">August 2020 - January 2023</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-2">Location:</p>
                  <p className="text-white">Australia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Problems We Faced */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Problems We Faced
          </motion.h3>
          
          <motion.div 
            className="text-gray-300 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </motion.div>
        </div>
        
        {/* Our Steps To Solve The Problems */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Steps To Solve The Problems
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <FiCheck className="w-5 h-5" />
              </div>
              <p className="text-gray-300">
                Dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <FiCheck className="w-5 h-5" />
              </div>
              <p className="text-gray-300">
                Consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
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
        
        {/* Project Image */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <Image 
            height={600}
            width={600}
              src="/images/projects/project-details-1.jpg" 
              alt="Project Details" 
              className="w-full h-auto rounded-3xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/1200x600/7d2ae8/ffffff?text=Project+Details";
              }}
            />
          </motion.div>
        </div>
        
        {/* How We Achieve Success */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How We Achieve Success
          </motion.h3>
          
          <motion.div 
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
            </p>
          </motion.div>
        </div>
        
        {/* Blockquote */}
        <div className="mb-16">
          <motion.blockquote 
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
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

export default ProjectDetailsContent;
