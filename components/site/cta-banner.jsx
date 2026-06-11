import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="container py-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary p-8 md:p-14 text-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-success/20 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              60 saniyede hesap açın
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Küresel piyasalara <span className="text-gradient-accent">tek hesapla</span> erişin.
            </h3>
            <p className="mt-4 text-white/75 max-w-lg">
              0.0 pip&apos;ten başlayan spreadler, kurumsal seviye likidite ve 7/24 Türkçe destek ile bugün işlem yapmaya başlayın.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/iletisim?live=1" className="btn-accent inline-flex h-11 items-center rounded-md px-5 text-sm">
                Gerçek Hesap Aç <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <Link href="/iletisim?demo=1" className="inline-flex h-11 items-center rounded-md border border-white/30 bg-white/10 px-5 text-sm font-medium text-white hover:bg-white/20">
                Demo ile Dene
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <ShieldCheck className="h-6 w-6 text-brand-success" />
              <div className="mt-3 text-2xl font-bold text-white">DAR SPREADLER</div>
              <div className="text-xs text-white/70 mt-1">Sektördeki en düşük spreadler.</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Zap className="h-6 w-6 text-brand-accent" />
              <div className="mt-3 text-2xl font-bold text-white">5/24</div>
              <div className="text-xs text-white/70 mt-1">Her zaman rehberlik ve destek için yanındayız.</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">Doğrudan Piyasa Erişimi</div>
                  <div className="text-xs text-white/70 mt-1">Emirlerinizi beklemeden doğrudan likidite havuzlarına iletin. Slippage (fiyat kayması) riskini minimuma indirin.</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">1:500</div>
                  <div className="text-xs text-white/70 mt-1">Maksimum kaldıraç</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
