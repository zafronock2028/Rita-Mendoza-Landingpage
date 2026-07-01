import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitReveal from '../effects/SplitReveal'
import ScrollReveal from '../effects/ScrollReveal'
import MagneticButton from '../effects/MagneticButton'
import { MALL_URL } from '../../lib/data'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const benefits = [
  'Resultados visibles que se sienten al tacto',
  'Textura sensorial de lujo, absorción inmediata',
  'El favorito que la comunidad repite',
]

export default function FeaturedVideo() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.from('.fv-media', {
      scale: 1.12, ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  }, { scope: root })

  return (
    <section ref={root} className="relative overflow-hidden py-24 md:py-32">
      <div className="wrap">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          {/* video product showcase */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line" data-cursor="hover">
            <div className="glow-brand absolute -inset-10 -z-10 blur-3xl opacity-70" />
            <video
              className="fv-media aspect-[4/3] w-full object-cover md:aspect-[16/12]"
              autoPlay muted loop playsInline preload="metadata" poster="/images/rita-final.jpg"
            >
              <source src="/videos/reveal.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
          </div>

          {/* copy */}
          <div>
            <p className="eyebrow mb-6">El producto del momento</p>
            <SplitReveal
              as="h2"
              className="font-display text-[10vw] leading-[0.95] md:text-[3.8vw]"
              text="Un ritual que se siente tan bueno como se ve."
            />
            <ScrollReveal className="mt-7 max-w-md text-muted">
              <p>
                Este es el producto que enamora en la primera pasada. Una experiencia
                sensorial que convierte tu rutina en un momento — y a tus clientas en fans.
              </p>
            </ScrollReveal>

            <ul className="mt-7 space-y-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {b}
                </li>
              ))}
            </ul>

            <MagneticButton
              href={MALL_URL}
              target="_blank" rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-medium text-bg transition-colors hover:bg-brand-accent"
            >
              Visitar Mall <span aria-hidden="true">↗</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
