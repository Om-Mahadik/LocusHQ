"use client";

import React from "react";
import { motion } from "framer-motion";

const threeData = {
  ThreeTitle: "What the Numbers Look Like",
  ThreeSubtitle: "Benchmarks across hospitality accounts",
  ThreeDescription: [
    "Across hospitality accounts where the full system has been deployed — paid media, qualification flow, and booking automation together — these are the performance benchmarks we document. Accounts running only ads without the conversion infrastructure see significantly lower numbers, which is the clearest evidence that the system is what drives the outcome, not the ad spend alone.",
    "The 38% DM-to-booking conversion rate is particularly significant in context. The industry average for cold social media lead-to-booking is typically below 10%. The delta is entirely attributable to the speed and quality of the post-click qualification and confirmation system."
  ],
  stats: [
    { value: "4x", label: "avg return on ad spend" },
    { value: "800+", label: "reservations driven" },
    { value: "38%", label: "dm-to-booking conversion" },
    { value: "$95k", label: "revenue attributed" },
  ],
};

export default function Three() {
  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        
        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16 md:mb-24">
          
          {/* Header Block */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-tight mb-4">
              {threeData.ThreeTitle}
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              {threeData.ThreeSubtitle}
            </p>
          </motion.div>

          {/* Description Block */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-3/5 space-y-6"
          >
            {threeData.ThreeDescription.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-[13px] md:text-sm leading-relaxed text-zinc-300 font-light text-justify [text-justify:inter-word]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid - Integrated into Section Three */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {threeData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-1">
                {stat.value.toLowerCase()}
              </span>
              <span className="text-[12px] md:text-xs font-medium text-zinc-500 max-w-[140px] leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}