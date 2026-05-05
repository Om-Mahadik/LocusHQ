"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // Added Variants type

interface Country {
  name: string;
  flag: string;
}

const operationalCountries: Country[] = [
  { name: 'Canada', flag: 'canada-flag.svg' },
  { name: 'Australia', flag: 'australia-flag.svg' },
  { name: 'USA', flag: 'usa-flag.svg' },
  { name: 'India', flag: 'india-flag.svg' },
];

export default function AboutUsHero() {
  
  // Explicitly typing the variants object fixes most Red Line errors
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="w-full bg-black text-white px-6 pt-12 pb-16 flex flex-col items-center justify-center font-sans antialiased overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto w-full text-center flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="font-bold text-3xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] max-w-5xl tracking-tight">
          We build the systems that turn ad spend into closed revenue.
        </h1>

        <p className="mt-8 text-white text-[15px] md:text-[18px] leading-relaxed max-w-[480px] text-center font-normal opacity-90 tracking-tight">
          <span className="font-bold">LocusHQ</span> is a revenue growth operation. 
          We combine paid media, AI-powered qualification, and conversion infrastructure 
          into one system.
        </p>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="uppercase tracking-[0.2em] text-[10px] md:text-[12px] text-neutral-500 font-bold">
            Operating In
          </span>
          
          <div className="flex flex-wrap justify-center gap-3">
            {operationalCountries.map((country) => (
              /* Check: Ensure this is motion.div, not just div */
              <motion.div 
                key={country.name} 
                variants={itemVariants} 
                className="flex items-center gap-2.5 bg-[#0A0A0A] border border-white/5 rounded-full pl-3 pr-4 py-1.5 shadow-xl"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center relative border border-white/10">
                    <Image
                      src={`/icons/${country.flag}`}
                      alt={`${country.name} flag`}
                      width={20}
                      height={20}
                      className="object-cover w-full h-full"
                    />
                </div>
                <span className="text-sm md:text-[15px] text-neutral-100 font-medium tracking-tight">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}