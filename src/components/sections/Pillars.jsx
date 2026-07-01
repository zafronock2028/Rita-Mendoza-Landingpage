import ScrollReveal from '../effects/ScrollReveal'
import SplitReveal from '../effects/SplitReveal'
import { pillars } from '../../lib/data'

export default function Pillars() {
  return (
    <section className="bg-bg-alt py-28 md:py-36">
      <div className="wrap">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Por qué funciona</p>
          <SplitReveal
            as="h2"
            className="font-display text-[9vw] leading-[0.95] md:text-[4vw]"
            text="Tres pilares. Un solo camino a tu libertad."
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {pillars.map((p) => (
            <ScrollReveal
              key={p.n}
              className="group relative bg-bg-alt p-8 transition-colors duration-500 hover:bg-bg md:p-10"
            >
              <div className="mono mb-8 text-brand" style={{ fontFamily: 'Space Mono, monospace' }}>{p.n}</div>
              <p className="eyebrow mb-3">{p.k}</p>
              <h3 className="font-display text-3xl leading-tight md:text-[2rem]">{p.t}</h3>
              <p className="mt-4 text-muted">{p.d}</p>
              <div className="mt-8 h-px w-0 bg-brand transition-all duration-500 ease-editorial group-hover:w-full" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
