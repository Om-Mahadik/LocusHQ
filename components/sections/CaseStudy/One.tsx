"use client";

import React from "react";
import { motion } from "framer-motion";

const oneData = {
  OneTitle: "The Problem We Find in This Niche",
  OneSubtitle: "Consistent patterns across hospitality businesses",
  OneDescription: [
    "The most common failure point is channel misuse. Most restaurants running Meta ads use a Traffic or Reach objective — which optimises for eyeballs, not conversations. The ad drives someone to a website, which requires three more steps to make a reservation. The majority leave before completing it. This is not a creative problem. It is an objective and funnel architecture problem.",
    "On the Google side, most hospitality businesses either ignore it entirely or run broad branded campaigns that only capture people who already know them. High-intent local search queries — best [cuisine] restaurant near me, restaurants open now [city] — are left to competitors. These are the highest-converting searches in the vertical and they are being ignored.",
    "Underneath both: no system for what happens after a lead arrives. DMs are answered manually, hours late. There is no follow-up infrastructure. No attribution. No pipeline. Revenue leaks at every stage and nobody can see where."
  ],
};

export default function One() {
  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        
        {/* Layout: Centered on Mobile, Side-by-Side on PC */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Header Block (Title + Subtitle) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-tight mb-4">
              {oneData.OneTitle}
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              {oneData.OneSubtitle}
            </p>
          </motion.div>

          {/* Description Block - Slightly Grey, Justified */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-3/5 space-y-6"
          >
            {oneData.OneDescription.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-[13px] md:text-sm leading-relaxed text-zinc-300 font-light text-justify [text-justify:inter-word]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}