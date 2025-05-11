/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';

const TermsContent = () => {
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
                src="/images/terms-image.jpg" 
                alt="Team discussing terms" 
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/1200x600/7d2ae8/ffffff?text=Terms+of+Service";
                }}
              />
            </div>
            <p className="text-gray-400 text-sm">This Terms of Service was last updated on September 1, 2022.</p>
          </div>
          
          <div className="space-y-10 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. Our Website</h2>
              <p>Our website address is: http://staxexample.com</p>
            </div>
            
            <div>
              <div className="bg-white/5 p-6 rounded-xl mb-6">
                <p>We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Stax. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. Data You Provide to Us</h2>
              <p>We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. How We Get Data About You</h2>
              <p>We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. What We Use Your Data For</h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Responding to your questions and concerns;</li>
                <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
                <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the "options" or "settings" page of the mobile app);</li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Your Choices About the Use of Your Data</h2>
              <p>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                <li>To customize your advertising preferences, you can visit the Digital Advertising Alliance's Consumer Choice page for the Digital Advertising Alliance, the Network Advertising Initiative, and the European Interactive Digital Advertising Alliance, or if you're located in the European Union, visit the Your Online Choices site. To opt out of Google's display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola's targeted ads, visit the Taboola Cookie Policy page.</li>
                <li>To update data you provide directly, log into your account and update your account at any time.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Our Policy Concerning Children</h2>
              <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children's online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we've collected personal data from a child under those ages, we will take reasonable steps to delete it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
