"use client";

import React from "react";
import { useParams } from "next/navigation";
import { caseStudies } from "@/data/caseStudies"; 

// Section Imports
import FAQs from "@/components/sections/CaseStudy/FAQs";
import Hero from "@/components/sections/CaseStudy/Hero";
import One from "@/components/sections/CaseStudy/One";
import Overview from "@/components/sections/CaseStudy/Overview";
import Stats from "@/components/sections/CaseStudy/Stats";
import Three from "@/components/sections/CaseStudy/Three";
import Two from "@/components/sections/CaseStudy/Two";
import OtherStudies from "@/components/sections/CaseStudy/OtherStudies";
import ImageSection from "@/components/ui/ImageSection";

export default function CaseStudyPage() {
  const params = useParams();

  const rawSlug = typeof params?.slug === "string" ? params.slug : "";
  const decodedSlug = decodeURIComponent(rawSlug);
  const study = caseStudies.find((s) => s.slug === decodedSlug);

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Hero data={study} />
      
      <Stats stats={study.stats} />

<ImageSection 
  src="/imgs/se1-O.png" 
  alt={`${study.title} - Case Study Image`} 
  className="order-1 md:order-2" 
/>
      
      <Overview 
        title={study.overviewTitle} 
        description={study.overviewDescription} 
      />
      
<ImageSection 
  src="/imgs/se1-A.png" 
  alt={`${study.title} - Case Study Image`} 
  className="order-1 md:order-2" 
/>
      <One 
        title={study.OneTitle} 
        subtitle={study.OneSubtitle} 
        description={study.OneDescription} 
      />


<ImageSection 
  src="/imgs/se1-B.png" 
  alt={`${study.title} - Case Study Image`} 
  className="order-1 md:order-2" 
/>

      <Two 
        title={study.TwoTitle} 
        subtitle={study.TwoSubtitle} 
        description={study.TwoDescription} 
      />


<ImageSection 
  src="/imgs/se1-C.png" 
  alt={`${study.title} - Case Study Image`} 
  className="order-1 md:order-2" 
/>
   
      <Three 
        title={study.ThreeTitle} 
        subtitle={study.ThreeSubtitle} 
        description={study.ThreeDescription} 
        stats={study.stats} // CRITICAL: This was likely missing
      />
      
  

      <FAQs 
        title={study.faqsTitle} 
        faqs={study.faqs} 
      />

      <OtherStudies currentSlug={decodedSlug} />
    </main>
  );
}