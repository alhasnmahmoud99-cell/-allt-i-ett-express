import { useState } from 'react'
import { X } from 'lucide-react'

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-surface rounded-card shadow-soft ${sizes[size]} max-h-[90vh] overflow-y-auto`}>
        <div className="flex justify-between items-center p-6 border-b border-border sticky top-0 bg-surface">
          <h2 className="text-xl font-display font-bold text-text-primary">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-ultra-light rounded-btn transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
