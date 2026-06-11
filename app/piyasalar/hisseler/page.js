import Link from 'next/link'
import { ArrowRight, Globe2, Clock, BarChart3, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Hisse Senedi CFD — 1.000+ Hisse ABD & Avrupa' }

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hisse Senedi CFD — 1.000+ Hisse ABD & Avrupa"
        title={<>1.000+ <span className="text-gradient-accent">hisse senedi</span> CFD’si</>}
        description="Apple, Microsoft, Tesla, NVIDIA gibi dünyanın en büyük şirketlerinde kaldıraçlı CFD işlemi yapın."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/iletisim?live=1" className="btn-accent inline-flex h-11 items-center rounded-md px-5 text-sm">Gerçek Hesap Aç <ArrowRight className="ml-2 h-4 w-4" /></Link>
          <Link href="/iletisim?demo=1" className="inline-flex h-11 items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-medium text-brand-primary hover:bg-slate-50">Demo ile Dene</Link>
        </div>
      </PageHero>

      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Globe2 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Avantajlar</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {['1.000+ hisse senedi CFD’si', 'ABD, AB ve Asya borsaları', 'Düşük komisyon (0.02 USD/hisse)', '1:20 kaldıraç', 'Kısa pozisyon imkânı'].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" /><span className="text-slate-700">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Clock className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">İşlem Saatleri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['NYSE & NASDAQ: 16:30 — 23:00', 'Pre-market: 11:00 — 16:30', 'After-hours: 23:00 — 03:00', 'LSE: 10:00 — 18:30', 'XETRA: 10:00 — 18:30'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><BarChart3 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Piyasa Bilgileri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Min komisyon: 0.02 USD/hisse', 'Min işlem: 1 hisse', 'Temettü ödemeleri yansıtılır', 'Bölünme & birleşme ayarlamaları', 'Marj: %5 — %20'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
