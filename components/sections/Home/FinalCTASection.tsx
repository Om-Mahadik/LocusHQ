"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 25, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const tickerItems = [
  "No pitch",
  "No commitment",
  "30 mins",
  "Honest feedback",
];

export default function FinalCTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-black py-12 px-4 md:py-24 md:px-6 font-sans antialiased overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-[40px] md:rounded-[54px] bg-white px-5 py-14 text-center md:px-14 md:py-16 border border-white/10"
        >
          {/* Headline */}
          <motion.h2 
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-[30px] sm:text-[34px] md:text-[38px] font-bold leading-[1.1] tracking-tighter text-black"
          >
            Stop guessing <br className="hidden md:block" /> where your leads are going?
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-md text-base md:text-[15px] leading-relaxed text-zinc-600 font-normal"
          >
            Book a free 30-minute audit. We&apos;ll show you exactly where your current setup is leaking money.
          </motion.p>

          {/* Buttons Group */}
          <motion.div 
            variants={fadeInUp}
            className="mt-10 flex flex-row items-center justify-center gap-3 md:gap-4"
          >
            {/* Primary Button with Smooth Scaling/Color Transition */}
            <motion.button 
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "#4f46e5", // Slightly deeper indigo on hover
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex h-[56px] md:h-[60px] items-center gap-3 md:gap-5 rounded-full bg-black pl-6 md:pl-8 pr-2 transition-colors duration-500 shadow-xl shadow-indigo-500/10"
            >
              <span className="text-sm md:text-[15px] font-bold text-white tracking-tight whitespace-nowrap">
                Book Audit
              </span>
              <motion.div 
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#6366f1]"
                whileHover={{ rotate: -45 }}
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-white" strokeWidth={3} />
              </motion.div>
            </motion.button>

            {/* Secondary Button */}
            <motion.button 
              whileHover={{ 
                scale: 1.03,
                borderColor: "#000",
                backgroundColor: "#fafafa" 
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-[56px] md:h-[60px] rounded-full border border-zinc-200 px-6 md:px-10 text-sm md:text-[15px] font-bold text-black transition-all duration-500 whitespace-nowrap"
            >
              See Work
            </motion.button>
          </motion.div>

          {/* Points List - Each item reveals individually */}
          <div className="mt-12 flex flex-col items-start gap-5 mx-auto w-fit">
            {[
              "Understand why you are not catching your potential",
              "What can be improved and how?",
              "How to hit those dream numbers"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="flex items-center gap-4 text-left"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                  <ChevronRight className="h-3.5 w-3.5 text-indigo-600" strokeWidth={4} />
                </div>
                <span className="text-[15px] md:text-[14px] font-medium text-zinc-800 tracking-tight">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Looping Ticker - Brought closer with mt-6 pt-4 */}
          <motion.div 
            variants={fadeInUp}
            className="relative mt-6 w-full pt-4 overflow-hidden border-t border-zinc-100"
          >
            {/* Fade effect on the edges of the ticker */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              className="flex whitespace-nowrap gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                ease: "linear", 
                duration: 20, 
                repeat: Infinity 
              }}
            >
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-8 text-[11px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400"
                >
                  <span>{item}</span>
                  <span className="opacity-30 font-light">•</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}