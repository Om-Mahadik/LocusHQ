"use client";

import React from "react";
import { motion } from "framer-motion";
import StickyServices from "@/components/ui/Home/StickyServices";

export default function Services() {
  return (
    <section className="bg-black py-24 md:py-32 px-6 antialiased font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Minimal ID Label */}
            <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em] block">
              02 / Capabilities
            </span>

            {/* Main Title - Tight & Bold */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
              Precision <br />
              <span className="text-zinc-800">Infrastructure.</span>
            </h2>

            {/* Subtitle - Small & Technical */}
            <p className="text-zinc-500 text-[13px] md:text-[14px] font-medium leading-relaxed max-w-md pt-4">
              We don&apos;t just provide services; we build high-performance 
              conversion engines. Every line of automation and every ad 
              creative is engineered for a single objective: scale.
            </p>
          </motion.div>
        </div>

        {/* The Sticky Component Placeholder */}
        <div className="relative">
          <StickyServices />
        </div>

      </div>
    </section>
  );
}