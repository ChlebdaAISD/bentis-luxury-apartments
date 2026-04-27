export function LogoMark({ color = '#D4AF37', size = 28 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" className="block">
      <circle cx="32" cy="32" r="30" fill="none" stroke={color} strokeWidth="1" />
      <circle cx="32" cy="32" r="23" fill="none" stroke={color} strokeWidth="0.6" opacity="0.7" />
      <text x="32" y="40" textAnchor="middle" fontFamily="Space Grotesk, serif" fontSize="28" fontWeight="500" fill={color}>B</text>
    </svg>
  )
}

export function Wordmark({ color = '#D4AF37' }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark color={color} size={30} />
      <div className="leading-none">
        <div className="font-serif text-lg tracking-[0.32em]" style={{ color }}>BENTIS</div>
        <div className="font-sans text-[9px] tracking-[0.45em] mt-1" style={{ color, opacity: 0.7 }}>APARTAMENTY · KRAKÓW</div>
      </div>
    </div>
  )
}
