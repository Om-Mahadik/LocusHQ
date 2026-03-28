"use client";

import React, { useState, useEffect } from 'react'; // Added useState & useEffect
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { DollarSign, MousePointerClick, User, Check } from 'lucide-react';

const containerVars: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVars: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const FeaturesSet1 = () => {
  // --- HYDRATION FIX ---
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full min-h-screen bg-black" />; 
  // ---------------------

  const flags = [
    { src: '/icons/india-flag.svg', alt: 'India' },
    { src: '/icons/australia-flag.svg', alt: 'Australia' },
    { src: '/icons/uae-flag.svg', alt: 'UAE' },
    { src: '/icons/canada-flag.svg', alt: 'Canada' },
    { src: '/icons/usa-flag.svg', alt: 'USA' },
  ];

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center p-4 md:p-8 font-sans">
      <motion.div 
        className="bg-white rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl w-full max-w-4xl"
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-2 md:gap-3">
          {/* Top Card */}
          <motion.div 
            variants={cardVars}
            className="rounded-[1.5rem] md:rounded-[2.2rem] p-6 md:p-8 border border-gray-100 flex justify-between items-center bg-gray-50/60"
          >
            <div className="max-w-[60%]">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-1">$500k</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Total Ad Spend Managed</h3>
              <p className="text-gray-500 text-xs md:text-sm">Across hospitality, real estate, and B2B.</p>
            </div>
            <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                <motion.circle
                  cx="18" cy="18" r="16" fill="none" stroke="#95C394" strokeWidth="3"
                  strokeDasharray="100"
                  initial={{ strokeDashoffset: 100 }}
                  whileInView={{ strokeDashoffset: 30 }}
                  transition={{ duration: 1.8, ease: "circOut", delay: 0.6 }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm flex items-center justify-center border border-gray-100 z-10">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
            </div>
          </motion.div>

          {/* Leads Card */}
          <motion.div 
            variants={cardVars}
            className="rounded-[1.5rem] md:rounded-[2.2rem] p-6 md:p-8 border border-gray-100 flex justify-between items-center bg-gray-50/60 overflow-hidden"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-1">6000+</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Qualified Leads</h3>
              <p className="text-gray-500 text-xs md:text-sm">Inquiries with documented CPL data.</p>
            </div>
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mouse-wrapper absolute z-20">
                  <div className="bg-white p-3 rounded-full shadow-md border border-gray-100 relative">
                    <MousePointerClick className="w-5 h-5 text-black" />
                    <div className="click-ripple" />
                  </div>
                </div>
                <div className="user-wrapper absolute z-10">
                  <div className="relative">
                    <div className="bg-[#FEF9C3] p-4 rounded-full shadow-sm">
                      <User className="w-7 h-7 text-black" />
                    </div>
                    <div className="success-check absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1 scale-0">
                      <Check className="w-3 h-3" strokeWidth={4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <motion.div variants={cardVars} className="rounded-[1.5rem] md:rounded-[2.2rem] p-8 md:p-12 bg-gray-50/60 border border-gray-100 flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-2">15+</h2>
              <h3 className="text-sm md:text-lg font-semibold text-gray-800">Brands Scaled</h3>
            </motion.div>
            <motion.div variants={cardVars} className="rounded-[1.5rem] md:rounded-[2.2rem] p-8 md:p-12 bg-gray-50/60 border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {flags.map((flag, i) => (
                  <div key={i} className="relative w-8 h-8 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image src={flag.src} alt={flag.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <h3 className="text-sm md:text-lg font-semibold text-gray-800">5 Countries 1 System</h3>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes mouseCycle {
          0%, 10% { transform: translate(0, 0) scale(1); opacity: 1; }
          12% { transform: translate(0, 0) scale(0.8); }
          15% { transform: translate(0, 0) scale(1); }
          30%, 75% { transform: translate(45px, -35px); opacity: 0; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes userCycle {
          0%, 12% { transform: translate(45px, 35px) scale(1); }
          15% { transform: translate(45px, 35px) scale(1.1); }
          18% { transform: translate(45px, 35px) scale(1); }
          30%, 75% { transform: translate(0, 0); }
          100% { transform: translate(45px, 35px); }
        }
        @keyframes successPop {
          0%, 14% { transform: scale(0); opacity: 0; }
          18% { transform: scale(1.2); opacity: 1; }
          22% { transform: scale(1); opacity: 1; }
          45% { transform: scale(1); opacity: 0; }
          100% { transform: scale(0); opacity: 0; }
        }
        @keyframes clickRipple {
          0%, 14% { transform: scale(0.5); opacity: 0; }
          15% { transform: scale(0.5); opacity: 0.5; }
          25% { transform: scale(1.8); opacity: 0; }
          100% { opacity: 0; }
        }
        .mouse-wrapper { animation: mouseCycle 5s infinite ease-in-out; }
        .user-wrapper { animation: userCycle 5s infinite ease-in-out; }
        .success-check { animation: successPop 5s infinite ease-out; }
        .click-ripple {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #000;
          animation: clickRipple 5s infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSet1;