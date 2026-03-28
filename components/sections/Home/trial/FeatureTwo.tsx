"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, animate } from 'framer-motion';
import { MousePointerClick, User } from 'lucide-react';

const FeatureTwo = () => {
  const containerRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const startCount = () => {
    hasAnimated.current = true;
    animate(0, 6000, {
      duration: 4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });
  };

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (isMobile) {
        setIsActive(latest > 0.35 && latest < 0.65);
      }
      if (latest > 0.25 && !hasAnimated.current) {
        startCount();
      }
    });
  }, [scrollYProgress, isMobile]);

  return (
    <motion.div 
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      whileTap={{ scale: 0.97 }}
      className={`group relative bg-[#070707] border ${isActive ? 'border-blue-400/20' : 'border-white/[0.05]'} rounded-[32px] p-8 h-full flex flex-col justify-between min-h-[320px] overflow-hidden transition-all duration-700 cursor-default`}
    >
      
      {/* BOLD BACKGROUND: Deep Blue Theme */}
      <div 
        className={`absolute inset-0 bg-[#1E40AF] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${isActive ? 'translate-y-0' : 'translate-y-full'}`} 
      />

      {/* Top Section: Lead Generation Icon Concept */}
      <div className="flex justify-end relative z-10">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Circular "Drawing" Border - Blue */}
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              stroke="#60A5FA"
              strokeWidth="1.5"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isActive ? { 
                pathLength: [0, 0.7, 0.7, 0],
                pathOffset: [0, 0, 0.3, 1],
                opacity: [0, 1, 1, 0]
              } : { opacity: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Abstract Icon Group */}
          <div className={`relative w-[70px] h-[70px] rounded-full border transition-all duration-500
            ${isActive ? 'bg-black border-transparent shadow-2xl' : 'bg-[#151515] border-white/10'}`}>
            <div className="flex items-center justify-center h-full relative">
              <User 
                size={32} 
                className={`text-white transition-all duration-700 ${isActive ? 'scale-110 opacity-100' : 'opacity-60'}`} 
                strokeWidth={1.5}
              />
              {/* The "Click" action - Blue Accent */}
              <motion.div
                className="absolute -top-1 -right-1 bg-[#60A5FA] p-1.5 rounded-full text-black shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <MousePointerClick size={16} strokeWidth={2.5} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography */}
      <div className="relative z-10 w-full">
        <h2 className={`text-[64px] md:text-[80px] font-bold tracking-tighter leading-none mb-2 transition-colors duration-500
          ${isActive ? 'text-white' : 'text-white'}`}>
          {displayValue.toLocaleString()}+
        </h2>
        
        <p className={`text-xl font-bold uppercase tracking-wide mb-3 transition-colors duration-500
          ${isActive ? 'text-white' : 'text-white'}`}>
          Qualified Leads Generated
        </p>

        <p className={`text-[#888888] text-sm md:text-base leading-snug font-medium w-full transition-colors duration-500
          ${isActive ? 'text-white/90' : ''}`}>
          Banquet, restaurant, real estate, and service business inquiries 
          <span className={`${isActive ? 'text-white block mt-1' : 'text-white block mt-1'} transition-colors`}>
            with documented CPL data.
          </span>
        </p>
      </div>

    </motion.div>
  );
};

export default FeatureTwo;