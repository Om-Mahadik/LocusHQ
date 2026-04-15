"use client";

import React from "react";
import { motion } from "framer-motion";

const overviewData = {
  overviewTitle: "The hospitality revenue gap is almost always post-click.",
  overviewDescription: [
    "Across hospitality businesses we have worked with in Canada and India, the story is consistent: reasonable social following, active Meta campaigns, occasional Google presence — but a booking funnel that functionally does not exist. Interest is generated. Revenue is not captured.",
    "LocusHQ approaches hospitality as a revenue operations problem. We run both Meta and Google campaigns as complementary acquisition channels, and we build the entire post-click infrastructure — qualification, confirmation, follow-up, and attribution — so the system produces trackable results, not just traffic reports."
  ],
};

export default function Overview() {
  return (
    <section className="bg-[#000000] px-6 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        
        {/* Small "overview" label - Centered on mobile, Left on PC */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:text-left"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-500">
            overview
          </span>
        </motion.div>

        {/* Layout: Centered Stack on Mobile, Side-by-Side on PC */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Title - Centered on mobile, Left-aligned on PC */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-tight">
              {overviewData.overviewTitle}
            </h2>
          </motion.div>

          {/* Description - Justified on both, stacked on right for PC */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-3/5 space-y-6"
          >
            {overviewData.overviewDescription.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-[13px] md:text-sm leading-relaxed text-white font-light text-justify [text-justify:inter-word]"
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