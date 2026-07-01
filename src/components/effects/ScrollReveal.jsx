import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Fade + rise for any block. Optional stagger over direct children.
export default function ScrollReveal({ children, className = '', stagger = false, y = 34, delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const targets = stagger ? ref.current.children : ref.current
    gsap.from(targets, {
      opacity: 0,
      y,
      duration: 0.95,
      ease: 'power3.out',
      delay,
      stagger: stagger ? 0.09 : 0,
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
  }, { scope: ref })

  return <Tag ref={ref} className={className}>{children}</Tag>
}
