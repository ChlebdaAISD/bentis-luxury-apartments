import { Eyebrow } from './Eyebrow.jsx'

export function SectionHeading({
  eyebrow,
  light = false,
  children,
  intro,
  align = 'left',
  size = 'md',
  className = '',
}) {
  const alignCls = align === 'center' ? 'text-center' : ''
  const titleSize = size === 'lg'
    ? 'text-6xl md:text-7xl lg:text-[112px]'
    : 'text-5xl md:text-6xl'
  const titleColor = light ? 'text-white' : 'text-bentis-graphite'
  return (
    <div className={`${alignCls} ${className}`}>
      {eyebrow && (
        <Eyebrow light={light} className={align === 'center' ? 'inline-block' : ''}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`mt-8 h-section ${titleSize} ${titleColor}`}>
        {children}
      </h2>
      {intro && (
        <p className={`mt-8 body-prose max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-bentis-graphite/70'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
