"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/works" },
  { name: "About", href: "/about" },
];

export default function DNavBar() {
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] hidden md:flex justify-center py-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        /* 
           The magic: 
           - w-[80%] for width
           - glassmorphism background when scrolled 
           - border-white/10 for a subtle edge
        */
        className={`
          w-[70%] flex items-center justify-between px-8 py-3 
          pointer-events-auto transition-all duration-500 ease-in-out
          rounded-full border
          ${scrolled 
            ? "bg-black/40 backdrop-blur-md border-white/10 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]" 
            : "bg-transparent border-transparent"
          }
        `}
      >
        {/* 1. Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-black tracking-tighter text-white">
            LocusHQ<span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* 2. Central Links with Animated Hover */}
        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[14px] font-medium tracking-[0.2em] text-zinc-100 hover:text-white transition-colors duration-300 uppercase"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* 3. Action Button: Inverted styling */}
        <div>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 bg-white text-black rounded-full text-[12px] font-bold uppercase tracking-widest transition-all"
            >
              Start Project
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}