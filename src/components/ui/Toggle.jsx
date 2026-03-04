import { useState } from 'react'

export const Toggle = ({ checked = false, onChange, label, disabled = false }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => !disabled && onChange?.(!checked)}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
          checked ? 'bg-primary-light' : 'bg-border'
        } ${disabled && 'opacity-50 cursor-not-allowed'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      {label && (
        <label className="text-sm font-medium text-text-primary font-sans cursor-pointer">
          {label}
        </label>
      )}
    </div>
  )
}
