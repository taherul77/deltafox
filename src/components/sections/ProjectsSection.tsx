"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  delay,
}) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link href="/projects/project-details">
        <div className="group relative overflow-hidden rounded-xl">
          {/* Project Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              width={600}
              height={450}
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://placehold.co/600x450/7d2ae8/ffffff?text=Project";
              }}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary font-medium mb-2">{category}</span>
            <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
            <div className="w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center self-start hover:bg-primary hover:text-dark transition-colors duration-300">
              <FiExternalLink size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      image: "/newImage/E-commerce.png",
      category: "Web Development",
      title: "E-commerce Platform",
    },
    {
      image: "/newImage/Fitness.jpg",
      category: "Mobile App",
      title: "Fitness Tracker",
    },
    {
      image: "/newImage/BankingDashboard.jpg",
      category: "UI/UX Design",
      title: "Banking Dashboard",
    },
    {
      image: "/newImage/DataAnalyticsPlatform.png",
      category: "Cloud Services",
      title: "Data Analytics Platform",
    },
    {
      image: "/newImage/Learning-Management-System.png",
      category: "Web Development",
      title: "Learning Management System",
    },
    {
      image: "/newImage/FoodDeliveryApp.jpg",
      category: "Mobile App",
      title: "Food Delivery App",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-darkPurple relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 left-20 w-16 h-16 rounded-full bg-primary/10 blur-md animate-float"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 rounded-full bg-secondary/10 blur-md animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-accent/10 blur-md animate-float-slower"></div>

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
            OUR PROJECTS
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Recent Projects
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects that showcase our
            expertise and commitment to delivering exceptional results for our
            clients.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              delay={0.1 * (index % 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
