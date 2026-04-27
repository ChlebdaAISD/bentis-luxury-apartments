export function StarRating({ value = 5, max = 5, variant = 'visual', className = '' }) {
  if (variant === 'numeric') {
    return (
      <span className={`inline-flex items-baseline gap-2 ${className}`}>
        <span className="text-bentis-gold font-serif text-2xl leading-none">★</span>
        <span className="font-serif text-bentis-gold text-2xl leading-none">{value}</span>
        <span className="text-bentis-graphite/60 text-xs">/ {max}</span>
      </span>
    )
  }
  const filled = Math.round(value)
  return (
    <span className={`inline-flex text-bentis-gold text-xl tracking-tight ${className}`} aria-label={`${value} z ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i}>{i < filled ? '★' : '☆'}</span>
      ))}
    </span>
  )
}
