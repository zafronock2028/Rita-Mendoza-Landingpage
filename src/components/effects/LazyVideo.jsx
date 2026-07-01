import { useEffect, useRef, useState } from 'react'

// Defers loading a (possibly heavy) background video until it nears the viewport.
// Falls back to the poster image on reduced-motion / until in view.
export default function LazyVideo({ src, poster, className = '', rootMargin = '300px' }) {
  const ref = useRef(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setLoad(true); io.disconnect() }
      },
      { rootMargin }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay muted loop playsInline preload="none"
      poster={poster}
      aria-hidden="true"
    >
      {load && <source src={src} type="video/mp4" />}
    </video>
  )
}
