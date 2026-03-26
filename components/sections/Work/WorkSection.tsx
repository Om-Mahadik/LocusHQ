// src/components/work/WorkSection.tsx
"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import WorkCard from './WorkCard';



const projects = [
  {
    id: "tamasha",
    imageSrc: "/imgs/work1.jpg",
    flagSrc: "/icons/canada-flag.svg",
    title: "Tamasha Toronto —\nRestaurant Market Entry",
    description: "Entering the Toronto hospitality market from zero",
    meta: "Restaurant • Canada",
    metrics: [
      { targetValue: 2.1, label: "Reach", suffix: "M", decimals: 1 },
      { targetValue: 0.28, label: "Average CPC", prefix: "$", decimals: 2 }
    ],
    footerParts: ["26 campaigns managed", "$4,992 USD managed"],
    href: "/work/tamasha"
  },
  {
    id: "avora",
    imageSrc: "/imgs/work2.jpg",
    flagSrc: "/icons/india-flag.svg",
    title: "Avora Cafe —\nZero to Revenue in 90 Days",
    description: "From opening day to $24,000 monthly revenue",
    meta: "Restaurant Launch • India",
    metrics: [
      { targetValue: 24, label: "Monthly Revenue", prefix: "$", suffix: "K" },
      { targetValue: 0.35, label: "Per Conversation", prefix: "$", decimals: 2 }
    ],
    footerParts: ["$840 USD total ad spend", "90 days campaign duration"],
    href: "/work/avora"
  },
  {
    id: "sufiaana",
    imageSrc: "/imgs/work3.jpg",
    flagSrc: "/icons/india-flag.svg",
    title: "Sufiaana —\n900 Leads at Under $2 Each",
    description: "High-volume banquet lead generation, minimal spend",
    meta: "Restaurant & Banquet • India",
    metrics: [
      { targetValue: 900, label: "Leads Generated", suffix: "+" },
      { targetValue: 1.80, label: "Avg CPL", prefix: "$", decimals: 2 }
    ],
    footerParts: ["$1,250 USD total investment", "Exclusive lead system built"],
    href: "/work/sufiaana"
  }
];






export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track horizontal scroll progress of this specific container
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  // Create a smooth spring for the progress bar width
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* 1. Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-6">
        <h2 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tighter">Work</h2>
        <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Campaigns, lead systems, and growth operations — across 5 industries and 4 countries.
        </p>
      </div>

      {/* 2. Slide Hint (Desktop Only) */}
      <div className="hidden md:flex items-center justify-center gap-4 mb-14">
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-zinc-600">
          Scroll to explore
        </span>
      </div>

      {/* 3. The Horizontal Scroller */}
      <div 
        ref={containerRef}
        className="flex flex-col md:flex-row md:overflow-x-auto gap-12 md:gap-20 px-6 md:px-0 md:pl-[36vw] pb-24 no-scrollbar md:snap-x md:snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {projects.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-full md:w-[28vw] md:snap-center">
            <WorkCard {...project} />
          </div>
        ))}
        
        {/* Spacer to allow the last card to center perfectly */}
        <div className="hidden md:block flex-shrink-0 w-[36vw]" />
      </div>

      {/* 4. PREMIUM DARK SLIDER (Progress Bar) */}
      <div className="hidden md:block max-w-[200px] mx-auto mt-4 px-4">
        <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
          <motion.div 
            style={{ scaleX }}
            className="absolute inset-0 bg-zinc-400 origin-left rounded-full"
          />
        </div>
      </div>
    </section>
  );
}