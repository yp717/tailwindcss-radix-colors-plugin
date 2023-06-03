import * as React from 'react'

import { MoonIcon, SunIcon } from '../../icons'
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    console.log('theme', theme)
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      className="bg-gray-300 px-2 py-2 rounded-md border border-gray-700"
      onClick={() => handleThemeToggle()}
    >
      {theme === 'light' ? (
        <div className="align-center flex items-center">
          <MoonIcon className="text-gray-1200 w-5 h-5" />
          <span className="sr-only">Enable dark mode</span>
        </div>
      ) : (
        <div className="align-center flex items-center">
          <SunIcon className="text-gray-1200 w-5 h-5" />
          <span className="sr-only">Enable light mode</span>
        </div>
      )}
    </button>
  )
}

export default DarkModeToggle
