'use client'

import * as React from 'react'

import DesktopSidebar from './DesktopSidebar'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

interface IPageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div>
      <MobileHeader className="sticky top-0 left-0 z-40 lg:hidden" />
      <DesktopSidebar className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:w-80 lg:flex lg:flex-col" />
      <main className="relative pl-0 lg:pl-80 h-full w-full flex flex-col bg-gray-300">
        <DesktopHeader className="hidden lg:flex lg:sticky top-0 left-80 z-50 h-20 w-full" />
        <div className="max-w-4xl mx-auto p-4 my-8 h-full prose dark:prose-invert w-full">
          {children}
        </div>
      </main>
    </div>
  )
}

export default PageLayout
