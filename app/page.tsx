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
import HighlightedFeatures from "@/components/sections/Features/HighlightedFeatures";
import CleanFeatures from "@/components/sections/Home/CleanFeatures";
import FeaturesSet1 from "@/components/sections/Home/FeaturesSet1";
import Features from "@/components/sections/Home/trial/Features";
import StickySectionOriginal from "@/components/ui/Home/StickySectionOriginal";
import { LogoSlider } from "@/components/ui/Home/LogoSlider";
import { IndustrySlider } from "@/components/ui/Home/IndustrySlider";
import ProcessFlow from "@/components/ui/Home/ProcessFlow";




export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSlider />
      <IndustrySlider />
      <Features />
      <InfoSection />
      <ProcessFlow />
      <Services />
      <LeadJourneySection />
      <TestimonialsSection />
      <FAQsSection />
      <FinalCTASection />
    </>
  );
}