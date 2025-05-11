/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

interface BlogPostProps {
  image: string;
  title: string;
  date: string;
  category: string;
  delay: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ image, title, date, category, delay }) => {
  const [month, day, year] = date.split(' ');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="glass-effect rounded-2xl overflow-hidden group relative h-full border border-white/10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image 
            width={600}
            height={400}
            src={image} 
            alt={title} 
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=Blog+Post";
            }}
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 rounded-lg p-2 mr-3">
              <div className="text-center">
                <span className="block text-primary text-sm font-medium">{month}</span>
                <span className="block text-white text-xl font-bold">{day}</span>
              </div>
            </div>
            <span className="text-primary text-sm">{category}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </Link>
          </h3>
          
          <Link 
            href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center text-primary font-medium hover:text-white transition-colors duration-300"
          >
            Read More <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      image: '/images/blog/blog-1.jpg',
      title: 'New Technology Innovations in 2025',
      date: 'May 10 2025',
      category: 'Technology',
    },
    {
      image: '/images/blog/blog-2.jpg',
      title: 'Top 10 Most Common Technology Trends in 2025',
      date: 'May 08 2025',
      category: 'IT Solutions',
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
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            BLOG
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Read Our Blog To Get All<br />
            <span className="text-primary">Recent Tech</span> News
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              image={post.image}
              title={post.title}
              date={post.date}
              category={post.category}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
