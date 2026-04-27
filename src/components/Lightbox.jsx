import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GAL } from '../data/content.js'

const navBtnCls = 'absolute w-11 h-11 rounded-full border border-white/30 text-white/90 flex items-center justify-center hover:border-bentis-gold hover:text-bentis-gold transition-colors duration-300'

export function Lightbox({ index, setIndex, close }) {
  const startX = useRef(0)

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % GAL.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + GAL.length) % GAL.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, setIndex, close])

  if (index === null) return null
  const g = GAL[index]

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center"
      onTouchStart={(e) => { startX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - startX.current
        if (dx > 50) setIndex((i) => (i - 1 + GAL.length) % GAL.length)
        if (dx < -50) setIndex((i) => (i + 1) % GAL.length)
      }}
    >
      <button onClick={close} aria-label="Zamknij" className={`${navBtnCls} top-6 right-6`}>
        <X size={18} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => setIndex((i) => (i - 1 + GAL.length) % GAL.length)}
        aria-label="Poprzednie"
        className={`${navBtnCls} left-6`}
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % GAL.length)}
        aria-label="Następne"
        className={`${navBtnCls} right-6`}
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
      <div className="max-w-[86vw] max-h-[82vh] w-[960px]">
        <img
          src={g.src}
          alt={`Bentis Apartments — zdjęcie ${index + 1}`}
          className="w-full max-h-[82vh] object-contain"
        />
        <div className="mt-4 text-center text-white/60 text-[11px] tracking-[0.3em] uppercase">
          {index + 1} / {GAL.length}
        </div>
      </div>
    </div>
  )
}
