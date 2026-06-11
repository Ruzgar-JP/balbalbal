import Link from 'next/link'
import { ArrowRight, Globe2, Clock, BarChart3, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Forex — 60+ Döviz Çifti, 0.0 Pip Spread' }

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Forex — 60+ Döviz Çifti, 0.0 Pip Spread"
        title={<>Dünyanın en büyük piyasasında <span className="text-gradient-accent">işlem</span> yapın</>}
        description="Günlük 7.5 trilyon dolar hacme sahip küresel forex piyasasında 60+ döviz çiftine 0.0 pip’ten başlayan spreadler ile erişin."
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
              {['0.0 pip’ten başlayan ham spreadler', 'Tier-1 banka likiditesi', '1:500 kaldıraç', '24/5 kesintisiz işlem', '60+ döviz çifti'].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" /><span className="text-slate-700">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Clock className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">İşlem Saatleri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Pazartesi 00:05 — Cuma 23:55 (TR)', 'Sidney seansı: 23:00 — 08:00', 'Tokyo seansı: 02:00 — 11:00', 'Londra seansı: 10:00 — 19:00', 'New York seansı: 15:00 — 24:00'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><BarChart3 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Piyasa Bilgileri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Günlük hacim: ~7.5 Trilyon USD', 'En likit çift: EUR/USD (~%24 hacim)', 'Standart lot: 100.000 birim', 'Min işlem: 0.01 lot (mikro)', 'Yürütme: STP / ECN'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
