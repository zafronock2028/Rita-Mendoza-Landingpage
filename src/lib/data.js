export const WHATSAPP = '15595744513'
export const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const products = [
  { slug: 'signature-riman-ritual', img: '/products/signature-riman-ritual.jpg', name: 'Signature RIMAN Ritual', line: 'RIMAN', note: 'Ritual insignia completo' },
  { slug: 'advanced-riman-ritual', img: '/products/advanced-riman-ritual.png', name: 'Advanced RIMAN Ritual', line: 'RIMAN', note: 'Corrección avanzada' },
  { slug: 'essential-riman-ritual', img: '/products/essential-riman-ritual.jpg', name: 'Essential RIMAN Ritual', line: 'RIMAN', note: 'Rutina esencial diaria' },
  { slug: 'icd-radiansome-100-cream', img: '/products/icd-radiansome-100-cream.png', name: 'ICD Radiansome 100 Cream', line: 'ICD', note: 'Luminosidad concentrada' },
  { slug: 'icd-radiansome-100-toner', img: '/products/icd-radiansome-100-toner.png', name: 'ICD Radiansome 100 Toner', line: 'ICD', note: 'Prepara y equilibra' },
  { slug: 'collagen-100-melting-mask', img: '/products/collagen-100-melting-mask.png', name: 'Collagen 100 Melting Mask', line: 'RIMAN', note: 'Colágeno que se funde' },
  { slug: 'beauty-collagen', img: '/products/beauty-collagen.png', name: 'Beauty Collagen', line: 'RIMAN', note: 'Belleza desde dentro' },
  { slug: 'essential-cleansing-powder-wash', img: '/products/essential-cleansing-powder-wash.png', name: 'Cleansing Powder Wash', line: 'RIMAN', note: 'Limpieza en polvo' },
  { slug: 'essential-balancing-gel-cleanser', img: '/products/essential-balancing-gel-cleanser.png', name: 'Balancing Gel Cleanser', line: 'RIMAN', note: 'Gel equilibrante' },
  { slug: 'icd-two-phase-oil-mist', img: '/products/icd-two-phase-oil-mist.png', name: 'ICD Two-Phase Oil Mist', line: 'ICD', note: 'Bruma bifásica' },
  { slug: 'icd-multi-stick-balm', img: '/products/icd-multi-stick-balm.png', name: 'ICD Multi-Stick Balm', line: 'ICD', note: 'Bálsamo multiusos' },
  { slug: 'deserticola-plus-hair-oil-serum', img: '/products/deserticola-plus-hair-oil-serum.png', name: 'Deserticola+ Hair Oil Serum', line: 'RIMAN', note: 'Sérum capilar' },
]

export const sponsors = [
  { img: '/sponsors/riman.png', name: 'RIMAN' },
  { img: '/sponsors/icd-skincare.png', name: 'ICD Skincare' },
  { img: '/sponsors/icd-makeup.png', name: 'ICD Makeup' },
  { img: '/sponsors/riman-distribuidor.png', name: 'Distribuidor Independiente' },
]

export const testimonios = Array.from({ length: 9 }, (_, i) => ({
  img: `/testimonios/Testimonio-${i + 1}.png`,
  id: i + 1,
}))

export const pillars = [
  { n: '01', k: 'Mentoría', t: 'Te enseño el sistema', d: 'No vendes sola. Recibes el método probado, formación en vivo y acompañamiento para arrancar tu negocio desde el día uno.' },
  { n: '02', k: 'Producto', t: 'Skincare que se vende solo', d: 'RIMAN e ICD: fórmulas coreanas de grado dermatológico. Resultados que la clienta ve y repite.' },
  { n: '03', k: 'Comunidad', t: 'Una red que te sostiene', d: 'Entras a un equipo de mujeres que se impulsan. Formación, retos, reconocimiento y comisiones reales.' },
]

export const steps = [
  { n: '01', t: 'Conversamos', d: 'Me cuentas tu momento y tu meta. Sin compromiso.' },
  { n: '02', t: 'Te formo', d: 'Accedes al sistema, catálogo y comunidad.' },
  { n: '03', t: 'Lanzas', d: 'Tu primer cliente en semanas, no en meses.' },
  { n: '04', t: 'Creces', d: 'Escalas ingresos y formas tu propio equipo.' },
]
