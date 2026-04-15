"use client";

import FAQs from "@/components/sections/CaseStudy/FAQs";
import Hero from "@/components/sections/CaseStudy/Hero";
import One from "@/components/sections/CaseStudy/One";
import Overview from "@/components/sections/CaseStudy/Overview";
import Stats from "@/components/sections/CaseStudy/Stats";
import Three from "@/components/sections/CaseStudy/Three";
import Two from "@/components/sections/CaseStudy/Two";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Stats />
      <Overview />
      <One />
      <Two />
      <Three />
      <FAQs />
    </main>
  );
}