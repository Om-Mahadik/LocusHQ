"use client";

import { Check, X } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const comparisonData = [
  {
    traditional: "Stops at the click. Hands you traffic.",
    locus: "Owns the full path — click to closed deal.",
  },
  {
    traditional: "Optimises for impressions and CPL.",
    locus: "Optimises for qualified pipeline and closed revenue.",
  },
  {
    traditional: "Manual lead follow-up — if at all.",
    locus: "AI qualification active within 60 seconds.",
  },
  {
    traditional: "Reports traffic. Cannot track revenue.",
    locus: "Live attribution — revenue tracked to source.",
  },
  {
    traditional: "Generic creative across all verticals.",
    locus: "Niche-specific playbooks per vertical.",
  },
  {
    traditional: "Junior staff after onboarding phase.",
    locus: "Senior strategist on every retained account.",
  },
  {
    traditional: "You depend on their system entirely.",
    locus: "You own the infrastructure we build.",
  },
];

export default function ComparisonTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (!mounted) return null;

  return (
    // Reduced pt-16 to pt-4 and pb-20/pb-32 to pb-0 to remove space above and below
    <section className="w-full bg-black pt-4 pb-0 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-[32px] md:text-[52px] font-bold tracking-tighter text-white leading-[1.1]">
            LocusHQ vs Traditional
          </h2>
          <p className="mt-4 text-white/50 text-[16px] md:text-[18px] max-w-[480px]">
            What changes when the model is built around revenue — not retainer hours.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll with "Peek" | Desktop: Grid */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {/* 1. LocusHQ Card */}
          <motion.div
            className="min-w-[85vw] md:min-w-0 snap-center overflow-hidden rounded-[24px] border border-white/20 bg-[#0A0A0A] flex flex-col relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Title: Centered on mobile, left on PC | Removed Badge */}
            <div className="px-6 py-8 border-b border-white/10 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">
                LocusHQ
              </h3>
            </div>

            <motion.div 
              className="flex flex-col"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {comparisonData.map((item, index) => (
                <motion.div
                  key={`locus-${index}`}
                  variants={fadeInUp}
                  className="flex items-start gap-4 px-6 py-5 text-white border-b border-white/5 last:border-b-0"
                >
                  {/* Green Ticks */}
                  <Check size={16} className="text-green-500 mt-1 shrink-0" strokeWidth={3} />
                  <span className="text-[15px] md:text-[16px] font-semibold leading-tight">
                    {item.locus}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 2. Traditional Card */}
          <motion.div
            className="min-w-[85vw] md:min-w-0 snap-center overflow-hidden rounded-[24px] border border-white/5 bg-[#111] flex flex-col opacity-60 md:opacity-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Title: Centered on mobile, left on PC */}
            <div className="px-6 py-8 border-b border-white/5 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white/30 uppercase tracking-widest">
                Traditional
              </h3>
            </div>

            <motion.div 
              className="flex flex-col"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {comparisonData.map((item, index) => (
                <motion.div
                  key={`trad-${index}`}
                  variants={fadeInUp}
                  className="flex items-start gap-4 px-6 py-5 text-white/30 border-b border-white/5 last:border-b-0"
                >
                  {/* Red Cross */}
                  <X size={16} className="text-red-500 mt-1 shrink-0" strokeWidth={3} />
                  <span className="text-[14px] md:text-[15px] font-normal leading-tight">
                    {item.traditional}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}