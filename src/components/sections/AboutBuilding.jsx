import { Eyebrow } from '../ui/Eyebrow.jsx'
import { STATS } from '../../data/content.js'

function StatCard({ value, label }) {
  return (
    <div>
      <div className="font-serif text-bentis-gold text-4xl">{value}</div>
      <div className="text-[11px] tracking-[0.24em] uppercase text-white/50 mt-2">{label}</div>
    </div>
  )
}

export function AboutBuilding() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/photos/facade.png" alt="Fasada kamienicy Bentis" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0.92))' }}
      />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 text-white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 rv">
            <Eyebrow light>O obiekcie</Eyebrow>
            <h2 className="mt-8 h-section text-5xl md:text-6xl text-white">
              Kamienica <br />z <span className="italic text-bentis-gold">1887 roku.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8 rv" style={{ transitionDelay: '120ms' }}>
            <p className="text-white/80 text-lg body-prose">
              Nasza kamienica jest jednym z ostatnich zachowanych świadków złotej epoki krakowskiego mieszczaństwa. Po trwającej cztery lata, pieczołowitej renowacji prowadzonej pod nadzorem konserwatora zabytków, budynek odzyskał swój dawny blask — zachowując oryginalne sztukaterie, parkiety i stolarkę okienną.
            </p>
            <p className="mt-6 text-white/60 body-prose">
              Filozofia Bentis to dyskretny luksus. Wierzymy, że prawdziwa gościnność tkwi w detalach, których nie widać na pierwszy rzut oka: temperatura pościeli, cisza korytarza, zapach w łazience, ciepło światła wieczorem. Każdy z ośmiu apartamentów został zaprojektowany tak, aby Państwa pobyt był nie tylko wygodny — ale niezapomniany.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {STATS.map((s) => (
                <StatCard key={s.l} value={s.v} label={s.l} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
