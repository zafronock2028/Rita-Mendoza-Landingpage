export const WHATSAPP = '15595744513'
export const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// [validar] URL del mall RIMAN de Rita. Reemplazar por su enlace real de tienda.
export const MALL_URL = 'https://www.riman.com'

// Productos fondo blanco -> seccion destacada con descripcion + beneficios.
export const featured = [
  {
    slug: 'signature-riman-ritual',
    img: '/products/signature-riman-ritual.jpg',
    line: 'RIMAN',
    name: 'Signature RIMAN Ritual',
    desc: 'El ritual insignia. Una rutina completa de día y noche que transforma la piel con la ciencia coreana más avanzada.',
    benefits: ['Rutina completa AM/PM', 'Resultados visibles en semanas', 'Fórmula coreana premium'],
  },
  {
    slug: 'advanced-riman-ritual',
    img: '/products/advanced-riman-ritual.png',
    line: 'RIMAN',
    name: 'Advanced RIMAN Ritual',
    desc: 'Corrección avanzada para pieles que buscan más. Concentrados de alto rendimiento contra los signos del tiempo.',
    benefits: ['Antiedad intensivo', 'Firmeza y luminosidad', 'Activos concentrados'],
  },
  {
    slug: 'essential-riman-ritual',
    img: '/products/essential-riman-ritual.jpg',
    line: 'RIMAN',
    name: 'Essential RIMAN Ritual',
    desc: 'Tu punto de partida. La rutina esencial que limpia, hidrata y equilibra tu piel cada día.',
    benefits: ['Ideal para empezar', 'Limpieza + hidratación', 'Piel equilibrada a diario'],
  },
  {
    slug: 'icd-cleansing-experience-kit',
    img: '/products/icd-cleansing-experience-kit.png',
    line: 'ICD',
    name: 'ICD Cleansing Experience Kit',
    desc: 'La experiencia de la doble limpieza coreana en un solo kit. Poros limpios, piel que respira.',
    benefits: ['Doble limpieza coreana', 'Poros visiblemente limpios', 'Textura suave al instante'],
  },
  {
    slug: 'essential-cleansing-powder-wash',
    img: '/products/essential-cleansing-powder-wash.png',
    line: 'RIMAN',
    name: 'Essential Cleansing Powder Wash',
    desc: 'Limpiador enzimático en polvo que exfolia con delicadeza y revela una piel fresca y luminosa.',
    benefits: ['Enzimático suave', 'Exfolia sin agredir', 'Luminosidad inmediata'],
  },
  {
    slug: 'essential-balancing-gel-cleanser',
    img: '/products/essential-balancing-gel-cleanser.png',
    line: 'RIMAN',
    name: 'Essential Balancing Gel Cleanser',
    desc: 'Gel equilibrante de uso diario que controla la grasa y respeta el pH natural de tu piel.',
    benefits: ['Controla la grasa', 'pH balanceado', 'Uso diario'],
  },
]

