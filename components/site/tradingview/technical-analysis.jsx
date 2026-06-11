'use client'
import { TechnicalAnalysis as Lib } from 'react-ts-tradingview-widgets'

export default function TechnicalAnalysis({ symbol = 'FX:EURUSD', interval = '1m', height = 450 }) {
  return (
    <Lib
      symbol={symbol}
      interval={interval}
      width="100%"
      height={height}
      isTransparent
      showIntervalTabs
      displayMode="single"
      locale="tr"
      colorTheme="dark"
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
