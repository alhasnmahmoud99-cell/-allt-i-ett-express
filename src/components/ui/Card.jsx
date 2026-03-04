export const Card = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`bg-surface rounded-card shadow-soft p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ className = '', children }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export const CardContent = ({ className = '', children }) => {
  return <div className={`${className}`}>{children}</div>
}

export const CardFooter = ({ className = '', children }) => {
  return <div className={`mt-4 pt-4 border-t border-border ${className}`}>{children}</div>
}
