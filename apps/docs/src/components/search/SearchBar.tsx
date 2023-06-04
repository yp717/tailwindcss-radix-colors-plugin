import * as React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
  const [modifierKey, setModifierKey] = React.useState('')

  React.useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ',
    )
  }, [])

  return (
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10   hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none"
      >
        <MagnifyingGlassIcon className="h-5 w-5 stroke-current" />
        Search Documentation...
        <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">{modifierKey}</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      {/* <SearchDialog className="hidden lg:block" {...dialogProps} /> */}
    </div>
  )
}

export default SearchBar
