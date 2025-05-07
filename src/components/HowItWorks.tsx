'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowItWorks() {
  // Set up animations that trigger when component comes into view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 300
      }
    }
  };

  

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="w-full max-w-[1197px] mx-auto py-20 px-10 bg-[#f5f7ff] rounded-[40px]"
    >
      <div className="flex flex-col items-center gap-[50px]">
        <motion.div 
          className="text-center"
          variants={titleVariants}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2 bg-[#e0e4ff] rounded-full text-[#5b6ad0] font-medium mb-4"
          >
            Simple process
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b]">How it works</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] w-full">
          {/* Step 1 */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
          >
            <motion.div 
              variants={numberVariants}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="w-10 h-10 flex items-center justify-center bg-[#e0e4ff] rounded-full mb-4"
            >
              <span className="text-[#5b6ad0] font-medium">1</span>
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-[#1e293b]">Create Your Profile</h3>
            <p className="text-gray-600 text-sm">
              Sign in using your Google account and fill in your basic details to start building your personalized 
              digital visiting card.
            </p>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            custom={1}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
          >
            <motion.div 
              variants={numberVariants} 
              animate={{ y: [-5, 5, -5] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="w-10 h-10 flex items-center justify-center bg-[#e0e4ff] rounded-full mb-4"
            >
              <span className="text-[#5b6ad0] font-medium">2</span>
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-[#1e293b]">Customize Your Portfolio</h3>
            <p className="text-gray-600 text-sm">
              Add your information, profile photo, and links to create a sleek, professional digital portfolio that&apos;s
              ready to share.
            </p>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            custom={2}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
          >
            <motion.div 
              variants={numberVariants}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="w-10 h-10 flex items-center justify-center bg-[#e0e4ff] rounded-full mb-4"
            >
              <span className="text-[#5b6ad0] font-medium">3</span>
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-[#1e293b]">Choose & Buy Your NFC Card</h3>
            <p className="text-gray-600 text-sm">
              Browse a wide selection of stylish NFC card designs and buy your favorite one with just a few clicks.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}