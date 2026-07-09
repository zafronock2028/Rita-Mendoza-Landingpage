import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitReveal from '../effects/SplitReveal'
import ScrollReveal from '../effects/ScrollReveal'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const stats = [
  { n: 'MX→USA', k: 'de México a Estados Unidos' },
  { n: '+1000', k: 'clientas y socias impactadas' },
  { n: 'RIMAN', k: 'skincare coreano premium' },
]

export default function About() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.to('.bio-photo', {
      yPercent: -10, ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  }, { scope: root })

  return (
    <section id="sobre" ref={root} className="wrap py-28 md:py-36">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* bio photo */}
        <div className="relative">
          <div className="glow-brand absolute -inset-6 -z-10 blur-2xl opacity-60" />
          <div className="overflow-hidden rounded-[1.25rem] border border-line">
            <img
              src="/images/rita-bio.png"
              alt="Rita Mendoza, emprendedora mexicana y líder RIMAN"
              className="bio-photo w-full scale-110 object-cover"
              width="850" height="1100" loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-6">Sobre Rita Mendoza</p>
          <SplitReveal
            as="h2"
            className="font-display text-[10vw] leading-[0.95] md:text-[4.2vw]"
            text="Empezó de cero. Hoy inspira a miles."
          />
          <ScrollReveal className="mt-8 max-w-lg space-y-4 text-muted" stagger>
            <p>
              Rita es <span className="text-ink">mexicana</span> y, como tantas, llegó a
              <span className="text-ink"> Estados Unidos</span> a empezar de nuevo. Trabajó duro,
              soñó en grande y buscó un camino distinto para su familia.
            </p>
            <p>
              Todo cambió cuando descubrió los <span className="text-ink">negocios digitales</span>
              y el poder de una marca personal. Encontró en <span className="text-ink">RIMAN</span>
              un producto que de verdad transforma la piel — y un modelo para transformar su vida.
            </p>
            <p>
              Hoy su comunidad crece con <span className="text-ink">testimonios reales</span>:
              personas satisfechas con resultados visibles y mujeres que, como ella, están
              construyendo su propio negocio desde casa.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8" stagger>
            {stats.map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl text-gradient md:text-4xl">{s.n}</div>
                <div className="mt-2 text-xs leading-snug text-muted">{s.k}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
