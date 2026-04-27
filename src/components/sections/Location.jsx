import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { Icon } from '../ui/Icon.jsx'
import { POI, CONTACT } from '../../data/content.js'

function PoiRow({ name, dist, icon }) {
  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full border border-bentis-gold/50 flex items-center justify-center text-bentis-gold-dark">
          <Icon name={icon} size={15} />
        </div>
        <span className="text-bentis-graphite font-light">{name}</span>
      </div>
      <span className="font-serif text-bentis-gold-dark text-xl tracking-wider">{dist}</span>
    </li>
  )
}

export function Location() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed&z=15`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`

  return (
    <section id="lokalizacja" className="py-28 lg:py-36 bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 rv">
            <Eyebrow>Lokalizacja</Eyebrow>
            <h2 className="mt-8 h-section text-5xl md:text-6xl text-bentis-graphite">
              <span className="text-bentis-gold-dark">500 m</span> od Rynku. <br />
              <span className="italic text-bentis-graphite/90">10 minut</span> do Wawelu.
            </h2>
            <p className="mt-8 text-bentis-graphite/70 body-prose max-w-md">
              Adres, który trudno przecenić. Z Bentis wychodzą Państwo prosto na Planty, a do najważniejszych miejsc Krakowa docierają pieszo w ciągu kilku minut.
            </p>

            <ul className="mt-12 divide-y divide-bentis-graphite/10">
              {POI.map((p) => (
                <PoiRow key={p.name} name={p.name} dist={p.dist} icon={p.icon} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 rv" style={{ transitionDelay: '120ms' }}>
            <div className="relative aspect-[4/5] lg:aspect-[4/4.8] overflow-hidden border border-bentis-gold/20">
              <iframe
                title="Mapa — Bentis Luxury Apartments, Kraków"
                src={mapsSrc}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.24em] uppercase text-bentis-graphite/60">
              <span>{CONTACT.street}, Kraków</span>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bentis-gold-dark border-b border-bentis-gold-dark pb-0.5 hover:text-bentis-graphite"
              >
                Otwórz w mapach →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
