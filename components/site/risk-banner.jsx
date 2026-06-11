import { ShieldAlert } from 'lucide-react'

export default function RiskBanner() {
  return (
    <div className="w-full border-b border-slate-200 bg-slate-50 text-[11px] md:text-xs text-slate-600">
      <div className="container flex items-center justify-center gap-2 py-2 text-center">
        <ShieldAlert className="h-3.5 w-3.5 text-brand-accent shrink-0" />
        <p className="leading-snug"><span className="text-brand-primary font-semibold">Risk Uyarısı:</span> CFD ürünleri kaldıraçlıdır ve yüksek risk içerir. Kaybetmeyi göze alabileceğiniz tutar ile işlem yapın.</p>
      </div>
    </div>
  )
}
