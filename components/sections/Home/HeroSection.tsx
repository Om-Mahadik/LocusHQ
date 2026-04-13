"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  // 1. Defined the type as <HTMLInputElement> to fix the 'never' error
  const [highlightColor, setHighlightColor] = useState("#5A30FF");
  const colorInputRef = useRef<HTMLInputElement>(null);

  const flags = [
    { src: "/icons/india-flag.svg", alt: "India" },
    { src: "/icons/canada-flag.svg", alt: "Canada" },
    { src: "/icons/australia-flag.svg", alt: "Australia" },
    { src: "/icons/usa-flag.svg", alt: "USA" },
  ];

  return (
    <section className="relative h-auto w-full bg-[#000] text-white flex flex-col items-center px-6 pt-28 pb-0 overflow-hidden font-sans antialiased">
      
      {/* 1. Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/20 blur-[140px] rounded-full" />
      </div>

      {/* 2. Global Operations Tag */}
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

      {/* 3. Headline & Paragraph */}
      <div className="text-center max-w-5xl z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => colorInputRef.current?.click()} 
          className="relative text-[60px] md:text-[115px] font-black tracking-tighter mb-4 leading-[0.95] cursor-pointer select-none"
        >
          We Build <br className="md:hidden" /> 
          <span 
            style={{ color: highlightColor }} 
            className="transition-colors duration-300"
          >
            Growth Systems.
          </span>
        </motion.h1>

        {/* Hex Code Display for Client Confirmation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 mb-8"
        >
          <p className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
            Hex Code: <span style={{ color: highlightColor }} className="font-bold">{highlightColor.toUpperCase()}</span>
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-[15px] md:text-[18px] leading-relaxed max-w-[480px] text-center mb-12 font-light opacity-90"
        >
          Most businesses don't have a traffic problem. They have a broken revenue system. We diagnose it, rebuild it, and operate it - so growth becomes structural.
        </motion.p>
      </div>

      {/* 4. Hidden Input (Now recognized by TS) */}
      <input
        type="color"
        ref={colorInputRef}
        value={highlightColor}
        onChange={(e) => setHighlightColor(e.target.value)}
        className="sr-only"
      />

      {/* 5. CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="mb-12 z-10 w-full flex justify-center px-4" 
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center justify-between gap-4 md:gap-6 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 pl-8 pr-2 py-3 rounded-[2rem] transition-all duration-300 w-full max-w-fit shadow-2xl"
        >
          <span className="text-white text-[14px] md:text-[16px] font-medium tracking-wide leading-tight text-left max-w-[140px] md:max-w-[180px]">
            Start a Project
          </span>
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 shadow-lg">
            <ArrowRight size={24} strokeWidth={2.5} />
          </div>
        </motion.button>
      </motion.div>

      {/* 6. Bottom Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full max-w-4xl z-10 border-t border-white/10 pt-8 pb-10 flex flex-col md:flex-row items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none mb-2">25+</p>
          <p className="text-[11px] text-white/50 font-normal tracking-wide uppercase">Brands Scaled</p>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;