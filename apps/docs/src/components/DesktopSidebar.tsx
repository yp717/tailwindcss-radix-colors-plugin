import * as React from 'react'
import navLinks from '../data/navLinks'
import Link from 'next/link'

interface IDesktopSidebarProps {
  className?: string
}

const DesktopSidebar = ({ className }: IDesktopSidebarProps) => {
  return (
    <div className={`${className}`}>
      <nav className="flex grow flex-col gap-y-5 overflow-y-auto bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-grayLight-1200">
          tailwindcss-radix-colors-plugin
        </p>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DesktopSidebar
