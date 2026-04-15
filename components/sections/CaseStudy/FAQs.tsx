"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const faqsData = [
  {
    question: "We already run Meta ads. Why aren't they converting to bookings?",
    answer: [
      "Because the ad is probably the only part of the system that exists. Meta ads on a Traffic objective send people to a website that requires multiple steps to book — and most leave before completing it.",
      "Switching to a Messages objective and adding a qualification flow at the back end typically changes conversion rates significantly.",
      "The ad creative is rarely the problem."
    ]
  },
  {
    question: "Do you run Google Ads for restaurants too, or just Meta?",
    answer: [
      "Both. Meta and Google target different intent states and they work best together.",
      "Meta intercepts people in a passive scrolling state and creates demand. Google captures people who are already actively searching for a restaurant.",
      "Running only one channel means missing a full segment of the market.",
      "We manage both and allocate budget based on what each channel is producing week over week."
    ]
  },
  {
    question: "What does the automation actually do? Is it just a chatbot?",
    answer: [
      "It is a structured qualification and confirmation system, not a general-purpose chatbot.",
      "It has three specific jobs: capture lead intent and contact details, trigger a booking confirmation within four minutes, and send one follow-up to unconfirmed leads at 24 hours.",
      "It does not try to answer general questions about the menu or have open-ended conversations.",
      "It converts leads into booked covers. That is its only function."
    ]
  },
  {
    question: "What is the entry cost to work with LocusHQ for a restaurant?",
    answer: [
      "The entry retainer for Canadian restaurants is $500 CAD per month, which covers paid media management, the qualification system, and booking automation.",
      "Ad spend is separate and typically starts at $800–$1,500 CAD per month depending on the market.",
      "Once the system is producing consistent results, accounts scale to a $1,000–$1,500 CAD retainer with expanded scope."
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#000000] py-16 px-4 md:py-24 font-sans antialiased overflow-hidden">
      <div className="mx-auto max-w-2xl">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase block mb-4">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            What restaurant owners ask us before starting
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          // Changed p-6 md:p-8 to px-6 py-2 (smaller vertical padding)
          className="rounded-[32px] bg-[#0A0A0A] border border-zinc-900 px-6 md:px-8 py-2"
        >
          <div className="flex flex-col">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div 
                  key={`faq-item-${index}`} 
                  variants={fadeInUp}
                  className={index !== faqsData.length - 1 ? "border-b border-zinc-900" : ""}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    // Reduced vertical padding from py-6 to py-4
                    className="group flex w-full items-center justify-between py-4 md:py-5 text-left outline-none"
                  >
                    <span className="pr-6 text-[15px] md:text-[16px] font-medium text-white transition-all">
                      {faq.question}
                    </span>

                    <motion.div 
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {/* Tightened bottom padding */}
                        <div className="pb-5 space-y-4">
                          {faq.answer.map((para, i) => (
                            <p 
                              key={i} 
                              className="text-[13px] md:text-[14px] leading-relaxed text-zinc-400 max-w-[98%] font-normal text-justify [text-justify:inter-word]"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
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