"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }, // New field added
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] bg-black/5 backdrop-blur-md border-b border-white/[0.03]"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-20 md:h-24 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white">
            LocusHQ
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] font-medium text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Invisible Spacer (Balances the Logo) */}
        <div className="flex-1 hidden md:block" />

        {/* Mobile Toggle (Optional: only if you still want a mobile menu) */}
        <div className="md:hidden">
            <button className="text-white">
                 <div className="w-5 h-[1.5px] bg-white mb-1"></div>
                 <div className="w-5 h-[1.5px] bg-white"></div>
            </button>
        </div>

      </div>
    </motion.nav>
  );
}