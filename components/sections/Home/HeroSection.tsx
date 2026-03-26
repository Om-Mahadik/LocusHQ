"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { LogoSlider } from "@/components/ui/Home/LogoSlider";

const HeroSection = () => {
  const flags = [
    { src: "/icons/india-flag.svg", alt: "India" },
    { src: "/icons/canada-flag.svg", alt: "Canada" },
    { src: "/icons/australia-flag.svg", alt: "Australia" },
    { src: "/icons/usa-flag.svg", alt: "USA" },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#000] text-white flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      
      {/* 1. Sophisticated Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/20 blur-[140px] rounded-full" />
      </div>

      {/* 2. Compact Trusted Tag */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="flex items-center gap-3 mb-8 bg-zinc-900/30 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md"
      >
        <span className="text-zinc-500 font-bold tracking-[0.3em] text-[9px] uppercase pl-1">
          Global Operations
        </span>
        <div className="flex -space-x-1.5">
          {flags.map((flag, index) => (
            <div key={index} className="relative w-5 h-5 rounded-full border border-black overflow-hidden bg-zinc-800 shadow-xl">
              <Image src={flag.src} alt={flag.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. High-Impact Headline */}
      <div className="text-center max-w-5xl z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[48px] md:text-[110px] font-bold tracking-[-0.04em] mb-6 leading-[0.9] md:leading-[0.85]"
        >
          We Build <br /> 
          <span className="text-zinc-400 italic font-medium">Growth Systems.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-zinc-500 text-sm md:text-xl leading-relaxed max-w-xl mx-auto mb-10 font-light tracking-tight px-4"
        >
          Scale your brand with AI-powered paid media and automation that turns strangers into high-ticket clients.
        </motion.p>
      </div>

      {/* 3. High-Performance CTA Buttons */}
<motion.div 
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
  className="flex flex-row items-center justify-center gap-3 md:gap-5 mb-16 w-full px-4"
>
  {/* Primary CTA: Start Project */}
  <motion.button 
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="group relative flex items-center justify-center gap-3 bg-white text-black px-6 md:px-10 py-3.5 md:py-4 rounded-full text-[11px] md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  >
    <span className="relative z-10">Start Project</span>
    <motion.div 
      className="relative z-10"
      initial={{ x: 0 }}
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <ArrowRight size={18} strokeWidth={2.5} />
    </motion.div>
    
    {/* Subtle Inner Glow effect on hover */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.button>

  {/* Secondary CTA: View Work */}
  <motion.button 
    whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    whileTap={{ scale: 0.98 }}
    className="px-6 md:px-10 py-3.5 md:py-4 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300 text-[11px] md:text-sm font-black uppercase tracking-[0.2em]"
  >
    View Work
  </motion.button>
</motion.div>
      {/* 5. Refined Social Proof Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex flex-col items-center gap-6 w-full max-w-3xl"
      >
        <motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.1, duration: 0.8 }}
  className="flex items-center gap-4 bg-zinc-900/40 backdrop-blur-md border border-white/5 pl-4 pr-6 py-2.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
>
  {/* Stars with a subtle Glow */}
  <div className="flex -space-x-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <motion.div
        key={s}
        animate={{ 
          filter: ["drop-shadow(0 0 0px #FFD70000)", "drop-shadow(0 0 2px #FFD70088)", "drop-shadow(0 0 0px #FFD70000)"] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: s * 0.2 
        }}
      >
        <Star 
          size={14} 
          className="fill-[#FFD700] text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" 
        />
      </motion.div>
    ))}
  </div>

  {/* Divider Line */}
  <div className="w-[1px] h-4 bg-white/10 mx-1" />

  {/* Rating Text */}
  <div className="flex flex-col">
    <span className="text-[13px] font-black tracking-tighter text-white leading-none">
      5.0 <span className="text-zinc-500 font-medium ml-1">RATING</span>
    </span>
    <span className="text-[8px] font-bold tracking-[0.2em] text-[#FFD700] uppercase mt-0.5 opacity-80">
      Verified Results
    </span>
  </div>
</motion.div>

        {/* Minimalist Grid Stats */}
        <div className="flex items-center justify-center gap-12 text-center">
           <div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Portfolio</p>
              <p className="text-xl font-bold tracking-tighter">15+ Brands</p>
           </div>
           <div className="w-[1px] h-8 bg-zinc-900" />
           <div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Managed</p>
              <p className="text-xl font-bold tracking-tighter">$500K+</p>
           </div>
        </div>
      </motion.div>

      {/* 6. Logo Slider Container */}
      <div className="mt-20 w-full opacity-30 hover:opacity-100 transition-opacity duration-1000">
        <LogoSlider />
      </div>

    </section>
  );
};

export default HeroSection;