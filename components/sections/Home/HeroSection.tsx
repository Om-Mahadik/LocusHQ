"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const flags = [
    { src: "/icons/india-flag.svg", alt: "India" },
    { src: "/icons/canada-flag.svg", alt: "Canada" },
    { src: "/icons/australia-flag.svg", alt: "Australia" },
    { src: "/icons/usa-flag.svg", alt: "USA" },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#000000] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* 1. Trusted Brands Tag with SVG Flags */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <span className="text-zinc-500 font-medium tracking-widest text-[10px] md:text-xs uppercase">
          Trusted by brands in
        </span>
        <div className="flex -space-x-2.5">
          {flags.map((flag, index) => (
            <motion.div 
              key={index} 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
              className="relative w-8 h-8 rounded-full border-[2.5px] border-black bg-zinc-900 overflow-hidden hover:z-10 hover:scale-110 transition-transform cursor-pointer"
            >
              <Image
                src={flag.src}
                alt={flag.alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 2. Main Headline (Refined Typography) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
          We Build <br /> 
          <span className="text-white">Growth Systems</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight mb-10">
          Not Ads. Not Agencies. Results.
        </h2>
        
        <p className="text-zinc-500 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-14 font-light">
          LocusHQ runs paid media, builds AI-powered lead journeys, and deploys 
          automation that turns strangers into booked clients — across Meta, Google, 
          and every touchpoint between the first click and the signed contract.
        </p>
      </motion.div>

      {/* 3. Call to Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-5 mb-24"
      >
        <button className="group relative flex items-center gap-4 bg-[#2a2a2a] hover:bg-[#333333] border border-white/5 transition-all px-8 py-4 rounded-full text-lg font-semibold tracking-tight">
          Start a Project
          <div className="bg-[#A88E76] p-1.5 rounded-full group-hover:translate-x-1.5 transition-transform duration-300">
            <ArrowRight size={18} className="text-black stroke-[3px]" />
          </div>
        </button>

        <button className="px-12 py-4 rounded-full border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold tracking-tight">
          See Our Work
        </button>
      </motion.div>

      {/* 4. Premium Rating Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="flex flex-col md:flex-row items-center gap-10 border-t border-white/10 pt-12 w-full max-w-3xl justify-center"
      >
        {/* Rating Pill */}
        <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/5 shadow-2xl">
          <Star size={22} className="fill-[#FFD700] text-[#FFD700]" />
          <span className="text-2xl font-black tracking-tighter italic">5.0</span>
        </div>

        {/* Stats List */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-zinc-400 text-sm md:text-base font-medium">
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]" />
            Trusted by 15+ brands
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-sm md:text-base font-medium">
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]" />
            $500K+ in ad spend managed
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;