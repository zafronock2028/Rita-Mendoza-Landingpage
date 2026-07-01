import { useEffect, useState } from 'react'
import MagneticButton from '../effects/MagneticButton'
import { waLink } from '../../lib/data'

const links = [
  { href: '#sobre', label: 'Sobre Rita' },
  { href: '#riman', label: 'RIMAN' },
  { href: '#productos', label: 'Productos' },
  { href: '#afiliados', label: 'Afiliados' },
  { href: '#testimonios', label: 'Testimonios' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        solid ? 'backdrop-blur-md bg-bg/70 border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between py-4">
        <a href="#top" aria-label="Rita Mendoza Glow — inicio" className="flex items-center gap-3">
          <img src="/images/logo-white.png" alt="Rita Mendoza Glow" className="h-10 w-auto md:h-12" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} data-cursor="hover" className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          href={waLink('Hola Rita, quiero conocer la oportunidad de negocio con RIMAN.')}
          target="_blank" rel="noopener noreferrer"
          className="rounded-full border border-brand/50 px-5 py-2 text-sm text-ink transition-colors hover:bg-brand hover:text-bg"
        >
          Hablar con Rita
        </MagneticButton>
      </nav>
    </header>
  )
}
