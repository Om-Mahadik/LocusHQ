// components/sections/Contact/ContactContent.tsx

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 15, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const contactItems = [
  {
    title: "hello@locushq.co",
    subtitle: "Direct line for diagnosis requests",
    icon: "/icons/mail.svg",
  },
  {
    title: "@locushq",
    subtitle: "System breakdowns",
    icon: "/icons/instagram.svg",
  },
  {
    title: "LocusHQ",
    subtitle: "Case study breakdowns",
    icon: "/icons/linkedin.svg",
  },
  {
    title: "Delhi, India • Remote-First",
    subtitle: "Operating across 4 markets",
    icon: "/icons/location.svg",
  },
];

export default function ContactContent() {
  return (
    <section className="w-full bg-black p-0">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group flex items-center gap-4 p-4 rounded-2xl bg-[#080808] border border-neutral-900 transition-all duration-500 hover:border-neutral-700 hover:bg-[#0C0C0C]"
          >
            {/* Compact Icon Container */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900/50 border border-neutral-800 transition-colors group-hover:bg-neutral-800">
              <img 
                src={item.icon} 
                alt="" 
                className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Tightened Text Content */}
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-xs md:text-sm font-normal mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}