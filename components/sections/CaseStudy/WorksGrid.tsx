"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

const ServiceCard = ({ study }: { study: typeof caseStudies[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="group flex flex-col lg:flex-row bg-[#0D0D0D] border border-zinc-800 rounded-[2rem] p-5 md:p-8 transition-all duration-300 hover:border-zinc-700 gap-8 items-stretch">
        
        {/* Left: Image Container - Responsive Aspect Ratios */}
        <div className="w-full lg:w-[42%] shrink-0">
          <div className="relative w-full aspect-[16/10] lg:aspect-square lg:h-full rounded-2xl overflow-hidden">
            <img
              src={study.heroImage}
              alt={study.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center">
          
          {/* Category Tag - Centered on Mobile, Left on PC */}
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">
              {study.category}
            </span>
          </div>

          <div className="flex flex-col mb-6 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4 leading-tight">
              {study.title}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-3 lg:max-w-[95%]">
              {study.subtitle}
            </p>
          </div>

          {/* Metrics Grid - Responsive Alignment */}
          <div className="grid grid-cols-2 w-full border-l border-t border-zinc-800/50 overflow-hidden mb-8">
            {study.stats.slice(0, 4).map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center lg:items-start justify-center py-4 px-3 border-r border-b border-zinc-800/50 text-center lg:text-left"
              >
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[11px] font-normal text-zinc-500 leading-tight max-w-[120px] lg:max-w-none">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button - Responsive Alignment */}
          <div className="flex justify-center lg:justify-start">
            <Link href={`/works/case-study/${study.slug}`} className="w-full md:w-auto">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-10 py-4 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors w-full"
              >
                View Case Study
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorksGrid() {
  return (
    <section className="w-full bg-black px-4 md:px-6 py-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-16">
        {caseStudies.map((study) => (
          <ServiceCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}