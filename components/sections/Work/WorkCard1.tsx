// src/components/work/WorkCard1.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const cardData = {
  title: "Tamasha Toronto —\nRestaurant Market Entry",
  description: "Entering the Toronto hospitality market from zero",
  meta: "Restaurant • Canada",
  flagSrc: "/icons/canada-flag.svg", 
  imageSrc: "/imgs/work1.jpg", 
  metrics: [
    { targetValue: 2.1, label: "Reach", prefix: "", suffix: "M", divisor: 1, decimals: 1 },
    { targetValue: 0.28, label: "Average CPC", prefix: "$", suffix: "", divisor: 1, decimals: 2 },
  ],
  // Split into parts for the carousel
  footerParts: [
    "26 campaigns managed",
    "$4,992 USD managed"
  ]
};

export default function WorkCard1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [footerIndex, setFooterIndex] = useState(0);

  // Carousel Logic: Change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFooterIndex((prev) => (prev + 1) % cardData.footerParts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const itemReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    }),
  };

  return (
    <div ref={ref} className="w-full group mb-24 md:mb-0 px-1">
      
      {/* 1. IMAGE CONTAINER - Slightly brighter border */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-zinc-900 mb-8 border border-white/10 shadow-2xl"
      >
        <Image 
          src={cardData.imageSrc} 
          alt="Tamasha Toronto" 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
      </motion.div>

      {/* 2. INFO HEADER */}
      <div className="px-2">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            custom={1} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal}
            className="text-2xl font-semibold text-zinc-100 leading-tight tracking-tight whitespace-pre-line"
          >
            {cardData.title}
          </motion.h3>
          <motion.div custom={1.2} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="w-8 h-8 flex items-center justify-center">
             <Image src={cardData.flagSrc} alt="Canada" width={28} height={20} className="object-contain" />
          </motion.div>
        </div>

        <motion.p custom={1.4} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="text-zinc-400 text-[15px] mb-1 font-light">
          {cardData.description}
        </motion.p>
        <motion.p custom={1.6} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="text-zinc-500 text-[10px] mb-8 uppercase tracking-[0.2em] font-medium">
          {cardData.meta}
        </motion.p>
      </div>

      {/* 3. STATS GRID - Brighter border for visibility */}
      <div className="grid grid-cols-2 gap-3 mb-8 px-1">
        {cardData.metrics.map((metric, index) => (
          <StatBox key={index} {...metric} isInView={isInView} index={index} />
        ))}
      </div>

      {/* 4. BUTTON & DYNAMIC FOOTER */}
      <div className="px-2 flex flex-col gap-8">
        <motion.div custom={2.5} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal}>
          <Link href="/work/tamasha" className="block md:inline-block group/btn">
            <div className="flex items-center justify-center md:justify-start gap-3 px-8 py-4 md:py-3 border border-zinc-700 rounded-full bg-zinc-800/20 hover:bg-white hover:border-white transition-all duration-500 ease-out w-full md:w-auto">
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-300 group-hover/btn:text-black transition-colors duration-500">
                View Case Study
              </span>
              <svg 
                className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-500" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        </motion.div>

        {/* --- DYNAMIC SLIDING FOOTER (FIXED ALIGNMENT) --- */}
<motion.div 
  custom={2.8} 
  initial="hidden" 
  animate={isInView ? "visible" : "hidden"} 
  variants={itemReveal}
  className="flex items-center gap-3 ml-2 h-6" // Increased h-5 to h-6 for better text clearance
>
  {/* Bullet Point - Perfectly aligned to the h-6 container */}
  <div className="w-1 h-1 bg-zinc-500 rounded-full shrink-0" />
  
  <div className="relative h-full w-full flex items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.p
        key={footerIndex}
        // y: 12 is roughly half of h-6 (24px) to ensure it slides from/to center
        initial={{ y: 15, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -15, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        // Removed 'absolute' to allow flex centering, or used inset-0 with flex
        className="text-zinc-400 text-[11px] font-light tracking-wide whitespace-nowrap"
      >
        {cardData.footerParts[footerIndex]}
      </motion.p>
    </AnimatePresence>
  </div>
</motion.div>
      </div>
    </div>
  );
}

function StatBox({ targetValue, label, prefix, suffix, decimals, isInView, index }: any) {
  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetValue, {
        duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.8 + (index * 0.2),
        onUpdate(value) {
          setDisplayValue(prefix + value.toFixed(decimals) + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue, decimals, prefix, suffix, index]);

  return (
    <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-[30px] px-8 py-6 flex items-center justify-between group-hover:border-zinc-500 transition-colors duration-500">
      <span className="text-3xl font-bold text-white tracking-tighter leading-none">{displayValue}</span>
      <span className="text-zinc-400 text-[9px] uppercase tracking-widest text-right max-w-[60px] leading-tight font-medium self-center">
        {label}
      </span>
    </div>
  );
}