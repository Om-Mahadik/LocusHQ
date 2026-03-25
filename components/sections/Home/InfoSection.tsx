"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const InfoSection = () => {
  const pills = [
    { name: "Meta Ads", icon: "/icons/Meta.svg" },
    { name: "Google Ads", icon: "/icons/GoogleAds.svg" },
    { name: "ManyChat", icon: "/icons/ManyChat.svg" },
    { name: "GHL Automation", icon: "/icons/GHLAutomation.svg" },
    { name: "AI Lead Journeys", icon: null, isSpecial: true }, // Using a Sparkle icon for the last one
  ];

  return (
    <section className="w-full bg-black py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-[#0A0A0A] rounded-[40px] p-10 md:p-20 border border-white/5 flex flex-col items-center text-center"
      >
        {/* Main Paragraph Content */}
        <div className="space-y-2 mb-12">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-snug">
            We don’t run ads.
          </h3>
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-snug">
            We engineer the journey.
          </h3>
          <p className="text-xl md:text-3xl font-medium tracking-tight text-zinc-300 max-w-4xl mx-auto leading-relaxed mt-4">
            From the first scroll to the signed contract - paid media, AI automation, and conversion systems that work while you sleep.
          </p>
        </div>

        {/* Integration Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl">
          {pills.map((pill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "#151515" }}
              className="flex items-center gap-3 bg-[#111111] border border-white/10 px-5 py-3 rounded-full transition-colors cursor-default"
            >
              {pill.icon ? (
                <div className="relative w-5 h-5 md:w-6 md:h-6">
                  <Image 
                    src={pill.icon} 
                    alt={pill.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              ) : (
                // Custom Sparkle for AI Lead Journeys
                <span className="text-blue-400 text-lg">✦</span>
              )}
              <span className="text-sm md:text-lg font-medium text-white tracking-tight">
                {pill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default InfoSection;