"use client";

import React from "react";
import { motion } from "framer-motion";

// 1. Define the interface for a single stat and the component props
interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  // 2. Safety check: ensure stats exist before mapping
  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-[#000000] py-8 md:py-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Value - Dynamic from props */}
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-1">
                {stat.value.toLowerCase()}
              </span>
              
              {/* Label - Dynamic from props */}
              <span className="text-[13px] md:text-sm font-medium text-zinc-500 max-w-[140px] leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}