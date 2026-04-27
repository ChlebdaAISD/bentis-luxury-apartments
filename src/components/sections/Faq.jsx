import { Eyebrow } from '../ui/Eyebrow.jsx'
import { FAQS } from '../../data/content.js'

function FaqItem({ q, a }) {
  return (
    <details className="group py-6 rv">
      <summary className="flex items-center justify-between gap-6">
        <span className="font-serif text-xl md:text-2xl text-bentis-graphite pr-4">{q}</span>
        <span className="acc-icon text-bentis-gold-dark text-2xl font-light shrink-0">+</span>
      </summary>
      <div className="mt-4 text-bentis-graphite/70 body-prose max-w-3xl">{a}</div>
    </details>
  )
}

export function Faq() {
  return (
    <section className="py-28 lg:py-36 bg-bentis-cream">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="text-center rv">
          <Eyebrow className="justify-center inline-block">Pytania i odpowiedzi</Eyebrow>
          <h2 className="mt-8 h-section text-5xl md:text-6xl">
            Najczęstsze <span className="italic text-bentis-gold-dark">pytania.</span>
          </h2>
        </div>
        <div className="mt-16 divide-y divide-bentis-graphite/15 border-t border-b border-bentis-graphite/15">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
