'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  type: string;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ title, description, location, type, index }) => {
  return (
    <motion.div 
      className="border-b border-gray-700/30 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="flex flex-wrap gap-6 mb-6">
        <div>
          <span className="text-primary font-medium">Location:</span> <span className="text-gray-300">{location}</span>
        </div>
        <div>
          <span className="text-primary font-medium">Type:</span> <span className="text-gray-300">{type}</span>
        </div>
      </div>
      
      <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
        Get Started
      </button>
    </motion.div>
  );
};

const CareerContent = () => {
  const jobs = [
    {
      title: "Team Lead - Digital Marketing",
      description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
      location: "New York, USA",
      type: "Full Time"
    },
    {
      title: "Senior ASP.Net Core Developer",
      description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
      location: "New York, USA",
      type: "Half Time"
    },
    {
      title: "Android Developer",
      description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
      location: "New York, USA",
      type: "Half Time"
    },
    {
      title: "Graphic Designer",
      description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
      location: "New York, USA",
      type: "Full Time"
    },
    {
      title: "Digital Marketing Executive",
      description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
      location: "New York, USA",
      type: "Full Time"
    }
  ];

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Career
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            When You Have Jobs In <br />
            Multiple <span className="text-primary">Locations</span>
          </motion.h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              location={job.location}
              type={job.type}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerContent;
