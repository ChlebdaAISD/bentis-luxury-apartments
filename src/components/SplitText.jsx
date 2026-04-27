import { useEffect, useRef } from 'react'

export function SplitText({ text, className = '', delayStart = 0, stagger = 30 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const chars = ref.current.querySelectorAll('.char')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          chars.forEach((c, i) => {
            setTimeout(() => c.classList.add('in'), delayStart + i * stagger)
          })
          io.disconnect()
        }
      })
    }, { threshold: 0.2 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [text, delayStart, stagger])

  const words = text.split(' ')
  return (
    <span ref={ref} className={className}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]">
          {[...w].map((ch, i) => (
            <span key={i} className="char">{ch}</span>
          ))}
        </span>
      ))}
    </span>
  )
}
