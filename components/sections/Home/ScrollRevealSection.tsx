'use client'

import ScrollReveal from '@/components/ui/Home/ScrollReveal'

const ScrollRevealSection = () => {
  return (
    /* Changed my-16 to mt-16 to keep top space but remove bottom space */
    <section className="w-full flex justify-center mt-16 mb-0">
      {/* Centered container */}
      <div className="w-full max-w-6xl px-12">
        {/* Always centered text */}
        <div className="text-center">
          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            We prove, design,
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            implement, and market
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            your idea with absolute
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            transparency and efficiency
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            in its core.
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ScrollRevealSection