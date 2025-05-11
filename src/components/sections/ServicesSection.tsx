'use client';

import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
import Link from 'next/link';
import { FiMonitor, FiSmartphone, FiLayout, FiCloud, FiServer, FiHeadphones } from 'react-icons/fi';
import { FadeIn } from '../animations/FloatingElements';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, index }) => {
  return (
    <FadeIn
      delay={delay}
      className="w-full"
    >
      <div className="glass-effect rounded-2xl p-8 hover:shadow-card transition-all duration-500 h-full border border-white/5 group relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 border-secondary/10 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon */}
        <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 relative z-10">
          <div className="text-3xl">{icon}</div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 relative z-10">{title}</h3>
        <p className="text-gray-300 relative z-10">{description}</p>
        
        {/* Read More Link */}
        <div className="mt-6 relative z-10">
          <Link href="/services/service-details" className="text-primary font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Read More
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {/* Card Number */}
        <div className="absolute -bottom-8 -left-8 text-8xl font-bold text-white opacity-5 select-none">
          {index + 1}
        </div>
      </div>
    </FadeIn>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <FiMonitor />,
      title: 'Web Development',
      description: 'We build modern, responsive websites that help your business stand out and achieve its goals.',
    },
    {
      icon: <FiSmartphone />,
      title: 'App Development',
      description: 'Our team creates powerful mobile applications for iOS and Android platforms.',
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'We design intuitive user interfaces and experiences that engage and delight your customers.',
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Services',
      description: 'Our cloud solutions help you scale your business and improve operational efficiency.',
    },
    {
      icon: <FiServer />,
      title: 'IT Infrastructure',
      description: 'We provide robust IT infrastructure solutions to support your business operations.',
    },
    {
      icon: <FiHeadphones />,
      title: 'IT Consulting',
      description: 'Our experts provide strategic IT consulting to help your business grow and innovate.',
    },
  ];

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-primary font-semibold mb-4">
              OUR SERVICES
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We Offer Professional IT Solutions
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our comprehensive IT services are designed to help your business thrive in the digital age. 
              From web development to cloud solutions, we&apos;ve got you covered.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * (index + 1)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
