'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import Image from 'next/image';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      content: "Working with Stax has been an incredible experience. Their team delivered a top-notch solution that exceeded our expectations. I highly recommend their services to anyone looking for quality IT solutions.",
      name: "John Smith",
      position: "CEO",
      company: "TechCorp",
      image: "/images/testimonial1.jpg",
    },
    {
      content: "The team at Stax transformed our digital presence completely. Their attention to detail and commitment to excellence is unmatched. We've seen a significant increase in our online engagement since working with them.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Innovate Inc",
      image: "/images/testimonial2.jpg",
    },
    {
      content: "Stax provided us with a custom solution that perfectly addressed our unique business needs. Their expertise and professionalism made the entire process smooth and stress-free.",
      name: "Michael Brown",
      position: "CTO",
      company: "DataSystems",
      image: "/images/testimonial3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-darkPurple text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/10 blur-md animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-secondary/10 blur-md animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-accent/10 blur-md animate-float-slower"></div>
      
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
            TESTIMONIALS
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover what our clients have to say about their experiences working with us. 
            We pride ourselves on delivering exceptional service and results.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-8 md:p-12 shadow-xl border border-secondary/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-secondary">
                    <Image 
                      width={128}
                      height={128}
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name.replace(' ', '+')}&background=7d2ae8&color=fff`;
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-300 text-sm">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-primary fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-lg mb-6">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-secondary/70 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-secondary/70 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
