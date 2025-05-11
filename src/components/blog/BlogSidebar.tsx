'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
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

                    width={64}
                    height={64}
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

export default BlogSidebar;
