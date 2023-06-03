import * as React from 'react'

interface IColorScaleGroup {
  children: React.ReactNode
}

const ColorScaleGroup = ({ children }: IColorScaleGroup) => {
  return <div className="flex flex-col gap-0">{children}</div>
}

export default ColorScaleGroup
