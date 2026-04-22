"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { caseStudies } from "@/data/caseStudies";

export default function OtherStudies({ currentSlug }: { currentSlug: string }) {
  const filteredStudies = caseStudies.filter((s) => s.slug !== currentSlug);

  // Explicitly typing variants resolves most "red line" issues in TS
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

  return (
    <section className="relative z-10 bg-black pt-12 pb-24 px-4 border-t border-zinc-900">
      <style jsx global>{`
        .motion-responsive-image {
          --image-initial-filter: grayscale(100%);
          --image-initial-opacity: 0.3;
          --image-inview-filter: grayscale(0%);
          --image-inview-opacity: 1;
        }

        @media (min-width: 768px) {
          .motion-responsive-image {
            --image-initial-filter: grayscale(0%) !important;
            --image-initial-opacity: 1 !important;
            --image-inview-filter: grayscale(0%) !important;
            --image-inview-opacity: 1 !important;
          }
        }
      `}</style>

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
          {filteredStudies.map((study) => (
            <motion.div key={study.slug} variants={itemVariants}>
              <Link
                href={`/works/case-study/${study.slug}`}
                className="group block outline-none"
              >
                <div className="flex flex-col h-full rounded-[24px] bg-[#080808] border border-zinc-900/50 p-4 transition-all duration-500 group-hover:border-zinc-700 group-hover:bg-[#0A0A0A]">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-zinc-950 mb-5">
                    {study.heroImage ? (
                      <motion.div
                        className="absolute inset-0 h-full w-full motion-responsive-image"
                        initial={{
                          filter: "var(--image-initial-filter)",
                          opacity: "var(--image-initial-opacity)",
                        }}
                        whileInView={{
                          filter: "var(--image-inview-filter)",
                          opacity: "var(--image-inview-opacity)",
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{
                          once: false,
                          amount: 0.6,
                          margin: "-35% 0px -35% 0px",
                        }}
                      >
                        <Image
                          src={study.heroImage}
                          alt={study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 bg-zinc-900" />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="px-1 pb-2 flex flex-col flex-grow">
                    {/* 1. CATEGORY FIRST */}
                    <span className="text-[11px] text-zinc-500 font-medium tracking-[0.1em] mb-2">
                      {study.slug
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </span>

                    {/* 2. TITLE SECOND */}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}