import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '../effects/MagneticButton'
import GlowField from '../effects/GlowField'
import { waLink } from '../../lib/data'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function CTA() {
  const root = useRef(null)
  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.from('.cta-word', {
      yPercent: 120, opacity: 0, duration: 1.1, ease: 'power4.out', stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: 'top 75%' },
    })
  }, { scope: root })

  return (
    <section id="contacto" ref={root} className="relative overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0 -z-10">
        <GlowField density={60} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>

      <div className="wrap text-center">
        <p className="eyebrow mb-8">Tu momento es ahora</p>
        <h2 className="mx-auto max-w-4xl font-display text-[12vw] leading-[0.92] md:text-[6.5vw]">
          <span className="reveal-line block"><span className="cta-word inline-block">Empieza a</span></span>
          <span className="reveal-line block"><span className="cta-word inline-block text-gradient italic">brillar</span></span>
          <span className="reveal-line block"><span className="cta-word inline-block">con Rita.</span></span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-muted">
          Un mensaje separa tu curiosidad de tu primer paso. Escríbele directo por WhatsApp
          y recibe tu plan de arranque.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton
            href={waLink('Hola Rita, estoy lista para empezar. Cuéntame el primer paso.')}
            target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-brand px-9 py-4 text-lg font-medium text-bg transition-colors hover:bg-brand-accent"
          >
            Escribir por WhatsApp
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
