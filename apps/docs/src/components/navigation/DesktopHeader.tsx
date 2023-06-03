import * as React from 'react'

import Link from 'next/link'

import { GithubIcon } from '../../icons'
import SearchBar from '../search/SearchBar'

interface IDesktopHeaderProps {
  className?: string
}

const GithubLink = () => {
  return (
    <Link href="https://github.com/yp717/tailwindcss-radix-colors-plugin">
      <GithubIcon className="w-5 h-5 text-crimson-900" />
    </Link>
  )
}

const DesktopHeader = ({ className }: IDesktopHeaderProps) => {
  return (
    <div
      className={`p-4 bg-gray-100 shadow-sm flex items-center justify-between ${className}`}
    >
      <SearchBar />
      <GithubLink />
    </div>
  )
}

export default DesktopHeader
