"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the interface for the props
interface OverviewProps {
  title: string;
  description: string[];
}

export default function Overview({ title, description }: OverviewProps) {
  // Safety check to ensure data exists
  if (!title || !description) return null;

  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        
        {/* Small "overview" label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:text-left"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
            overview
          </span>
        </motion.div>

        {/* Layout: Centered Stack on Mobile, Side-by-Side on PC */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Title - Dynamic */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-tight">
              {title}
            </h2>
          </motion.div>

          {/* Description - Dynamic mapping of paragraphs */}
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
                className="text-[13px] md:text-sm leading-relaxed text-white font-light text-justify [text-justify:inter-word]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}