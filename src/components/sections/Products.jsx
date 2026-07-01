import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '../effects/MagneticButton'
import { carousel, MALL_URL } from '../../lib/data'
import { prefersReducedMotion } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PRODUCT_BG = '/videos/products-carousel-bg.mp4'

// Card with its own video background. Loads + plays only while near the
// viewport (IntersectionObserver) to avoid decoding every video at once.
function ProductCard({ p }) {
  const card = useRef(null)
  const vid = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = vid.current
    const io = new IntersectionObserver(
      ([e]) => {
        if (!el) return
        if (e.isIntersecting) {
          if (!el.querySelector('source')) {
            const s = document.createElement('source')
            s.src = PRODUCT_BG; s.type = 'video/mp4'
            el.appendChild(s); el.load()
          }
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { root: null, rootMargin: '200px', threshold: 0.05 }
    )
    if (card.current) io.observe(card.current)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={card}
      className="group relative flex w-[74vw] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-line bg-bg-alt sm:w-[46vw] md:w-[23rem]"
    >
      {/* per-card video background */}
      <div className="absolute inset-0 -z-0">
        <video ref={vid} className="h-full w-full object-cover opacity-40" muted loop playsInline preload="none" poster="/images/rita-final.jpg" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/55" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-contain p-6 drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 text-[0.6rem] tracking-widest text-brand-accent" style={{ fontFamily: 'Space Mono, monospace' }}>{p.line}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-xl leading-tight">{p.name}</h3>
          <p className="mt-1 text-sm text-muted">{p.note}</p>
          <a
            href={MALL_URL}
            target="_blank" rel="noopener noreferrer"
            data-cursor="hover"
            className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-brand/60 bg-bg/40 px-4 py-2 text-sm text-ink backdrop-blur-sm transition-colors hover:bg-brand hover:text-bg"
          >
            Visitar Mall <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}

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
      <div className="wrap relative mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
        <div>
          <p className="eyebrow mb-5">El catálogo</p>
          <h2 className="font-display text-[9vw] leading-[0.95] md:text-[4vw]">
            Skincare que <span className="text-gradient italic">se vende solo.</span>
          </h2>
        </div>
        <MagneticButton
          href={MALL_URL}
          target="_blank" rel="noopener noreferrer"
          className="rounded-full border border-brand/50 px-6 py-3 font-medium text-ink transition-colors hover:bg-brand hover:text-bg"
        >
          Visitar Mall ↗
        </MagneticButton>
      </div>

      <div
        ref={track}
        className="relative flex snap-x gap-6 overflow-x-auto px-5 pb-4 md:w-max md:overflow-visible md:px-[max(1.25rem,calc((100vw-1400px)/2))]"
      >
        {carousel.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  )
}
