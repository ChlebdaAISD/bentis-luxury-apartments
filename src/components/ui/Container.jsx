export function Container({ as = 'div', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`max-w-[1400px] mx-auto px-6 lg:px-12 ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