// Productos con fondo transparente -> carrusel con video de fondo.
export const carousel = [
  { slug: 'icd-radiansome-100-cream', img: '/products/icd-radiansome-100-cream.png', line: 'ICD', name: 'Radiansome 100 Cream', note: 'Luminosidad concentrada' },
  { slug: 'icd-radiansome-100-toner', img: '/products/icd-radiansome-100-toner.png', line: 'ICD', name: 'Radiansome 100 Toner', note: 'Prepara y equilibra' },
  { slug: 'collagen-100-melting-mask', img: '/products/collagen-100-melting-mask.png', line: 'RIMAN', name: 'Collagen 100 Melting Mask', note: 'Colágeno que se funde' },
  { slug: 'beauty-collagen', img: '/products/beauty-collagen.png', line: 'RIMAN', name: 'Beauty Collagen', note: 'Belleza desde dentro' },
  { slug: 'deep-talk-plus', img: '/products/deep-talk-plus.png', line: 'RIMAN', name: 'Deep Talk Plus', note: 'Hidratación profunda' },
  { slug: 'icd-dermatology-cream', img: '/products/icd-dermatology-cream.png', line: 'ICD', name: 'Dermatology Cream', note: 'Calma y repara' },
  { slug: 'icd-dermatology-first-package', img: '/products/icd-dermatology-first-package.png', line: 'ICD', name: 'Dermatology First Package', note: 'Kit dermatológico' },
  { slug: 'icd-multi-stick-balm', img: '/products/icd-multi-stick-balm.png', line: 'ICD', name: 'Multi-Stick Balm', note: 'Bálsamo multiusos' },
  { slug: 'icd-two-phase-oil-mist', img: '/products/icd-two-phase-oil-mist.png', line: 'ICD', name: 'Two-Phase Oil Mist', note: 'Bruma bifásica' },
  { slug: 'deserticola-plus-hair-oil-serum', img: '/products/deserticola-plus-hair-oil-serum.png', line: 'RIMAN', name: 'Deserticola+ Hair Oil Serum', note: 'Sérum capilar' },
  { slug: 'deserticola-plus-conditioner', img: '/products/deserticola-plus-conditioner.png', line: 'RIMAN', name: 'Deserticola+ Conditioner', note: 'Acondicionador nutritivo' },
]

export const sponsors = [
  { img: '/sponsors/riman.png', name: 'RIMAN' },
  { img: '/sponsors/icd-skincare.png', name: 'ICD Skincare' },
  { img: '/sponsors/icd-makeup.png', name: 'ICD Makeup' },
  { img: '/sponsors/riman-distribuidor.png', name: 'Distribuidor Independiente' },
]

export const testimonios = [
  { id: 1, name: 'Carla M.', meta: '30 días · Radiansome 100', quote: 'Gracias a Rita llevo 30 días con el Radiansome y mi piel nunca se vio tan luminosa. Ya no uso base.' },
  { id: 2, name: 'David R.', meta: '45 días · Rutina ICD', quote: 'Nunca me cuidé la piel. Rita me armó una rutina simple y en mes y medio se me nota menos cansado.' },
  { id: 3, name: 'Lucía F.', meta: '60 días · Collagen 100', quote: 'La mascarilla de colágeno es adictiva. A los dos meses mis amigas me preguntan qué me hice.' },
  { id: 4, name: 'Andrea P.', meta: '3 meses · Signature Ritual', quote: 'Empecé como clienta y terminé emprendiendo con Rita. El ritual me cambió la piel y el bolsillo.' },
  { id: 5, name: 'Sofía G.', meta: '30 días · Powder Wash', quote: 'El limpiador en polvo dejó mi piel sin ese brillo graso. En un mes cambió mi textura por completo.' },
  { id: 6, name: 'Marisol T.', meta: '90 días · Beauty Collagen', quote: 'Tomo el Beauty Collagen desde hace 3 meses. Uñas más fuertes, pelo con brillo y piel firme.' },
  { id: 7, name: 'Paola V.', meta: '40 días · Dermatology Cream', quote: 'Tenía la piel reactiva. La crema dermatológica ICD me calmó los rojos que arrastraba hace años.' },
  { id: 8, name: 'Jenny C.', meta: '2 meses · Mentoría Rita', quote: 'No solo vendo producto: Rita me enseñó a hacerlo. Mi primer mes ya generé ingresos reales.' },
  { id: 9, name: 'Rosa A.', meta: '30 días · Two-Phase Oil', quote: 'El aceite bifásico es mi ritual de noche. Amanezco con la piel jugosa. Cero arrepentimiento.' },
].map((t) => ({ ...t, img: `/testimonios/Testimonio-${t.id}.png` }))

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

export const affiliatePerks = [
  { t: 'Asesoría directa con Rita', d: 'Hablas con Rita, no con un bot. Estrategia uno a uno para tu negocio.' },
  { t: 'Entrenamiento personalizado', d: 'Formación adaptada a tu ritmo: producto, ventas y marca personal.' },
  { t: 'Plan de acción semanal', d: 'Cada semana sabes exactamente qué hacer para avanzar y facturar.' },
]
