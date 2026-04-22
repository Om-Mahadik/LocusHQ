"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// Import your actual data array
import { caseStudies } from "@/data/caseStudies";

const ServiceCard = ({ study }: { study: typeof caseStudies[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 250px", "start 64px"],
  });

  const steps = [0, 0.95, 0.951, 1];

  // Animation transforms
  const bg = useTransform(scrollYProgress, steps, ["#ffffff", "#ffffff", "#0D0D0D", "#0D0D0D"]);
  const textMain = useTransform(scrollYProgress, steps, ["#18181b", "#18181b", "#ffffff", "#ffffff"]);
  const textSub = useTransform(scrollYProgress, steps, ["#52525b", "#52525b", "#71717a", "#71717a"]);
  const borderMain = useTransform(scrollYProgress, steps, ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)"]);
  const borderTable = useTransform(scrollYProgress, steps, ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)"]);
  const btnBg = useTransform(scrollYProgress, steps, ["#18181b", "#18181b", "#ffffff", "#ffffff"]);
  const btnText = useTransform(scrollYProgress, steps, ["#ffffff", "#ffffff", "#000000", "#000000"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5 }}
      className="sticky top-18 w-full"
    >
      <motion.div
        style={{ backgroundColor: bg, borderColor: borderMain }}
        className="w-full border rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12"
      >
        {/* Mobile Header */}
        <div className="block md:hidden order-1 w-full text-center">
          <motion.h3 style={{ color: textMain }} className="text-2xl font-semibold tracking-tight">
            {study.category}
          </motion.h3>
        </div>

        {/* Visual Column */}
        <motion.div 
          className="w-full md:w-1/2 aspect-square relative rounded-xl overflow-hidden order-2 md:order-1"
        >
          <img
            src={study.heroImage}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-6 order-3 md:order-2">
          
          {/* Desktop Header */}
          <div className="hidden md:flex flex-col items-center gap-1">
            <motion.h3 style={{ color: textMain }} className="text-3xl font-semibold tracking-tight">
              {study.category}
            </motion.h3>
            <motion.p style={{ color: textSub }} className="text-sm italic">
              "{study.subtitle.split('.')[0]}."
            </motion.p>
          </div>

          {/* Metrics Grid */}
          <motion.div 
            style={{ borderColor: borderTable }} 
            className="grid grid-cols-2 w-full border-l border-t overflow-hidden"
          >
            {study.stats.slice(0, 4).map((stat, idx) => (
              <motion.div 
                key={idx} 
                style={{ borderColor: borderTable }}
                className="flex flex-col items-center justify-center py-3 md:py-4 border-r border-b"
              >
                <motion.span 
                  style={{ color: textMain }} 
                  className="text-2xl md:text-4xl font-bold leading-tight"
                >
                  {stat.value}
                </motion.span>
                <motion.span 
                  style={{ color: textSub }} 
                  className="text-[10px] md:text-xs font-medium text-center px-2 mt-0.5"
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Button - Dynamic Link */}
          <Link href={`/works/case-study/${study.slug}`} className="w-full md:w-auto">
            <motion.button
              style={{ backgroundColor: btnBg, color: btnText }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-bold transition-all w-full"
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StickyServices() {
  return (
    <div className="relative w-full bg-black px-0 md:px-6 py-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 md:gap-8 pb-[10vh] mt-4">
        {caseStudies.map((study) => (
          <ServiceCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}