'use client'
import { ForexHeatMap } from 'react-ts-tradingview-widgets'

export default function ForexHeatmap({ height = 480 }) {
  return (
    <ForexHeatMap
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
