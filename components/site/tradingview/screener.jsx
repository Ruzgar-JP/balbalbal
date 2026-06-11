'use client'
import { Screener as Lib } from 'react-ts-tradingview-widgets'

export default function Screener({ market = 'forex', height = 540, defaultColumn = 'overview' }) {
  return (
    <Lib
      width="100%"
      height={height}
      defaultColumn={defaultColumn}
      defaultScreen="general"
      market={market}
      showToolbar
      colorTheme="dark"
      locale="tr"
      isTransparent
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
