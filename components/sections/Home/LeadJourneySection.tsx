"use client";

import React from "react";
import { motion } from "framer-motion";
import LeadJourneyDisplay from "@/components/ui/Home/LeadJourneyDisplay";
import LeadJourneyContent from "@/components/ui/Home/LeadJourneyContent";

export default function LeadJourneySection() {
  return (
    // Changed py-16 to pb-16 pt-0 and md:py-32 to md:pb-32 md:pt-0
    <section className="bg-black pt-0 pb-16 px-6 md:pt-0 md:pb-32 antialiased font-sans overflow-hidden w-full">
      <div className="mx-auto max-w-7xl">
        {/* Added mt-0 to ensure no default margins are pushing the content down */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center mt-0">
          
          {/* Content side - Rising from Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1], 
            }}
            className="w-full order-2 md:order-1"
          >
            <LeadJourneyContent />
          </motion.div>

          {/* Visual side - Rising from Bottom with Staggered Delay */}
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="w-full order-1 md:order-2"
          >
            <LeadJourneyDisplay />
          </motion.div>

        </div>
      </div>
    </section>
  );
}