import { Instagram, Facebook } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { Button } from '../ui/Button.jsx'
import { CONTACT } from '../../data/content.js'

function ContactBlock({ label, children, delay = 0 }) {
  return (
    <div className="rv" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-[11px] tracking-[0.3em] uppercase text-white/50">{label}</div>
      {children}
    </div>
  )
}

export function CtaFinal({ onReserve }) {
  return (
    <section id="kontakt" className="relative bg-bentis-black py-32 lg:py-48 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 50% 120%, #D4AF37, transparent 60%)' }}
      />
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="rv">
            <Eyebrow light className="justify-center inline-block">Zaproszenie</Eyebrow>
          </div>
          <h2 className="mt-10 h-display text-white text-6xl md:text-7xl lg:text-[120px] rv">
            Zapraszamy do <span className="italic text-bentis-gold">Bentis.</span>
          </h2>
          <p className="mt-8 text-white/70 body-prose text-lg rv">
            Zarezerwuj bezpośrednio i otrzymaj lepszą cenę oraz gwarancję najlepszego pokoju. Nasz zespół jest do Państwa dyspozycji.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5 rv">
            <Button onClick={onReserve} variant="primary">Zarezerwuj pobyt →</Button>
            <Button as="a" href={`mailto:${CONTACT.email}`} variant="outline">Skontaktuj się</Button>
          </div>
        </div>

        <div className="hl-gold w-40 mx-auto mt-24" />

        <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-16 text-center md:text-left">
          <ContactBlock label="Telefon">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="mt-3 block font-serif text-3xl text-white hover:text-bentis-gold transition-colors duration-300"
            >
              {CONTACT.phone}
            </a>
            <div className="mt-2 text-white/50 text-sm font-light">Recepcja 24/7</div>
          </ContactBlock>

          <ContactBlock label="E-mail" delay={100}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3 block font-serif text-2xl md:text-3xl text-white hover:text-bentis-gold transition-colors duration-300 break-all"
            >
              {CONTACT.email}
            </a>
            <div className="mt-2 text-white/50 text-sm font-light">Odpowiadamy w ciągu godziny</div>
          </ContactBlock>

          <ContactBlock label="Adres" delay={200}>
            <div className="mt-3 font-serif text-3xl text-white">{CONTACT.street}</div>
            <div className="text-white/50 text-sm font-light mt-2">{CONTACT.cityLine}</div>
            <div className="mt-4 flex md:justify-start justify-center gap-3 text-white/70">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-bentis-gold hover:text-bentis-gold transition-colors duration-300">
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-bentis-gold hover:text-bentis-gold transition-colors duration-300">
                <Facebook size={15} strokeWidth={1.5} />
              </a>
            </div>
          </ContactBlock>
        </div>
      </Container>
    </section>
  )
}
