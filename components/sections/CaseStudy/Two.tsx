"use client";

import React from "react";
import { motion } from "framer-motion";

// Updated interface to include the image source
interface TwoProps {
  title: string;
  subtitle: string;
  description: string[];
  img?: string; // Prop for the image
}

export default function Two({ title, subtitle, description, img }: TwoProps) {
  // Safety check to ensure data exists before rendering
  if (!title) return null;

  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        
        {/* Image: Bottom-to-top fade in, matching section width */}
        {img && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full mb-12 md:mb-16 rounded-2xl md:rounded-[20px] overflow-hidden border border-white/5"
          >
            <img 
              src={img} 
              alt={title} 
              className="w-full h-auto block" 
            />
          </motion.div>
        )}

        {/* Layout: Centered on Mobile, Side-by-Side on PC */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Header Block (Title + Subtitle) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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