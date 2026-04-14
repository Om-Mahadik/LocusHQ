"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface PillData {
  name: string;
  icon: string | null;
}

const row1: PillData[] = [
  { name: "Meta", icon: "/icons/Meta.svg" },
  { name: "Google", icon: "/icons/GoogleAds.svg" },
  { name: "ManyChat", icon: "/icons/ManyChat.svg" },
];

const row2: PillData[] = [
  { name: "GHL", icon: "/icons/GHLAutomation.png" },
  { name: "Star", icon: null },
  { name: "Instagram", icon: "/icons/Insta.svg"}
];

const repeatArray = (arr: PillData[], times: number): PillData[] => 
  Array(times).fill(arr).flat();

const Pill = React.memo(({ pill }: { pill: PillData }) => (
  <div className="flex items-center justify-center bg-[#121212] border border-white/10 w-20 h-12 md:w-28 md:h-16 rounded-full shrink-0 shadow-sm transition-colors hover:border-white/20">
    {pill.icon ? (
      <div className="relative w-6 h-6 md:w-8 md:h-8 shrink-0">
        <Image 
          src={pill.icon} 
          alt={pill.name} 
          fill 
          sizes="(max-width: 768px) 24px, 32px"
          className="object-contain" 
        />
      </div>
    ) : (
      <span className="text-[#6366F1] text-xl md:text-2xl leading-none flex items-center justify-center">✦</span>
    )}
  </div>
));

Pill.displayName = "Pill";

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
  const row1Extended = repeatArray(row1, 8); 
  const row2Extended = repeatArray(row2, 10); 

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
        className="max-w-4xl mx-auto bg-[#0A0A0A] rounded-[40px] md:rounded-[50px] py-12 md:py-20 border border-white/5 flex flex-col items-center text-center shadow-2xl overflow-hidden relative"
      >
        <div className="px-8 md:px-20 mb-10 md:mb-14 relative z-10 max-w-3xl flex flex-col items-center">
          <motion.h3 variants={itemVariants} className="text-[22px] md:text-[34px] font-medium text-white leading-tight">
            We don&apos;t run ads.
          </motion.h3>
          <motion.h3 variants={itemVariants} className="text-[22px] md:text-[34px] font-medium text-white leading-tight">
            We engineer the journey.
          </motion.h3>
          
          {/* Subtext updated with text-justify */}
          <motion.p 
            variants={itemVariants} 
            className="text-[14px] md:text-[28px] font-regular text-white/90 leading-[1.3] mt-8 text-justify [text-justify:inter-word]"
          >
            From the first scroll to the signed contract - paid media, AI automation, and conversion systems that work while you sleep.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full relative">
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 z-20 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 z-20 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

          {/* Row 1 */}
          <div className="flex overflow-hidden w-full">
            <div className="flex w-max marquee-left">
              <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {row1Extended.map((pill, i) => <Pill key={`r1-1-${i}`} pill={pill} />)}
              </div>
              <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {row1Extended.map((pill, i) => <Pill key={`r1-2-${i}`} pill={pill} />)}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden w-full">
            <div className="flex w-max marquee-right">
              <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {row2Extended.map((pill, i) => <Pill key={`r2-1-${i}`} pill={pill} />)}
              </div>
              <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {row2Extended.map((pill, i) => <Pill key={`r2-2-${i}`} pill={pill} />)}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}