import { useEffect, useState } from 'react'

export function Loader() {
  const [hidden, setHidden] = useState(false)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1100)
    const t2 = setTimeout(() => setHidden(true), 1800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null
  return (
    <div
      className="fixed inset-0 z-[100] bg-bentis-black flex items-center justify-center transition-opacity duration-700"
      style={{ opacity: fade ? 0 : 1 }}
    >
      <div className="flex flex-col items-center">
        <div className="loader-wing flex items-center justify-center">
          <div className="font-serif text-[#D4AF37] text-4xl tracking-[0.35em]">BENTIS</div>
        </div>
        <div className="mt-4 text-[10px] tracking-[0.4em] text-[#D4AF37]/70 font-sans">APARTAMENTY · KRAKÓW</div>
      </div>
    </div>
  )
}
