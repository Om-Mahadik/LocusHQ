// components/sections/shared/ImageSection.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";

interface ImageSectionProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ImageSection({ src, alt = "", className = "" }: ImageSectionProps) {
  return (
    <section className={`w-full bg-black py-0 px-6 md:px-10 ${className}`}>
      <div className="max-w-7xl lg:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          // Reduced from rounded-[2rem] md:rounded-[4rem] to rounded-xl md:rounded-[2rem]
          className="relative overflow-hidden rounded-xl md:rounded-[2rem] border border-neutral-900 shadow-2xl bg-neutral-950"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain block transition-transform duration-700 hover:scale-[1.01]"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}