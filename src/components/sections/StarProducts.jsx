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

const stars = [
  {
    slug: 'collagen-100-melting-mask',
    img: '/products/collagen-100-melting-mask.png',
    tag: 'RIMAN · Best seller',
    name: 'Collagen 100 Melting Mask',
    line: 'El colágeno que se derrite en tu piel',
    benefits: [
      'Colágeno puro que se funde al contacto',
      'Rellena y reafirma en minutos',
      'Piel visiblemente más joven y elástica',
    ],
    big: '100',
  },
  {
    slug: 'deserticola-plus-conditioner',
    img: '/products/deserticola-plus-conditioner.png',
    tag: 'RIMAN · Cuidado capilar',
    name: 'Deserticola+ Conditioner',
    line: 'Nutrición del desierto para tu cabello',
    benefits: [
      'Nutrición profunda con extracto Deserticola',
      'Cabello suave, manejable y con brillo',
      'Sella la hidratación sin apelmazar',
    ],
    big: '+',
  },
]

function Star({ p, i }) {
  const row = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.to('.star-img', {
      yPercent: -16, ease: 'none',
      scrollTrigger: { trigger: row.current, start: 'top bottom', end: 'bottom top', scrub: true },
    })
    gsap.to('.star-big', {
      yPercent: 22, ease: 'none',
      scrollTrigger: { trigger: row.current, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  }, { scope: row })

  const reverse = i % 2 === 1

  return (
    <div ref={row} className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
      {/* media */}
      <div className={`relative flex items-center justify-center ${reverse ? 'md:order-2' : ''}`}>
        <span
          className="star-big pointer-events-none absolute select-none font-display text-[42vw] leading-none text-brand/10 md:text-[20vw]"
          aria-hidden="true"
        >
          {p.big}
        </span>
        <div className="glow-brand absolute inset-0 -z-0 blur-3xl opacity-70" />
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="star-img relative z-10 max-h-[70vh] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* copy */}
      <div className={reverse ? 'md:order-1' : ''}>
        <span className="eyebrow" style={{ fontFamily: 'Space Mono, monospace' }}>{p.tag}</span>
        <SplitReveal
          as="h3"
          className="mt-4 font-display text-[11vw] leading-[0.92] md:text-[3.6vw]"
          text={p.name}
        />
        <p className="mt-4 font-display text-xl italic text-gradient md:text-2xl">{p.line}</p>

        <ScrollReveal className="mt-7 space-y-3" stagger>
          {p.benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 border-b border-line pb-3 text-ink">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {b}
            </div>
          ))}
        </ScrollReveal>

        <MagneticButton
          href={MALL_URL}
          target="_blank" rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-medium text-bg transition-colors hover:bg-brand-accent"
        >
          Visitar Mall <span aria-hidden="true">↗</span>
        </MagneticButton>
      </div>
    </div>
  )
}

export default function StarProducts() {
  return (
    <section id="estrellas" className="bg-bg-alt py-28 md:py-36">
      <div className="wrap">
        <div className="mb-20 max-w-2xl">
          <p className="eyebrow mb-6">Productos estrella</p>
          <SplitReveal
            as="h2"
            className="font-display text-[9vw] leading-[0.95] md:text-[4vw]"
            text="Los que hacen que vuelvan por más."
          />
        </div>

        <div className="flex flex-col gap-28 md:gap-40">
          {stars.map((p, i) => (
            <Star key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
