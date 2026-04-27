import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { Icon } from '../ui/Icon.jsx'
import { AMENITIES } from '../../data/content.js'

function AmenityCard({ icon, label, delay }) {
  return (
    <div className="flex flex-col items-center gap-4 rv" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-16 h-16 rounded-full border border-bentis-gold/60 flex items-center justify-center text-bentis-gold-dark">
        <Icon name={icon} size={22} strokeWidth={1.1} />
      </div>
      <div className="font-serif text-lg text-bentis-graphite">{label}</div>
    </div>
  )
}

export function Amenities() {
  return (
    <section className="py-28 lg:py-36 bg-bentis-beige/40">
      <Container className="text-center">
        <div className="rv">
          <Eyebrow className="justify-center inline-block">Udogodnienia</Eyebrow>
          <h2 className="mt-8 h-section text-5xl md:text-6xl max-w-3xl mx-auto">
            Wszystko czego potrzeba. <br /><span className="italic text-bentis-gold-dark">Nic zbędnego.</span>
          </h2>
        </div>
        <div className="hl-gold w-32 mx-auto mt-12 mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12">
          {AMENITIES.map((a, i) => (
            <AmenityCard key={a.l} icon={a.i} label={a.l} delay={(i % 4) * 80} />
          ))}
        </div>
      </Container>
    </section>
  )
}
