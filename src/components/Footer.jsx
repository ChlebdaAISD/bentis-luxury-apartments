import { Wordmark } from './Wordmark.jsx'
import { Container } from './ui/Container.jsx'
import { CONTACT } from '../data/content.js'

const NAV = [
  { href: '#apartamenty', label: 'Apartamenty' },
  { href: '#lokalizacja', label: 'Lokalizacja' },
  { href: '#galeria',     label: 'Galeria' },
  { href: '#kontakt',     label: 'Kontakt' },
]

const LEGAL = [
  { href: '#', label: 'Regulamin pobytu' },
  { href: '#', label: 'Polityka prywatności' },
  { href: '#', label: 'Polityka cookies' },
]

function ColumnHeading({ children }) {
  return (
    <div className="text-[11px] tracking-[0.3em] uppercase text-bentis-gold mb-5">
      {children}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-bentis-black border-t border-white/10 text-white/60">
      <Container className="py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Wordmark color="#D4AF37" />
          <p className="mt-6 text-sm font-light leading-[1.75] max-w-xs">
            Osiem luksusowych apartamentów w zabytkowej kamienicy z 1887 roku, w sercu krakowskiego Starego Miasta.
          </p>
        </div>
        <div>
          <ColumnHeading>Nawigacja</ColumnHeading>
          <ul className="space-y-3 text-sm font-light">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-bentis-gold transition-colors duration-300">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ColumnHeading>Kontakt</ColumnHeading>
          <ul className="space-y-3 text-sm font-light">
            <li>{CONTACT.phone}</li>
            <li className="break-all">{CONTACT.email}</li>
            <li>{CONTACT.street}, Kraków</li>
          </ul>
        </div>
        <div>
          <ColumnHeading>Prawne</ColumnHeading>
          <ul className="space-y-3 text-sm font-light">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-bentis-gold transition-colors duration-300">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.24em] uppercase text-white/40">
          <div>© 2026 Bentis Luxury Apartments · NIP 000-00-00-000</div>
          <div>Zaprojektowano z dbałością o detal</div>
        </Container>
      </div>
    </footer>
  )
}
