"use client";

import React from "react";
import { motion } from "framer-motion";
import LeadJourneyDisplay from "@/components/ui/Home/LeadJourneyDisplay";
import LeadJourneyContent from "@/components/ui/Home/LeadJourneyContent";

export default function LeadJourneySection() {
  return (
    <section className="bg-black py-16 px-6 md:py-32 antialiased font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Content side - Rising from Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1], // Luxury quintic ease-out
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
              delay: 0.2, // Sequential stagger for a more premium look
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