'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

const ContactSection = () => {
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
            GET IN TOUCH
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact Us Today
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions or need assistance? Reach out to our team and we&lsquo;ll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Address Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/5 group relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-gray-300">2750 Quadra Street Victoria, Canada</p>
                </div>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/5 group relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (123) 456 7890</p>
                  <p className="text-gray-300">+1 (123) 456 7891</p>
                </div>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/5 group relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">info@stax.com</p>
                  <p className="text-gray-300">support@stax.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-effect rounded-2xl p-8 border border-white/5 relative overflow-hidden">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Your Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Enter subject"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Send Message <FiSend className="ml-2" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-4 border border-white/5 relative overflow-hidden">
            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.9568436114985!2d-123.36402548428736!3d48.42979397924723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7485f0a75b6f%3A0x8c9e4a3b11f54833!2s2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sus!4v1620293854461!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
