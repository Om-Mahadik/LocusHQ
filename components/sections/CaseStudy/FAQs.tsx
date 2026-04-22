"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

// 1. Define the Interface for Props
interface FAQsProps {
  title: string;
  faqs: {
    question: string;
    answer: string[];
  }[];
}

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

// 2. Update Component to accept props: { title, faqs }
export default function FAQs({ title, faqs }: FAQsProps) {
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
            {/* 3. Use the dynamic title prop */}
            {title}
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="rounded-[32px] bg-[#0A0A0A] border border-zinc-900 px-6 md:px-8 py-2"
        >
          <div className="flex flex-col">
            {/* 4. Map through the dynamic faqs prop */}
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div 
                  key={`faq-item-${index}`} 
                  variants={fadeInUp}
                  className={index !== faqs.length - 1 ? "border-b border-zinc-900" : ""}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
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