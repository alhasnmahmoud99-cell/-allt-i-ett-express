export const Skeleton = ({ className = '' }) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-btn ${className}`}
    />
  )
}

export const SkeletonText = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={i === lines - 1 ? 'w-3/4 h-4' : 'w-full h-4'} />
      ))}
    </div>
  )
}
