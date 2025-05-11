'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  width={600}
                  height={600}
                  src="/images/contact/contact-us.jpg" 
                  alt="Contact Us" 
                  className="w-full h-auto rounded-3xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x600/7d2ae8/ffffff?text=Contact+Us";
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-primary font-semibold mb-4">LET&#39;S TALK</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We Would Like To Hear From You Anytime
              </h2>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your Subject" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Your Message" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Send Message <FiSend className="ml-2" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
