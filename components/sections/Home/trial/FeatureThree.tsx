"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, animate } from 'framer-motion';
import { Globe } from 'lucide-react';

const FeatureThree = () => {
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
    animate(0, 5, { // Animating to 5 countries as per previous context
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });
  };

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (isMobile) {
        setIsActive(latest > 0.35 && latest < 0.65);
      }
      
      if (latest > 0.20 && !hasAnimated.current) {
        startCount();
      }
    });
  }, [scrollYProgress, isMobile]);

  return (
    <motion.div 
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      whileTap={{ scale: 0.98 }}
      className={`group relative bg-[#070707] border ${isActive ? 'border-[#FACC15]/20' : 'border-white/[0.05]'} rounded-[32px] p-8 h-full flex flex-col justify-between min-h-[320px] overflow-hidden transition-all duration-500 cursor-default`}
    >
      
      {/* UP-AND-OUT YELLOW BACKGROUND */}
      <div 
        className={`absolute inset-0 bg-[#FACC15] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${isActive 
            ? 'translate-y-0' 
            : hasAnimated.current && !isActive && scrollYProgress.get() > 0.65 
              ? '-translate-y-full' 
              : 'translate-y-full'}`} 
      />

      {/* Top Section: Globe Icon */}
      <div className="flex justify-end relative z-10">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Circular "Drawing" Border - Yellow */}
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="#FACC15"
              strokeWidth="1.5"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isActive ? { 
                pathLength: [0, 0.7, 0.7, 0],
                pathOffset: [0, 0, 0.3, 1],
                opacity: [0, 1, 1, 0]
              } : { opacity: 0 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          <div className={`w-[60px] h-[60px] rounded-full border transition-all duration-500 flex items-center justify-center
            ${isActive ? 'bg-black border-transparent shadow-2xl' : 'bg-[#151515] border-white/10'}`}>
              <Globe 
                size={28} 
                className={`transition-all duration-700 ${isActive ? 'text-[#FACC15] scale-110' : 'text-white opacity-70'}`} 
              />
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography */}
      <div className="relative z-10 w-full">
        <h2 className={`text-[64px] md:text-[80px] font-bold tracking-tighter leading-none mb-2 transition-colors duration-500
          ${isActive ? 'text-black' : 'text-white'}`}>
          {displayValue}<span className={isActive ? 'text-black/30' : 'text-[#FACC15]'}>.</span>
        </h2>
        
        <p className={`text-xl font-bold uppercase tracking-wide mb-3 transition-colors duration-500
          ${isActive ? 'text-black' : 'text-white'}`}>
          Countries. One System.
        </p>

        <p className={`text-sm md:text-base leading-snug font-medium w-full transition-colors duration-500
          ${isActive ? 'text-black/80' : 'text-[#888888]'}`}>
          Strategically scaling brands through unified operations <br className="hidden md:block" />
          <span className={`block mt-1 font-bold ${isActive ? 'text-black' : 'text-white'} transition-colors`}>
            India · Canada · Australia · USA
          </span>
        </p>
      </div>

    </motion.div>
  );
};

export default FeatureThree;