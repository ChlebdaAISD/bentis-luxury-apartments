import { MapPin, Car, ShieldCheck } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { Container } from '../ui/Container.jsx'
import { SplitText } from '../SplitText.jsx'

export function Hero({ onReserve }) {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] overflow-hidden bg-bentis-black">
      <div className="absolute inset-0 ken-burns">
        <img
          src="/photos/facade.png"
          alt="Zabytkowa kamienica Bentis Apartamenty w Krakowie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.55) 12%, rgba(10,10,10,0.25) 35%, rgba(10,10,10,0.35) 60%, rgba(10,10,10,0.88) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(212,175,55,0.08), transparent 55%)'
        }} />
      </div>
      <div className="absolute inset-0 hero-overlay" />

      <Container className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-end pb-20 lg:pb-32">
          <div className="max-w-5xl">
            <h1 className="h-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[112px]">
              <span className="block"><SplitText text="Luksus w sercu" /></span>
              <span className="block italic text-bentis-gold"><SplitText text="Krakowa." delayStart={600} /></span>
            </h1>
            <p className="mt-6 sm:mt-10 text-white/75 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              <span className="sm:hidden">500 m od Rynku Głównego · 8 unikalnych apartamentów.</span>
              <span className="hidden sm:inline">Zabytkowa kamienica · 500 m od Rynku Głównego · 8 unikalnych apartamentów zaprojektowanych dla podróżujących, którzy cenią detale.</span>
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Button onClick={onReserve} variant="primary" className="hidden sm:inline-flex">
                Zarezerwuj pobyt <span className="text-base">→</span>
              </Button>
              <a
                href="#apartamenty"
                className="text-white/90 text-[12px] tracking-[0.24em] uppercase border-b border-bentis-gold pb-1 hover:text-bentis-gold transition-colors duration-300"
              >
                Zobacz apartamenty
              </a>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid pb-8 border-t border-white/10 pt-6 grid-cols-2 md:grid-cols-4 gap-6 text-white/80 text-[11px] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-bentis-gold font-serif text-2xl leading-none">9.9</span>
            <span>Ocena Booking</span>
          </div>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-bentis-gold" /><span>Rynek 500 m</span></div>
          <div className="flex items-center gap-3"><Car size={16} className="text-bentis-gold" /><span>Parking prywatny</span></div>
          <div className="flex items-center gap-3"><ShieldCheck size={16} className="text-bentis-gold" /><span>Ochrona 24/7</span></div>
        </div>
      </Container>
    </section>
  )
}
