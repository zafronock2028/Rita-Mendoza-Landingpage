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
    tl.from('.hero-logo', { opacity: 0, scale: 0.9, y: 20, duration: 1.3, ease: 'power4.out' })
      .from('.hero-line > span', { yPercent: 120, duration: 1.0, ease: 'power4.out', stagger: 0.1 }, '-=0.7')
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.5')

    // background video subtle scale on scroll
    gsap.to('.hero-video', {
      scale: 1.12, ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
    })
  }, { scope: root })

  return (
    <section id="top" ref={root} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center">
      {/* background: biography video + glow */}
      <div className="absolute inset-0 -z-10">
        <video
          className="hero-video h-full w-full object-cover opacity-45"
          autoPlay muted loop playsInline preload="metadata" poster="/images/rita-final.jpg"
        >
          <source src="/videos/reveal.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/55 to-bg" />
        <GlowField className="absolute inset-0" />
      </div>

      <div className="wrap flex w-full flex-col items-center pt-24">
        <img
          src="/images/logo-white.png"
          alt="Rita Mendoza Glow"
          className="hero-logo w-[78vw] max-w-2xl drop-shadow-[0_10px_40px_rgba(198,137,122,0.35)]"
          width="1024" height="1024"
        />

        <h1 className="mt-2 font-display text-[9vw] leading-[0.95] md:text-[4.6vw]">
          <span className="reveal-line hero-line block"><span className="inline-block">Tu piel <span className="text-gradient italic">brilla.</span></span></span>
          <span className="reveal-line hero-line block"><span className="inline-block">Tu negocio <span className="text-gradient italic">también.</span></span></span>
        </h1>

        <p className="hero-sub mx-auto mt-7 max-w-xl text-lg text-muted">
          Rita Mendoza te abre el camino al skincare premium <strong className="text-ink">RIMAN &amp; ICD</strong> y a un negocio propio con mentoría real.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <span className="block text-[0.65rem] tracking-eyebrow text-muted" style={{ fontFamily: 'Space Mono, monospace' }}>SCROLL</span>
      </div>
    </section>
  )
}
