import Link from 'next/link'
import { ArrowRight, Globe2, Clock, BarChart3, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Kripto Para CFD — Bitcoin, Ethereum ve 50+ Kripto' }

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Kripto Para CFD — Bitcoin, Ethereum ve 50+ Kripto"
        title={<>7/24 <span className="text-gradient-accent">kripto</span> CFD işlem deneyimi</>}
        description="Bitcoin, Ethereum, Solana ve 50+ dijital varlıkta kaldıraçlı CFD işlemi. Cüzdan kurulumu yok, anahtar saklama derdi yok."
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
              {['50+ kripto CFD', '7/24 işlem (haftasonu dahil)', '1:20 kaldıraç', 'Cüzdan / anahtar derdi yok', 'Uzun ve kısa pozisyon'].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" /><span className="text-slate-700">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Clock className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">İşlem Saatleri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['BTC / ETH: 7/24 (haftasonu dahil)', 'Diğer kriptolar: 7/24', 'Kısa bakım pencereleri olabilir', 'Çarşamba 02:00 — 02:30 swap kesim', 'Tüm seanslarda likidite mevcut'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><BarChart3 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Piyasa Bilgileri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['BTC min spread: 25 USD', 'ETH min spread: 3.5 USD', 'SOL min spread: 0.10 USD', 'Min işlem: 0.01 lot', 'Yüksek volatilite — risk yönetimi şart'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
