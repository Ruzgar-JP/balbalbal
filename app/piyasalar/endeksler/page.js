import Link from 'next/link'
import { ArrowRight, Globe2, Clock, BarChart3, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Endeksler — S&P 500, NASDAQ, DAX, BIST 100' }

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Endeksler — S&P 500, NASDAQ, DAX, BIST 100"
        title={<>Küresel <span className="text-gradient-accent">borsa endeksleri</span> tek hesapta</>}
        description="25+ küresel hisse senedi endeksinde rekabetçi spread ve düşük marj ile uzun ve kısa pozisyon alın."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/iletisim?live=1" className="btn-accent inline-flex h-11 items-center rounded-md px-5 text-sm">Gerçek Hesap Aç <ArrowRight className="ml-2 h-4 w-4" /></Link>
          <Link href="/iletisim?demo=1" className="inline-flex h-11 items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-5">Demo ile Dene</Link>
        </div>
      </PageHero>

      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Globe2 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Avantajlar</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {['Tek işlemle 100+ hisseye maruz kalma', 'Düşük spread (S&P 500: 0.4 puan)', '1:100 kaldıraç', 'Uzun ve kısa pozisyon', 'Marj çağrısı %1’den başlar'].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" /><span className="text-slate-700">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Clock className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">İşlem Saatleri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['S&P 500 / NASDAQ: 02:00 — 24:00', 'Dow Jones 30: 02:00 — 24:00', 'DAX 40: 09:15 — 23:00', 'FTSE 100: 10:00 — 23:00', 'BIST 100: 10:00 — 18:30'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><BarChart3 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Piyasa Bilgileri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['S&P 500 min spread: 0.4 puan', 'NASDAQ 100 min spread: 1.0 puan', 'DAX 40 min spread: 0.8 puan', 'BIST 100 min spread: 7 puan', 'Lot büyüklüğü: 1 endeks puanı'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
