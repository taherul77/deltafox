'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  className = '',
  children,
  delay = 0,
  duration = 3,
  x = 10,
  y = 10,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, y, 0],
          x: [0, x, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

interface ParallaxElementProps {
  className?: string;
  children?: React.ReactNode;
  speed?: number;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  className = '',
  children,
  speed = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInProps {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  className = '',
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  once = true,
}) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: initial,
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
