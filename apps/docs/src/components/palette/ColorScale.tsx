import * as React from 'react'
import { ColorScale } from './types'
import ColorEntry from './ColorEntry'

interface IColorScaleProps {
  name: string
  scale: ColorScale
}

const ColorScale = ({ name, scale }: IColorScaleProps) => {
  return (
    <div className="flex flex-row items-center justify-start w-full">
      <p className="w-36 h-10 flex items-center m-0 text-slate-1100">{name}</p>
      <div className="flex flex-row items-center justify-center flex-grow w-full gap-1">
        {Object.entries(scale).map(([weight, value], index) => {
          return <ColorEntry key={index} value={value} />
        })}
      </div>
    </div>
  )
}

export default ColorScale
