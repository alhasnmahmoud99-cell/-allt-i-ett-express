import { forwardRef } from 'react'

export const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled = false,
  ...props
}, ref) => {
  const baseStyles = 'font-medium rounded-btn transition-all duration-200 inline-flex items-center justify-center gap-2 font-sans'
  
  const variants = {
    primary: 'bg-primary-light text-white hover:scale-105 active:scale-95 disabled:opacity-50',
    secondary: 'bg-surface border-2 border-primary text-primary hover:bg-primary-ultra-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary-ultra-light',
    ghost: 'text-primary hover:bg-primary-ultra-light',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
