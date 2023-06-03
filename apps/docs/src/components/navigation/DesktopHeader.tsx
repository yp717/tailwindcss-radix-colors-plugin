import * as React from 'react'

import Link from 'next/link'

import { GithubIcon } from '../../icons'
import SearchBar from '../search/SearchBar'
import { GithubLink } from '../links'

interface IDesktopHeaderProps {
  className?: string
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
