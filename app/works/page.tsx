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
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Case Studies
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Explore our case studies to see how we’ve helped clients overcome 
            challenges and achieve remarkable results through effective strategies.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="pb-24">
        <WorksList />
      </section>

      {/* Simple Centered CTA */}
      <section className="py-24 px-4 border-t border-zinc-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            Ready to achieve similar results?
          </h2>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all">
            Book a Strategy Call
          </button>
        </div>
      </section>
    </main>
  );
}