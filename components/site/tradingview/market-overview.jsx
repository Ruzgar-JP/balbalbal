'use client'
import { MarketOverview as Lib } from 'react-ts-tradingview-widgets'

const defaultTabs = [
  {
    title: 'Endeksler',
    symbols: [
      { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
      { s: 'FOREXCOM:NSXUSD', d: 'NASDAQ 100' },
      { s: 'FOREXCOM:DJI', d: 'Dow Jones' },
      { s: 'INDEX:DEU40', d: 'DAX' },
      { s: 'INDEX:UKX', d: 'FTSE 100' },
      { s: 'INDEX:NKY', d: 'Nikkei 225' },
      { s: 'BIST:XU100', d: 'BIST 100' },
    ],
  },
  {
    title: 'Forex',
    symbols: [
      { s: 'FX:EURUSD', d: 'EUR/USD' },
      { s: 'FX:GBPUSD', d: 'GBP/USD' },
      { s: 'FX:USDJPY', d: 'USD/JPY' },
      { s: 'FX:AUDUSD', d: 'AUD/USD' },
      { s: 'FX:USDCAD', d: 'USD/CAD' },
      { s: 'FX:USDCHF', d: 'USD/CHF' },
      { s: 'FX:NZDUSD', d: 'NZD/USD' },
    ],
  },
  {
    title: 'Emtialar',
    symbols: [
      { s: 'OANDA:XAUUSD', d: 'Altın' },
      { s: 'OANDA:XAGUSD', d: 'Gümüş' },
      { s: 'TVC:USOIL', d: 'WTI Petrol' },
      { s: 'TVC:UKOIL', d: 'Brent Petrol' },
      { s: 'NYMEX:NG1!', d: 'Doğalgaz' },
      { s: 'COMEX:HG1!', d: 'Bakır' },
    ],
  },
  {
    title: 'Kripto',
    symbols: [
      { s: 'BITSTAMP:BTCUSD', d: 'Bitcoin' },
      { s: 'BITSTAMP:ETHUSD', d: 'Ethereum' },
      { s: 'BINANCE:SOLUSDT', d: 'Solana' },
      { s: 'BINANCE:BNBUSDT', d: 'BNB' },
      { s: 'BINANCE:XRPUSDT', d: 'Ripple' },
      { s: 'BINANCE:ADAUSDT', d: 'Cardano' },
    ],
  },
]

export default function MarketOverview({ tabs = defaultTabs, height = 540 }) {
  return (
    <Lib
      colorTheme="dark"
      dateRange="12M"
      locale="tr"
      isTransparent
      showChart
      showSymbolLogo
      showFloatingTooltip
      width="100%"
      height={height}
      plotLineColorGrowing="rgba(0, 224, 138, 1)"
      plotLineColorFalling="rgba(255, 77, 109, 1)"
      belowLineFillColorGrowing="rgba(0, 224, 138, 0.12)"
      belowLineFillColorFalling="rgba(255, 77, 109, 0.12)"
      symbolActiveColor="rgba(0, 194, 255, 0.15)"
      tabs={tabs}
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
