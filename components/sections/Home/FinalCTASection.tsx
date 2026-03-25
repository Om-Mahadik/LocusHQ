"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

// Explicitly typing variants to prevent the "red underline" linting error
const containerVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function FinalCTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Standard Next.js practice to prevent hydration errors
  if (!mounted) return null;

  return (
    <section className="bg-black py-10 px-4 md:py-20 md:px-6 font-sans antialiased">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative rounded-[40px] md:rounded-[60px] bg-white px-5 py-12 text-center md:px-12 md:py-20"
        >
          {/* Headline */}
          <motion.h2 
            variants={itemVariants}
            className="mx-auto max-w-2xl text-[28px] md:text-[42px] font-bold leading-[1.1] tracking-tighter text-black"
          >
            Ready to stop guessing <br className="hidden md:block" /> where your leads are going?
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-5 max-w-lg text-[15px] md:text-[16px] leading-relaxed text-zinc-500 font-normal"
          >
            Book a free 30-minute audit. We&apos;ll show you exactly where your current setup is leaking money.
          </motion.p>

          {/* Buttons Group */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-row items-center justify-center gap-3"
          >
            <motion.button 
              whileHover={{ backgroundColor: "#F5E060", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex h-[54px] md:h-[60px] items-center gap-4 rounded-full bg-black pl-6 pr-1.5 transition-colors duration-300"
            >
              <span className="text-[14px] md:text-[15px] font-bold text-white transition-colors duration-300 group-hover:text-black tracking-tight">
                Book Audit
              </span>
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#F5E060] transition-colors duration-300 group-hover:bg-black">
                <ArrowRight className="h-4 w-4 text-black transition-colors duration-300 group-hover:text-white" strokeWidth={3} />
              </div>
            </motion.button>

            <motion.button 
              whileHover={{ backgroundColor: "#000000", color: "#ffffff", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-[54px] md:h-[60px] rounded-full border border-zinc-200 px-6 md:px-9 text-[14px] md:text-[15px] font-bold text-black transition-all duration-300"
            >
              See Work
            </motion.button>
          </motion.div>

          {/* Points List */}
          <div className="mt-12 flex flex-col items-start gap-4 mx-auto w-fit">
            {[
              "Understand why you are not catching your potential",
              "What can be improved and how?",
              "How to hit those dream numbers"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-start gap-3 text-left"
              >
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F5E060]/10">
                  <ChevronRight className="h-3.5 w-3.5 text-[#F5E060]" strokeWidth={4} />
                </div>
                <span className="text-[14px] md:text-[15px] font-medium text-zinc-600 tracking-tight">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Footer Text */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-row items-center justify-center whitespace-nowrap gap-x-2 md:gap-x-4 text-[9px] md:text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400 border-t border-zinc-100 pt-6"
          >
            <span>No pitch</span>
            <span className="opacity-20">•</span>
            <span>No commitment</span>
            <span className="opacity-20">•</span>
            <span>30 mins</span>
            <span className="opacity-20">•</span>
            <span>Honest feedback</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}