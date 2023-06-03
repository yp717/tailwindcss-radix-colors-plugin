import * as React from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'

interface IMobileHeaderProps {
  className?: string
}

const MobileHeader = ({ className = '' }: IMobileHeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <div
      className={`flex items-center justify-between gap-x-6 bg-white px-4 py-4 shadow-sm ${className}`}
    >
      <p className="text-sm font-semibold text-grayLight-1200">
        tailwindcss-radix-colors-plugin
      </p>
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default MobileHeader
