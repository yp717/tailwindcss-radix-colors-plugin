import * as React from 'react'
import navLinks from '../../data/navLinks'
import Link from 'next/link'

interface IDesktopSidebarProps {
  className?: string
}

const DesktopSidebar = ({ className }: IDesktopSidebarProps) => {
  return (
    <div className={`${className} bg-gray-100`}>
      <nav className="flex grow flex-col overflow-y-auto bg-gray-100 p-4 shadow-sm">
        <div className="h-16 pb-4 flex items-center">
          <Link className="text-sm font-semibold text-gray-1200" href="/">
            tailwindcss-radix-colors-plugin
          </Link>
        </div>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-1100 hover:text-crimson-900 hover:bg-gray-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
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
