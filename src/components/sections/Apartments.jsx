import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { APTS, PHOTOS } from '../../data/content.js'

function ApartmentCard({ apt, delay }) {
  const photo = PHOTOS[(apt.n + 1) % PHOTOS.length]
  return (
    <a href="#" className="card group rv block" style={{ transitionDelay: `${delay}ms` }}>
      <div className="overflow-hidden aspect-[4/5] relative">
        <img src={photo} alt={`${apt.name} — apartament ${apt.n}`} className="card-img w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 font-serif text-xs tracking-wider text-bentis-graphite">
          Nr {String(apt.n).padStart(2, '0')}
        </div>
      </div>
      <div className="pt-5">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-2xl text-bentis-graphite">{apt.name}</h3>
          <div className="text-[10px] tracking-[0.24em] uppercase text-bentis-graphite/60">{apt.m} m² · {apt.g} os.</div>
        </div>
        <div className="mt-3 flex items-end justify-between border-t border-bentis-graphite/10 pt-3">
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-bentis-graphite/50">od</div>
            <div className="font-serif text-bentis-gold-dark text-2xl leading-none mt-1">
              {apt.p} zł<span className="text-sm text-bentis-graphite/50 ml-1">/ noc</span>
            </div>
          </div>
          <span className="card-arrow text-[11px] tracking-[0.24em] uppercase text-bentis-graphite/80 group-hover:text-bentis-gold-dark transition-colors duration-300">
            Zobacz →
          </span>
        </div>
      </div>
    </a>
  )
}

export function Apartments() {
  return (
    <section id="apartamenty" className="py-28 lg:py-36 bg-bentis-cream">
      <Container>
        <div className="rv mb-16">
          <Eyebrow>Apartamenty</Eyebrow>
          <h2 className="mt-8 h-section text-5xl md:text-6xl">
            Osiem pokoi. <span className="italic text-bentis-gold-dark">Osiem historii.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {APTS.map((a, i) => (
            <ApartmentCard key={a.n} apt={a} delay={(i % 4) * 80} />
          ))}
        </div>
      </Container>
    </section>
  )
}
