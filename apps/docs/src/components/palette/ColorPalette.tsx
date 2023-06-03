'use client'

import * as React from 'react'

import { colors } from 'tailwindcss-radix-colors-plugin'
import ColorScale from './ColorScale'
import ColorScaleGroup from './ColorScaleGroup'

const ColorPalette = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* AMBER */}
      <ColorScaleGroup name="Amber">
        <ColorScale name="amberLight" scale={colors.amberLight} />
        <ColorScale name="amberLightA" scale={colors.amberLightA} />
        <ColorScale name="amberDark" scale={colors.amberDark} />
        <ColorScale name="amberDarkA" scale={colors.amberDarkA} />
      </ColorScaleGroup>

      {/* BLUE */}
      <ColorScaleGroup name="Blue">
        <ColorScale name="blueLight" scale={colors.blueLight} />
        <ColorScale name="blueLightA" scale={colors.blueLightA} />
        <ColorScale name="blueDark" scale={colors.blueDark} />
        <ColorScale name="blueDarkA" scale={colors.blueDarkA} />
      </ColorScaleGroup>

      {/* BRONZE */}
      <ColorScaleGroup name="Bronze">
        <ColorScale name="bronzeLight" scale={colors.bronzeLight} />
        <ColorScale name="bronzeLightA" scale={colors.bronzeLightA} />
        <ColorScale name="bronzeDark" scale={colors.bronzeDark} />
        <ColorScale name="bronzeDarkA" scale={colors.bronzeDarkA} />
      </ColorScaleGroup>

      {/* BROWN */}
      <ColorScaleGroup name="Brown">
        <ColorScale name="brownLight" scale={colors.brownLight} />
        <ColorScale name="brownLightA" scale={colors.brownLightA} />
        <ColorScale name="brownDark" scale={colors.brownDark} />
        <ColorScale name="brownDarkA" scale={colors.brownDarkA} />
      </ColorScaleGroup>

      {/* crimson */}
      <ColorScaleGroup name="Crimson">
        <ColorScale name="crimsonLight" scale={colors.crimsonLight} />
        <ColorScale name="crimsonLightA" scale={colors.crimsonLightA} />
        <ColorScale name="crimsonDark" scale={colors.crimsonDark} />
        <ColorScale name="crimsonDarkA" scale={colors.crimsonDarkA} />
      </ColorScaleGroup>

      {/* cyan */}
      <ColorScaleGroup name="Cyan">
        <ColorScale name="cyanLight" scale={colors.cyanLight} />
        <ColorScale name="cyanLightA" scale={colors.cyanLightA} />
        <ColorScale name="cyanDark" scale={colors.cyanDark} />
        <ColorScale name="cyanDarkA" scale={colors.cyanDarkA} />
      </ColorScaleGroup>

      {/* gold */}
      <ColorScaleGroup name="Gold">
        <ColorScale name="goldLight" scale={colors.goldLight} />
        <ColorScale name="goldLightA" scale={colors.goldLightA} />
        <ColorScale name="goldDark" scale={colors.goldDark} />
        <ColorScale name="goldDarkA" scale={colors.goldDarkA} />
      </ColorScaleGroup>

      {/* grass */}
      <ColorScaleGroup name="Grass">
        <ColorScale name="grassLight" scale={colors.grassLight} />
        <ColorScale name="grassLightA" scale={colors.grassLightA} />
        <ColorScale name="grassDark" scale={colors.grassDark} />
        <ColorScale name="grassDarkA" scale={colors.grassDarkA} />
      </ColorScaleGroup>

      {/* gray */}
      <ColorScaleGroup name="Gray">
        <ColorScale name="grayLight" scale={colors.grayLight} />
        <ColorScale name="grayLightA" scale={colors.grayLightA} />
        <ColorScale name="grayDark" scale={colors.grayDark} />
        <ColorScale name="grayDarkA" scale={colors.grayDarkA} />
      </ColorScaleGroup>

      {/* green */}
      <ColorScaleGroup name="Green">
        <ColorScale name="greenLight" scale={colors.greenLight} />
        <ColorScale name="greenLightA" scale={colors.greenLightA} />
        <ColorScale name="greenDark" scale={colors.greenDark} />
        <ColorScale name="greenDarkA" scale={colors.greenDarkA} />
      </ColorScaleGroup>

      {/* indigo */}
      <ColorScaleGroup name="Indigo">
        <ColorScale name="indigoLight" scale={colors.indigoLight} />
        <ColorScale name="indigoLightA" scale={colors.indigoLightA} />
        <ColorScale name="indigoDark" scale={colors.indigoDark} />
        <ColorScale name="indigoDarkA" scale={colors.indigoDarkA} />
      </ColorScaleGroup>

      {/* lime */}
      <ColorScaleGroup name="Lime">
        <ColorScale name="limeLight" scale={colors.limeLight} />
        <ColorScale name="limeLightA" scale={colors.limeLightA} />
        <ColorScale name="limeDark" scale={colors.limeDark} />
        <ColorScale name="limeDarkA" scale={colors.limeDarkA} />
      </ColorScaleGroup>

      {/* mauve */}
      <ColorScaleGroup name="Mauve">
        <ColorScale name="mauveLight" scale={colors.mauveLight} />
        <ColorScale name="mauveLightA" scale={colors.mauveLightA} />
        <ColorScale name="mauveDark" scale={colors.mauveDark} />
        <ColorScale name="mauveDarkA" scale={colors.mauveDarkA} />
      </ColorScaleGroup>

      {/* mint */}
      <ColorScaleGroup name="Mint">
        <ColorScale name="mintLight" scale={colors.mintLight} />
        <ColorScale name="mintLightA" scale={colors.mintLightA} />
        <ColorScale name="mintDark" scale={colors.mintDark} />
        <ColorScale name="mintDarkA" scale={colors.mintDarkA} />
      </ColorScaleGroup>

      {/* olive */}
      <ColorScaleGroup name="Olive">
        <ColorScale name="oliveLight" scale={colors.oliveLight} />
        <ColorScale name="oliveLightA" scale={colors.oliveLightA} />
        <ColorScale name="oliveDark" scale={colors.oliveDark} />
        <ColorScale name="oliveDarkA" scale={colors.oliveDarkA} />
      </ColorScaleGroup>

      {/* orange */}
      <ColorScaleGroup name="Orange">
        <ColorScale name="orangeLight" scale={colors.orangeLight} />
        <ColorScale name="orangeLightA" scale={colors.orangeLightA} />
        <ColorScale name="orangeDark" scale={colors.orangeDark} />
        <ColorScale name="orangeDarkA" scale={colors.orangeDarkA} />
      </ColorScaleGroup>

      {/* pink */}
      <ColorScaleGroup name="Pink">
        <ColorScale name="pinkLight" scale={colors.pinkLight} />
        <ColorScale name="pinkLightA" scale={colors.pinkLightA} />
        <ColorScale name="pinkDark" scale={colors.pinkDark} />
        <ColorScale name="pinkDarkA" scale={colors.pinkDarkA} />
      </ColorScaleGroup>

      {/* plum */}
      <ColorScaleGroup name="Plum">
        <ColorScale name="plumLight" scale={colors.plumLight} />
        <ColorScale name="plumLightA" scale={colors.plumLightA} />
        <ColorScale name="plumDark" scale={colors.plumDark} />
        <ColorScale name="plumDarkA" scale={colors.plumDarkA} />
      </ColorScaleGroup>

      {/* purple */}
      <ColorScaleGroup name="Purple">
        <ColorScale name="purpleLight" scale={colors.purpleLight} />
        <ColorScale name="purpleLightA" scale={colors.purpleLightA} />
        <ColorScale name="purpleDark" scale={colors.purpleDark} />
        <ColorScale name="purpleDarkA" scale={colors.purpleDarkA} />
      </ColorScaleGroup>

      {/* red */}
      <ColorScaleGroup name="Red">
        <ColorScale name="redLight" scale={colors.redLight} />
        <ColorScale name="redLightA" scale={colors.redLightA} />
        <ColorScale name="redDark" scale={colors.redDark} />
        <ColorScale name="redDarkA" scale={colors.redDarkA} />
      </ColorScaleGroup>

      {/* sage */}
      <ColorScaleGroup name="Sage">
        <ColorScale name="sageLight" scale={colors.sageLight} />
        <ColorScale name="sageLightA" scale={colors.sageLightA} />
        <ColorScale name="sageDark" scale={colors.sageDark} />
        <ColorScale name="sageDarkA" scale={colors.sageDarkA} />
      </ColorScaleGroup>

      {/* sand */}
      <ColorScaleGroup name="Sand">
        <ColorScale name="sandLight" scale={colors.sandLight} />
        <ColorScale name="sandLightA" scale={colors.sandLightA} />
        <ColorScale name="sandDark" scale={colors.sandDark} />
        <ColorScale name="sandDarkA" scale={colors.sandDarkA} />
      </ColorScaleGroup>

      {/* sky */}
      <ColorScaleGroup name="Sky">
        <ColorScale name="skyLight" scale={colors.skyLight} />
        <ColorScale name="skyLightA" scale={colors.skyLightA} />
        <ColorScale name="skyDark" scale={colors.skyDark} />
        <ColorScale name="skyDarkA" scale={colors.skyDarkA} />
      </ColorScaleGroup>

      {/* slate */}
      <ColorScaleGroup name="Slate">
        <ColorScale name="slateLight" scale={colors.slateLight} />
        <ColorScale name="slateLightA" scale={colors.slateLightA} />
        <ColorScale name="slateDark" scale={colors.slateDark} />
        <ColorScale name="slateDarkA" scale={colors.slateDarkA} />
      </ColorScaleGroup>

      {/* teal */}
      <ColorScaleGroup name="Teal">
        <ColorScale name="tealLight" scale={colors.tealLight} />
        <ColorScale name="tealLightA" scale={colors.tealLightA} />
        <ColorScale name="tealDark" scale={colors.tealDark} />
        <ColorScale name="tealDarkA" scale={colors.tealDarkA} />
      </ColorScaleGroup>

      {/* tomato */}
      <ColorScaleGroup name="Tomato">
        <ColorScale name="tomatoLight" scale={colors.tomatoLight} />
        <ColorScale name="tomatoLightA" scale={colors.tomatoLightA} />
        <ColorScale name="tomatoDark" scale={colors.tomatoDark} />
        <ColorScale name="tomatoDarkA" scale={colors.tomatoDarkA} />
      </ColorScaleGroup>

      {/* violet */}
      <ColorScaleGroup name="Violet">
        <ColorScale name="violetLight" scale={colors.violetLight} />
        <ColorScale name="violetLightA" scale={colors.violetLightA} />
        <ColorScale name="violetDark" scale={colors.violetDark} />
        <ColorScale name="violetDarkA" scale={colors.violetDarkA} />
      </ColorScaleGroup>

      {/* yellow */}
      <ColorScaleGroup name="Yellow">
        <ColorScale name="yellowLight" scale={colors.yellowLight} />
        <ColorScale name="yellowLightA" scale={colors.yellowLightA} />
        <ColorScale name="yellowDark" scale={colors.yellowDark} />
        <ColorScale name="yellowDarkA" scale={colors.yellowDarkA} />
      </ColorScaleGroup>
    </div>
  )
}

export default ColorPalette
