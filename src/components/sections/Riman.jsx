import SplitReveal from '../effects/SplitReveal'
import ScrollReveal from '../effects/ScrollReveal'
import Marquee from '../effects/Marquee'

const facts = [
  { n: 'K-Beauty', k: 'Ciencia coreana de vanguardia' },
  { n: 'Derma', k: 'Grado dermatológico ICD' },
  { n: 'Global', k: 'Una marca que crece en el mundo' },
]

export default function Riman() {
  return (
    <section id="riman" className="relative overflow-hidden py-28 md:py-36">
      {/* b-roll background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-25"
          autoPlay muted loop playsInline preload="none" poster="/images/rita-final.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg" />
      </div>

      <div className="wrap">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <p className="eyebrow mb-6">La marca detrás del glow</p>
            <SplitReveal
              as="h2"
              className="font-display text-[11vw] leading-[0.95] md:text-[4.4vw]"
              text="RIMAN. Belleza coreana con respaldo dermatológico."
            />
            <ScrollReveal className="mt-8 max-w-lg space-y-4 text-muted" stagger>
              <p>
                <span className="text-ink">RIMAN</span> nace de la unión de la ciencia coreana
                y la dermatología clínica <span className="text-ink">ICD</span>. Fórmulas que no
                prometen: demuestran.
              </p>
              <p>
                Rita eligió RIMAN porque vende algo que funciona — y porque su modelo de negocio
                le permite construir libertad para ella y para su comunidad.
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8" stagger>
              {facts.map((f) => (
                <div key={f.k}>
                  <div className="font-display text-2xl text-gradient md:text-3xl">{f.n}</div>
                  <div className="mt-2 text-xs leading-snug text-muted">{f.k}</div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* brand plate with company photo */}
          <ScrollReveal className="relative" data-cursor="hover">
            <div className="glow-brand absolute -inset-8 -z-10 blur-3xl opacity-70" />
            <div className="overflow-hidden rounded-[1.5rem] border border-line bg-bg-alt/70 backdrop-blur-sm">
              <div className="relative">
                <img
                  src="/images/empresa-riman.png"
                  alt="RIMAN, la empresa detrás de las fórmulas"
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col items-center gap-6 p-8">
                <img src="/images/riman-logo.png" alt="RIMAN" className="h-12 w-auto object-contain md:h-14" />
                <div className="h-px w-24 bg-line" />
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
                  <img src="/sponsors/icd-skincare.png" alt="ICD Skincare" className="h-8 w-auto object-contain" />
                  <img src="/sponsors/icd-makeup.png" alt="ICD Makeup" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
