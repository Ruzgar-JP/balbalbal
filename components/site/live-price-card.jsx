'use client'
import MiniChart from '@/components/site/tradingview/mini-chart'
import SingleQuote from '@/components/site/tradingview/single-quote'

/**
 * Premium gradient card that combines TradingView's Single Quote (Bid / Change / %)
 * with a small live-updating area chart. Fully transparent so the parent gradient shines through.
 */
export default function LivePriceCard({ symbol, label }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B2D5B]/40 to-[#071A35]/60 p-4 transition-all hover:border-brand-accent/40 hover:shadow-[0_10px_40px_-15px_rgba(37,99,235,0.55)]">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-accent/10 blur-2xl group-hover:bg-brand-accent/20 transition-all" />
      <div className="relative">
        {label && (
          <div className="flex items-center justify-between mb-1.5">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-accent/90">{label}</div>
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-success shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
          </div>
        )}
        <SingleQuote symbol={symbol} />
        <div className="mt-1 -mx-1">
          <MiniChart symbol={symbol} dateRange="1D" height={120} />
        </div>
      </div>
    </div>
  )
}
