'use client'
import { EconomicCalendar as Lib } from 'react-ts-tradingview-widgets'

export default function EconomicCalendar({ height = 540 }) {
  return (
    <Lib
      width="100%"
      height={height}
      colorTheme="dark"
      isTransparent
      locale="tr"
      importanceFilter="-1,0,1"
      copyrightStyles={{ parent: { display: 'none' } }}
    />
  )
}
