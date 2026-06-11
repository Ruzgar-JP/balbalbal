'use client'
import { SingleTicker } from 'react-ts-tradingview-widgets'

export default function SingleQuote({ symbol = 'FX:EURUSD' }) {
  return (
    <SingleTicker
      symbol={symbol}
      isTransparent
      colorTheme="dark"
      locale="tr"
      width="100%"
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
