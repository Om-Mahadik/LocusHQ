'use client'

import React, {
  useEffect,
  useRef,
  useMemo,
  ReactNode,
  RefObject
} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = ''
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word
      return (
        <span key={index} className="inline-block word">
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef?.current ?? window
    const words = el.querySelectorAll<HTMLElement>('.word')

    gsap.fromTo(
      el,
      { rotate: baseRotation, transformOrigin: '50% 50%' },
      {
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=40%',
          end: 'top center',
          scrub: true
        }
      }
    )

    gsap.fromTo(
      words,
      { opacity: baseOpacity },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=40%',
          end: 'top center',
          scrub: true
        }
      }
    )

    if (enableBlur) {
      gsap.fromTo(
        words,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: 'blur(0px)',
          ease: 'none',
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=40%',
            end: 'top center',
            scrub: true
          }
        }
      )
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength
  ])

  return (
    <h2
      ref={containerRef}
      className={`m-0 p-0  ${containerClassName}`}
    >
      <p
        className={`m-0 p-0 text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold text-white ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  )
}

export default ScrollReveal