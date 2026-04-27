import { useEffect, useState } from 'react'
import { X, Check } from 'lucide-react'
import { LogoMark } from './Wordmark.jsx'
import { Button } from './ui/Button.jsx'
import { APTS } from '../data/content.js'

const inputCls = 'mt-2 w-full bg-white border border-bentis-graphite/15 px-4 py-3 font-serif text-lg focus:border-bentis-gold outline-none'
const labelCls = 'text-[11px] tracking-[0.24em] uppercase text-bentis-graphite/60'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  )
}

export function ReserveModal({ open, close }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    cin: '', cout: '', guests: 2, apt: APTS[0].name,
    name: '', email: '', phone: '',
  })
  const u = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  useEffect(() => { if (open) setStep(0) }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-6 bg-black/70 backdrop-blur-sm">
      <div className="bg-bentis-cream w-full max-w-2xl shadow-2xl relative max-h-[92vh] overflow-auto">
        <div className="flex items-center justify-between px-8 py-5 border-b border-bentis-graphite/10 bg-bentis-cream sticky top-0">
          <div className="flex items-center gap-3">
            <LogoMark size={22} />
            <div className="font-serif tracking-[0.3em] text-bentis-graphite">REZERWACJA</div>
          </div>
          <button onClick={close} aria-label="Zamknij" className="text-bentis-graphite/70 hover:text-bentis-graphite">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {step < 2 && (
          <div className="px-8 py-10">
            <div className="text-[11px] tracking-[0.3em] uppercase text-bentis-gold-dark">Krok {step + 1} / 2</div>
            <h3 className="mt-3 font-serif text-4xl text-bentis-graphite">
              {step === 0 ? 'Daty pobytu' : 'Dane kontaktowe'}
            </h3>

            {step === 0 ? (
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field label="Przyjazd">
                  <input type="date" value={form.cin} onChange={(e) => u('cin', e.target.value)} className={inputCls} />
                </Field>
                <Field label="Wyjazd">
                  <input type="date" value={form.cout} onChange={(e) => u('cout', e.target.value)} className={inputCls} />
                </Field>
                <Field label="Liczba gości">
                  <input type="number" min="1" max="4" value={form.guests} onChange={(e) => u('guests', e.target.value)} className={inputCls} />
                </Field>
                <Field label="Apartament">
                  <select value={form.apt} onChange={(e) => u('apt', e.target.value)} className={inputCls}>
                    {APTS.map((a) => <option key={a.n}>{a.name}</option>)}
                  </select>
                </Field>
              </div>
            ) : (
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <label className="block sm:col-span-2">
                  <span className={labelCls}>Imię i nazwisko</span>
                  <input value={form.name} onChange={(e) => u('name', e.target.value)} className={inputCls} />
                </label>
                <Field label="E-mail">
                  <input type="email" value={form.email} onChange={(e) => u('email', e.target.value)} className={inputCls} />
                </Field>
                <Field label="Telefon">
                  <input value={form.phone} onChange={(e) => u('phone', e.target.value)} className={inputCls} />
                </Field>
              </div>
            )}

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={() => (step === 0 ? close() : setStep(0))}
                className="text-[11px] tracking-[0.24em] uppercase text-bentis-graphite/60 hover:text-bentis-graphite"
              >
                ← {step === 0 ? 'Anuluj' : 'Wstecz'}
              </button>
              <Button onClick={() => setStep(step + 1)} variant="primary">
                {step === 0 ? 'Dalej' : 'Zarezerwuj'} →
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="px-8 py-16 text-center">
            <div className="w-14 h-14 mx-auto rounded-full border border-bentis-gold flex items-center justify-center text-bentis-gold-dark">
              <Check size={22} strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-serif text-4xl">Dziękujemy, {form.name || 'Gościu'}.</h3>
            <p className="mt-4 text-bentis-graphite/70 font-light">
              Odezwiemy się w ciągu godziny, aby potwierdzić szczegóły rezerwacji.
            </p>
            <Button onClick={close} variant="outline-dark" className="mt-10">Zamknij</Button>
          </div>
        )}
      </div>
    </div>
  )
}
