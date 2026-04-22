"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Home, Zap, Briefcase, User, Mail, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Services", href: "/services", icon: <Zap size={18} /> },
  { name: "Work", href: "/works", icon: <Briefcase size={18} /> },
  { name: "About", href: "/about", icon: <User size={18} /> },
  { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
];

export default function MNavbar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
  // 1. State to track visibility based on scroll direction
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // 2. Logic to detect scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Only hide if the menu is NOT open
    if (latest > previous && latest > 150 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Mobile Top Bar - Wrapped in a motion.nav for hiding logic */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: -120 }, // Moves the bar off-screen
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[200] flex md:hidden items-center justify-between px-6 py-8 pointer-events-none"
      >
        
        {/* Logo with Difference Blend */}
        <motion.div 
          animate={isOpen ? { x: 30 } : { x: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="text-xl font-black tracking-tighter pointer-events-auto mix-blend-difference text-white"
        >
          <Link href="/">
            LocusHQ<span className="text-blue-500">.</span>
          </Link>
        </motion.div>

        {/* Small Pill Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center gap-2 h-9 px-4 rounded-full pointer-events-auto transition-all duration-300 shadow-lg border border-white/5 ${
            isOpen ? 'bg-white text-black' : 'bg-[#1a1a1a] text-zinc-400'
          }`}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.15em]">
            {isOpen ? 'Close' : 'Menu'}
          </span>
          <div className="relative w-4 h-4 flex items-center justify-center">
            {isOpen ? <X size={14} strokeWidth={3} /> : <Menu size={14} strokeWidth={3} />}
          </div>
        </button>
      </motion.nav>

      {/* Dark Theme Menu Background */}
      <div className={`fixed inset-0 z-[50] bg-[#0a0a0a] flex md:hidden justify-end overflow-hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-[82%] h-full flex flex-col justify-between px-10 py-24">
          
          <div className="flex items-center gap-4 opacity-20"></div>

          {/* Links Section */}
          <div className="flex flex-col gap-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={false}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-bold tracking-tighter text-zinc-100 group-active:text-zinc-500 transition-colors">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="space-y-4">
            <div className="h-[1px] w-full bg-white/5" />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-medium tracking-widest text-zinc-500">
                LocusHQ
              </p>
              <p className="text-[9px] font-medium text-zinc-600 uppercase tracking-tighter">
                © 2026 Delhi, IN
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}