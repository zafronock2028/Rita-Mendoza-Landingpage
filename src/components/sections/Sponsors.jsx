import Marquee from '../effects/Marquee'
import { sponsors } from '../../lib/data'

export default function Sponsors() {
  const items = [...sponsors, ...sponsors]
  return (
    <section className="border-y border-line py-10">
      <p className="eyebrow mb-7 text-center">Marcas oficiales que represento</p>
      <Marquee speed={38}>
        {items.map((s, i) => (
          <div key={i} className="mx-10 flex h-12 items-center opacity-70 transition-opacity hover:opacity-100">
            <img src={s.img} alt={s.name} className="h-full w-auto object-contain" loading="lazy" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
