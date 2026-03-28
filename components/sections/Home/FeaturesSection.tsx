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
    <section className="bg-[#000000] min-h-screen py-32 px-6 font-sans selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Creative Header with Gradient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          {/* Subtle background glow behind the text */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-blue-500/10 blur-[100px] rounded-full" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] relative z-10">
            Precision in every <br />
            <span className="bg-gradient-to-b from-zinc-100 to-zinc-600 bg-clip-text text-transparent">
              pixel of performance.
            </span>
          </h1>
        </motion.div>

        {/* The Card Stack - Centered and Slimmer */}
        <div className="w-full flex flex-col items-center gap-20">
          {cards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 1, 
                rotateX: -1,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)" 
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="group relative w-full max-w-5xl bg-white rounded-[40px] p-10 md:p-16 flex items-center justify-center overflow-hidden border border-white/20 shadow-xl cursor-default"
              style={{ perspective: "1000px" }}
            >
              {/* Subtle inner card decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Rendering your components inside - perfectly centered */}
              <div className="w-full h-full flex items-center justify-center text-center">
                <div className="w-full transform transition-transform duration-500 group-hover:scale-[0.98]">
                  {item.component}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Creative Interactive Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group flex flex-col items-center gap-4 py-12"
          >
            <div className="w-px h-24 bg-gradient-to-b from-zinc-800 to-transparent mb-4" />
            <p className="text-zinc-500 text-sm font-bold tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
              The Roadmap Continues
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;