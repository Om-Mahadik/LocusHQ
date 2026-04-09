"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const flags = [
    { src: "/icons/india-flag.svg", alt: "India" },
    { src: "/icons/canada-flag.svg", alt: "Canada" },
    { src: "/icons/australia-flag.svg", alt: "Australia" },
    { src: "/icons/usa-flag.svg", alt: "USA" },
  ];

  return (
    <section className="relative h-auto w-full bg-[#000] text-white flex flex-col items-center px-6 pt-28 pb-0 overflow-hidden">
      
      {/* 1. Sophisticated Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/20 blur-[140px] rounded-full" />
      </div>

      {/* 2. Compact Trusted Tag */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="flex items-center gap-3 mb-10 bg-[#0A0A0A] px-4 py-2 rounded-full border border-white/5 backdrop-blur-md z-10"
      >
        <span className="text-zinc-300 font-medium tracking-wide text-[13px] pl-1">
          Global Operations
        </span>
        <div className="flex -space-x-2">
          {flags.map((flag, index) => (
            <div key={index} className="relative w-6 h-6 rounded-full border-2 border-black overflow-hidden bg-zinc-800 shadow-xl">
              <Image src={flag.src} alt={flag.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. High-Impact Headline & Paragraph */}
      <div className="text-center max-w-5xl z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-[60px] md:text-[115px] font-black tracking-tighter mb-8 leading-[0.95]"
        >
          We Build <br className="md:hidden" /> 
          <span className="text-[#fff12b]">Growth Systems.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-[15px] md:text-[18px] leading-relaxed max-w-[480px] text-justify mb-12 font-light opacity-90"
        >
          Most businesses don't have a traffic problem. They have a broken revenue system. We diagnose it, rebuild it, and operate it - so growth becomes structural, not accidental.
        </motion.p>
      </div>

      {/* 4. Widened CTA Button with White/Black Theme */}
<motion.div 
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
  className="mb-12 z-10 w-full flex justify-center px-4" 
>
  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    /* Added w-full max-w-fit to ensure it handles long text responsibly */
    className="group flex items-center justify-between gap-4 md:gap-8 bg-[#0A0A0A] border border-zinc-800 pl-6 md:pl-12 pr-2 py-2 rounded-full transition-all duration-300 hover:bg-[#111] w-full max-w-fit"
  >
    {/* Added whitespace-nowrap and adjusted tracking for better fit */}
    <span className="text-white text-[11px] md:text-[15px] font-semibold tracking-wider uppercase whitespace-nowrap">
      Diagnose My Revenue System
    </span>
    
    {/* flex-shrink-0 ensures the circle never gets squished or pushed down */}
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-zinc-200 transition-colors flex-shrink-0">
      <ArrowRight size={20} strokeWidth={2.5} />
    </div>
  </motion.button>
</motion.div>

      {/* 5. Minimalist Bottom Dock */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full max-w-4xl z-10 border-t border-white/10 pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0"
      >
        {/* Rating */}
        <div className="flex items-center gap-4 bg-[#0A0A0A] px-5 py-3 rounded-full border border-white/5">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={15} className="fill-[#F5C518] text-[#F5C518]" />
            ))}
          </div>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-white font-bold text-[13px] tracking-tight">5.0 RATING</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest hidden md:block">Verified Results</span>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-12 md:gap-20">
           <div className="flex flex-col items-center text-center">
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none mb-2">15+</p>
              <p className="text-[11px] text-white font-normal tracking-wide">Brands Grown</p>
           </div>
           
           <div className="w-[1px] h-10 bg-white/10" />
           
           <div className="flex flex-col items-center text-center">
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none mb-2">$500K+</p>
              <p className="text-[11px] text-white font-normal tracking-wide">Ad Managed</p>
           </div>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;