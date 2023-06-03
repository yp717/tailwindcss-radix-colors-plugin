import * as React from 'react'

interface IDesktopHeaderProps {
  className?: string
}

const DesktopHeader = ({ className }: IDesktopHeaderProps) => {
  return <div className={`p-4 ${className}`}>Desktop Header</div>
}

export default DesktopHeader
