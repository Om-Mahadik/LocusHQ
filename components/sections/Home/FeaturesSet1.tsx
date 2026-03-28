"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MousePointerClick, User } from 'lucide-react';

const FeaturesSet1 = () => {
  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const iconFloat = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      variants={containerVars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-4xl mx-auto p-4 space-y-4 font-sans"
    >
      {/* Top Card - Total Ad Spend */}
      <motion.div 
        variants={cardVars}
        whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
        className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-sm flex justify-between items-center cursor-default"
      >
        <div className="max-w-[65%]">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-5xl font-bold text-black mb-2 md:mb-4">$500k</motion.h2>
          <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1">Total Ad Spend Managed</h3>
          <p className="text-gray-500 text-xs md:text-sm leading-tight md:leading-relaxed">
            Across hospitality, real estate, B2B, and service businesses.
          </p>
        </div>
        <motion.div 
          variants={iconFloat}
          animate="animate"
          className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border-[4px] md:border-[6px] border-[#95C394] shrink-0"
        >
          <DollarSign className="w-8 h-8 md:w-12 md:h-12 text-black" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      {/* Middle Card - Leads Generated */}
      <motion.div 
        variants={cardVars}
        whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
        className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-sm flex justify-between items-center relative overflow-hidden cursor-default"
      >
        <div className="max-w-[65%]">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2 md:mb-4">6000+</h2>
          <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1">Qualified Leads</h3>
          <p className="text-gray-500 text-xs md:text-sm leading-tight md:leading-relaxed">
            Banquet, restaurant, and real estate inquiries with CPL data.
          </p>
        </div>
        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 shrink-0">
          <motion.div 
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 right-4 md:right-8 bg-gray-100 p-2 md:p-3 rounded-full z-10"
          >
            <MousePointerClick className="w-4 h-4 md:w-6 md:h-6 text-black" />
          </motion.div>
          <motion.div 
            variants={iconFloat}
            animate="animate"
            className="absolute bottom-2 right-0 bg-[#FEF9C3] p-3 md:p-4 rounded-full"
          >
            <User className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Brands Scaled */}
        <motion.div 
          variants={cardVars}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center cursor-default"
        >
          <motion.h2 
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            className="text-4xl md:text-7xl font-bold text-black mb-2 md:mb-8"
          >
            15+
          </motion.h2>
          <h3 className="text-sm md:text-xl font-semibold text-gray-900 leading-tight">Brands Scaled</h3>
        </motion.div>

        {/* Countries */}
        <motion.div 
          variants={cardVars}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center cursor-default"
        >
          <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4 md:mb-8">
            {['🇮🇳', '🇦🇺', '🇦🇪', '🇨🇦', '🇺🇸'].map((flag, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl md:text-4xl"
              >
                {flag}
              </motion.span>
            ))}
          </div>
          <h3 className="text-sm md:text-xl font-semibold text-gray-900 leading-tight">
            5 Countries 1 System
          </h3>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSet1;