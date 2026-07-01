import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../../lib/motion'

// Lightweight canvas particle glow. Drifting rose-gold motes, mouse-reactive.
// Degradable: static gradient on reduced-motion / coarse pointer.
export default function GlowField({ density = 46, className = '' }) {
  const canvas = useRef(null)

  useEffect(() => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    let raf, w, h, dpr
    const reduced = prefersReducedMotion()
    const mouse = { x: 0.5, y: 0.4 }
    let parts = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = c.clientWidth; h = c.clientHeight
      c.width = w * dpr; c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const seed = () => {
      parts = Array.from({ length: reduced ? 0 : density }, () => ({
        x: Math.random(), y: Math.random(),
        r: 0.6 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0006,
        a: 0.08 + Math.random() * 0.22,
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // soft brand glow that follows the mouse
      const gx = (mouse.x * 0.6 + 0.2) * w
      const gy = (mouse.y * 0.5 + 0.15) * h
      const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(w, h) * 0.55)
      g.addColorStop(0, 'rgba(198,137,122,0.18)')
      g.addColorStop(0.5, 'rgba(168,94,82,0.06)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      for (const p of parts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230,201,188,${p.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize(); seed()
    if (reduced) { draw(); cancelAnimationFrame(raf) }
    else raf = requestAnimationFrame(draw)

    const onMove = (e) => { mouse.x = e.clientX / window.innerWidth; mouse.y = e.clientY / window.innerHeight }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [density])

  return <canvas ref={canvas} className={className} aria-hidden="true" style={{ width: '100%', height: '100%', display: 'block' }} />
}
