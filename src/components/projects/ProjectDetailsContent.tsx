'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiTrendingUp, FiUsers, FiDollarSign, FiGlobe, FiClock, FiLayers } from 'react-icons/fi';
import Image from 'next/image';

interface ClientInfo {
  name: string;
  industry?: string;
  size?: string;
}

interface ProjectDetailsContentProps {
  title: string;
  image: string;
  description: string;
  category: string;
  client: ClientInfo;
  duration: string;
  location: string;
  teamSize?: number;
  budget?: string;
  technologies?: string[];
  problems: string[];
  solutions: string[];
  keyFeatures?: string[];
  metrics: string[];
  awards?: string[];
  partnerships?: string[];
  accessibility?: string[];
  sustainability?: string[];
  caseStudy?: {
    client: string;
    results: string;
  };
}

const ProjectDetailsContent = ({
  title,
  image,
  description,
  category,
  client,
  duration,
  location,
  teamSize,
  budget,
  technologies,
  problems,
  solutions,
  keyFeatures,
  metrics,
  awards,
  partnerships,
  accessibility,
  sustainability,
  caseStudy,
}: ProjectDetailsContentProps) => {
  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
          >
            <Image
              height={600}
              width={600}
              src={image}
              alt={title}
              className="w-full h-auto rounded-3xl object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  'https://placehold.co/600x600/7d2ae8/ffffff?text=Project+Image';
              }}
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <h3 className="text-primary font-semibold mb-4">PROJECT DETAILS</h3>
              <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
              <p className="text-gray-300 mb-6">{description}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FiLayers className="mt-1 mr-3 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Category:</p>
                    <p className="text-white">{category}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Client:</p>
                    <p className="text-white">{client.name}</p>
                    {client.industry && <p className="text-gray-400 text-sm">{client.industry}</p>}
                    {client.size && <p className="text-gray-400 text-sm">{client.size}</p>}
                  </div>
                </div>

                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Duration:</p>
                    <p className="text-white">{duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiGlobe className="mt-1 mr-3 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Location:</p>
                    <p className="text-white">{location}</p>
                  </div>
                </div>

                {teamSize && (
                  <div className="flex items-start">
                    <FiUsers className="mt-1 mr-3 text-primary" />
                    <div>
                      <p className="text-gray-400 text-sm">Team Size:</p>
                      <p className="text-white">{teamSize} professionals</p>
                    </div>
                  </div>
                )}

                {budget && (
                  <div className="flex items-start">
                    <FiDollarSign className="mt-1 mr-3 text-primary" />
                    <div>
                      <p className="text-gray-400 text-sm">Budget:</p>
                      <p className="text-white">{budget}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies Used */}
        {technologies && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Technologies Used
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-white border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        )}

        {/* Problems We Faced */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Challenges We Overcame
          </motion.h3>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-3 text-primary">
                  <FiCheck className="w-5 h-5" />
                </div>
                <p className="text-gray-300">{problem}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Our Solutions */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Innovative Solutions
          </motion.h3>
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start">
                <div className="mt-1 mr-3 text-primary">
                  <FiCheck className="w-5 h-5" />
                </div>
                <p className="text-gray-300">{solution}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Key Features */}
        {keyFeatures && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Results & Metrics */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Measurable Impact
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-center mb-3">
                  <FiTrendingUp className="w-5 h-5 text-primary mr-2" />
                  <p className="text-gray-300">{metric}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Awards & Recognition */}
        {awards && awards.length > 0 && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Awards & Recognition
            </motion.h3>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  <FiAward className="w-5 h-5 text-primary mr-3" />
                  <p className="text-gray-300">{award}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Partnerships */}
        {partnerships && partnerships.length > 0 && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Strategic Partnerships
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {partnerships.map((partner, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-white border border-white/10"
                >
                  {partner}
                </span>
              ))}
            </motion.div>
          </div>
        )}

        {/* Case Study */}
        {caseStudy && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Success Story
            </motion.h3>
            <motion.div
              className="bg-white/5 p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                {caseStudy.client}
              </h4>
              <p className="text-gray-300">{caseStudy.results}</p>
            </motion.div>
          </div>
        )}

        {/* Accessibility Features */}
        {accessibility && accessibility.length > 0 && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Accessibility Features
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {accessibility.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Sustainability */}
        {sustainability && sustainability.length > 0 && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Sustainability Initiatives
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {sustainability.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-white/10"
                >
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailsContent;