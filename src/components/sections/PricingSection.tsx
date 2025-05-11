'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

interface PricingPlanProps {
  title: string;
  price: string;
  features: Array<{ text: string; available: boolean }>;
  isPopular?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  title, 
  price, 
  features, 
  isPopular = false,
  delay 
}) => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={`relative rounded-xl overflow-hidden transition-all duration-300 h-full ${
        isPopular 
          ? 'bg-gradient-to-b from-secondary to-secondary/70 text-white shadow-xl transform hover:-translate-y-2' 
          : 'glass-effect border border-secondary/20 hover:border-secondary/40 hover:shadow-lg'
      }`}>
        {isPopular && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-dark font-semibold py-1 px-4 text-sm transform rotate-45 translate-x-5 translate-y-3">
              Popular
            </div>
          </div>
        )}
        
        <div className="p-8">
          <h3 className={`text-xl font-bold mb-4 ${isPopular ? 'text-white' : 'text-white'}`}>
            {title}
          </h3>
          
          <div className="mb-6">
            <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-primary'}`}>
              ${price}
            </span>
            <span className={isPopular ? 'text-gray-200' : 'text-gray-300'}>
              /month
            </span>
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {feature.available ? (
                  <FiCheck className={`mr-3 ${isPopular ? 'text-primary' : 'text-primary'}`} size={18} />
                ) : (
                  <FiX className={`mr-3 ${isPopular ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
                )}
                <span className={`${
                  isPopular 
                    ? feature.available ? 'text-white' : 'text-gray-300' 
                    : feature.available ? 'text-gray-200' : 'text-gray-500'
                }`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          
          <button className={`w-full py-3 px-6 rounded-md font-semibold transition-colors duration-300 ${
            isPopular 
              ? 'bg-primary hover:bg-yellow-500 text-dark' 
              : 'bg-secondary/70 hover:bg-secondary text-white'
          }`}>
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "29",
      features: [
        { text: "1 Website", available: true },
        { text: "5GB Storage", available: true },
        { text: "10GB Bandwidth", available: true },
        { text: "Basic Support", available: true },
        { text: "Free SSL Certificate", available: true },
        { text: "Advanced Analytics", available: false },
        { text: "Custom Domain", available: false },
      ],
      isPopular: false,
    },
    {
      title: "Professional Plan",
      price: "49",
      features: [
        { text: "5 Websites", available: true },
        { text: "20GB Storage", available: true },
        { text: "50GB Bandwidth", available: true },
        { text: "Priority Support", available: true },
        { text: "Free SSL Certificate", available: true },
        { text: "Advanced Analytics", available: true },
        { text: "Custom Domain", available: false },
      ],
      isPopular: true,
    },
    {
      title: "Enterprise Plan",
      price: "79",
      features: [
        { text: "Unlimited Websites", available: true },
        { text: "100GB Storage", available: true },
        { text: "Unlimited Bandwidth", available: true },
        { text: "24/7 Premium Support", available: true },
        { text: "Free SSL Certificate", available: true },
        { text: "Advanced Analytics", available: true },
        { text: "Custom Domain", available: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-darkPurple to-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/10 blur-md animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-secondary/10 blur-md animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-accent/10 blur-md animate-float-slower"></div>
      
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
            PRICING PLANS
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Choose Your Best Plan
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer flexible pricing plans to meet the needs of businesses of all sizes. 
            Choose the plan that works best for you and start growing your business today.
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
