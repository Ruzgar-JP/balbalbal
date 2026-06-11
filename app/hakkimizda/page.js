import { Award, Users, Globe2, Target, Compass, Heart, Shield, TrendingUp } from 'lucide-react'
import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'
import SectionHeading from '@/components/site/section-heading'

export const metadata = { title: 'Hakkımızda — Novatrix Markets Kurumsal' }

const values = [
  { icon: Shield, t: 'Güven', d: 'Müşteri fonları Elit Ödeme Araçları hesaplarda, tam şeffaf raporlama.' },
  { icon: Compass, t: 'Şeffaflık', d: 'Gizli komisyon yok, fiyatlama ve kalan komisyonlar net.' },
  { icon: Target, t: 'Yenilik', d: 'Sektörün ilk uygulayıcısı olarak teknoloji liderliği.' },
  { icon: Heart, t: 'Müşteri Odaklı', d: '7/24 Türkçe destek, hesap yöneticisi ve danışmanlık.' },
]

const stats = [
  { v: '12+', l: 'Yıllık deneyim' },
  { v: '180+', l: 'Ülkede hizmet' },
  { v: '1.5M+', l: 'Aktif müşteri' },
  { v: '$92B+', l: 'Aylık işlem hacmi' },
  { v: '4', l: 'Düzenleyici lisans' },
  { v: '$50M+', l: 'Ödemış sermaye' },
  { v: '20+', l: 'Tier-1 likidite sağlayıcısı' },
  { v: '26ms', l: 'Emir yürütme süresi' },
]

const offices = [
  { city: 'Londra', country: 'Birleşik Krallık', addr: '25 Old Broad Street, EC2N 1HQ', role: 'Avrupa Genel Merkezi' },
  { city: 'Limasol', country: 'Kıbrıs', addr: 'Spyrou Kyprianou 75', role: 'Operasyon Merkezi' },
  { city: 'Sidney', country: 'Avustralya', addr: '1 Bligh Street, NSW 2000', role: 'Asya-Pasifik Genel Merkezi' },
  { city: 'İstanbul', country: 'Türkiye', addr: 'Levent, Büyükdere Cad.', role: 'Bölge Ofisi' },
  { city: 'Dubai', country: 'BAE', addr: 'DIFC Gate Avenue', role: 'Orta Doğu Merkezi' },
  { city: 'Singapur', country: 'Singapur', addr: '8 Marina Boulevard, MBFC', role: 'Güneydoğu Asya' },
]

const awards = [
  { y: '2024', t: 'En İyi ECN Broker', org: 'Global Forex Awards' },
  { y: '2024', t: 'En İyi Müşteri Hizmetleri (EMEA)', org: 'Finance Magnates' },
  { y: '2023', t: 'En İyi MT5 Broker', org: 'World Finance' },
  { y: '2023', t: 'En Şeffaf Broker', org: 'Forex Brokers Magazine' },
  { y: '2022', t: 'En Yenilikçi Forex Broker', org: 'UK Forex Awards' },
  { y: '2022', t: 'En İyi Mobil Platform', org: 'Forex Expo' },
]

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={<>Küresel piyasalara <span className="text-gradient-accent">12+ yıllık</span> kurumsal bakış</>}
        description="Novatrix Markets, 2012 yılında Londra’da kurulan ve bugün 180+ ülkede 1.5 milyondan fazla aktif müşteriye hizmet veren çok varlık sınıflı kurumsal CFD aracı kurumudur."
      />

      {/* Stats */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs text-slate-600">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + Mission + Vision */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><TrendingUp className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Hikayemiz</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Novatrix Markets, 2012 yılında Londra’da kurumsal yatırımcılara hizmet vermek üzere kuruldu. İlk beş yılında Tier-1 banka likidite ağını inşa ettik. Bugün 6 kıtada, 180+ ülkede milyonlarca bireysel ve kurumsal trader’a hizmet veriyoruz.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Target className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Misyonumuz</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Dünyanın her yerinden trader’lara, kurumsal seviye likidite, şeffaf fiyatlama ve gelişmiş teknoloji altyapısı sunarak finansal piyasalara eşit erişim sağlamak. Yatırımcıları eğitim ile güçlendirmek.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Compass className="h-5 w-5 text-brand-accent" /></div>
            <h3 className="mt-4 text-xl font-semibold text-brand-primary">Vizyonumuz</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Türkiye’nin ve bölgenin en güvenilir, en şeffaf ve teknoloji açısından en gelişmiş aracı kurumu olmak. Küresel finansal piyasaları her trader için erişilebilir kılmak.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-12">
        <SectionHeading eyebrow="Değerlerimiz" title="Kararlarımızı şekillendiren ilkeler" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-success/10 border border-brand-accent/20">
                <v.icon className="h-5 w-5 text-brand-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{v.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="container py-12">
        <SectionHeading eyebrow="Küresel Varlık" title="6 kıtada ofislerimiz" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offices.map((o) => (
            <div key={o.city} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-brand-accent" />
                <span className="text-xs uppercase tracking-wider text-brand-accent">{o.role}</span>
              </div>
              <div className="mt-3 text-xl font-bold text-brand-primary">{o.city}, {o.country}</div>
              <div className="mt-1 text-sm text-slate-600">{o.addr}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="oduller" className="container py-12">
        <SectionHeading eyebrow="Ödüller & Tanınma" title="Sektör liderlerinden aldığımız ödüller" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((a, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30 shrink-0">
                <Award className="h-5 w-5 text-brand-accent" />
              </div>
              <div>
                <div className="text-base font-semibold text-brand-primary">{a.t}</div>
                <div className="text-xs text-slate-600 mt-1">{a.org} · {a.y}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
