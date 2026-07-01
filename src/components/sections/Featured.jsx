import SplitReveal from '../effects/SplitReveal'
import ScrollReveal from '../effects/ScrollReveal'
import MagneticButton from '../effects/MagneticButton'
import { featured, MALL_URL } from '../../lib/data'

export default function Featured() {
  return (
    <section id="destacados" className="bg-bg-alt py-28 md:py-36">
      <div className="wrap">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Rituales destacados</p>
          <SplitReveal
            as="h2"
            className="font-display text-[9vw] leading-[0.95] md:text-[4vw]"
            text="Los favoritos que enamoran a primera aplicación."
          />
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {featured.map((p, i) => (
            <ScrollReveal
              key={p.slug}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[direction:rtl]' : ''}`}
            >
              {/* image on white plate */}
              <div className="group relative [direction:ltr]" data-cursor="hover">
                <div className="glow-brand absolute -inset-6 -z-10 blur-2xl opacity-50" />
                <div className="overflow-hidden rounded-[1.25rem] bg-white">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="mx-auto aspect-[4/3] w-full object-contain p-8 transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* copy */}
              <div className="[direction:ltr]">
                <span className="eyebrow" style={{ fontFamily: 'Space Mono, monospace' }}>{p.line}</span>
                <h3 className="mt-3 font-display text-3xl leading-tight md:text-[2.6rem]">{p.name}</h3>
                <p className="mt-4 max-w-md text-muted">{p.desc}</p>

                <ul className="mt-6 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-ink">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href={MALL_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-bg transition-colors hover:bg-brand-accent"
                >
                  Visitar Mall <span aria-hidden="true">↗</span>
                </MagneticButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
