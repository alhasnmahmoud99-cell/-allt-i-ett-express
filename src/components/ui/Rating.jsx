import { Star } from 'lucide-react'

export const Rating = ({ value = 0, onChange, readOnly = false, size = 'md' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => !readOnly && onChange?.(star)}
          disabled={readOnly}
          className={`${sizes[size]} transition-colors duration-200 ${
            star <= value ? 'text-accent' : 'text-border'
          } ${!readOnly && 'cursor-pointer hover:scale-110'}`}
        >
          <Star fill="currentColor" size={20} />
        </button>
      ))}
    </div>
  )
}
