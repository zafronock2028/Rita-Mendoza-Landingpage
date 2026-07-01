import { waLink } from '../../lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line py-16">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <img src="/images/logo-white.png" alt="Rita Mendoza Glow" className="h-16 w-auto" />
            <p className="mt-5 max-w-xs text-sm text-muted">
              Marca personal de Rita Mendoza · Distribuidora independiente RIMAN &amp; ICD Skincare.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <a href="#sobre" data-cursor="hover" className="text-muted transition-colors hover:text-ink">Sobre Rita</a>
            <a href="#productos" data-cursor="hover" className="text-muted transition-colors hover:text-ink">Productos</a>
            <a href="#oportunidad" data-cursor="hover" className="text-muted transition-colors hover:text-ink">Oportunidad</a>
            <a href="#testimonios" data-cursor="hover" className="text-muted transition-colors hover:text-ink">Testimonios</a>
          </nav>

          <a
            href={waLink('Hola Rita, quiero más información.')}
            target="_blank" rel="noopener noreferrer"
            data-cursor="hover"
            className="group text-lg"
          >
            <span className="eyebrow mb-2 block">Contacto directo</span>
            <span className="font-display text-2xl text-ink">
              WhatsApp <span className="text-brand transition-transform group-hover:inline-block group-hover:translate-x-1">↗</span>
            </span>
          </a>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <span>© {year} Rita Mendoza Glow. Todos los derechos reservados.</span>
          <span style={{ fontFamily: 'Space Mono, monospace' }}>Empowering Entrepreneurs.</span>
        </div>
      </div>
    </footer>
  )
}
