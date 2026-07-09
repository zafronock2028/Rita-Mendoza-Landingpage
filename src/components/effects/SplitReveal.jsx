import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Word-by-word mask reveal on scroll. Splits children string into words.
export default function SplitReveal({ text, as: Tag = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null)
  const words = String(text).split(' ')

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const spans = ref.current.querySelectorAll('.rv-word > span')
    gsap.set(spans, { yPercent: 118 })
    gsap.to(spans, {
      yPercent: 0,
      duration: 1.0,
      ease: 'power4.out',
      stagger: 0.07,
      delay,
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    })
  }, { scope: ref })

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span
            className="rv-word"
            style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.08em', verticalAlign: 'bottom' }}
          >
            <span style={{ display: 'inline-block', willChange: 'transform' }}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
