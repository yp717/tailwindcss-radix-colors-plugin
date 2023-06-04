import * as React from 'react'

import Link from 'next/link'

import { Bars3Icon } from '@heroicons/react/24/outline'
import DarkModeToggle from '../buttons/DarkModeToggle'
import { GithubLink, TwitterLink } from '../links'
import navLinks from '../../data/navLinks'
import { useOnClickOutside } from '../../hooks'

interface IMobileHeaderProps {
  className?: string
}

const MobileHeader = ({ className = '' }: IMobileHeaderProps) => {
  const ref = React.useRef(null)
  const [menuOpen, setMenuOpen] = React.useState(false)

  useOnClickOutside(ref, () => setMenuOpen(false))

  return (
    <div className="absolute top-0 left-0 w-full" ref={ref}>
      <div
        className={`flex items-center justify-between gap-x-6 bg-gray-100 p-4 shadow-sm ${className}`}
      >
        <Link className="text-sm font-semibold text-gray-1200" href="/">
          <span className="mr-1">🎨</span> tailwindcss-radix-colors-plugin
        </Link>
        <div className="flex items-center justify-center gap-4">
          <TwitterLink />
          <GithubLink />
          <DarkModeToggle />
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-1000 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="relative w-full bg-gray-100 p-4 z-50">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-1100 hover:text-crimson-900 hover:bg-gray-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeader
