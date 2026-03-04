export const Badge = ({ variant = 'default', className = '', children }) => {
  const variants = {
    default: 'bg-primary-ultra-light text-primary',
    primary: 'bg-primary text-white',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-sans ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
