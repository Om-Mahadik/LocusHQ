"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const faqs = [
  {
    question: "What does LocusHQ do?",
    answer: "LocusHQ builds AI-powered lead generation systems for businesses that need more customers — combining paid media on Meta and Google with GHL and ManyChat automation to create a full lead journey from first click to booked call. We work across hospitality, real estate, med spas, immigration consulting, home services, and B2B in India, Canada, Australia, and USA."
  },
  {
    question: "How is LocusHQ different from a regular ads agency?",
    answer: "A regular agency runs your ads and sends you a reach report. LocusHQ builds what happens after the click — automated WhatsApp follow-ups, lead qualification flows, CRM pipelines, and booking systems that convert enquiries into clients without manual chasing. The ad is the beginning of the system, not the whole service."
  },
  {
    question: "Do you work with businesses in Canada and Australia?",
    answer: "Yes — we have active clients in Canada (Toronto market) and are expanding in Australia. We've run campaigns in the Canadian market with CPCs as low as $0.28 and understand local CPM differences, cultural adaptation, and time-zone management for India-based operations serving international clients."
  },
  {
    question: "How long before I see results from Meta Ads?",
    answer: "The first 14–30 days produce early data signals and initial optimisations. Meaningful improvements in CPL and lead quality typically appear between 30–90 days as we test creative, audiences, and offer framing. Systematic scaling begins after the 90-day mark when the algorithm has enough data to optimise efficiently."
  },
  {
    question: "What is GHL (GoHighLevel) and why does it matter?",
    answer: "GoHighLevel is the CRM and automation platform we use to build the lead journey after an ad generates an enquiry. It handles automated SMS and WhatsApp follow-ups, lead qualification sequences, appointment booking, and pipeline tracking — so no lead goes cold and your sales team only speaks to pre-qualified prospects."
  },
  {
    question: "What industries do you work with?",
    answer: "Our six active verticals are restaurants and hospitality, real estate agents and brokerages, med spas and aesthetic clinics, immigration and visa consultants, home services (HVAC, roofing, solar), and B2B professional services. Each vertical has a separate campaign approach because the buying behaviour, CPL benchmarks, and conversion paths are fundamentally different."
  },
  {
    question: "Do you guarantee results?",
    answer: "No ethical operator guarantees specific results — too many variables outside campaign control affect outcomes. What LocusHQ guarantees is a rigorous strategic process, complete data transparency, and honest communication when something needs to change. Our track record across 15+ brands is the strongest signal we can offer — and we'll show it to you before you commit to anything."
  },
  {
    question: "What is the minimum budget to work with LocusHQ?",
    answer: "For Indian market clients, we typically work with ad budgets of ₹30,000–₹50,000/month and above. For Canadian, Australian, and US market clients, the starting point is around $1,500–$2,000 USD/month in ad spend. Below these thresholds, there isn't enough data volume for meaningful optimisation and the management fee would represent poor overhead economics for the client."
  }
];

// 1. Container variants to handle staggering the children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
      delayChildren: 0.1     // Initial delay before container animation starts
    }
  }
};

// 2. Variants for individual items (H2 and FAQ items)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function FaqsSectionHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-black py-16 px-4 md:py-24 md:px-6 font-sans antialiased overflow-hidden">
      <div className="mx-auto max-w-2xl">
        
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
          variants={fadeInUp}
          className="mb-10 text-center text-4xl md:text-5xl font-semibold tracking-tight text-white"
        >
          FAQs
        </motion.h2>

        {/* 3. Apply containerVariants to handle staggering */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="rounded-[32px] bg-[#0A0A0A] border border-zinc-900 p-5 md:p-8"
        >
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                // 4. Wrap each item in motion.div and apply fadeInUp
                <motion.div 
                  key={`faq-item-${index}`} 
                  variants={fadeInUp}
                  className={index !== faqs.length - 1 ? "border-b border-zinc-900" : ""}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between py-5 text-left outline-none"
                  >
                    <span className="pr-6 text-[15px] md:text-[16px] font-medium text-white transition-all">
                      {faq.question}
                    </span>

                    <motion.div 
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="absolute h-[1.2px] w-3.5 bg-white rounded-full" />
                      <div className="absolute h-3.5 w-[1.2px] bg-white rounded-full" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[13px] md:text-[14px] leading-relaxed text-zinc-400 max-w-[98%] font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}