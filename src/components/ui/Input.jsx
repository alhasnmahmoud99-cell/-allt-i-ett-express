import { forwardRef } from 'react'

export const Input = forwardRef(({
  variant = 'default',
  size = 'md',
  label,
  error,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'w-full font-sans transition-colors duration-200 border rounded-btn'
  
  const variants = {
    default: 'border-border bg-surface text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-ultra-light',
    outline: 'border-2 border-border bg-transparent text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary',
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2 font-sans">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 font-sans">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
