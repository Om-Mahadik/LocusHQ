"use client";

import React from "react";
import { motion } from "framer-motion";
import StickyServices from "@/components/ui/Home/StickyServices";

export default function Services() {
  return (
    // Changed pt-24 and md:pt-32 to pt-0 to remove top space
    // Kept bottom padding (pb-12 / md:pb-16) as requested
    <section className="bg-black pt-0 pb-12 md:pb-16 antialiased font-sans w-full">
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
            <h2 className="text-3.5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Six verticals. <br />
              One operating system.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base lg:text-lg font-regular leading-relaxed max-w-2xl mx-auto">
              Benchmarks documented across category clients and industry data.
            </p>
          </motion.div>
        </div>

        {/* Services Wrapper */}
        <div className="relative mt-8">
          <StickyServices />
        </div>

      </div>
    </section>
  );
}