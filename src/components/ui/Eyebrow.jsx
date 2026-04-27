export function Eyebrow({ light = false, className = '', children }) {
  const tone = light ? 'text-bentis-gold' : 'text-bentis-graphite/80'
  return (
    <div className={`gold-dot eyebrow-label ${tone} ${className}`}>
      {children}
    </div>
  )
}
