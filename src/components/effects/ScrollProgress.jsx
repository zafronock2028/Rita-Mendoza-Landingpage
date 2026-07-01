import { useEffect, useRef } from 'react'

// 1px page progress bar in brand color.
export default function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1)
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent" aria-hidden="true">
      <div ref={bar} className="h-full origin-left bg-brand" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
