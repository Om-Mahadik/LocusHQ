"use client";

import React from "react";
import LeadJourneyDisplay from "@/components/ui/Home/LeadJourneyDisplay";
import LeadJourneyContent from "@/components/ui/Home/LeadJourneyContent";

export default function LeadJourneySection() {
  return (
    <section className="bg-black py-16 px-6 md:py-32 antialiased font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Responsive Grid: Column-reverse on mobile to put text above the card */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-20 items-center">
          
          {/* Content: Centered on mobile, Left-aligned on desktop */}
          <div className="md:col-span-7 w-full">
            <LeadJourneyContent />
          </div>

          {/* Visual Card: Large rounded corners like the image */}
          <div className="md:col-span-5 w-full">
            <LeadJourneyDisplay />
          </div>

        </div>
      </div>
    </section>
  );
}