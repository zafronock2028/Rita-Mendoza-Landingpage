import SplitReveal from '../effects/SplitReveal'
import ScrollReveal from '../effects/ScrollReveal'
import MagneticButton from '../effects/MagneticButton'
import { waLink, affiliatePerks } from '../../lib/data'

export default function Affiliate() {
  return (
    <section id="afiliados" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-20"
          autoPlay muted loop playsInline preload="none" poster="/images/rita-final.jpg"
        >
          <source src="/videos/reveal.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg" />
      </div>

      <div className="wrap">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
          <div>
            <p className="eyebrow mb-6">Programa de afiliados RIMAN</p>
            <SplitReveal
              as="h2"
              className="font-display text-[10vw] leading-[0.95] md:text-[4.2vw]"
              text="Sé parte del equipo de Rita Mendoza."
            />
            <p className="mt-7 max-w-md text-muted">
              No entras a una app. Entras a un acompañamiento real: Rita te asesora,
              te entrena y te da un plan claro cada semana para que factures.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton
                href={waLink('Hola Rita, quiero registrarme en el programa de afiliados RIMAN.')}
                target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-brand px-7 py-3.5 font-medium text-bg transition-colors hover:bg-brand-accent"
              >
                Registrarme
              </MagneticButton>
              <MagneticButton
                href={waLink('Hola Rita, quiero hablar directo contigo sobre el programa.')}
                target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-brand/50 px-7 py-3.5 font-medium text-ink transition-colors hover:bg-brand hover:text-bg"
              >
                Contacto directo con Rita
              </MagneticButton>
            </div>
          </div>

          <ScrollReveal className="flex flex-col gap-4" stagger>
            {affiliatePerks.map((p, i) => (
              <div key={p.t} className="group flex gap-5 rounded-2xl border border-line bg-bg-alt/70 p-6 backdrop-blur-sm transition-colors hover:border-brand/40">
                <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-xl">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-muted">{p.d}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
