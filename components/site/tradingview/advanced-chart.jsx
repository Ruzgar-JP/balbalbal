'use client'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

export default function AdvancedChart({
  symbol = 'FX:EURUSD',
  interval = '60',
  height = 560,
}) {
  return (
    <AdvancedRealTimeChart
      symbol={symbol}
      interval={interval}
      timezone="Europe/Istanbul"
      theme="dark"
      style="1"
      locale="tr"
      autosize={false}
      width="100%"
      height={height}
      hide_side_toolbar={false}
      allow_symbol_change
      enable_publishing={false}
      save_image={false}
      withdateranges
      studies={['STD;EMA', 'STD;RSI']}
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
