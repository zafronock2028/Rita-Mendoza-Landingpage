import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../../lib/motion'

// Custom cursor: dot follows instantly-ish, ring lerps behind.
// Ring grows near [data-cursor="hover"] elements.
export default function CursorFollower() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion() || window.matchMedia('(pointer: coarse)').matches) return

    const xTo = gsap.quickTo(ring.current, 'x', { duration: 0.4, ease: 'power3' })
    const yTo = gsap.quickTo(ring.current, 'y', { duration: 0.4, ease: 'power3' })
    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power3' })
    const dy = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power3' })

    const move = (e) => {
      xTo(e.clientX); yTo(e.clientY)
      dx(e.clientX); dy(e.clientY)
    }
    const over = (e) => {
      if (e.target.closest('[data-cursor="hover"], a, button')) ring.current?.classList.add('is-active')
    }
    const out = (e) => {
      if (e.target.closest('[data-cursor="hover"], a, button')) ring.current?.classList.remove('is-active')
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
