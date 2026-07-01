import ScrollReveal from '../effects/ScrollReveal'
import SplitReveal from '../effects/SplitReveal'
import { steps } from '../../lib/data'

export default function Ritual() {
  return (
    <section id="oportunidad" className="wrap py-28 md:py-36">
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <p className="eyebrow mb-6">La oportunidad</p>
          <SplitReveal
            as="h2"
            className="font-display text-[9vw] leading-[0.95] md:text-[4vw]"
            text="De curiosa a emprendedora en cuatro pasos."
          />
        </div>
        <p className="max-w-md text-muted md:justify-self-end md:text-right">
          Sin experiencia previa. Sin inventario imposible. Con un sistema y una mentora
          que ya recorrió el camino que quieres empezar.
        </p>
      </div>

      <ScrollReveal className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4" stagger>
        {steps.map((s) => (
          <div key={s.n} className="group bg-bg p-8 transition-colors duration-500 hover:bg-bg-alt">
            <div className="mono mb-10 text-4xl text-brand transition-transform duration-500 group-hover:-translate-y-1" style={{ fontFamily: 'Space Mono, monospace' }}>{s.n}</div>
            <h3 className="font-display text-2xl">{s.t}</h3>
            <p className="mt-3 text-sm text-muted">{s.d}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  )
}
