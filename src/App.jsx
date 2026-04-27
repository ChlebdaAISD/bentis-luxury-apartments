import { useState } from 'react'
import { Loader } from './components/Loader.jsx'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { Ribbon } from './components/Ribbon.jsx'
import { Intro } from './components/sections/Intro.jsx'
import { Location } from './components/sections/Location.jsx'
import { Apartments } from './components/sections/Apartments.jsx'
import { Amenities } from './components/sections/Amenities.jsx'
import { Gallery } from './components/sections/Gallery.jsx'
import { Reviews } from './components/sections/Reviews.jsx'
import { AboutBuilding } from './components/sections/AboutBuilding.jsx'
import { Faq } from './components/sections/Faq.jsx'
import { CtaFinal } from './components/sections/CtaFinal.jsx'
import { Footer } from './components/Footer.jsx'
import { ReserveModal } from './components/ReserveModal.jsx'
import { Lightbox } from './components/Lightbox.jsx'
import { useReveal } from './lib/useReveal.js'

export default function App() {
  useReveal()
  const [reserveOpen, setReserveOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(null)

  const openReserve = () => setReserveOpen(true)
  const closeReserve = () => setReserveOpen(false)

  return (
    <>
      <Loader />
      <Nav onReserve={openReserve} />
      <main>
        <Hero onReserve={openReserve} />
        <Ribbon />
        <Intro />
        <Location />
        <Apartments />
        <Amenities />
        <Gallery openLightbox={(i) => setLbIndex(i)} />
        <Reviews />
        <AboutBuilding />
        <Faq />
        <CtaFinal onReserve={openReserve} />
      </main>
      <Footer />
      <ReserveModal open={reserveOpen} close={closeReserve} />
      <Lightbox index={lbIndex} setIndex={setLbIndex} close={() => setLbIndex(null)} />
    </>
  )
}
