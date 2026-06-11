'use client'
import { CryptoCoinsHeatmap } from 'react-ts-tradingview-widgets'

export default function CryptoHeatmap({ height = 540 }) {
  return (
    <CryptoCoinsHeatmap
      dataSource="Crypto"
      blockSize="market_cap_calc"
      blockColor="24h_close_change|5"
      locale="tr"
      colorTheme="dark"
      hasTopBar
      isDataSetEnabled
      isZoomEnabled
      hasSymbolTooltip
      isMonoSize={false}
      width="100%"
      height={height}
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
