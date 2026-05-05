"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const principles = [
  {
    id: "01",
    title: "Revenue first. Not traffic.",
    description: "We measure success in the same currency the client does — tables filled, jobs booked, treatments confirmed, clients signed. Closed revenue is the only output that counts.",
  },
  {
    id: "02",
    title: "Systems outlast campaigns.",
    description: "A revenue system keeps producing after the build phase ends. A one-off campaign stops the moment the spend stops. We build infrastructure — not bursts.",
  },
  {
    id: "03",
    title: "Diagnose before you prescribe.",
    description: "Every engagement opens with a Revenue Leak Diagnosis — mapping where prospects enter, where they stall, and where revenue escapes. Nothing gets built until the diagnosis is complete.",
  },
];

export default function Principles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (!mounted) return null;

  return (
    /* 
       pt-12 adds the gap on mobile.
       md:pt-0 removes it for desktop to stay flush.
    */
    <section className="w-full bg-black text-white pt-12 md:pt-0 pb-20 md:pb-32 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-0 lg:gap-24">
        
        {/* Left Side: Header */}
        <div className="lg:w-[35%] mb-12 lg:mb-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-[32px] md:text-[52px] font-bold leading-[1.05] tracking-tighter">
              Three operating <br className="hidden md:block" /> principles.
            </h2>
            <p className="mt-6 text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-[380px]">
              The fundamental beliefs that guide every decision we make and every system we build.
            </p>
          </motion.div>
        </div>

        {/* Right Side: List */}
        <div className="lg:w-[65%] flex flex-col">
          {principles.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row items-start gap-4 md:gap-10 pt-0 pb-10 md:pb-12 lg:pb-16 ${
                index !== principles.length - 1 ? "border-b border-white/10 mb-10 md:mb-12" : ""
              }`}
            >
              {/* ID Number */}
              <span className="text-lg md:text-xl font-mono font-bold text-white/20 tabular-nums shrink-0 mt-1">
                {item.id}
              </span>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
                  {item.title}
                </h3>
                <p className="text-white/50 text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}