"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const layers = [
  {
    title: "Paid Media Acquisition",
    description: "Full-funnel campaign management on Meta and Google. Creative testing, audience segmentation, and budget allocation — all governed by weekly performance data. We run both channels strategically, not just whichever one is cheaper.",
    highlight: null,
  },
  {
    title: "AI Lead Qualification",
    description: "The moment someone interacts with your ad, an automated qualification flow activates — capturing intent, contact, and need within seconds. No manual reply needed. Runs 24/7.",
    highlight: "< 60s",
  },
  {
    title: "Pipeline & Attribution",
    description: "Live dashboards connecting paid spend to closed business. Every lead has a stage. Every stage has a conversion rate. Optimisation decisions are based on actual outcomes — not platform-reported vanity metrics.",
    highlight: "4x",
  },
  {
    title: "Conversion Infrastructure",
    description: "Automated booking confirmations, estimate follow-ups, appointment reminders, and rebooking sequences — the layer between a qualified lead and a closed deal. This is where most operators have nothing. We build everything.",
    highlight: null,
  },
];

export default function BuildLayers() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small timeout ensures the browser has painted the SSR version 
    // before we switch to animation mode
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
        delay: i * 0.1, // Handle delay inside the variant
      },
    }),
  };

  return (
    <section className="w-full bg-black pt-12 md:pt-16 pb-5 md:pb-32 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          className="mb-10 md:mb-12 text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          custom={0} // Index 0 for header
        >
          <h2 className="text-[32px] md:text-[52px] font-bold tracking-tighter text-white leading-[1.1] max-w-4xl">
            What we build for every account.
          </h2>
          <p className="mt-4 text-white/70 text-[16px] md:text-[18px] font-normal max-w-[480px] leading-relaxed tracking-tight">
            Four layers that connect to form one revenue system.
          </p>
        </motion.div>

        {/* Pinterest Style Column Layout */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {isReady && layers.map((layer, index) => (
            <motion.div 
              key={index}
              custom={index} // Pass index to variant
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={revealVariants}
              className="break-inside-avoid rounded-[40px] p-8 md:p-14 border border-white/5 flex flex-col items-center text-center h-fit bg-[#0A0A0A] shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-[#0F0F0F]"
            >
              {layer.highlight && (
                <span className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                  {layer.highlight}
                </span>
              )}

              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter mb-6 leading-tight">
                {layer.title}
              </h3>

              <p className="text-white/50 text-[15px] md:text-[16px] leading-relaxed max-w-md text-justify font-medium">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}