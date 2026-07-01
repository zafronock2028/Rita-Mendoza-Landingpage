import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitReveal from '../effects/SplitReveal'
import { testimonios } from '../../lib/data'
import { prefersReducedMotion } from '../../lib/motion'

// Horizontal auto-scrolling ribbon of real testimonial screenshots.
// Pauses on hover; loops seamlessly.
export default function Testimonios() {
  const track = useRef(null)
  const tween = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const half = track.current.scrollWidth / 2
    tween.current = gsap.to(track.current, {
      x: -half,
      duration: 46,
      ease: 'none',
      repeat: -1,
    })
  }, { scope: track })

  const pause = () => tween.current && tween.current.pause()
  const play = () => tween.current && tween.current.play()
  const items = [...testimonios, ...testimonios]

  return (
    <section id="testimonios" className="overflow-hidden py-28 md:py-36">
      <div className="wrap mb-14">
        <p className="eyebrow mb-6">Voces reales</p>
        <SplitReveal
          as="h2"
          className="font-display text-[9vw] leading-[0.95] md:text-[4vw]"
          text="La comunidad ya está brillando."
        />
      </div>

      <div className="relative" onMouseEnter={pause} onMouseLeave={play}>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div ref={track} className="flex w-max gap-5 px-5">
          {items.map((t, i) => (
            <figure
              key={i}
              data-cursor="hover"
              className="w-[68vw] shrink-0 overflow-hidden rounded-xl border border-line bg-bg-alt sm:w-[42vw] md:w-[22rem]"
            >
              <img
                src={t.img}
                alt={`Testimonio ${t.id} de la comunidad Rita Mendoza Glow`}
                loading="lazy"
                className="w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
