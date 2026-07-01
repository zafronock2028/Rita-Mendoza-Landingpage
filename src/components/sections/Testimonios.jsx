import SplitReveal from '../effects/SplitReveal'
import { testimonios } from '../../lib/data'

// Masonry-ish columns of real testimonial screenshots.
export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-bg-alt py-28 md:py-36">
      <div className="wrap">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Voces reales</p>
          <SplitReveal
            as="h2"
            className="font-display text-[9vw] leading-[0.95] md:text-[4vw]"
            text="La comunidad ya está brillando."
          />
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonios.map((t) => (
            <figure
              key={t.id}
              data-cursor="hover"
              className="group overflow-hidden rounded-xl border border-line bg-bg transition-transform duration-500 ease-editorial hover:-translate-y-1"
            >
              <img
                src={t.img}
                alt={`Testimonio ${t.id} de la comunidad Rita Mendoza Glow`}
                loading="lazy"
                className="w-full opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
