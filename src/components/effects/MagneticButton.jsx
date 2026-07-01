import { useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../../lib/motion'

// Magnetic hover with short falloff. Renders <a> or <button>.
export default function MagneticButton({ as = 'a', className = '', children, strength = 0.35, ...props }) {
  const el = useRef(null)
  const Tag = as

  const onMove = (e) => {
    if (prefersReducedMotion()) return
    const r = el.current.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    gsap.to(el.current, { x, y, duration: 0.4, ease: 'power3.out' })
  }
  const onLeave = () => gsap.to(el.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' })

  return (
    <Tag
      ref={el}
      data-cursor="hover"
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}
