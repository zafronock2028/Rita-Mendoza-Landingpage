import { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLenis } from './lib/useLenis'

import Preloader from './components/effects/Preloader'
import CursorFollower from './components/effects/CursorFollower'
import ScrollProgress from './components/effects/ScrollProgress'

import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Sponsors from './components/sections/Sponsors'
import About from './components/sections/About'
import Pillars from './components/sections/Pillars'
import Products from './components/sections/Products'
import Ritual from './components/sections/Ritual'
import Testimonios from './components/sections/Testimonios'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  const [ready, setReady] = useState(false)
  useLenis()

  return (
    <>
      <Preloader onDone={() => { setReady(true); ScrollTrigger.refresh() }} />
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Pillars />
        <Products />
        <Ritual />
        <Testimonios />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
