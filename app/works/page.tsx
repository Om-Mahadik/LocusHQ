import React from "react";
import WorksList from "@/components/sections/CaseStudy/WorksGrid"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Our Works",
  description: "Explore our case studies to see how we’ve helped clients achieve remarkable results.",
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Minimal Centered Header */}
      <section className="pt-32 pb-2 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3.5xl md:text-6xl font-semibold tracking-tight mb-6">
            Case Studies
          </h1>
          <p className="text-zinc-300 text-base md:text-xl leading-relaxed">
            Explore our case studies to see how we’ve helped clients overcome 
            challenges and achieve remarkable results through effective strategies.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="pb-24">
        <WorksList />
      </section>

    </main>
  );
}