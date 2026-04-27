import { RIBBON_ITEMS } from '../data/content.js'

export function Ribbon() {
  const row = [...RIBBON_ITEMS, ...RIBBON_ITEMS]
  return (
    <div className="bg-bentis-black text-bentis-gold/90 border-y border-bentis-gold/20 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-5">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 font-serif text-2xl italic">
            <span>{t}</span>
            <span className="text-bentis-gold/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
