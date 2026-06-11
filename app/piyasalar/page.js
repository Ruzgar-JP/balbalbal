import Link from 'next/link'
import { ArrowRight, TrendingUp, Layers, BarChart3, LineChart, Activity, ChevronRight } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'
import SectionHeading from '@/components/site/section-heading'

export const metadata = { title: 'Piyasalar — 1.500+ Enstrüman, 5 Varlık Sınıfı' }

const categories = [
  { icon: TrendingUp, name: 'Forex', count: '60+ döviz çifti', desc: 'Major, minor ve egzotik döviz paritelerinde 0.0 pip’ten başlayan spreadler.', href: '/piyasalar/forex' },
  { icon: Layers, name: 'Emtialar', count: '20+ ürün', desc: 'Altın, gümüş, platin, palladium, petrol, doğalgaz ve bakır CFD’leri.', href: '/piyasalar/emtialar' },
  { icon: BarChart3, name: 'Endeksler', count: '25+ endeks', desc: 'S&P 500, NASDAQ, DAX 40, FTSE 100, Nikkei 225, BIST 100 dahil küresel endeksler.', href: '/piyasalar/endeksler' },
  { icon: LineChart, name: 'Hisseler', count: '1.000+ hisse', desc: 'ABD, Avrupa ve Asya borsalarından popüler hisse senedi CFD’leri.', href: '/piyasalar/hisseler' },
  { icon: Activity, name: 'Kripto Paralar', count: '50+ kripto', desc: 'Bitcoin, Ethereum, Solana ve daha fazlası — 7/24 işlem, manipülasyonsuz fiyatlama.', href: '/piyasalar/kripto' },
]

const highlights = [
  { title: 'Tier-1 Likidite', desc: '20+ banka ve ECN sağlayıcısından derin emir defteri ve dar spreadler.' },
  { title: 'Tek Hesap', desc: 'Tüm varlık sınıflarına tek hesap ve tek bakiye üzerinden erişim.' },
  { title: 'Geniş Saatler', desc: 'Döviz 24/5, kripto 24/7. Pre/After hours hisse işlemleri.' },
  { title: 'Şeffaf Fiyatlama', desc: 'Gizli komisyon yok. Tüm spread ve komisyon detayları web sitemizde.' },
]

export default function PiyasalarPage() {
  return (
    <>
      <PageHero
        eyebrow="Tüm Piyasalar"
        title={<>5 varlık sınıfı, <span className="text-gradient-accent">1.500+</span> enstrüman</>}
        description="Tek bir hesap üzerinden küresel forex, emtia, endeks, hisse senedi ve kripto piyasalarına erişin. Tier-1 banka likiditesi, anlık emir yürütme ve şeffaf fiyatlama."
      />

      {/* Category grid */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <Link key={c.name} href={c.href} className="surface-card surface-card-hover p-6 group">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/15 to-brand-success/10 border border-brand-accent/20">
                  <c.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <span className="text-xs font-medium text-brand-accent">{c.count}</span>
              </div>
              <div className="mt-4 text-xl font-semibold text-brand-primary">{c.name}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-brand-accent group-hover:translate-x-1 transition-transform">
                İncele <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-12">
        <SectionHeading eyebrow="Avantajlar" title="Novatrix Markets’ı fark kılan özellikler" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <div key={h.title} className="surface-card p-5">
              <div className="text-base font-semibold text-brand-primary">{h.title}</div>
              <p className="mt-2 text-sm text-slate-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
