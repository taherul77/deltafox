'use client';

import React from 'react';
// import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const MembershipContent = () => {
  const membershipPlans = [
    {
      title: "Silver Membership",
      price: "$500",
      description: "You can view few features",
      features: 4,
      included: [
        "Investment Fundamentals & Data Analytics",
        "Hands-On Python & R in Data Science",
        "Complete Data Science Bootcamp",
        "Information About UI/UX Design Degree"
      ]
    },
    {
      title: "Gold Membership",
      price: "$1,000",
      description: "You can view most features",
      features: 8,
      included: [
        "Investment Fundamentals & Data Analytics",
        "Hands-On Python & R in Data Science",
        "Complete Data Science Bootcamp",
        "Programming MasterclassName for Developers",
        "Hands-On Artificial Neural Networks",
        "PRINCE2® Practitioner Certification Training",
        "PMP® Renewal Pack",
        "Information About UI/UX Design Degree"
      ]
    },
    {
      title: "Diamond Membership",
      price: "$1,500",
      description: "You can view all features",
      features: 15,
      included: [
        "Investment Fundamentals & Data Analytics",
        "Hands-On Python & R in Data Science",
        "Complete Data Science Bootcamp",
        "Programming MasterclassName for Developers",
        "Hands-On Artificial Neural Networks",
        "PRINCE2® Practitioner Certification Training",
        "PMI-RMP® Certification Training",
        "PRINCE2® Foundation Certification Training",
        "PMP® Plus",
        "PMP® Renewal Pack",
        "Digital Project Manager",
        "Agile Project Management: Agile Delivery",
        "Vue JS 2 - The Complete Guide",
        "Everything You Need to Program in Python",
        "Mathematical Foundation For Machine Learning",
        "Drawing Course - Beginner to Advanced",
        "Deep Learning and Artificial Intelligence",
        "Information About UI/UX Design Degree",
        "Photography Photo modify and Beautiful",
        "Professional IT Expert Certificate Course"
      ]
    }
  ];

  const allFeatures = [
    "Investment Fundamentals & Data Analytics",
    "Hands-On Python & R in Data Science",
    "Complete Data Science Bootcamp",
    "Programming MasterclassName for Developers",
    "Hands-On Artificial Neural Networks",
    "PRINCE2® Practitioner Certification Training",
    "PMI-RMP® Certification Training",
    "PRINCE2® Foundation Certification Training",
    "PMP® Plus",
    "PMP® Renewal Pack",
    "Digital Project Manager",
    "Agile Project Management: Agile Delivery",
    "Vue JS 2 - The Complete Guide",
    "Everything You Need to Program in Python",
    "Mathematical Foundation For Machine Learning",
    "Drawing Course - Beginner to Advanced",
    "Deep Learning and Artificial Intelligence",
    "Information About UI/UX Design Degree",
    "Photography Photo modify and Beautiful",
    "Professional IT Expert Certificate Course"
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isFeatureIncluded = (feature: string, plan: any) => {
    return plan.included.includes(feature);
  };

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-white"></th>
                {membershipPlans.map((plan, index) => (
                  <th key={index} className="p-4 text-center bg-yellow-400 text-[#13042a]">
                    <div className="text-2xl font-bold">{plan.price}</div>
                    <div className="text-sm font-medium">{plan.title}</div>
                    <div className="text-xs mt-2">{plan.description}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-4 text-white font-medium">Number of features</td>
                {membershipPlans.map((plan, index) => (
                  <td key={index} className="p-4 text-center text-white">{plan.features}</td>
                ))}
              </tr>
              
              {allFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                  <td className="p-4 text-white">{feature}</td>
                  {membershipPlans.map((plan, planIndex) => (
                    <td key={planIndex} className="p-4 text-center">
                      {isFeatureIncluded(feature, plan) ? (
                        <div className="flex justify-center">
                          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <FiCheck size={14} />
                          </span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <span className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white">
                            <FiX size={14} />
                          </span>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4"></td>
                {membershipPlans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">
                    <button className="bg-white hover:bg-gray-200 text-[#13042a] font-medium py-2 px-6 rounded-full transition-colors duration-300">
                      Get it now
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MembershipContent;
