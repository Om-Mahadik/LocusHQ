// app/page.tsx

import HeroSection from "@/components/sections/Home/HeroSection";
import FAQsSection from "@/components/sections/Home/FAQsSection";
import FinalCTASection from "@/components/sections/Home/FinalCTASection";
import TestimonialsSection from "@/components/sections/Home/TestimonialsSection";
import ProcessSection from "@/components/sections/Home/ProcessSection";
import { Info } from "lucide-react";
import InfoSection from "@/components/sections/Home/InfoSection";
import LeadJourneySection from "@/components/sections/Home/LeadJourneySection";
import WorkSection from "@/components/sections/Work/WorkSection";

import FeaturesSection from "@/components/sections/Home/FeaturesSection";
import Services from "@/components/sections/Home/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <InfoSection />

      <Services />


      <WorkSection />
      <LeadJourneySection />
      
      <TestimonialsSection />
      <FAQsSection />
      <FinalCTASection />
    </>
  );
}