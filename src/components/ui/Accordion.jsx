import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-btn overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left font-medium text-text-primary hover:bg-primary-ultra-light transition-colors duration-200 flex justify-between items-center font-sans"
          >
            {item.title}
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-primary-ultra-light border-t border-border text-text-secondary font-sans">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
