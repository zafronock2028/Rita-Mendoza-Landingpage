import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlowField from '../effects/GlowField'
import MagneticButton from '../effects/MagneticButton'
import { waLink } from '../../lib/data'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Hero() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const tl = gsap.timeline({ delay: 0.15 })
    tl.from('.hero-line > span', { yPercent: 120, duration: 1.1, ease: 'power4.out', stagger: 0.12 })
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.5')
      .from('.hero-portrait', { opacity: 0, scale: 1.08, duration: 1.4, ease: 'power3.out' }, '-=1.2')

    // portrait parallax on scroll
    gsap.to('.hero-portrait', {
      yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
    })
    // subtle mouse tilt
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5)
      const y = (e.clientY / window.innerHeight - 0.5)
      gsap.to('.hero-portrait', { x: x * -24, y: y * -18, duration: 0.8, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, { scope: root })

  return (
    <section id="top" ref={root} className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* background video + glow field */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay muted loop playsInline preload="metadata" poster="/images/rita.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg" />
        <GlowField className="absolute inset-0" />
      </div>

      <div className="wrap grid w-full items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow hero-sub mb-6">Empowering Entrepreneurs</p>
          <h1 className="font-display text-[15vw] leading-[0.9] md:text-[7.5vw]">
            <span className="reveal-line hero-line"><span className="inline-block">Tu piel</span></span>
            <span className="reveal-line hero-line"><span className="inline-block text-gradient italic">brilla.</span></span>
            <span className="reveal-line hero-line"><span className="inline-block">Tu negocio</span></span>
            <span className="reveal-line hero-line"><span className="inline-block text-gradient italic">también.</span></span>
          </h1>
          <p className="hero-sub mt-7 max-w-md text-lg text-muted">
            Rita Mendoza te abre el camino al skincare premium <strong className="text-ink">RIMAN &amp; ICD</strong> y a un negocio propio con mentoría real.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href={waLink('Hola Rita, quiero empezar mi negocio con RIMAN. ¿Cómo arranco?')}
              target="_blank" rel="noopener noreferrer"
              className="hero-cta rounded-full bg-brand px-7 py-3.5 font-medium text-bg transition-colors hover:bg-brand-accent"
            >
              Empezar mi negocio
            </MagneticButton>
            <a href="#productos" data-cursor="hover" className="hero-cta group flex items-center gap-2 text-ink">
              <span className="border-b border-brand/40 pb-1 transition-[border-color] group-hover:border-brand">Ver productos</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-brand absolute -inset-8 -z-10 blur-2xl" />
          <img
            src="/images/rita.jpg"
            alt="Rita Mendoza, mentora de negocios y distribuidora RIMAN"
            className="hero-portrait w-full rounded-[1.5rem] object-cover shadow-2xl"
            width="850" height="1275"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <span className="mono block text-[0.65rem] tracking-eyebrow text-muted" style={{ fontFamily: 'Space Mono, monospace' }}>SCROLL</span>
      </div>
    </section>
  )
}
