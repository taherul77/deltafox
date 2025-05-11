'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <motion.div 
      className="border-b border-gray-700/30 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <button
        className="w-full py-5 px-4 text-left flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-primary">
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </motion.div>
  );
};

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "Why Are Consultants Important?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam."
    },
    {
      question: "What is The Purpose of a Consultant?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam."
    },
    {
      question: "What Attracts You To The Role of a Consultant?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam."
    },
    {
      question: "What Are The Advantages of Being a Consultant?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam."
    },
    {
      question: "Is Consulting a Good Career?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam."
    },
    {
      question: "How is Working in Consulting?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam."
    }
  ];

  return (
    <section className="py-24 bg-[#13042a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Ask Questions
          </motion.h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-[#1a0940]/50 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQContent;
