// components/sections/About/TeamStructure.tsx
"use client";

import { motion, Variants } from 'framer-motion';

const features = [
  {
    count: "5+",
    title: "Performance Media Buyers",
    description: "Senior operators managing Meta and Google campaigns daily. Each buyer owns 4—6 accounts maximum.",
  },
  {
    count: "3+",
    title: "Automation Engineers",
    description: "Build AI qualification flows, CRM integrations, and pipeline infrastructure across all active accounts.",
  },
  {
    count: "2+",
    title: "Revenue Strategists",
    description: "Run diagnostics, build niche playbooks, and conduct weekly account reviews for every retained client.",
  },
  {
    count: "6",
    title: "Verticals We Go Deep In",
    description: "Not generalist positioning. Documented playbooks, benchmarks, and buyer psychology mapped per niche.",
  },
];

export default function TeamStructure() {
  
  const upwardReveal: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.45, 0.32, 0.9] 
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full bg-black text-white py-0 font-sans antialiased overflow-hidden">
      {/* Reduced pb-20 to pb-8 to tighten the bottom gap */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 pt-10 pb-8">
        
        {/* Left Side: Narrative */}
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={upwardReveal}
        >
          <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-tighter text-center lg:text-left max-w-xl">
            A decade of running campaigns. Rebuilt as a revenue growth system.
          </h2>
          
          <div className="mt-10 space-y-8 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-xl text-justify [text-justify:inter-word] [hyphens:auto]">
            <div>
              <span className="text-white font-bold text-lg md:text-xl block mb-3 tracking-tight text-center lg:text-left">
                Most operators run ads and call it done.
              </span> 
              <p>
                The part they skip — what happens between the click and the closed deal — 
                is where revenue actually dies. We built LocusHQ to own that entire path.
              </p>
            </div>

            <p>
              Our team combines senior-level paid media management with an automation engineering function and a revenue strategy layer that connects ad spend to actual closed business.
            </p>

            <p className="font-medium text-white/90 text-center lg:text-left">
              We manage account budgets ranging from 
              <span className="text-white font-black px-1 underline decoration-blue-600/50 underline-offset-4 mx-1 whitespace-nowrap"> $5K to $50K </span> 
              in monthly ad spend.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Features List */}
        <motion.div 
          className="lg:w-1/2 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-12">
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                variants={upwardReveal} 
                className={`flex items-start gap-6 md:gap-10 pb-8 text-left ${
                  index !== features.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter min-w-[70px] md:min-w-[100px] shrink-0 leading-none">
                  {item.count}
                </span>
                
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-[15px] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}