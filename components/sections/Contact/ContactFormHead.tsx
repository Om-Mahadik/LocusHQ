// components/sections/Contact/ContactFormHead.tsx

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function ContactFormHead() {
  return (
    <section className="w-full bg-black pt-1 pb-0 px-0">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start"
      >
        {/* Made heading smaller: text-4xl to 6xl range */}
        <motion.h1 
          variants={fadeInUp}
          className="text-3.5xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1] text-center md:text-left"
        >
          Let&apos;s diagnose your <br className="hidden md:block" /> revenue system.
        </motion.h1>


      </motion.div>
    </section>
  );
}