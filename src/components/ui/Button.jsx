const VARIANTS = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  'outline-dark': 'btn-outline-dark',
  ghost: 'btn-ghost',
}

export function Button({
  variant = 'primary',
  size = 'md',
  as,
  href,
  onClick,
  type,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button')
  const variantClass = VARIANTS[variant] || VARIANTS.primary
  const sizeClass = size === 'sm' ? 'btn-sm' : ''
  const cls = ['btn', variantClass, sizeClass, className].filter(Boolean).join(' ')

  const props = { className: cls, onClick, ...rest }
  if (Tag === 'a') props.href = href
  else props.type = type || 'button'

  return <Tag {...props}>{children}</Tag>
}
