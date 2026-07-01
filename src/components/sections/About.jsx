import SplitReveal from '../effects/SplitReveal'
import ScrollReveal from '../effects/ScrollReveal'

const stats = [
  { n: '+10', k: 'años en la industria de la belleza' },
  { n: '2', k: 'marcas premium: RIMAN & ICD' },
  { n: '100%', k: 'acompañamiento a tu equipo' },
]

export default function About() {
  return (
    <section id="sobre" className="wrap py-28 md:py-36">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div className="relative">
          <div className="glow-brand absolute -inset-6 -z-10 blur-2xl opacity-60" />
          <video
            className="w-full rounded-[1.25rem] object-cover"
            autoPlay muted loop playsInline preload="none" poster="/images/rita.jpg"
          >
            <source src="/videos/reveal.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-6">Sobre Rita Mendoza</p>
          <SplitReveal
            as="h2"
            className="font-display text-[10vw] leading-[0.95] md:text-[4.2vw]"
            text="No vendo cremas. Construyo mujeres que emprenden."
          />
          <ScrollReveal className="mt-8 max-w-lg space-y-4 text-muted" stagger>
            <p>
              Rita descubrió que la belleza bien acompañada cambia vidas — la de la clienta
              y la de quien la comparte. Hoy lidera una comunidad de emprendedoras con las
              fórmulas coreanas de <span className="text-ink">RIMAN &amp; ICD</span>.
            </p>
            <p>
              <span className="text-ink">Rita Mendoza Glow</span> es su marca personal: el
              puente entre un producto que funciona y un negocio que te da libertad.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8" stagger>
            {stats.map((s) => (
              <div key={s.k}>
                <div className="font-display text-4xl text-gradient md:text-5xl">{s.n}</div>
                <div className="mt-2 text-xs leading-snug text-muted">{s.k}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
