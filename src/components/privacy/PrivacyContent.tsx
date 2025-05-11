/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PrivacyContent = () => {
  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="relative w-full h-80 rounded-xl overflow-hidden mb-6">
              <Image 
                src="/images/privacy-image.jpg" 
                alt="Privacy concept" 
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/1200x600/7d2ae8/ffffff?text=Privacy+Policy";
                }}
              />
            </div>
            <p className="text-gray-400 text-sm">This Privacy Policy was last updated on September 1, 2022.</p>
          </div>
          
          <div className="space-y-10 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
              <p>This Privacy Policy explains how Stax (&rdquo;we,&#34; &#34;us,&#34; or &#34;our&rdquo;) collects, uses, and discloses information about you. This Privacy Policy applies when you use our websites, mobile applications, and other online products and services that link to this Privacy Policy (collectively, our &rdquo;Services&rdquo;), contact our customer service team, engage with us on social media, or otherwise interact with us.</p>
              <p className="mt-4">We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our website or sending you a notification). We encourage you to review this Privacy Policy regularly to stay informed about our information practices and the choices available to you.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. Collection of Information</h2>
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Information You Provide to Us</h3>
              <p>We collect information you provide directly to us. For example, you share information directly with us when you create an account, fill out a form, submit or post content through our Services, make a purchase, communicate with us via third-party platforms, request customer support, or otherwise communicate with us. The types of personal information we may collect include your name, email address, postal address, phone number, credit card and other payment information, and any other information you choose to provide.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Information We Collect Automatically</h3>
              <p>We automatically collect certain information about your interactions with us or our Services, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Device and Usage Information: We collect information about how you access our Services, including data about the device and network you use, such as your hardware model, operating system version, mobile network, IP address, unique device identifiers, browser type, and app version. We also collect information about your activity on our Services, such as access times, pages viewed, links clicked, and the page you visited before navigating to our Services.</li>
                <li>Transactional Information: When you make a purchase, we collect information about the transaction, such as product details, purchase price, and the date and location of the transaction.</li>
                <li>Location Information: We may derive the approximate location of your device from your IP address.</li>
                <li>Information Collected by Cookies and Similar Tracking Technologies: We use tracking technologies, such as cookies and web beacons, to collect information about you. Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. Use of Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, maintain, and improve our Services;</li>
                <li>Process transactions and send you related information, including confirmations, receipts, invoices, customer experience surveys, and recall notices;</li>
                <li>Personalize and improve your experience on our Services;</li>
                <li>Send you technical notices, security alerts, and support and administrative messages;</li>
                <li>Respond to your comments and questions and provide customer service;</li>
                <li>Communicate with you about products, services, and events offered by Stax and others and provide news and information that we think will interest you;</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
                <li>Detect, investigate, and prevent security incidents and other malicious, deceptive, fraudulent, or illegal activity and protect the rights and property of Stax and others;</li>
                <li>Debug to identify and repair errors in our Services;</li>
                <li>Comply with our legal and financial obligations; and</li>
                <li>Carry out any other purpose described to you at the time the information was collected.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. Your Choices</h2>
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Account Information</h3>
              <p>You may update and correct certain account information at any time by logging into your account or emailing us. If you wish to delete your account, please email us, but note that we may retain certain information as required by law or for our legitimate business purposes.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Cookies</h3>
              <p>Most web browsers are set to accept cookies by default. If you prefer, you can usually adjust your browser settings to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Communications Preferences</h3>
              <p>You may opt out of receiving promotional emails from Stax by following the instructions in those communications. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-4">Stax<br />123 Main Street<br />New York, NY 10001<br />Email: privacy@staxexample.com<br />Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
