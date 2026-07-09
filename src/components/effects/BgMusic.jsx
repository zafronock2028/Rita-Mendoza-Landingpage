import { useEffect, useRef, useState } from 'react'

// Background music. Browsers block autoplay WITH sound until a user gesture,
// so we try to autoplay immediately and, if blocked, start on the first
// interaction (pointer / key / scroll / touch). A floating button lets the
// user mute/unmute at any time.
const SRC = '/audio/bg-music.mp3'
const VOLUME = 0.32

export default function BgMusic() {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = new Audio(SRC)
    el.loop = true
    el.volume = VOLUME
    el.preload = 'auto'
    audio.current = el

    let started = false
    const start = () => {
      if (started) return
      el.play().then(() => {
        started = true
        setPlaying(true)
        remove()
      }).catch(() => {
        // still blocked — keep waiting for a real gesture
      })
    }
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'wheel']
    const onGesture = () => start()
    const remove = () => events.forEach((e) => window.removeEventListener(e, onGesture))

    // attempt immediate autoplay (works if the site already has engagement)
    start()
    events.forEach((e) => window.addEventListener(e, onGesture, { passive: true, once: false }))

    return () => {
      remove()
      el.pause()
      audio.current = null
    }
  }, [])

  const toggle = () => {
    const el = audio.current
    if (!el) return
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  return (
    <button
      onClick={toggle}
      data-cursor="hover"
      aria-label={playing ? 'Silenciar música' : 'Reproducir música'}
      className="fixed bottom-5 left-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg/70 text-ink backdrop-blur-md transition-colors hover:border-brand/60"
    >
      {/* equalizer bars animate while playing */}
      <span className={`eq ${playing ? 'is-playing' : ''}`} aria-hidden="true">
        <i /><i /><i />
      </span>
    </button>
  )
}
