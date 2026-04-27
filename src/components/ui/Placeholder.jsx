const VARIANTS = {
  warm: 'ph-stripes-warm',
  cool: 'ph-stripes-cool',
  neutral: 'ph-stripes',
  dark: 'ph-stripes-dark',
}

export function Placeholder({ variant = 'warm', label, note, aspect = 'aspect-[4/3]', className = '' }) {
  const v = VARIANTS[variant] || VARIANTS.warm
  const labelLight = variant === 'dark' ? 'ph-label-light' : ''
  return (
    <div className={`${v} ${aspect} ${className} relative overflow-hidden`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {label && <div className={`ph-label ${labelLight}`}>{label}</div>}
        {note && <div className={`ph-label mt-1 opacity-60 ${labelLight}`}>{note}</div>}
      </div>
    </div>
  )
}
