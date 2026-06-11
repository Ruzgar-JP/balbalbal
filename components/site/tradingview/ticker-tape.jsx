'use client'
import { TickerTape as Lib } from 'react-ts-tradingview-widgets'

const defaults = [
  { proName: 'FX:EURUSD', title: 'EUR/USD' },
  { proName: 'FX:GBPUSD', title: 'GBP/USD' },
  { proName: 'FX:USDJPY', title: 'USD/JPY' },
  { proName: 'FX:AUDUSD', title: 'AUD/USD' },
  { proName: 'FX:USDCAD', title: 'USD/CAD' },
  { proName: 'OANDA:XAUUSD', title: 'XAU/USD' },
  { proName: 'OANDA:XAGUSD', title: 'XAG/USD' },
  { proName: 'BITSTAMP:BTCUSD', title: 'BTC/USD' },
  { proName: 'BITSTAMP:ETHUSD', title: 'ETH/USD' },
  { proName: 'TVC:DXY', title: 'Dolar Endeksi' },
  { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
  { proName: 'FOREXCOM:NSXUSD', title: 'NASDAQ 100' },
]

export default function TickerTape({ symbols = defaults }) {
  return (
    <Lib
      symbols={symbols}
      showSymbolLogo
      isTransparent
      displayMode="adaptive"
      colorTheme="light"
      locale="tr"
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
