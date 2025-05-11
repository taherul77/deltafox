'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiUser, FiCalendar, FiPlay, FiCheck } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const BlogSidebar = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'How Technology Dominate In The New World In 2022',
      date: '10th Jan 2022',
      image: '/images/blog/blog-1.jpg',
      slug: 'how-technology-dominate-in-the-new-world-in-2022'
    },
    {
      id: 2,
      title: 'Top 10 Most Famous Technology Trend In 2022',
      date: '15th Jan 2022',
      image: '/images/blog/blog-2.jpg',
      slug: 'top-10-most-famous-technology-trend-in-2022'
    },
    {
      id: 3,
      title: 'Open Source Job Report Show More Hiring',
      date: '20th Jan 2022',
      image: '/images/blog/blog-3.jpg',
      slug: 'open-source-job-report-show-more-hiring'
    }
  ];

  const categories = [
    { name: 'Technology', count: 15 },
    { name: 'Marketing', count: 23 },
    { name: 'Business', count: 18 },
    { name: 'Development', count: 10 },
    { name: 'IT Services', count: 20 }
  ];

  return (
    <div className="space-y-8">
      {/* Search Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-xl p-4 border border-white/10"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search your article"
            className="w-full py-3 px-4 pr-12 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300">
            <FiSearch size={20} />
          </button>
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-effect rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">Recent Post</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Link href={`/blog/${post.slug}`}>
                  <Image

                    width={100}
                    height={100}
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/100x100/7d2ae8/ffffff?text=Blog";
                    }}
                  />
                </Link>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-primary mb-1">{post.date}</p>
                <h4 className="text-sm font-medium text-white truncate hover:text-primary transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-effect rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <Link 
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {category.name}
              </Link>
              <span className="text-primary bg-primary/10 px-2 py-1 rounded-md text-xs">
                ({category.count})
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const BlogComments = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const comments = [
    {
      id: 1,
      name: 'Daniel John',
      time: '2 months ago',
      avatar: '/images/testimonial1.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      id: 2,
      name: 'Suzana Zamal',
      time: '3 months ago',
      avatar: '/images/testimonial2.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      id: 3,
      name: 'Victor James',
      time: '4 months ago',
      avatar: '/images/testimonial3.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Comments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-effect rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">
          {comments.length} Comments:
        </h3>
        
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <div className="flex-shrink-0">
                <Image 

                  width={50}
                  height={50}
                  src={comment.avatar} 
                  alt={comment.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/100x100/7d2ae8/ffffff?text=User";
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{comment.name}</h4>
                  <span className="text-gray-400 text-sm">{comment.time}</span>
                </div>
                <p className="text-gray-300">{comment.message}</p>
                <button className="text-primary mt-2 text-sm font-medium hover:underline">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Comment Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-effect rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">
          Leave a reply
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <textarea 
              placeholder="Your message" 
              rows={5}
              className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="save-info" 
              className="w-4 h-4 bg-white/5 border border-white/10 rounded focus:ring-primary"
            />
            <label htmlFor="save-info" className="ml-2 text-sm text-gray-300">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          
          <button 
            type="submit" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
          >
            Post A Comment <FiSend className="ml-2" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

import { FiSearch, FiSend } from 'react-icons/fi';
import { useState } from 'react';

const BlogDetailsContent = () => {
  return (
    <section className="py-20 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-xl p-6 border border-white/10 mb-8"
            >
              {/* Video Thumbnail */}
              <div className="relative mb-8 rounded-xl overflow-hidden">
                <Image 

                  width={800}
                  height={450}
                  src="/images/blog/blog-details.jpg" 
                  alt="Blog Details" 
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x450/7d2ae8/ffffff?text=Blog+Video";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300">
                    <FiPlay size={24} />
                  </button>
                </div>
              </div>
              
              {/* Author & Date */}
              <div className="flex items-center mb-4">
                <div className="flex items-center text-gray-400 mr-6">
                  <FiUser className="mr-2" />
                  <span>By Admin</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>12th August 2022</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl font-bold text-white mb-6">
                How Technology Dominate In The New World In 2022
              </h1>
              
              {/* Content */}
              <div className="text-gray-300 space-y-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                
                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  What You Will Get Under This Service
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat.</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</span>
                  </li>
                </ul>
                
                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Image 

                    width={600}
                    height={400}

                    src="/images/blog/blog-details-1.jpg" 
                    alt="Blog Details" 
                    className="w-full h-auto rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=Blog+Image+1";
                    }}
                  />
                  <Image 

                    width={600}
                    height={400}
                    src="/images/blog/blog-details-2.jpg" 
                    alt="Blog Details" 
                    className="w-full h-auto rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/7d2ae8/ffffff?text=Blog+Image+2";
                    }}
                  />
                </div>
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                
                {/* Blockquote */}
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <p className="text-white italic">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  </p>
                </div>
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between">
                  <p className="text-white font-medium mb-4 md:mb-0">Share The Article:</p>
                  <div className="flex space-x-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-[#3b5998]/20 flex items-center justify-center text-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-colors duration-300">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#1da1f2]/20 flex items-center justify-center text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white transition-colors duration-300">
                      <FaTwitter />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors duration-300">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#e60023]/20 flex items-center justify-center text-[#e60023] hover:bg-[#e60023] hover:text-white transition-colors duration-300">
                      <FaPinterest />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#c32aa3]/20 flex items-center justify-center text-[#c32aa3] hover:bg-[#c32aa3] hover:text-white transition-colors duration-300">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Comments Section */}
            <BlogComments />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
