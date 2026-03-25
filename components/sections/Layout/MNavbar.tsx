"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { id: "01", name: "Home", href: "/" },
  { id: "02", name: "Services", href: "/services" },
  { id: "03", name: "Work", href: "/work" },
  { id: "04", name: "About", href: "/about" },
  { id: "05", name: "Contact", href: "/contact" },
];

export default function MNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100 && !isOpen) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav
        animate={hidden ? { y: -100 } : { y: 0 }}
        className="fixed top-0 left-0 right-0 z-[150] flex md:hidden items-center justify-between px-6 py-6 pointer-events-none"
      >
        <Link href="/" className={`text-[15px] font-bold tracking-tighter transition-colors duration-500 pointer-events-auto ${isOpen ? 'text-black' : 'text-white'}`}>
          LocusHQ
        </Link>

        {/* Shrunk Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative w-5 h-3">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5.5, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
              className="absolute top-0 left-0 w-5 h-[1.2px] block transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5.5, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
              className="absolute bottom-0 left-0 w-5 h-[1.2px] block transition-all duration-300"
            />
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[130] bg-black/40 backdrop-blur-md"
            />

            <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto w-full max-w-[340px] bg-white rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-black/5"
              >
                {/* Complex Internal Header */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-end border-b border-zinc-50">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-300 italic">Menu / Navigation</span>
                  <span className="text-[9px] font-mono text-zinc-300">v2.0.26</span>
                </div>

                {/* Layered Menu List */}
                <div className="p-8 space-y-6">
                  {menuItems.map((item) => (
                    <motion.div key={item.id} variants={itemVariants} className="group">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group-active:opacity-30 transition-all"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-[10px] font-mono text-zinc-200">{item.id}</span>
                          <span className="text-[18px] font-bold tracking-tight text-black">{item.name}</span>
                        </div>
                        <div className="h-[1px] w-0 bg-black group-hover:w-8 transition-all duration-500 hidden md:block" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Technical Bottom Section */}
                <div className="px-8 pb-8 pt-4 space-y-6">
                  <div className="w-full h-[1px] bg-zinc-50" />
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Project Status</span>
                      <span className="flex items-center gap-1.5 text-[9px] font-bold text-green-500 uppercase tracking-widest">
                        <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Available
                      </span>
                    </div>

                    <motion.div variants={itemVariants}>
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center w-full py-4 bg-black text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-[0.97] shadow-lg"
                      >
                        Start Project
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}