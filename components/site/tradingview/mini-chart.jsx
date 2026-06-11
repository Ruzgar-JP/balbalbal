'use client'
import { MiniChart as Lib } from 'react-ts-tradingview-widgets'

export default function MiniChart({
  symbol = 'FX:EURUSD',
  dateRange = '12M',
  height = 220,
}) {
  return (
    <Lib
      symbol={symbol}
      width="100%"
      height={height}
      dateRange={dateRange}
      colorTheme="dark"
      isTransparent
      autosize={false}
      locale="tr"
      trendLineColor="rgba(0, 194, 255, 1)"
      underLineColor="rgba(0, 194, 255, 0.18)"
      underLineBottomColor="rgba(0, 194, 255, 0)"
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
