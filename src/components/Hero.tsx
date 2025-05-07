"use client";

import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 max-w-5xl mx-auto">
      <motion.h1 
        className="text-5xl font-bold mb-6 text-gray-900 leading-tight"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeIn}
      >
        The Smartest First Impression<br />You&apos;ll Ever Make.
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-600 mb-12 max-w-3xl"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeIn}
      >
        Built for leaders, founders, and high-impact professionals.<br />
        A digital identity that&apos;s instantly shareable, beautifully<br />
        designed, and paired with a premium NFC experience.
      </motion.p>
      
      <motion.div 
        className="flex flex-col md:flex-row gap-4"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeIn}
      >
        <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
          <Button variant="outline">
            Go to My Portfolio
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Button>
        </motion.div>
        
        <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
          <Button variant="primary">
            Start for Free
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;