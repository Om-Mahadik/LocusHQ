"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the interface for the props passed from the parent Page
interface TwoProps {
  title: string;
  subtitle: string;
  description: string[];
}

export default function Two({ title, subtitle, description }: TwoProps) {
  // Safety check to ensure data exists before rendering
  if (!title) return null;

  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        
        {/* Layout: Centered on Mobile, Side-by-Side on PC */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Header Block (Title + Subtitle) */}
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

          {/* Description Block - Mapping the description array */}
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
                className="text-[13px] md:text-sm leading-relaxed text-zinc-300 font-light text-justify [text-justify:inter-word]"
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