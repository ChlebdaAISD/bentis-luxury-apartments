import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { Icon } from '../ui/Icon.jsx'
import { PILLARS } from '../../data/content.js'

function PillarCard({ icon, title, text, delay }) {
  return (
    <div className="rv" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-14 h-14 rounded-full border border-bentis-gold/60 flex items-center justify-center text-bentis-gold-dark mb-6">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="font-serif text-3xl text-bentis-graphite mb-3">{title}</h3>
      <p className="text-bentis-graphite/70 body-prose">{text}</p>
    </div>
  )
}

export function Intro() {
  return (
    <section className="py-28 lg:py-40 bg-bentis-cream">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6 rv">
            <Eyebrow>O Miejscu</Eyebrow>
            <h2 className="mt-8 h-section text-5xl md:text-6xl lg:text-7xl text-bentis-graphite">
              Tam gdzie historia <br /><span className="italic text-bentis-gold-dark">spotyka komfort.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6 rv">
            <p className="text-bentis-graphite/85 text-lg body-prose">
              Bentis Apartamenty zajmują starannie odrestaurowaną kamienicę z XIX wieku, położoną w jednej z najbardziej prestiżowych części krakowskiego Starego Miasta. Osiem niezależnych apartamentów łączy autentyczne detale epoki — sztukaterie, parkiet w jodełkę, wysokie okna — z dyskretną technologią i materiałami najwyższej klasy.
            </p>
            <p className="mt-6 text-bentis-graphite/70 text-base body-prose">
              Każdy z apartamentów został zaprojektowany indywidualnie. Wybieramy dostawców, którzy rozumieją rzemiosło: pościel z długich włókien bawełny, mydła z manufaktury w Krakowie, kawę palona lokalnie. Wszystko po to, by Państwa pobyt był prywatny, cichy i bezdyskusyjnie wygodny.
            </p>
            <div className="mt-10 hl-gold w-24 ml-0" />
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12 lg:gap-16">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} icon={p.icon} title={p.title} text={p.text} delay={i * 120} />
          ))}
        </div>
      </Container>
    </section>
  )
}
