"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

interface ThreeProps {
  title: string;
  subtitle: string;
  description: string[];
  stats?: StatItem[]; // Made optional with ?
}

export default function Three({ 
  title, 
  subtitle, 
  description, 
  stats = [] // Defaulting to empty array to prevent .map error
}: ThreeProps) {
  
  if (!title) return null;

  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        
        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-tight mb-4">
              {title}
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              {subtitle}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-3/5 space-y-6"
          >
            {description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-[13px] md:text-sm leading-relaxed text-zinc-300 font-light text-justify"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
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
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-1">
                {stat.value.toLowerCase()}
              </span>
              <span className="text-[12px] md:text-xs font-medium text-zinc-500 max-w-[140px] leading-tight uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}