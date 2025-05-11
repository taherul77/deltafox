'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="glass-effect rounded-2xl p-4 border border-white/5 group relative overflow-hidden h-full">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl mb-5">
          <Image 
            src={image} 
            alt={name} 
            width={400}
            height={500}
            className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/400x500/7d2ae8/ffffff?text=Team+Member";
            }}
          />
          
          {/* Social Media Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13042a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-[#13042a] transition-all duration-300">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-[#13042a] transition-all duration-300">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-[#13042a] transition-all duration-300">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-[#13042a] transition-all duration-300">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-gray-400">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      image: '/images/team/team-1.jpg',
      name: 'Alex Morgan',
      position: 'CEO & Founder',
    },
    {
      image: '/images/team/team-2.jpg',
      name: 'Sarah Taylor',
      position: 'Web Developer',
    },
    {
      image: '/images/team/team-3.jpg',
      name: 'David Warner',
      position: 'UI/UX Designer',
    },
    {
      image: '/images/team/team-4.jpg',
      name: 'James Anderson',
      position: 'Project Manager',
    },
    {
      image: '/images/team/team-5.jpg',
      name: 'Emily Johnson',
      position: 'Marketing Specialist',
    },
    {
      image: '/images/team/team-6.jpg',
      name: 'Michael Brown',
      position: 'App Developer',
    },
    {
      image: '/images/team/team-7.jpg',
      name: 'Jessica Williams',
      position: 'Content Strategist',
    },
    {
      image: '/images/team/team-8.jpg',
      name: 'Robert Davis',
      position: 'IT Consultant',
    },
  ];

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      {/* Team Background Image */}
      <div className="absolute inset-0 bg-[url('/images/about/team-bg.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Team Grid - Full Width Row */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * (index + 1) }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  width={200}
                  height={250} 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/200x250/7d2ae8/ffffff?text=Team";
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div> */}
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            OUR TEAM MEMBERS
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet Our Expert Team
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team of experts brings together years of experience and diverse skills to deliver exceptional IT solutions for your business.
          </motion.p>
        </div>

        {/* Team Grid - Featured Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
