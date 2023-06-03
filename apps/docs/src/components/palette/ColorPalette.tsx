'use client'

import * as React from 'react'

import { colors } from 'tailwindcss-radix-colors-plugin'
import ColorScale from './ColorScale'
import ColorScaleGroup from './ColorScaleGroup'

const ColorPalette = () => {
  console.log(colors)
  return (
    <div className="flex flex-col gap-4">
      {/* AMBER */}
      <ColorScaleGroup>
        <ColorScale
          name="amberLight"
          scale={colors.amberLight}
          includeWeights
        />
        <ColorScale name="amberLightA" scale={colors.amberLightA} />
        <ColorScale name="amberDark" scale={colors.amberDark} />
        <ColorScale name="amberDarkA" scale={colors.amberDarkA} />
      </ColorScaleGroup>

      {/* BLUE */}
      <ColorScaleGroup>
        <ColorScale name="blueLight" scale={colors.blueLight} includeWeights />
        <ColorScale name="blueLightA" scale={colors.blueLightA} />
        <ColorScale name="blueDark" scale={colors.blueDark} />
        <ColorScale name="blueDarkA" scale={colors.blueDarkA} />
      </ColorScaleGroup>

      {/* BRONZE */}
      <ColorScaleGroup>
        <ColorScale
          name="bronzeLight"
          scale={colors.bronzeLight}
          includeWeights
        />
        <ColorScale name="bronzeLightA" scale={colors.bronzeLightA} />
        <ColorScale name="bronzeDark" scale={colors.bronzeDark} />
        <ColorScale name="bronzeDarkA" scale={colors.bronzeDarkA} />
      </ColorScaleGroup>

      {/* BROWN */}
      <ColorScaleGroup>
        <ColorScale
          name="brownLight"
          scale={colors.brownLight}
          includeWeights
        />
        <ColorScale name="brownLightA" scale={colors.brownLightA} />
        <ColorScale name="brownDark" scale={colors.brownDark} />
        <ColorScale name="brownDarkA" scale={colors.brownDarkA} />
      </ColorScaleGroup>

      {/* crimson */}
      <ColorScaleGroup>
        <ColorScale
          name="crimsonLight"
          scale={colors.crimsonLight}
          includeWeights
        />
        <ColorScale name="crimsonLightA" scale={colors.crimsonLightA} />
        <ColorScale name="crimsonDark" scale={colors.crimsonDark} />
        <ColorScale name="crimsonDarkA" scale={colors.crimsonDarkA} />
      </ColorScaleGroup>

      {/* cyan */}
      <ColorScaleGroup>
        <ColorScale name="cyanLight" scale={colors.cyanLight} includeWeights />
        <ColorScale name="cyanLightA" scale={colors.cyanLightA} />
        <ColorScale name="cyanDark" scale={colors.cyanDark} />
        <ColorScale name="cyanDarkA" scale={colors.cyanDarkA} />
      </ColorScaleGroup>

      {/* gold */}
      <ColorScaleGroup>
        <ColorScale name="goldLight" scale={colors.goldLight} includeWeights />
        <ColorScale name="goldLightA" scale={colors.goldLightA} />
        <ColorScale name="goldDark" scale={colors.goldDark} />
        <ColorScale name="goldDarkA" scale={colors.goldDarkA} />
      </ColorScaleGroup>

      {/* grass */}
      <ColorScaleGroup>
        <ColorScale
          name="grassLight"
          scale={colors.grassLight}
          includeWeights
        />
        <ColorScale name="grassLightA" scale={colors.grassLightA} />
        <ColorScale name="grassDark" scale={colors.grassDark} />
        <ColorScale name="grassDarkA" scale={colors.grassDarkA} />
      </ColorScaleGroup>

      {/* gray */}
      <ColorScaleGroup>
        <ColorScale name="grayLight" scale={colors.grayLight} includeWeights />
        <ColorScale name="grayLightA" scale={colors.grayLightA} />
        <ColorScale name="grayDark" scale={colors.grayDark} />
        <ColorScale name="grayDarkA" scale={colors.grayDarkA} />
      </ColorScaleGroup>

      {/* green */}
      <ColorScaleGroup>
        <ColorScale
          name="greenLight"
          scale={colors.greenLight}
          includeWeights
        />
        <ColorScale name="greenLightA" scale={colors.greenLightA} />
        <ColorScale name="greenDark" scale={colors.greenDark} />
        <ColorScale name="greenDarkA" scale={colors.greenDarkA} />
      </ColorScaleGroup>

      {/* indigo */}
      <ColorScaleGroup>
        <ColorScale
          name="indigoLight"
          scale={colors.indigoLight}
          includeWeights
        />
        <ColorScale name="indigoLightA" scale={colors.indigoLightA} />
        <ColorScale name="indigoDark" scale={colors.indigoDark} />
        <ColorScale name="indigoDarkA" scale={colors.indigoDarkA} />
      </ColorScaleGroup>

      {/* lime */}
      <ColorScaleGroup>
        <ColorScale name="limeLight" scale={colors.limeLight} includeWeights />
        <ColorScale name="limeLightA" scale={colors.limeLightA} />
        <ColorScale name="limeDark" scale={colors.limeDark} />
        <ColorScale name="limeDarkA" scale={colors.limeDarkA} />
      </ColorScaleGroup>

      {/* mauve */}
      <ColorScaleGroup>
        <ColorScale
          name="mauveLight"
          scale={colors.mauveLight}
          includeWeights
        />
        <ColorScale name="mauveLightA" scale={colors.mauveLightA} />
        <ColorScale name="mauveDark" scale={colors.mauveDark} />
        <ColorScale name="mauveDarkA" scale={colors.mauveDarkA} />
      </ColorScaleGroup>

      {/* mint */}
      <ColorScaleGroup>
        <ColorScale name="mintLight" scale={colors.mintLight} includeWeights />
        <ColorScale name="mintLightA" scale={colors.mintLightA} />
        <ColorScale name="mintDark" scale={colors.mintDark} />
        <ColorScale name="mintDarkA" scale={colors.mintDarkA} />
      </ColorScaleGroup>

      {/* olive */}
      <ColorScaleGroup>
        <ColorScale
          name="oliveLight"
          scale={colors.oliveLight}
          includeWeights
        />
        <ColorScale name="oliveLightA" scale={colors.oliveLightA} />
        <ColorScale name="oliveDark" scale={colors.oliveDark} />
        <ColorScale name="oliveDarkA" scale={colors.oliveDarkA} />
      </ColorScaleGroup>

      {/* orange */}
      <ColorScaleGroup>
        <ColorScale
          name="orangeLight"
          scale={colors.orangeLight}
          includeWeights
        />
        <ColorScale name="orangeLightA" scale={colors.orangeLightA} />
        <ColorScale name="orangeDark" scale={colors.orangeDark} />
        <ColorScale name="orangeDarkA" scale={colors.orangeDarkA} />
      </ColorScaleGroup>

      {/* pink */}
      <ColorScaleGroup>
        <ColorScale name="pinkLight" scale={colors.pinkLight} includeWeights />
        <ColorScale name="pinkLightA" scale={colors.pinkLightA} />
        <ColorScale name="pinkDark" scale={colors.pinkDark} />
        <ColorScale name="pinkDarkA" scale={colors.pinkDarkA} />
      </ColorScaleGroup>

      {/* plum */}
      <ColorScaleGroup>
        <ColorScale name="plumLight" scale={colors.plumLight} includeWeights />
        <ColorScale name="plumLightA" scale={colors.plumLightA} />
        <ColorScale name="plumDark" scale={colors.plumDark} />
        <ColorScale name="plumDarkA" scale={colors.plumDarkA} />
      </ColorScaleGroup>

      {/* purple */}
      <ColorScaleGroup>
        <ColorScale
          name="purpleLight"
          scale={colors.purpleLight}
          includeWeights
        />
        <ColorScale name="purpleLightA" scale={colors.purpleLightA} />
        <ColorScale name="purpleDark" scale={colors.purpleDark} />
        <ColorScale name="purpleDarkA" scale={colors.purpleDarkA} />
      </ColorScaleGroup>

      {/* red */}
      <ColorScaleGroup>
        <ColorScale name="redLight" scale={colors.redLight} includeWeights />
        <ColorScale name="redLightA" scale={colors.redLightA} />
        <ColorScale name="redDark" scale={colors.redDark} />
        <ColorScale name="redDarkA" scale={colors.redDarkA} />
      </ColorScaleGroup>

      {/* sage */}
      <ColorScaleGroup>
        <ColorScale name="sageLight" scale={colors.sageLight} includeWeights />
        <ColorScale name="sageLightA" scale={colors.sageLightA} />
        <ColorScale name="sageDark" scale={colors.sageDark} />
        <ColorScale name="sageDarkA" scale={colors.sageDarkA} />
      </ColorScaleGroup>

      {/* sand */}
      <ColorScaleGroup>
        <ColorScale name="sandLight" scale={colors.sandLight} includeWeights />
        <ColorScale name="sandLightA" scale={colors.sandLightA} />
        <ColorScale name="sandDark" scale={colors.sandDark} />
        <ColorScale name="sandDarkA" scale={colors.sandDarkA} />
      </ColorScaleGroup>

      {/* sky */}
      <ColorScaleGroup>
        <ColorScale name="skyLight" scale={colors.skyLight} includeWeights />
        <ColorScale name="skyLightA" scale={colors.skyLightA} />
        <ColorScale name="skyDark" scale={colors.skyDark} />
        <ColorScale name="skyDarkA" scale={colors.skyDarkA} />
      </ColorScaleGroup>

      {/* slate */}
      <ColorScaleGroup>
        <ColorScale
          name="slateLight"
          scale={colors.slateLight}
          includeWeights
        />
        <ColorScale name="slateLightA" scale={colors.slateLightA} />
        <ColorScale name="slateDark" scale={colors.slateDark} />
        <ColorScale name="slateDarkA" scale={colors.slateDarkA} />
      </ColorScaleGroup>

      {/* teal */}
      <ColorScaleGroup>
        <ColorScale name="tealLight" scale={colors.tealLight} includeWeights />
        <ColorScale name="tealLightA" scale={colors.tealLightA} />
        <ColorScale name="tealDark" scale={colors.tealDark} />
        <ColorScale name="tealDarkA" scale={colors.tealDarkA} />
      </ColorScaleGroup>

      {/* tomato */}
      <ColorScaleGroup>
        <ColorScale
          name="tomatoLight"
          scale={colors.tomatoLight}
          includeWeights
        />
        <ColorScale name="tomatoLightA" scale={colors.tomatoLightA} />
        <ColorScale name="tomatoDark" scale={colors.tomatoDark} />
        <ColorScale name="tomatoDarkA" scale={colors.tomatoDarkA} />
      </ColorScaleGroup>

      {/* violet */}
      <ColorScaleGroup>
        <ColorScale
          name="violetLight"
          scale={colors.violetLight}
          includeWeights
        />
        <ColorScale name="violetLightA" scale={colors.violetLightA} />
        <ColorScale name="violetDark" scale={colors.violetDark} />
        <ColorScale name="violetDarkA" scale={colors.violetDarkA} />
      </ColorScaleGroup>

      {/* yellow */}
      <ColorScaleGroup>
        <ColorScale
          name="yellowLight"
          scale={colors.yellowLight}
          includeWeights
        />
        <ColorScale name="yellowLightA" scale={colors.yellowLightA} />
        <ColorScale name="yellowDark" scale={colors.yellowDark} />
        <ColorScale name="yellowDarkA" scale={colors.yellowDarkA} />
      </ColorScaleGroup>
    </div>
  )
}

export default ColorPalette
