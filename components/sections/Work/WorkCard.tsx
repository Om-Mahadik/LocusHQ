// src/components/work/WorkCard.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, animate, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

// Fixed Stat Interface
interface Stat {
  targetValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

// Fixed Props Interface
interface WorkCardProps {
  imageSrc: string;
  flagSrc: string;
  title: string;
  description: string;
  meta: string;
  metrics: Stat[];
  footerParts: string[];
  href: string;
}

// Fix for StatBox Props
interface StatBoxProps extends Stat {
  isInView: boolean;
  index: number;
}

export default function WorkCard({ 
  imageSrc, flagSrc, title, description, meta, metrics, footerParts, href 
}: WorkCardProps) {
  // Fix: Added HTMLDivElement type to the ref
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [footerIndex, setFooterIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFooterIndex((prev) => (prev + 1) % footerParts.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [footerParts.length]);

  // Fix: Explicitly typed Variants for Framer Motion
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    }),
  };

  return (
    <div ref={ref} className="w-full group px-2 md:px-4">
      {/* 1. IMAGE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="relative aspect-[16/10] md:aspect-[16/9.5] rounded-[28px] md:rounded-[32px] overflow-hidden bg-zinc-900 mb-6 md:mb-8 border border-white/10 shadow-2xl"
      >
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
      </motion.div>

      {/* 2. INFO HEADER */}
      <div className="px-1 md:px-2">
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <motion.h3 
            custom={1} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal}
            className="text-xl md:text-2xl font-semibold text-zinc-100 leading-tight tracking-tight whitespace-pre-line"
          >
            {title}
          </motion.h3>
          <motion.div custom={1.2} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="shrink-0">
             <Image src={flagSrc} alt="Flag" width={24} height={18} className="object-contain opacity-90" />
          </motion.div>
        </div>

        <motion.p custom={1.4} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="text-zinc-400 text-sm md:text-[15px] mb-1 font-light leading-relaxed">
          {description}
        </motion.p>
        <motion.p custom={1.6} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="text-zinc-500 text-[9px] md:text-[10px] mb-6 md:mb-8 uppercase tracking-[0.2em] font-medium">
          {meta}
        </motion.p>
      </div>

      {/* 3. STATS GRID */}
      <div className="grid grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8 px-1">
        {metrics.map((metric, index) => (
          <StatBox key={index} {...metric} isInView={isInView} index={index} />
        ))}
      </div>

      {/* 4. BUTTON & FOOTER */}
      <div className="px-1 md:px-2 flex flex-col gap-6 md:gap-8">
        <motion.div custom={2.5} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal}>
          <Link href={href} className="block md:inline-block group/btn">
            <div className="flex items-center justify-center md:justify-start gap-3 px-6 md:px-7 py-3.5 md:py-2.5 border border-zinc-700 rounded-full bg-zinc-800/20 hover:bg-white hover:border-white transition-all duration-500 ease-out w-full md:w-auto">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-300 group-hover/btn:text-black transition-colors duration-500">
                View Case Study
              </span>
              <svg className="w-3 h-3 text-zinc-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        </motion.div>

        <motion.div custom={2.8} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemReveal} className="flex items-center gap-3 ml-1 md:ml-2 h-6">
          <div className="w-1 h-1 bg-zinc-600 rounded-full shrink-0" />
          <div className="relative h-full w-full flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={footerIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="text-zinc-500 text-[10px] md:text-[11px] font-light tracking-wide whitespace-nowrap"
              >
                {footerParts[footerIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Fix: Removed 'any' and applied StatBoxProps interface
function StatBox({ targetValue, label, prefix = "", suffix = "", decimals = 0, isInView, index }: StatBoxProps) {
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
    <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-[24px] md:rounded-[30px] px-5 md:px-8 py-5 md:py-6 flex items-center justify-between group-hover:border-zinc-500 transition-colors">
      <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter leading-none">{displayValue}</span>
      <span className="text-zinc-500 text-[8px] md:text-[9px] uppercase tracking-widest text-right max-w-[50px] md:max-w-[60px] leading-tight font-medium self-center">{label}</span>
    </div>
  );
}