import * as React from 'react'

import SearchBar from '../search/SearchBar'
import { GithubLink } from '../links'
import DarkModeToggle from '../buttons/DarkModeToggle'

interface IDesktopHeaderProps {
  className?: string
}

const DesktopHeader = ({ className }: IDesktopHeaderProps) => {
  return (
    <div
      className={`p-4 bg-gray-100 shadow-sm flex items-center justify-between ${className}`}
    >
      <SearchBar />
      <div className="flex items-center gap-4">
        <GithubLink />
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default DesktopHeader
