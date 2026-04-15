"use client";

import React from "react";
import { motion } from "framer-motion";

const caseStudy = {
  title: "Why restaurants get traffic but never fill their tables",
  subtitle: "A look at the exact revenue gaps we find in hospitality businesses — and the full-stack system we deploy to close them.",
  heroImage: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1200&q=85",
};

export default function Hero() {
  return (
    /* Increased top padding (pt-24 md:pt-40) and removed bottom padding (pb-0) */
    <section className="relative flex flex-col items-center bg-[#000000] px-6 pt-24 pb-0 md:pt-40">
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]"
        >
          {caseStudy.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mb-10 md:mb-14 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-lg"
        >
          {caseStudy.subtitle}
        </motion.p>
      </div>

      {/* Hero Image Container - Reduced margin-bottom or removed extra padding below */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative z-10 w-full max-w-6xl mb-0"
      >
        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 shadow-2xl">
          <img 
            src={caseStudy.heroImage} 
            alt="Hospitality Analysis"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
}