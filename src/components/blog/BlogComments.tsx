'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';

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

export default BlogComments;
