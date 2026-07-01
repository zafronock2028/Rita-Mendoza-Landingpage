# Rita Mendoza Glow — Landing

Landing one-page premium para la marca personal de **Rita Mendoza**, distribuidora
independiente de **RIMAN & ICD Skincare**. Dirección visual: inmersiva/cinematográfica,
paleta rose-gold derivada del logo sobre fondo oscuro.

## Stack
- React 18 + Vite
- Tailwind CSS v3 (tokens de paleta en `src/styles/index.css`)
- GSAP + ScrollTrigger + `@gsap/react`
- Lenis (smooth scroll)
- Fuentes self-host: Fraunces (display), Hanken Grotesk (texto), Space Mono (metadata)

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # genera /dist
npm run preview
```

## Deploy en Vercel
Repo listo para importar en Vercel (framework autodetectado: Vite).
- Build command: `npm run build`
- Output: `dist`
- SPA rewrites en `vercel.json`

## Estructura
```
src/
  components/
    effects/    CursorFollower, MagneticButton, SplitReveal, ScrollReveal,
                Marquee, Preloader, GlowField, ScrollProgress
    sections/   Nav, Hero, Sponsors, About, Pillars, Products, Ritual,
                Testimonios, CTA, Footer
  lib/          data.js, motion.js, useLenis.js
  styles/       index.css (tokens + base)
public/
  images/ products/ sponsors/ testimonios/ videos/
```

## Accesibilidad / rendimiento
- `prefers-reduced-motion` respetado en todo efecto (cursor, split, parallax, glow).
- Cursor custom desactivado en touch.
- Videos ligeros con `poster` y `preload` controlado.

## Contacto / CTA
Todos los CTA enlazan a WhatsApp (`src/lib/data.js` → `WHATSAPP`).
Para cambiar el número, edita esa constante.
