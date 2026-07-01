import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'

// Curtain preloader with % counter. Calls onDone when lifted.
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const [pct, setPct] = useState(0)

  useGSAP(() => {
    if (prefersReducedMotion()) {
      setPct(100)
      onDone?.()
      gsap.set(root.current, { display: 'none' })
      return
    }
    const counter = { v: 0 }
    const tl = gsap.timeline({ onComplete: () => onDone?.() })
    tl.to(counter, {
      v: 100,
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate: () => setPct(Math.round(counter.v)),
    })
      .to('.pl-name', { yPercent: -110, duration: 0.7, ease: 'power4.inOut' }, '-=0.2')
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.1')
      .set(root.current, { display: 'none' })
  }, { scope: root })

  return (
    <div ref={root} className="fixed inset-0 z-[100] flex items-end justify-between bg-bg px-6 pb-8 md:px-12">
      <div className="overflow-hidden">
        <div className="pl-name font-display text-[12vw] leading-none text-ink md:text-[7vw]">Glow</div>
      </div>
      <div className="mono text-brand" style={{ fontFamily: 'Space Mono, monospace' }}>{pct}%</div>
    </div>
  )
}
