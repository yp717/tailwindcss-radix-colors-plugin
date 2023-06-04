import * as React from 'react'

interface IColorEntryProps {
  value?: string
  className?: string
}

const ColorEntry = ({ value, className = '' }: IColorEntryProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className={`w-full h-10 border-2 border-gray-300 dark:border-gray-300 ${className}`}
        // NOTE: Using inline styles here because tailwindcss doesn't support dynamic classes
        style={{ backgroundColor: value }}
      />
    </div>
  )
}

export default ColorEntry
