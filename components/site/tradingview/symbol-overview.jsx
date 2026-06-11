'use client'
import { SymbolOverview as Lib } from 'react-ts-tradingview-widgets'

export default function SymbolOverview({
  symbols = [['EUR/USD', 'FX:EURUSD|1D']],
  height = 420,
}) {
  return (
    <Lib
      symbols={symbols}
      colorTheme="dark"
      locale="tr"
      isTransparent
      autosize={false}
      width="100%"
      height={height}
      chartOnly={false}
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
