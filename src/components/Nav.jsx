import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LogoMark, Wordmark } from './Wordmark.jsx'
import { Button } from './ui/Button.jsx'
import { Container } from './ui/Container.jsx'

const LINKS = [
  { href: '#apartamenty', label: 'Apartamenty' },
  { href: '#lokalizacja', label: 'Lokalizacja' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Nav({ onReserve }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = !scrolled

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-black/5'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent'
      }`}>
        <Container className="h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="sm:hidden">
              <LogoMark color={isDark ? '#D4AF37' : '#1C1C1C'} size={30} />
            </span>
            <span className="hidden sm:block">
              <Wordmark color={isDark ? '#D4AF37' : '#1C1C1C'} />
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`navlink text-[12px] tracking-[0.24em] uppercase ${isDark ? 'text-white/90' : 'text-bentis-graphite'}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button
              onClick={onReserve}
              variant={isDark ? 'outline' : 'outline-dark'}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Zarezerwuj pobyt
            </Button>
            <button
              className={`lg:hidden p-2 ${isDark ? 'text-white' : 'text-bentis-graphite'}`}
              onClick={() => setOpen(true)}
              aria-label="Menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-bentis-black text-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
            <Wordmark color="#D4AF37" />
            <button onClick={() => setOpen(false)} aria-label="Zamknij" className="text-white/80">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-white/90"
              >
                {l.label}
              </a>
            ))}
            <Button onClick={() => { setOpen(false); onReserve() }} variant="primary" className="mt-6">
              Zarezerwuj pobyt
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
