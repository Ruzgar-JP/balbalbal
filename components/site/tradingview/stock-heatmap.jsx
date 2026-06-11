'use client'
import { StockHeatmap } from 'react-ts-tradingview-widgets'

export default function StockHeatMap({ dataSource = 'SPX500', height = 540 }) {
  return (
    <StockHeatmap
      exchanges={[]}
      dataSource={dataSource}
      grouping="sector"
      blockSize="market_cap_basic"
      blockColor="change"
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
