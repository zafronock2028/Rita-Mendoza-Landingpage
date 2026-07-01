import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLenis } from './lib/useLenis'

import Preloader from './components/effects/Preloader'
import CursorFollower from './components/effects/CursorFollower'
import ScrollProgress from './components/effects/ScrollProgress'

import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Riman from './components/sections/Riman'
import Featured from './components/sections/Featured'
import FeaturedVideo from './components/sections/FeaturedVideo'
import Products from './components/sections/Products'
import Pillars from './components/sections/Pillars'
import Ritual from './components/sections/Ritual'
import Affiliate from './components/sections/Affiliate'
import Testimonios from './components/sections/Testimonios'
import CTA from './components/sections/CTA'
import Sponsors from './components/sections/Sponsors'
import Footer from './components/sections/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  useLenis()

  return (
    <>
      <Preloader onDone={() => ScrollTrigger.refresh()} />
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Riman />
        <Featured />
        <FeaturedVideo />
        <Products />
        <Pillars />
        <Ritual />
        <Affiliate />
        <Testimonios />
        <CTA />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
