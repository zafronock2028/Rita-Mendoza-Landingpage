import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { products, waLink } from '../../lib/data'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Products() {
  const root = useRef(null)
  const track = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion() || window.innerWidth < 768) return
    const scrollLen = () => track.current.scrollWidth - window.innerWidth + 120
    gsap.to(track.current, {
      x: () => -scrollLen(),
      ease: 'none',
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: () => '+=' + scrollLen(),
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    })
  }, { scope: root })

  return (
    <section id="productos" ref={root} className="relative overflow-hidden py-20 md:py-0 md:min-h-[100svh] md:flex md:flex-col md:justify-center">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        autoPlay muted loop playsInline preload="none"
      >
        <source src="/videos/reveal.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-bg/70" />

      <div className="wrap relative mb-10 md:mb-14">
        <p className="eyebrow mb-5">El catálogo</p>
        <h2 className="font-display text-[9vw] leading-[0.95] md:text-[4vw]">
          Skincare que <span className="text-gradient italic">se vende solo.</span>
        </h2>
      </div>

      <div
        ref={track}
        className="relative flex snap-x gap-6 overflow-x-auto px-5 pb-4 md:w-max md:overflow-visible md:px-[max(1.25rem,calc((100vw-1400px)/2))]"
      >
        {products.map((p) => (
          <a
            key={p.slug}
            href={waLink(`Hola Rita, me interesa el producto ${p.name}. ¿Me das info?`)}
            target="_blank" rel="noopener noreferrer"
            data-cursor="hover"
            className="group relative w-[74vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-line bg-bg-alt sm:w-[46vw] md:w-[24rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.03]">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-contain p-6 grayscale-[35%] transition-all duration-700 ease-editorial group-hover:scale-[1.05] group-hover:grayscale-0"
              />
              <span className="mono absolute left-4 top-4 text-[0.6rem] tracking-widest text-brand" style={{ fontFamily: 'Space Mono, monospace' }}>{p.line}</span>
            </div>
            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.note}</p>
              </div>
              <span className="shrink-0 translate-x-2 text-brand opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
