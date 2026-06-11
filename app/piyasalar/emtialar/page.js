import Link from 'next/link'
import { ArrowRight, Globe2, Clock, BarChart3, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Emtialar — Altın, Gümüş, Petrol ve Daha Fazlası' }

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Emtialar — Altın, Gümüş, Petrol ve Daha Fazlası"
        title={<><span className="text-gradient-accent">Kıymetli madenler</span>, enerji ve endüstriyel emtialar</>}
        description="Altın, gümüş, platin, petrol, doğalgaz ve bakır gibi 20+ emtia CFD’sinde kaldıraçlı işlem yapın."
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
              {['Enflasyona karşı doğal koruma', 'Portföy çeşitlendirme', '1:200 kaldıraç (kıymetli madenler)', 'Düşük spreadler', 'Long & Short pozisyon imkânı'].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" /><span className="text-slate-700">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Clock className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">İşlem Saatleri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Altın & Gümüş: Pazartesi 01:00 — Cumartesi 00:00', 'Petrol: Pazartesi 01:00 — Cumartesi 00:00', 'Doğalgaz: 02:00 — 24:00 hafta içi', 'Tarım emtiaları: 17:00 — 02:30', 'Bakır: 02:00 — 02:00 (24 saat)'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><BarChart3 className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Piyasa Bilgileri</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Altın min spread: 15 pip', 'Gümüş min spread: 22 pip', 'WTI Petrol min spread: 3 pip', 'Doğalgaz min spread: 4 pip', 'Lot büyüklüğü: 100 ons (altın)'].map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
