// components/sections/CaseStudy/OtherStudies.tsx

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { caseStudies } from "@/data/caseStudies";

export default function OtherStudies({ currentSlug }: { currentSlug: string }) {
  const [mounted, setMounted] = useState(false);
  const filteredStudies = caseStudies.filter((s) => s.slug !== currentSlug);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!mounted) return null;

  return (
    <section className="relative z-10 bg-black pt-12 pb-24 px-4 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] text-zinc-500 block mb-2">
            Explore More
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Other Case Studies
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredStudies.map((study) => {
            const rawImg = study.heroImage;
            const sanitizedSrc = rawImg && typeof rawImg === "string" && rawImg.trim() !== ""
              ? (rawImg.startsWith('http') || rawImg.startsWith('/') ? rawImg : `/${rawImg}`)
              : null;

            return (
              <motion.div key={study.slug} variants={itemVariants}>
                <Link
                  href={`/works/case-study/${study.slug}`}
                  className="group block outline-none"
                >
                  <div className="flex flex-col h-full rounded-[24px] bg-[#080808] border border-zinc-900/50 p-4 transition-all duration-500 group-hover:border-zinc-700 group-hover:bg-[#0A0A0A]">
                    
                    {/* IMAGE CONTAINER */}
                    <div className="relative aspect-square overflow-hidden rounded-[18px] bg-zinc-950 mb-5">
                      {sanitizedSrc ? (
                        <motion.div
                          className="absolute inset-0 h-full w-full"
                          initial={{
                            filter: "grayscale(100%) brightness(0.8)",
                            opacity: 0.3,
                          }}
                          whileInView={{
                            filter: "grayscale(0%) brightness(1)",
                            opacity: 1,
                          }}
                          // Increased duration for a "richer" transition
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          viewport={{
                            once: false,
                            // Trigger slightly earlier and keep the effect longer
                            amount: 0.4, 
                            margin: "-20% 0px -20% 0px",
                          }}
                          style={{
                            filter: window.innerWidth >= 768 ? "grayscale(0%) brightness(1)" : undefined,
                            opacity: window.innerWidth >= 768 ? 1 : undefined
                          }}
                        >
                          <Image
                            src={sanitizedSrc}
                            alt={study.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            // Added rounded-[12px] to the image itself
                            className="object-contain p-2 rounded-[20px] transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                          <span className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold">
                            No Preview
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="px-1 pb-2 flex flex-col flex-grow">
                      <span className="text-[11px] text-zinc-500 font-medium tracking-[0.1em] mb-2">
                        {study.slug
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </span>

                      <div className="flex items-start justify-between">
                        <h3 className="text-[17px] md:text-[19px] font-medium text-zinc-200 group-hover:text-white transition-colors leading-tight pr-4">
                          {study.title}
                        </h3>

                        <div className="shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-500 group-hover:text-white"
                          >
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}