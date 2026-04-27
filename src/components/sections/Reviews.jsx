import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { StarRating } from '../ui/StarRating.jsx'
import { REVIEWS } from '../../data/content.js'

function ReviewCard({ review, delay }) {
  return (
    <div className="border border-bentis-gold/40 p-8 lg:p-10 rv" style={{ transitionDelay: `${delay}ms` }}>
      <StarRating value={5} />
      <blockquote className="mt-6 font-serif text-white text-2xl leading-[1.4] italic">
        „{review.q}"
      </blockquote>
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] tracking-[0.24em] uppercase">
        <span className="text-white/90">{review.n}</span>
        <span className="text-white/50">{review.d}</span>
      </div>
    </div>
  )
}

export function Reviews() {
  return (
    <section className="py-28 lg:py-40 bg-bentis-graphite relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, #D4AF37, transparent 60%)' }}
      />
      <Container className="relative">
        <div className="text-center">
          <div className="rv">
            <Eyebrow light className="justify-center inline-block">Opinie gości</Eyebrow>
            <div className="mt-10 font-serif text-bentis-gold leading-none text-[140px] md:text-[200px] lg:text-[260px] tracking-tight">
              9.9<span className="text-white/20 text-[0.4em] align-top ml-4">/ 10</span>
            </div>
            <div className="mt-2 text-white/60 text-[12px] tracking-[0.3em] uppercase">
              ocena na Booking.com · na podstawie 412 opinii gości
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.n} review={r} delay={i * 120} />
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-4 text-white/60 text-[11px] tracking-[0.3em] uppercase">
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-bentis-gold text-sm font-serif">B</div>
          <span>zweryfikowane opinie · Booking.com</span>
        </div>
      </Container>
    </section>
  )
}
