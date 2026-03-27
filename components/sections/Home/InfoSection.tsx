"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// 1. Strict TypeScript interface to eliminate "any" type errors
interface PillData {
  name: string;
  icon: string | null;
}

const row1: PillData[] = [
  { name: "Meta Ads", icon: "/icons/Meta.svg" },
  { name: "Google Ads", icon: "/icons/GoogleAds.svg" },
  { name: "ManyChat", icon: "/icons/ManyChat.svg" },
];

const row2: PillData[] = [
  { name: "GHL Automation", icon: "/icons/GHLAutomation.svg" },
  { name: "AI Lead Journeys", icon: null },
];

// 2. Applied the interface to the helper function
const repeatArray = (arr: PillData[], times: number): PillData[] => 
  Array(times).fill(arr).flat();

// 3. Applied the interface to the component props
const Pill = React.memo(({ pill }: { pill: PillData }) => (
  <div className="flex items-center gap-2 md:gap-3 bg-[#121212] border border-white/10 px-5 md:px-6 py-3 md:py-3.5 rounded-full shrink-0 shadow-sm">
    {pill.icon ? (
      <div className="relative w-5 h-5 md:w-6 md:h-6 shrink-0">
        {/* 4. Added 'sizes' prop. Next/Image requires this when using 'fill' */}
        <Image 
          src={pill.icon} 
          alt={pill.name} 
          fill 
          sizes="(max-width: 768px) 20px, 24px"
          className="object-contain" 
        />
      </div>
    ) : (
      <span className="text-[#6366F1] text-xl md:text-2xl leading-none flex items-center justify-center">✦</span>
    )}
    <span className="text-[14px] md:text-[18px] font-medium text-white whitespace-nowrap">
      {pill.name}
    </span>
  </div>
));

Pill.displayName = "Pill";

// 5. Explicitly typed Framer Motion Variants to fix the variants error
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function InfoSection() {
  const row1Extended = repeatArray(row1, 5); 
  const row2Extended = repeatArray(row2, 7); 

  return (
    <section className="w-full bg-black py-16 px-4 overflow-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes slide-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-left {
          animation: slide-left 35s linear infinite;
          will-change: transform;
        }
        .marquee-right {
          animation: slide-right 40s linear infinite;
          will-change: transform;
        }
      `}} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-4xl mx-auto bg-[#0A0A0A] rounded-[40px] md:rounded-[50px] p-8 md:p-20 border border-white/5 flex flex-col items-center text-center shadow-2xl overflow-hidden relative"
      >
        <div className="mb-10 md:mb-14 relative z-10 max-w-3xl flex flex-col items-center">
          <motion.h3 variants={itemVariants} className="text-[20px] md:text-[34px] font-medium text-white leading-tight">
            {/* 6. Escaped the apostrophe to prevent ESLint build failures */}
            We don&apos;t run ads.
          </motion.h3>
          <motion.h3 variants={itemVariants} className="text-[20px] md:text-[34px] font-medium text-white leading-tight">
            We engineer the journey.
          </motion.h3>
          <motion.p variants={itemVariants} className="text-[17px] md:text-[28px] font-medium text-white/90 leading-[1.3] mt-3">
            From the first scroll to the signed contract - paid media, AI automation, and conversion systems that work while you sleep.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full relative">
          
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 z-20 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 z-20 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

          {/* Row 1: Sliding Left */}
          <div className="flex overflow-hidden w-full">
            <div className="flex w-max marquee-left">
              <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                {/* 7. Created highly unique keys to satisfy React list rendering rules */}
                {row1Extended.map((pill, i) => <Pill key={`r1-1-${i}`} pill={pill} />)}
              </div>
              <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                {row1Extended.map((pill, i) => <Pill key={`r1-2-${i}`} pill={pill} />)}
              </div>
            </div>
          </div>

          {/* Row 2: Sliding Right */}
          <div className="flex overflow-hidden w-full">
            <div className="flex w-max marquee-right">
              <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                {row2Extended.map((pill, i) => <Pill key={`r2-1-${i}`} pill={pill} />)}
              </div>
              <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                {row2Extended.map((pill, i) => <Pill key={`r2-2-${i}`} pill={pill} />)}
              </div>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}