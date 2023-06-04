import * as React from 'react'

// import SearchBar from '../search/SearchBar'
import { GithubLink, TwitterLink } from '../links'
import DarkModeToggle from '../buttons/DarkModeToggle'

interface IDesktopHeaderProps {
  className?: string
}

const DesktopHeader = ({ className }: IDesktopHeaderProps) => {
  return (
    <div
      className={`p-4 bg-gray-100 border-b border-gray-300 shadow-sm flex items-center justify-end ${className}`}
    >
      {/* <SearchBar /> */}
      <div className="flex items-center gap-4">
        <TwitterLink />
        <GithubLink />
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default DesktopHeader
