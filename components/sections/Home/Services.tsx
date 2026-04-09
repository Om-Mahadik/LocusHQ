"use client";

import React from "react";
import { motion } from "framer-motion";
import StickyServices from "@/components/ui/Home/StickyServices";

export default function Services() {
  return (
    // Changed py-24 to pt-24 pb-0 to remove bottom padding; 
    // Reduced md:py-32 to md:pt-32 md:pb-12 to tighten the bottom
    <section className="bg-black pt-24 pb-12 md:pt-32 md:pb-16 antialiased font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Six verticals. <br />
              One operating system.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base lg:text-lg font-regular leading-relaxed max-w-2xl mx-auto">
              Benchmarks documented across category clients and industry data.
            </p>
          </motion.div>
        </div>

        {/* Added mt-12 (md:mt-16) to increase gap between heading and services.
            The "pb-[10vh]" inside StickyServices usually creates bottom space, 
            so we ensure this wrapper doesn't add more. 
        */}
        <div className="relative mt-8 ">
          <StickyServices />
        </div>

      </div>
    </section>
  );
}