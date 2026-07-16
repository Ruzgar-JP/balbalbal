import Link from 'next/link'
import { Monitor, Smartphone, Globe, Cpu, Layers, CheckCircle2, Sparkles } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'
import SectionHeading from '@/components/site/section-heading'

export const metadata = { title: 'İşlem Platformları — MT4, MT5, cTrader, TradingView' }

const platforms = [
  {
    key: 'mt5',
    name: 'MetaTrader 5',
    badge: 'En Popüler',
    desc: 'MetaQuotes’un yeni nesil platformu. Çoklu varlık sınıfı desteği, gerektiğinde hedging, ekonomik takvim entegrasyonu ve gelişmiş emir türleri.',
    features: [
      '21 zaman dilimi ve 80+ teknik gösterge',
      'MQL5 algoritma desteği ve Strategy Tester',
      'Net pozisyon & hedging modu',
      'Piyasa derinliği (DOM) ve ekonomik takvim',
      'Tek tıkla işlem & masaüstü bildirimler',
      '6 varlık sınıfı için optimize edilmiş',
    ],
  },
  {
    key: 'mt4',
    name: 'MetaTrader 4',
    badge: 'Klasik',
    desc: 'Dünyanın en popüler işlem platformu. Milyonlarca uzman danışman (EA) ve gösterge ile uyumlu, hızlı ve hafif.',
    features: [
      '30+ teknik gösterge ve 9 zaman dilimi',
      'MQL4 ile sonsuz özelleştirme',
      'EA marketplace ve tüm scriptlerle uyumlu',
      '4 emir türü, stop-loss & take-profit',
      'Düşük sistem gereksinimi',
      'Mobil, web ve masaüstü senkronizasyonu',
    ],
  },
  {
    key: 'ctrader',
    name: 'cTrader',
    badge: 'ECN için optimize',
    desc: 'Spotware’in ECN için tasarlanmış platformu. Şeffaf piyasa derinliği, gelişmiş emir türleri ve modern arabirim.',
    features: [
      'Tam DOM (Level II) görünümü',
      'cAlgo ile C# algoritmik işlem',
      'Zıplama emirleri ve advanced take-profit',
      'Mikrosaniye seviye emir yürütme',
      'cTrader Copy ile kopya işlem',
      'Web, masaüstü ve mobil senkron',
    ],
  },
  {
    key: 'tv',
    name: 'TradingView',
    badge: 'Yeni',
    desc: 'Dünyanın en gelişmiş grafik motoru. 100+ gösterge, 50+ çizim aracı ve sosyal trader topluluk üzerinden işlem yapın.',
    features: [
      'Grafikten doğrudan işlem (Trade Now)',
      '100+ gösterge, 50+ çizim aracı',
      'Pine Script ile özel gösterge',
      '50 milyon trader’lık sosyal topluluk',
      'Akililı alarmlar ve bildirimler',
      'Tüm web ve mobil cihazlarda',
    ],
  },
]

export default function PlatformlarPage() {
  return (
    <>
      <PageHero
        eyebrow="İşlem Platformları"
        title={<>Sektörün en güçlü <span className="text-gradient-accent">platformları</span> tek hesapta</>}
        description="MetaTrader 4, MetaTrader 5, cTrader ve TradingView. Favori platformunuzu seçin, Novatrix Markets’in Tier-1 likiditesine bağlanın."
      />

      {/* Platform cards */}
      <section className="container py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {platforms.map((p) => (
            <div key={p.key} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <span className="absolute right-5 top-5 inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-accent">{p.badge}</span>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-success/10 border border-brand-accent/20">
                  <Sparkles className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="text-2xl font-bold text-brand-primary">{p.name}</div>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {[{i:Monitor,l:'Windows'},{i:Monitor,l:'macOS'},{i:Globe,l:'Web'},{i:Smartphone,l:'iOS / Android'}].map((x) => (
                  <span key={x.l} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
                    <x.i className="h-3.5 w-3.5 text-brand-accent" /> {x.l}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link href={`/iletisim?live=1&platform=${p.key}`} className="btn-accent inline-flex h-10 flex-1 items-center justify-center rounded-md text-sm font-semibold">
                  Gerçek Hesap Aç
                </Link>
                <Link href={`/iletisim?demo=1&platform=${p.key}`} className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-slate-300 bg-white text-brand-primary hover:bg-slate-50 text-sm font-semibold">
                  Demo Hesap Aç
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="container py-16">
        <SectionHeading eyebrow="Karşılaştırma" title="Hangi platform sizin için?" />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[860px] text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-4 text-xs uppercase tracking-wider text-slate-600 font-medium">Özellik</th>
                <th className="p-4 text-left text-white font-semibold">MT4</th>
                <th className="p-4 text-left text-white font-semibold">MT5</th>
                <th className="p-4 text-left text-white font-semibold">cTrader</th>
                <th className="p-4 text-left text-white font-semibold">TradingView</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Zaman Dilimleri', '9', '21', 'Sınırsız', 'Sınırsız'],
                ['Teknik Göstergeler', '30', '38', '70+', '100+'],
                ['Algoritmik Dil', 'MQL4', 'MQL5', 'C# (cAlgo)', 'Pine Script'],
                ['Piyasa Derinliği', 'Kısıtlı', 'Var', 'Tam DOM', 'Var'],
                ['Hedging', 'Evet', 'Evet (op.)', 'Evet', 'Evet'],
                ['EA / Bot Desteği', 'Geniş', 'Gelişmiş', 'cBots', 'Pine Script'],
                ['Kopya İşlem', 'Sinyal', 'Sinyal', 'cTrader Copy', '—'],
                ['Mobil App', 'Evet', 'Evet', 'Evet', 'Evet'],
                ['Hesap Türleri', 'Tümü', 'Tümü', 'Raw / VIP', 'Tümü'],
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-white">
                  {row.map((c, j) => (<td key={j} className={j === 0 ? 'p-4 text-slate-600 font-medium' : 'p-4 text-slate-700'}>{c}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
