import React from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/logos/logo1.png", alt: "Partner 1" },
  { src: "/logos/logo2.png", alt: "Partner 2" },
  { src: "/logos/logo1.png", alt: "Partner 3" },
  { src: "/logos/logo2.png", alt: "Partner 4" },
  { src: "/logos/logo1.png", alt: "Partner 5" },
  { src: "/logos/logo2.png", alt: "Partner 6" },
  { src: "/logos/logo1.png", alt: "Partner 7" },
  { src: "/logos/logo2.png", alt: "Partner 8" },
  { src: "/logos/logo1.png", alt: "Partner 9" },
  { src: "/logos/logo2.png", alt: "Partner 10" },
  { src: "/logos/logo1.png", alt: "Partner 11" },
  { src: "/logos/logo2.png", alt: "Partner 12" },
  { src: "/logos/logo1.png", alt: "Partner 13" },
  { src: "/logos/logo2.png", alt: "Partner 14" },
  { src: "/logos/logo1.png", alt: "Partner 15" },
];

export const LogoSlider = () => {
  return (
    <div className="bg-black py-6 w-full overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          display: flex;
          width: max-content;
          /* Increased duration to 40s because 15 logos take longer to pass */
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-infinite:hover {
         
        }
      `}} />

      <div className="relative flex">
        {/* Left Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Overlay */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Container with pr-12 to match the gap-12.
            This ensures the distance between the last logo of the 2nd set 
            and the first logo of the 1st set is identical to all other gaps.
        */}
        <div className="animate-scroll-infinite gap-12 flex items-center pr-12">
          {/* First set of 15 logos */}
          {LOGOS.map((logo, index) => (
            <div key={`logo-1-${index}`} className="relative w-28 h-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain filter grayscale  hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}

          {/* Second set of 15 logos (The Duplicate) */}
          {LOGOS.map((logo, index) => (
            <div key={`logo-2-${index}`} className="relative w-28 h-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain filter grayscale  hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};