import { forwardRef } from 'react'

export const Select = forwardRef(({
  label,
  error,
  options = [],
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2 font-sans">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`w-full px-4 py-3 border border-border rounded-btn bg-surface text-text-primary font-sans transition-colors duration-200 focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-ultra-light ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1 font-sans">{error}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'
