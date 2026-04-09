"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, animate } from 'framer-motion';
import { DollarSign } from 'lucide-react'; // Added Lucide Icon

const FeatureOne = () => {
  const containerRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const hasAnimated = useRef(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Mobile: Active in center (0.35 to 0.65)
      if (isMobile) {
        setIsActive(latest > 0.35 && latest < 0.65);
      }
      
      // Early Number Trigger (Starts at 20% scroll)
      if (latest > 0.20 && !hasAnimated.current) {
        hasAnimated.current = true;
        animate(0, 2, { // Changed to 500 to match $500k
          duration: 3,
          ease: [0.16, 1, 0.3, 1], 
          onUpdate: (value) => setDisplayValue(Math.round(value)),
        });
      }
    });
  }, [scrollYProgress, isMobile]);

  return (
    <motion.div 
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-[#070707] border border-white/[0.05] rounded-[32px] p-8 h-full flex flex-col justify-between min-h-[300px] overflow-hidden transition-all duration-500 cursor-default"
    >
      
      {/* UP-AND-OUT VIBRANT GREEN BACKGROUND */}
      <div 
        className={`absolute inset-0 bg-[#22C55E] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${isActive 
            ? 'translate-y-0' 
            : hasAnimated.current && !isActive && scrollYProgress.get() > 0.65 
              ? '-translate-y-full' 
              : 'translate-y-full'}`} 
      />

      {/* Top Section: Icon Container */}
      <div className="flex justify-end relative z-10">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Circular "Drawing" Border */}
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="#22C55E"
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
              <DollarSign 
                size={28} 
                className={`transition-all duration-500 ${isActive ? 'text-[#22C55E] scale-110' : 'text-white opacity-70'}`} 
              />
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography */}
      <div className="relative z-10 w-full">
        <h2 className={`text-[76px] md:text-[80px] font-bold tracking-tighter leading-none mb-2 transition-colors duration-500
          ${isActive ? 'text-black' : 'text-white'}`}>
          ${displayValue}M<span className={isActive ? 'text-black/30' : 'text-[#22C55E]'}>+</span>
        </h2>
        
        <p className={`text-xl font-bold tracking-wide mb-3 transition-colors duration-500
          ${isActive ? 'text-black' : 'text-white'}`}>
          Revenue Engineered
        </p>

        <p className={`text-sm md:text-base leading-snug font-medium w-full transition-colors duration-500 max-w-[90%]
          ${isActive ? 'text-black/80' : 'text-[#888888]'}`}>
          Across hospitality, real estate, B2B, and service businesses in India, Canada, Australia, and USA.

        </p>
      </div>

    </motion.div>
  );
};

export default FeatureOne;