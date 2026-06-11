import Link from 'next/link'
import { CheckCircle2, XCircle, Crown, TrendingUp, Sparkles, Moon, Beaker, ArrowRight } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'
import SectionHeading from '@/components/site/section-heading'

export const metadata = { title: 'Hesap Türleri — Standard, Raw, VIP, İslami ve Demo' }

const accounts = [
  {
    key: 'standard',
    name: 'Standard',
    icon: TrendingUp,
    tagline: 'Yeni başlayan ve dengeli işlem yapanlar için',
    minDeposit: '100 USD',
    spreadFrom: '1.0 pip',
    commission: 'Komisyonsuz',
    leverage: '1:500',
    model: 'STP / Hibrit',
    platforms: 'MT4, MT5, cTrader, TradingView',
    margin: '%0.20',
    swap: 'Standart',
    minLot: '0.01',
    maxLot: '50',
    features: [
      'Komisyonsuz işlem yapısı',
      '60+ döviz çifti ve 1.500+ enstrüman',
      'Anında emir gerçekleşme',
      'Mobil + Web + Masaüstü erişim',
      'Kopya işlem ve EA desteği',
      'Ücretsiz VPS (kalifikasyon koşullarıyla)',
    ],
  },
  {
    key: 'raw',
    name: 'Raw Spread',
    icon: Sparkles,
    highlight: true,
    tagline: 'Profesyonel ve aktif scalper trader için',
    minDeposit: '500 USD',
    spreadFrom: '0.0 pip',
    commission: '3.5 USD / lot (gidiş-dönüş 7 USD)',
    leverage: '1:500',
    model: 'ECN / DMA',
    platforms: 'MT4, MT5, cTrader, TradingView, FIX API',
    margin: '%0.20',
    swap: 'Standart',
    minLot: '0.01',
    maxLot: '100',
    features: [
      'Tier-1 banka likiditesinden ham spread',
      'Düşük gecikme: Equinix LD4 & NY4 sunucular',
      'Scalping, hedging ve EA serbest',
      'Seviye II piyasa derinliği',
      'FIX API ve algoritmik erişim',
      'Kurumsal seviye emir yürütme',
    ],
  },
  {
    key: 'vip',
    name: 'VIP',
    icon: Crown,
    tagline: 'Yüksek hacimli işlem yapan trader & kurumsal müşteri',
    minDeposit: '25.000 USD',
    spreadFrom: '0.0 pip',
    commission: '2.0 USD / lot (gidiş-dönüş 4 USD)',
    leverage: '1:500',
    model: 'ECN / DMA + İndirim',
    platforms: 'Tüm platformlar + Özel API',
    margin: '%0.20',
    swap: 'İndirimli',
    minLot: '0.01',
    maxLot: '500',
    features: [
      'En düşük komisyon yapısı',
      'Adanmış müşteri ilişkileri yöneticisi',
      'Para çekme önceliği (aynı gün)',
      'Premium VPS dahil',
      'Özel piyasa analiz raporları',
      'Etkinlik ve seminerlere özel davet',
    ],
  },
  {
    key: 'islami',
    name: 'İslami (Swap-Free)',
    icon: Moon,
    tagline: 'Faizsiz işlem prensiplerine uygun hesap',
    minDeposit: '100 USD',
    spreadFrom: '1.1 pip',
    commission: 'Komisyonsuz',
    leverage: '1:500',
    model: 'STP / Hibrit',
    platforms: 'MT4, MT5, cTrader, TradingView',
    margin: '%0.20',
    swap: 'Yok (Swap-free)',
    minLot: '0.01',
    maxLot: '50',
    features: [
      'Tüm pozisyonlarda swap (taşıma maliyeti) yoktur',
      'Faiz içermez, Şer’i prensiplere uyumlu',
      'Ek komisyon yansıtılmaz',
      'Tüm varlık sınıflarında geçerli',
      'İstendiği zaman Standard hesaba geçiş',
      'Gizli ücret yoktur',
    ],
  },
  {
    key: 'demo',
    name: 'Demo',
    icon: Beaker,
    tagline: 'Risksiz öğrenme ve strateji testi',
    minDeposit: '0 USD',
    spreadFrom: 'Canlı piyasa',
    commission: 'Gerçek hesabı yansıtır',
    leverage: '1:500 (yapılandırılabilir)',
    model: 'Sanal',
    platforms: 'MT4, MT5, cTrader, TradingView',
    margin: '—',
    swap: '—',
    minLot: '0.01',
    maxLot: '500',
    features: [
      '100.000 USD sanal başlangıç bakiyesi',
      'Gerçek piyasa fiyatları ve canlı veri',
      'Tüm platformlarda kullanılabilir',
      'Strateji ve EA testi için ideal',
      'Bakiye sıfırlama özelliği',
      '90 gün boyunca aktif kalır',
    ],
  },
]

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <span className="text-xs uppercase tracking-wider text-slate-600">{k}</span>
      <span className="text-sm font-semibold text-brand-primary">{v}</span>
    </div>
  )
}

