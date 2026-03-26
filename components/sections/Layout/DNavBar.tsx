"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export default function DNavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] hidden md:flex items-center justify-between px-12 py-8 pointer-events-none mix-blend-difference">
      {/* 1. Logo */}
      <div className="pointer-events-auto">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          LocusHQ<span className="text-blue-500">.</span>
        </Link>
      </div>

      {/* 2. Central Links */}
      <div className="flex items-center gap-10 pointer-events-auto">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* 3. Action Button */}
      <div className="pointer-events-auto">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}