"use client";
import CountriesCard from "@/components/ui/Home/CountriesCard";
import FeaturesCard1 from "@/components/ui/Home/FeaturesCard1";
import LeadCard from "@/components/ui/Home/LeadCard";
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const cards = [
    { id: 1, component: <FeaturesCard1 /> },
    { id: 2, component: <LeadCard /> },
    { id: 3, component: <CountriesCard /> },
  ];

  return (
    <section className="bg-[#000000] min-h-screen py-32 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
            Precision in every <br />
            <span className="text-zinc-500">pixel of performance.</span>
          </h1>
        </motion.div>

        {/* The Card Stack */}
        <div className="w-full flex flex-col items-center gap-16">
          {cards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              // FIXED: Added 'flex flex-col items-center justify-center' 
              // and 'text-center' to force the internal component to stay middle.
              className="group relative w-full max-w-4xl bg-white rounded-[40px] p-12 md:p-20 
                         flex flex-col items-center justify-center text-center
                         shadow-2xl border border-white/10"
            >
              {/* Internal Content Wrapper */}
              <div className="w-full flex flex-col items-center justify-center *:mx-auto">
                {/* The *:mzx-auto selector above forces all direct children 
                   of the component to have auto-margins on left/right.
                */}
                {item.component}
              </div>

              {/* Decorative Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100/50 blur-[60px] rounded-full pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="mt-24 w-px h-32 bg-gradient-to-b from-zinc-800 to-transparent" />
      </div>
    </section>
  );
};

export default FeaturesSection;