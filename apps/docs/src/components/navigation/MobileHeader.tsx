import * as React from 'react'

import Link from 'next/link'

import { Bars3Icon } from '@heroicons/react/24/outline'
import DarkModeToggle from '../buttons/DarkModeToggle'

interface IMobileHeaderProps {
  className?: string
}

const MobileHeader = ({ className = '' }: IMobileHeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <div
      className={`flex items-center justify-between gap-x-6 bg-gray-100 px-4 py-4 shadow-sm ${className}`}
    >
      <Link className="text-sm font-semibold text-gray-1200" href="/">
        <span className="mr-1">🎨</span> tailwindcss-radix-colors-plugin
      </Link>
      <div className="flex gap-4">
        <DarkModeToggle />
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-1000 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default MobileHeader
