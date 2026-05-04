'use client'

import ScrollReveal from '@/components/ui/Home/ScrollReveal'

const ScrollRevealSection = () => {
  return (
    <section className="w-full flex justify-center mt-16 mb-0">
      {/* Changed px-12 to px-4 for mobile, and md:px-12 for larger screens */}
      <div className="w-full max-w-6xl px-4 md:px-12">
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