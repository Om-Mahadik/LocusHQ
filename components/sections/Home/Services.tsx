"use client";

import React from "react";
import { motion } from "framer-motion";
// Update this path if your file structure is different!
import StickyServices from "@/components/ui/Home/StickyServices";

export default function Services() {
  return (
    <section className="bg-black py-24 md:py-32 antialiased font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section - REMOVED mb-16 md:mb-24 from this div */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Six verticals. <br />
              One operating system.
            </h2>

            {/* Subtitle - Constrained width for perfect line breaking */}
            <p className="text-zinc-400 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              We don&apos;t spread thin across everything. We go deep in six specific 
              markets where paid media and AI automation produce the highest return.
            </p>
          </motion.div>
        </div>

        {/* The Sticky Component */}
        {/* Added a small top margin (mt-8) just so they don't physically touch, 
            but you can remove 'mt-8' if you want zero pixels of space between them. */}
        <div className="relative mt-8">
          <StickyServices />
        </div>

      </div>
    </section>
  );
}