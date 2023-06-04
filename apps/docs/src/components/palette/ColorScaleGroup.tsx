import * as React from 'react'

interface IColorScaleGroup {
  name: string
  children: React.ReactNode
}

const ColorScaleGroup = ({ name, children }: IColorScaleGroup) => {
  const weights = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
    '1100',
    '1200',
  ]

  return (
    <div className="flex flex-col w-full gap-1">
      <p className="text-lg font-semibold text-gray-1200 mt-8 mb-0">{name}</p>

      <div className="flex flex-row items-center justify-start w-full">
        <div className="flex flex-row items-center justify-center flex-grow w-full gap-1">
          <div className="w-36 h-10 flex items-center m-0 text-slate-1100" />
          <div className="flex flex-row items-center justify-center flex-grow w-full gap-1">
            {weights.map((weight, index) => {
              return (
                <div
                  key={weight}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <p className="text-xs font-semibold text-slate-1100">
                    {weight}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ColorScaleGroup
