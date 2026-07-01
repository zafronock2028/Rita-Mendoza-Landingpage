import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'

// Slow infrasonic marquee. Duplicates content for seamless loop.
export default function Marquee({ children, speed = 34, className = '' }) {
  const track = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const half = track.current.scrollWidth / 2
    gsap.to(track.current, {
      x: -half,
      duration: speed,
      ease: 'none',
      repeat: -1,
    })
  }, { scope: track })

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div ref={track} className="flex w-max whitespace-nowrap">
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </div>
    </div>
  )
}
