import * as React from 'react'

import { MoonIcon, SunIcon } from '../../icons'
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      className="bg-gray-300 rounded-md border border-gray-700 w-8 h-8"
      onClick={() => handleThemeToggle()}
    >
      {mounted &&
        (theme === 'light' ? (
          <div className="justify-center flex items-center">
            <MoonIcon className="text-gray-1200 w-5 h-5" />
            <span className="sr-only">Enable dark mode</span>
          </div>
        ) : (
          <div className="justify-center flex items-center">
            <SunIcon className="text-gray-1200 w-5 h-5" />
            <span className="sr-only">Enable light mode</span>
          </div>
        ))}
    </button>
  )
}

export default DarkModeToggle
