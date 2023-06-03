import * as React from 'react'
import { ColorScale } from './types'

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
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full"
            >
              <div
                className={`w-full h-10 border-2 border-grayLight-100 dark:border-grayDark-300`}
                // NOTE: Using inline styles here because tailwindcss doesn't support dynamic classes
                style={{ backgroundColor: value }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorScale
