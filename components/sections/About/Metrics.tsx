// components/sections/About/Metrics.tsx
"use client";

import { motion, Variants } from 'framer-motion';

const metrics = [
  { value: "10+", label: "Years In Performance Marketing" },
  { value: "25+", label: "Brands Scaled Across 6 Verticals" },
  { value: "$2M+", label: "Revenue Engineered Through Paid Systems" },
  { value: "4", label: "International Markets Operated" },
];

export default function Metrics() {
  
  // 1. Container variants to handle the staggered timing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each metric appearing
        delayChildren: 0.1,
      },
    },
  };

  // 2. Individual metric card variants
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 25 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
      }
    },
  };

  return (
    <section className="w-full bg-black pt-4 pb-16 md:pt-6 md:pb-24 font-sans antialiased px-4 md:px-6"> 
      <motion.div 
        className="max-w-7xl mx-auto bg-white rounded-[40px] md:rounded-[54px] py-12 md:py-16 px-6 shadow-xl"
        initial="hidden"
        whileInView="visible" // Only animates when visible in viewport
        viewport={{ once: true, margin: "-100px" }} // Triggers slightly before the section hits center
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter leading-none">
                {metric.value}
              </h2>
              
              <p className="mt-4 text-[12px] md:text-[11px] text-zinc-500 font-semibold tracking-widest max-w-[140px] md:max-w-[180px] leading-tight uppercase">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}