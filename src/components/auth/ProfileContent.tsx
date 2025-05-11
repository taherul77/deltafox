'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit, FiLock } from 'react-icons/fi';

const ProfileContent = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('123 Main St, New York, NY 10001');
  const [bio, setBio] = useState('Senior Software Developer with 10+ years of experience in web development and IT solutions.');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Profile updated with:', { name, email, phone, address, bio });
  };

  return (
    <section className="min-h-screen bg-[#13042a] pt-40 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-1/4 bg-white/5">
                <div className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image 
                      src="/images/profile-avatar.jpg" 
                      alt="Profile Avatar" 
                      fill
                      className="rounded-full object-cover border-4 border-primary"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/200x200/7d2ae8/ffffff?text=Profile";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{email}</p>
                  
                  <div className="space-y-2">
                    <button 
                      className={`w-full py-2 px-4 rounded-lg text-left transition-colors duration-300 ${activeTab === 'profile' ? 'bg-primary text-[#13042a]' : 'text-white hover:bg-white/10'}`}
                      onClick={() => setActiveTab('profile')}
                    >
                      <FiUser className="inline-block mr-2" /> Profile
                    </button>
                    <button 
                      className={`w-full py-2 px-4 rounded-lg text-left transition-colors duration-300 ${activeTab === 'security' ? 'bg-primary text-[#13042a]' : 'text-white hover:bg-white/10'}`}
                      onClick={() => setActiveTab('security')}
                    >
                      <FiLock className="inline-block mr-2" /> Security
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-3/4 p-8">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                      <button 
                        className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <FiEdit className="mr-2" /> {isEditing ? 'Cancel' : 'Edit Profile'}
                      </button>
                    </div>
                    
                    {isEditing ? (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                            <input 
                              type="email" 
                              id="email" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="address" className="block text-white mb-2">Address</label>
                            <input 
                              type="text" 
                              id="address" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="bio" className="block text-white mb-2">Bio</label>
                          <textarea 
                            id="bio" 
                            rows={4}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                          ></textarea>
                        </div>
                        
                        <button 
                          type="submit" 
                          className="bg-primary hover:bg-primary/90 text-[#13042a] font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                        >
                          Save Changes
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <FiUser className="text-primary mr-2" />
                              <span className="text-gray-400">Full Name</span>
                            </div>
                            <p className="text-white">{name}</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <FiMail className="text-primary mr-2" />
                              <span className="text-gray-400">Email Address</span>
                            </div>
                            <p className="text-white">{email}</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <FiPhone className="text-primary mr-2" />
                              <span className="text-gray-400">Phone Number</span>
                            </div>
                            <p className="text-white">{phone}</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <FiMapPin className="text-primary mr-2" />
                              <span className="text-gray-400">Address</span>
                            </div>
                            <p className="text-white">{address}</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <span className="text-gray-400">Bio</span>
                          </div>
                          <p className="text-white">{bio}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-8">Security Settings</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">Change Password</h3>
                        <form>
                          <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-white mb-2">Current Password</label>
                            <input 
                              type="password" 
                              id="currentPassword" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              placeholder="Enter current password"
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-white mb-2">New Password</label>
                            <input 
                              type="password" 
                              id="newPassword" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              placeholder="Enter new password"
                            />
                          </div>
                          <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-white mb-2">Confirm New Password</label>
                            <input 
                              type="password" 
                              id="confirmPassword" 
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                              placeholder="Confirm new password"
                            />
                          </div>
                          <button 
                            type="submit" 
                            className="bg-primary hover:bg-primary/90 text-[#13042a] font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                          >
                            Update Password
                          </button>
                        </form>
                      </div>
                      
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">Two-Factor Authentication</h3>
                        <p className="text-gray-300 mb-4">Add an extra layer of security to your account by enabling two-factor authentication.</p>
                        <button 
                          className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileContent;
