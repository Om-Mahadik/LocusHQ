"use client";

import React from "react";
import { motion } from "framer-motion";

const twoData = {
  TwoTitle: "The Revenue System We Build",
  TwoSubtitle: "Paid media + conversion infrastructure combined",
  TwoDescription: [
    "We run Meta campaigns on a Messages objective — ads that open an Instagram or WhatsApp DM directly. No website redirect, no extra steps. Creative is split-tested across three angles: occasion triggers, local social proof, and urgency framing. Budget is allocated based on weekly performance data, not guesswork.",
    "In parallel, we run Google Search campaigns targeting high-intent local queries: cuisine-specific searches, restaurants open now, and occasion-based keywords (dinner reservation [city]). These two channels target different moments — Meta intercepts someone who wasn't actively searching, Google captures someone who already is. Together they build a complete top-of-funnel.",
    "The moment a lead enters through either channel, an AI qualification sequence activates within seconds. It captures name, party size, occasion, and preferred date — automatically, at any hour. Qualified leads are moved into a booking flow that sends a personalised confirmation via WhatsApp and email. Unconfirmed leads receive one contextual follow-up at 24 hours. The entire path is tracked in a live pipeline dashboard so attribution is clear and bottlenecks are visible in real time."
  ],
};

export default function Two() {
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
              {twoData.TwoTitle}
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              {twoData.TwoSubtitle}
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
            {twoData.TwoDescription.map((paragraph, index) => (
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