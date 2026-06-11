import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './logo'

const sections = [
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'İletişim', href: '/iletisim' },
      { label: 'Kariyer', href: '/hakkimizda#kariyer' },
      { label: 'Ödüller', href: '/hakkimizda#oduller' },
      { label: 'Basın Odası', href: '/hakkimizda#basin' },
    ],
  },
  {
    title: 'İşlem',
    links: [
      { label: 'Hesap Türleri', href: '/hesap-turleri' },
      { label: 'Platformlar', href: '/platformlar' },
      { label: 'Piyasalar', href: '/piyasalar' },
      { label: 'Kaldıraç & Marj', href: '/hesap-turleri#kaldirac' },
      { label: 'Komisyon ve Spread', href: '/hesap-turleri#fiyatlama' },
    ],
  },
  {
    title: 'Piyasalar',
    links: [
      { label: 'Forex', href: '/piyasalar/forex' },
      { label: 'Emtialar', href: '/piyasalar/emtialar' },
      { label: 'Endeksler', href: '/piyasalar/endeksler' },
      { label: 'Hisseler', href: '/piyasalar/hisseler' },
      { label: 'Kripto Paralar', href: '/piyasalar/kripto' },
    ],
  },
  {
    title: 'Destek & Yasal',
    links: [
      
      { label: 'SSS', href: '/sss' },
      { label: 'Kullanım Şartları', href: '/yasal/kullanim-sartlari' },
      { label: 'Gizlilik Politikası', href: '/yasal/gizlilik' },
      { label: 'Risk Bildirimi', href: '/yasal/risk-bildirimi' },
      { label: 'AML Politikası', href: '/yasal/aml' },
      { label: 'KYC Politikası', href: '/yasal/kyc' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-slate-200 bg-slate-50">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              Novatrix Markets, küresel piyasalarda kurumsal seviye likidite ve şeffaf fiyatlama sunan, çok varlık sınıflı CFD aracı kurumudur.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-accent" /><span>destek@capitalmarket.com</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-accent" /><span>+90 (212) 000 00 00</span></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-accent" /><span>Levent, İstanbul · Londra · Sidney · Limasol</span></div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-500 hover:text-brand-accent hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {sections.map((s) => (
            <div key={s.title}>
              <div className="text-sm font-semibold text-brand-primary">{s.title}</div>
              <ul className="mt-4 space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-600 hover:text-brand-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-5 text-xs text-slate-600 leading-relaxed">
          <p className="font-semibold text-brand-primary mb-1">Risk Bildirimi</p>
          <p>
            CFD&apos;ler kaldıraçlı karmaşık ürünlerdir ve hızlı para kaybetme riski içerir. Yatırımcıların büyük bir bölümü CFD işlemlerinde para kaybeder. CFD&apos;lerin nasıl çalıştığını anladığınızdan ve para kaybetme riskini göze alabileceğinizden emin olun. Geçmiş performans gelecekteki sonuçları garanti etmez.
          </p>
          <p className="mt-3">
            Novatrix Markets markası, lisanslı bağlı kuruluşları aracılığıyla küresel olarak hizmet vermektedir. Hizmetlerimiz belirli yargı bölgelerinde mevcut olmayabilir; Birleşik Devletler, Kanada, İran, Kuzey Kore ve Novatrix Markets politikalarınca yasaklanan diğer bölgelerin sakinlerine sunulmamaktadır.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 Novatrix Markets Global Ltd. Tüm hakları saklıdır.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/yasal/kullanim-sartlari" className="hover:text-brand-primary">Kullanım Şartları</Link>
            <Link href="/yasal/gizlilik" className="hover:text-brand-primary">Gizlilik</Link>
            <Link href="/yasal/risk-bildirimi" className="hover:text-brand-primary">Risk Bildirimi</Link>
            <Link href="/yasal/aml" className="hover:text-brand-primary">AML</Link>
            <Link href="/yasal/kyc" className="hover:text-brand-primary">KYC</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