export default function HesapTurleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Hesap Türleri"
        title={<>Stratejinize <span className="text-gradient-accent">uygun</span> hesap yapısı</>}
        description="Yeni başlayanlardan kurumsal trader’lara kadar herkese hitap eden 5 farklı hesap türü. Tüm hesaplar 1.500+ enstrümana, 4 platforma ve 7/24 Türkçe desteğe erişim sağlar."
      />

      {/* Account cards */}
      <section className="container py-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {accounts.map((a) => (
            <div key={a.key} className={`relative rounded-2xl border p-6 ${a.highlight ? 'border-brand-accent/50 bg-gradient-to-b from-brand-accent/10 to-transparent glow-accent' : 'border-slate-200 bg-white'}`}>
              {a.highlight && <span className="absolute -top-2.5 right-4 inline-flex items-center rounded-full bg-brand-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#030B17]">En Popüler</span>}
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-success/10 border border-brand-accent/20">
                  <a.icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-primary">{a.name}</div>
                  <div className="text-xs text-slate-600">{a.tagline}</div>
                </div>
              </div>
              <div className="mt-5">
                <Row k="Min. Yatırım" v={a.minDeposit} />
                <Row k="Spread" v={a.spreadFrom} />
                <Row k="Komisyon" v={a.commission} />
                <Row k="Kaldıraç" v={a.leverage} />
                <Row k="İşlem Modeli" v={a.model} />
                <Row k="Platformlar" v={a.platforms} />
              </div>
              <ul className="mt-5 space-y-2">
                {a.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={a.key === 'demo' ? '/iletisim?demo=1' : `/iletisim?live=1&type=${a.key}`} className={`mt-6 inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-semibold ${a.highlight ? 'btn-accent' : 'border border-slate-300 bg-white text-brand-primary hover:bg-slate-50'}`}>
                {a.key === 'demo' ? 'Demo Hesap Aç' : `${a.name} Hesap Aç`} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section id="fiyatlama" className="container py-16">
        <SectionHeading
          eyebrow="Karşılaştırma"
          title={<>Detaylı <span className="text-gradient-accent">karşılaştırma</span> tablosu</>}
          description="Hesap türleri arasındaki tüm farklılıkları tek bakışta görün."
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[860px] text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-4 text-xs uppercase tracking-wider text-slate-600 font-medium">Özellik</th>
                {accounts.map((a) => (
                  <th key={a.key} className="p-4 text-left text-white font-semibold">{a.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Minimum Yatırım', accounts.map((a) => a.minDeposit)],
                ['Spread (başlangıç)', accounts.map((a) => a.spreadFrom)],
                ['Komisyon', accounts.map((a) => a.commission)],
                ['Maksimum Kaldıraç', accounts.map((a) => a.leverage)],
                ['İşlem Modeli', accounts.map((a) => a.model)],
                ['Marj Çağrısı', accounts.map((a) => a.margin)],
                ['Swap', accounts.map((a) => a.swap)],
                ['Min Lot', accounts.map((a) => a.minLot)],
                ['Max Lot', accounts.map((a) => a.maxLot)],
                ['Platformlar', accounts.map((a) => a.platforms)],
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-white">
                  <td className="p-4 text-slate-600 font-medium">{row[0]}</td>
                  {row[1].map((v, j) => (
                    <td key={j} className="p-4 text-slate-700">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Leverage info */}
      <section id="kaldirac" className="container py-16">
        <SectionHeading
          eyebrow="Kaldıraç & Marj"
          title={<>Şeffaf <span className="text-gradient-accent">marj</span> yapısı</>}
          description="Varlık sınıfı bazında uygulanan kaldıraç oranlarımız tamamen şeffaftır."
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: 'Forex (Major)', leverage: '1:500', margin: '%0.20' },
            { name: 'Forex (Minor/Egzotik)', leverage: '1:200', margin: '%0.50' },
            { name: 'Altın & Gümüş', leverage: '1:200', margin: '%0.50' },
            { name: 'Petrol & Emtia', leverage: '1:100', margin: '%1.00' },
            { name: 'Endeksler', leverage: '1:100', margin: '%1.00' },
            { name: 'Hisseler', leverage: '1:20', margin: '%5.00' },
            { name: 'Kripto Paralar', leverage: '1:20', margin: '%5.00' },
            { name: 'Tahviller', leverage: '1:50', margin: '%2.00' },
          ].map((it) => (
            <div key={it.name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-xs text-slate-600">{it.name}</div>
              <div className="mt-2 text-2xl font-bold text-gradient">{it.leverage}</div>
              <div className="text-xs text-slate-600 mt-1">Marj: {it.margin}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
