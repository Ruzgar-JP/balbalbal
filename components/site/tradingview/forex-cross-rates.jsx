'use client'
import { ForexCrossRates as Lib } from 'react-ts-tradingview-widgets'

export default function ForexCrossRates({ height = 420 }) {
  return (
    <Lib
      width="100%"
      height={height}
      currencies={['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD', 'TRY']}
      isTransparent
      colorTheme="dark"
      locale="tr"
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
