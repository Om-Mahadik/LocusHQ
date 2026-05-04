// components/sections/Contact/ContactForm.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#080808] border border-neutral-900 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden w-full"
      >
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Row 1: Name & Business */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-all"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Your business"
                className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-all"
              />
            </div>
          </motion.div>

          {/* Row 2: Email */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@yourbusiness.com"
              className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-all"
            />
          </motion.div>

          {/* Row 3: Market & Vertical */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                Market
              </label>
              <div className="relative">
                {/* Fixed using defaultValue and removing 'selected' from option */}
                <select 
                  defaultValue=""
                  className="w-full appearance-none bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neutral-700 transition-all cursor-pointer"
                >
                  <option value="" disabled>Select market</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="uae">UAE</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                Vertical
              </label>
              <div className="relative">
                {/* Fixed using defaultValue and removing 'selected' from option */}
                <select 
                  defaultValue=""
                  className="w-full appearance-none bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neutral-700 transition-all cursor-pointer"
                >
                  <option value="" disabled>Select vertical</option>
                  <option value="hospitality">Hospitality & Restaurant</option>
                  <option value="hvac">HVAC & Home Services</option>
                  <option value="dental">Cosmetic Dentistry</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
              </div>
            </div>
          </motion.div>

          {/* Row 4: Problem Statement */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
              What&apos;s the actual problem?
            </label>
            <textarea
              rows={4}
              placeholder="Ads not converting, leads going cold, no-shows, attribution gaps — the more specific, the better."
              className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-all resize-none"
            />
          </motion.div>

          {/* Row 5: Submit Button */}
          <motion.div variants={fadeInUp}>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-white text-black font-bold py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all group"
            >
              Book a Revenue Diagnosis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="mt-6 text-center text-neutral-600 text-[10px] font-bold uppercase tracking-[0.15em]">
              No pitch • No commitment • Response within 48 hours
            </p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}