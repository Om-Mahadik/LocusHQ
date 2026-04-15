"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "4x",
    label: "Avg return on ad spend",
  },
  {
    value: "800+",
    label: "Reservations driven",
  },
  {
    value: "38%",
    label: "Dm-to-booking conversion",
  },
  {
    value: "$95k",
    label: "Revenue attributed",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#000000] py-8 md:py-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Value - slightly smaller and standard casing */}
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-1">
                {stat.value.toLowerCase()}
              </span>
              
              {/* Label - lowercase and smaller font */}
              <span className="text-[13px] md:text-sm font-medium text-zinc-500 max-w-[140px] leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}