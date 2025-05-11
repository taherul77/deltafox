"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const AboutContent = () => {
  return (
    <section className="py-24 overflow-hidden bg-[#13042a]">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Purple Gradient Background */}
                <div className="absolute inset-0 bg-purple-gradient opacity-20 rounded-3xl"></div>

                {/* Main Image */}
                <div className="relative z-10">
                  <Image
                    src="/images/about/about-Image1.jpg"
                    alt="About Us"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-3xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://placehold.co/600x400/7d2ae8/ffffff?text=About+Us";
                    }}
                  />
                </div>

                {/* Experience Box */}
                <motion.div
                  className="absolute -bottom-10 -right-10 bg-primary text-[#13042a] p-6 rounded-2xl shadow-lg z-20 w-40 h-40 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-5xl font-bold">40+</span>
                  <span className="text-center font-medium mt-1">
                    Years Experience
                  </span>
                </motion.div>

                {/* Shape Elements */}
                <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-full border-4 border-secondary/20 border-dashed animate-spin-slow"></div>
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full border-4 border-primary/20 border-dashed animate-spin-slow"></div>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-4">
                ABOUT OUR COMPANY
              </p>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We Are <span className="text-secondary">All In One</span> IT
              Solution &amp; Technology Company
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We are leading technology solutions providing company all over the
              world doing over 40 years. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {/* Feature Items */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiCheck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white">First Working Process</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiCheck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white">Dedicated Team Member</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiCheck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white">24/7 Support</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiCheck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white">Timely Deliverables</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6"
            >
              {/* CEO Info */}
              <div className="flex items-center gap-4">
                <Image
                  src="/images/about/ceo.jpg"
                  alt="CEO"
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/100x100/7d2ae8/ffffff?text=CEO";
                  }}
                />
                <div>
                  <h4 className="text-white font-semibold">John Smith</h4>
                  <p className="text-gray-400">CEO &amp; Founder</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="sm:ml-auto">
                <button className="bg-primary hover:bg-yellow-500 text-[#13042a] font-semibold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  More About Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trusted Partner Section */}
        <div className="mb-24">
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
                    src="/images/about/team-meeting.jpg"
                    alt="Team Meeting"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-3xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://placehold.co/600x400/7d2ae8/ffffff?text=Team+Meeting";
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Your Trusted Partner For All IT Solutions
              </motion.h2>

              <motion.p
                className="text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We are a team of passionate IT professionals dedicated to
                delivering innovative solutions that help businesses thrive in
                the digital age. With our expertise and commitment to
                excellence, we have become a trusted partner for organizations
                of all sizes.
              </motion.p>

              {/* Vision and Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 border border-white/5"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-300">
                    To be the leading provider of innovative IT solutions that
                    empower businesses to achieve their full potential in the
                    digital world.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 border border-white/5"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-300">
                    To deliver exceptional IT services and solutions that drive
                    growth, efficiency, and innovation for our clients through
                    cutting-edge technology and expertise.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              We Help You To <span className="text-primary">Increase</span> Your{" "}
              <br />
              Sale Through Solutions
            </motion.h2>

            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We are leading technology solutions providing company all over the
              world doing over 40 years.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solution Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
            >
              <div className="mb-6 bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/icons/mobile-app.png"
                  alt="Mobile Apps"
                  className="w-8 h-8"
                  height={32}
                  width={32}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/32x32/ffffff/13042a?text=App";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-300">
                Custom mobile application development for iOS and Android
                platforms to enhance your business reach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
            >
              <div className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/icons/branding.png"
                  alt="Branding Strategy"
                  className="w-8 h-8"
                  height={32}
                  width={32}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/32x32/ffffff/13042a?text=Brand";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Branding Strategy
              </h3>
              <p className="text-gray-300">
                Comprehensive branding solutions to establish a strong market
                presence and identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
            >
              <div className="mb-6 bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/icons/graphic-design.png"
                  alt="Graphic Design"
                  className="w-8 h-8"
                  height={32}
                  width={32}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/32x32/ffffff/13042a?text=Design";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Graphic Design
              </h3>
              <p className="text-gray-300">
                Creative design services that communicate your brand message
                effectively and attractively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
            >
              <div className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/icons/seo.png"
                  alt="Search Optimization"
                  className="w-8 h-8"
                  height={32}
                  width={32}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/32x32/ffffff/13042a?text=SEO";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Search Optimization
              </h3>
              <p className="text-gray-300">
                SEO strategies to improve your online visibility and drive
                organic traffic to your website.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text and Progress Bars */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              We Have A Set Of Skill With High Quality
            </motion.h2>

            <div className="space-y-6">
              {/* Skill Progress Bars */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">
                    App Development
                  </span>
                  <span className="text-primary font-medium">95%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">
                    Web Development
                  </span>
                  <span className="text-primary font-medium">90%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">
                    Product Intelligence
                  </span>
                  <span className="text-primary font-medium">85%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">Cyber Security</span>
                  <span className="text-primary font-medium">80%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/images/about/skills.jpg"
                  alt="Our Skills"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/600x400/7d2ae8/ffffff?text=Skills";
                  }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24">
                  <Image
                    src="/images/icons/trophy.png"
                    alt="Trophy"
                    className="w-full h-auto"
                    height={100}
                    width={100}

                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://placehold.co/100x100/ffd700/13042a?text=Trophy";
                    }}
                  />
                </div>

                <div className="absolute -bottom-10 -left-10 w-24 h-24">
                  <Image
                    src="/images/icons/code.png"
                    alt="Code"
                    className="w-full h-auto"
                    height={100}
                    width={100}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://placehold.co/100x100/7d2ae8/ffffff?text=Code";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
