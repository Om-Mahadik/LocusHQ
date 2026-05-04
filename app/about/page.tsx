// app/about/page.tsx
import AboutUsHero from '@/components/sections/About/AboutUsHero';
import BuildLayers from '@/components/sections/About/BuildLayers';
import ComparisonTable from '@/components/sections/About/ComparisionTable';
import Metrics from '@/components/sections/About/Metrics';
import Principles from '@/components/sections/About/Principles';
import TeamStructure from '@/components/sections/About/TeamStructure';

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32"> 
      <AboutUsHero />
      <Metrics />
      <TeamStructure />
      <ComparisonTable />
      <BuildLayers />
      <Principles />
    </main>
  );
}