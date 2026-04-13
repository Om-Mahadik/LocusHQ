"use client";

import React from "react";
import { motion } from "framer-motion";
import LeadJourneyDisplay from "@/components/ui/Home/LeadJourneyDisplay";
import LeadJourneyContent from "@/components/ui/Home/LeadJourneyContent";

export default function LeadJourneySection() {
  return (
    <section className="bg-black pt-0 pb-16 px-6 md:pt-0 md:pb-32 antialiased font-sans overflow-hidden w-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center mt-0">
          
          {/* Content side - Now order-1 on mobile, stays order-1 on PC */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1], 
            }}
            className="w-full order-1 md:order-1" // Changed order-2 to order-1
          >
            <LeadJourneyContent />
          </motion.div>

          {/* Visual side - Now order-2 on mobile, stays order-2 on PC */}
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="w-full order-2 md:order-2" // Changed order-1 to order-2
          >
            <LeadJourneyDisplay />
          </motion.div>

        </div>
      </div>
    </section>
  );
}