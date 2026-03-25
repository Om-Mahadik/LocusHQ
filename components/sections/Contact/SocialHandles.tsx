"use client";

import React from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", icon: "/icons/Instagram.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/Linkedin.svg", href: "#" },
  { name: "Mail", icon: "/icons/mail.svg", href: "#" },
  { name: "Globe", icon: "/icons/globe.svg", href: "#" },
];

export default function SocialHandles() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            y: -5, 
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
          // The 'group' class allows us to change the icon color on hover via CSS filters
          className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/[0.02] text-white transition-all duration-300 shadow-2xl"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <img 
              src={social.icon} 
              alt={social.name}
              className="w-full h-full object-contain transition-all duration-300 group-hover:invert" 
            />
          </div>
          <span className="text-[13px] font-bold tracking-tight group-hover:text-black transition-colors duration-300">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
}