"use client";

import React from "react";
import { motion } from "framer-motion";

interface OneProps {
  title: string;
  subtitle: string;
  description: string[];
  img?: string; 
}

export default function One({ title, subtitle, description, img }: OneProps) {
  if (!title) return null;

  return (
    <section className="bg-[#000000] border-t border-white/5 px-6 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        
        {/* Image: Slides from bottom to top on scroll */}
        {img && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }} // Increased Y for a more pronounced "slide up"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it hits center screen
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

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Header Block: Slides from bottom to top */}
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

          {/* Description Block: Slides from bottom to top with slight delay */}
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