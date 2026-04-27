import * as Lucide from 'lucide-react'

export function Icon({ name, as, size = 22, strokeWidth = 1.5, className = '', ...rest }) {
  const Cmp = as || (name ? Lucide[name] : null) || Lucide.Circle
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" {...rest} />
}
