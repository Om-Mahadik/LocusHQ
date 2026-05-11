"use client";

import React, { useEffect, useState } from "react";

const Watermark = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay slightly to ensure smooth entry after page load
    const timer = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://personalwebstudio.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 20px",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "100px",
        pointerEvents: "auto",
        userSelect: "none",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        textDecoration: "none",
        cursor: "pointer",
        
        // Micro-level Incoming Animation Logic
        opacity: isMounted ? 1 : 0,
        transform: isMounted 
          ? "translateY(0) scale(1)" 
          : "translateY(20px) scale(0.9)",
        filter: isMounted ? "blur(0px)" : "blur(4px)",
        
        // Match your high-end cursor cubic-bezier
        transition: `
          opacity 0.8s ease-out, 
          transform 1.2s cubic-bezier(0.23, 1, 0.32, 1), 
          filter 0.8s ease-out,
          background-color 0.3s ease
        `,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
    >
      <img
        src="/watermark/pws-logo-black.png"
        alt="PersonalWebStudio"
        style={{
          height: "22px",
          width: "auto",
          filter: "invert(1) brightness(1.2)",
          opacity: 0.9,
          // Mix-blend-mode for the "difference" effect you wanted
          mixBlendMode: "difference", 
        }}
      />
      <span
        style={{
          color: "#FFFFFF",
          fontSize: "13px",
          fontWeight: 400,
          letterSpacing: "0.03em",
          fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
          mixBlendMode: "difference",
        }}
      >
        Built by <strong style={{ color: "#fff", fontWeight: 700 }}>PersonalWebStudio</strong>
      </span>
    </a>
  );
};

export default Watermark;