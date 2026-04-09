"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

const navigation = ["Home", "Services", "Work", "About", "Contact"];

const connect = [
  { name: "@locushq", icon: "/icons/instagram.svg", href: "#" },
  { name: "locushq", icon: "/icons/linkedin.svg", href: "#" },
  { name: "hello@locushq.co", icon: "/icons/mail.svg", href: "mailto:hello@locushq.co" },
  { name: "www.locushq.co", icon: "/icons/globe.svg", href: "https://www.locushq.co" },
];

const flags = [
  { src: "/icons/india-flag.svg", alt: "India" },
  { src: "/icons/canada-flag.svg", alt: "Canada" },
  { src: "/icons/australia-flag.svg", alt: "Australia" },
  { src: "/icons/usa-flag.svg", alt: "USA" },
];

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
};

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-14 font-sans text-white border-t border-zinc-900">
      <div className="mx-auto max-w-6xl">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="md:col-span-6 flex flex-col gap-5"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white">LocusHQ</h2>
            <p className="text-[14px] text-white max-w-xs opacity-90 leading-relaxed">
              We architect revenue systems for businesses done leaving money between click and the close.
            </p>
            <div className="flex gap-2.5">
              {flags.map((flag, i) => (
                <img 
                  key={`flag-${i}`} 
                  src={flag.src} 
                  alt={flag.alt} 
                  width={22}
                  height={22}
                  className="h-5.5 w-5.5 rounded-full object-cover border border-zinc-800" 
                />
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <motion.div 
               initial={fadeInUp.initial}
               whileInView={fadeInUp.whileInView}
               viewport={fadeInUp.viewport}
               transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white opacity-60">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2.5">
                {navigation.map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                      className="text-[14px] text-white hover:opacity-70 transition-all duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
               initial={fadeInUp.initial}
               whileInView={fadeInUp.whileInView}
               viewport={fadeInUp.viewport}
               transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white opacity-60">
                Connect
              </h3>
              <ul className="flex flex-col gap-2.5">
                {connect.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center gap-3 group">
                      <img 
                        src={item.icon} 
                        alt="" 
                        width={15} 
                        height={15} 
                        className="h-4 w-4 opacity-100 transition-opacity" 
                      />
                      <span className="text-[14px] text-white group-hover:opacity-70 transition-opacity">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[28px] bg-[#0a0a0a] border border-zinc-900 p-8 text-center md:p-11"
        >
          <h3 className="mx-auto max-w-sm text-[15px] font-medium text-white leading-tight">
            Get one sharp marketing insight per week. <br />
            <span className="text-[13px] text-white opacity-60">No agency fluff.</span>
          </h3>

          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-[320px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white py-3 pl-6 pr-14 text-[13px] text-black outline-none placeholder:text-zinc-400"
              />
              <button 
                type="button"
                aria-label="Subscribe"
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-zinc-800 active:scale-95"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-zinc-900 pt-7 text-[11px] text-white md:flex-row"
        >
          <div className="flex gap-5 opacity-70">
            <Link href="/legal/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link>
            <Link href="/legal/terms" className="hover:opacity-100 transition-opacity">Terms</Link>
            <Link href="/legal/disclaimer" className="hover:opacity-100 transition-opacity">Disclaimer</Link>
          </div>
          <p className="tracking-wide opacity-50 uppercase">© 2026 LOCUSHQ. ALL RIGHTS RESERVED</p>
        </motion.div>
      </div>
    </footer>
  );
}