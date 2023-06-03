import * as React from 'react'
import { ColorScale } from './types'

interface IColorScaleProps {
  name: string
  scale: ColorScale
  includeWeights?: boolean
}

const ColorScale = ({
  name,
  scale,
  includeWeights = false,
}: IColorScaleProps) => {
  return (
    <div className="flex flex-row items-center justify-start">
      <p className="w-36 h-12 flex items-center m-0 text-gray-1200">{name}</p>
      <div className="flex flex-row items-center justify-center flex-grow w-full gap-1">
        {Object.entries(scale).map(([weight, value], index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full"
            >
              <div
                className={`w-full h-12 border border-gray-200`}
                // NOTE: Using inline styles here because tailwindcss doesn't support dynamic classes
                style={{ backgroundColor: value }}
              />
              {includeWeights && (
                <div className="text-xs text-gray-1200">{weight}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorScale
