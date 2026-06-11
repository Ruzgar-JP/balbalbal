import Link from 'next/link'
import {
  ArrowRight, Shield, Zap, Globe2, BarChart3, Cpu, Headphones,
  LineChart, TrendingUp, Star, ChevronRight, BookOpen,
  Layers, Activity, CheckCircle2,
} from 'lucide-react'

import SectionHeading from '@/components/site/section-heading'
import CtaBanner from '@/components/site/cta-banner'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import TickerTape from '@/components/site/tradingview/ticker-tape'

const whyFeatures = [
  { icon: Zap, title: 'Ultra Düşük Gecikme', desc: 'Düşük gecikmeli emir yürütme altyapısı ve şeffaf fiyatlama ile profesyonel işlem koşullarını tek platformda sunuyoruz.' },
  { icon: Shield, title: 'Güvenli Fon Yönetimi', desc: 'Müşteri varlıkları, birinci sınıf bankalarda ayrıştırılmış hesaplarda korunur.' },
  { icon: Globe2, title: 'Işık Hızında Finansal İşlemler', desc: '20+ Tier-1 banka ve ECN ile derin emir defterli fiyatlama.' },
  { icon: BarChart3, title: 'Şeffaf Fiyatlama', desc: '0.0 pip&apos;ten başlayan spreadler, gizli komisyon yok, yeniden kotasyon yok.' },
  { icon: Cpu, title: 'Gelişmiş Altyapı', desc: 'Gelişmiş altyapımızla fonlarınıza 7/24 saniyeler kesintisiz erişin. Algoritmik strateji desteği.' },
  { icon: Headphones, title: '7/24 Türkçe Destek', desc: 'Uzman ekipten anında telefon, e-posta ve canlı sohbet desteği.' },
]

const accountTeasers = [
  { name: 'Standard', tagline: 'Komisyonsuz, dengeli', minDeposit: '100$', spreadFrom: '1.0 pip', commission: 'Yok', leverage: '1:500' },
  { name: 'Raw Spread', tagline: 'Profesyonel trader’ın seçimi', minDeposit: '500$', spreadFrom: '0.0 pip', commission: '3.5$ / lot', leverage: '1:500', highlight: true },
  { name: 'VIP', tagline: 'Yüksek hacim avantajı', minDeposit: '25.000$', spreadFrom: '0.0 pip', commission: '2.0$ / lot', leverage: '1:500' },
  { name: 'İslami', tagline: 'Swap-free, faizsiz', minDeposit: '100$', spreadFrom: '1.1 pip', commission: 'Yok', leverage: '1:500' },
]

const platforms = [
  { name: 'MetaTrader 5', desc: 'Yeni nesil MT5 ile 6 varlık sınıfı, derinlik, hedging.', tag: 'En Popüler' },
  { name: 'MetaTrader 4', desc: 'Klasik MT4, milyonlarca EA ve göstergeyle uyumlu.' },
  { name: 'cTrader', desc: 'ECN için tasarlanmış, seviye II derinlik ve cAlgo.' },
  { name: 'TradingView', desc: 'Dünyanın en gelişmiş grafik motorundan doğrudan işlem.', tag: 'Yeni' },
]

const markets = [
  { icon: TrendingUp, name: 'Forex', count: '60+ çift', desc: 'Major, minor ve egzotik döviz çiftleri', href: '/piyasalar/forex' },
  { icon: Layers, name: 'Emtialar', count: '20+ ürün', desc: 'Altın, gümüş, petrol, doğalgaz, bakır', href: '/piyasalar/emtialar' },
  { icon: BarChart3, name: 'Endeksler', count: '25+ endeks', desc: 'S&P 500, NASDAQ, DAX, BIST, Nikkei', href: '/piyasalar/endeksler' },
  { icon: LineChart, name: 'Hisseler', count: '1.000+ hisse', desc: 'ABD ve Avrupa borsaları CFD’leri', href: '/piyasalar/hisseler' },
  { icon: Activity, name: 'Kripto Paralar', count: '50+ kripto', desc: 'BTC, ETH, SOL ve dijital varlık CFD’leri', href: '/piyasalar/kripto' },
]

const eduItems = [
  { tag: 'Başlangıç', title: 'Forex Nedir? Sıfırdan Başla', desc: 'Döviz piyasasının yapısı, pip ve lot kavramları.' },
  { tag: 'Teknik Analiz', title: 'Mum Formasyonları Rehberi', desc: 'Doji, Engulfing, Hammer ve diğer kritik formasyonlar.' },
  { tag: 'Risk Yönetimi', title: 'Pozisyon Büyüklüğü Hesaplama', desc: '%1 riski ile dayanıklı stratejiler inşa edin.' },
  { tag: 'Psikoloji', title: 'Disiplinli Trader Nasıl Olunur?', desc: 'Korkuyu ve açgözlülüğü yönetmenin yolları.' },
]

const testimonials = [
  { name: 'Mehmet K.', role: 'Profesyonel Trader, 8 yıl deneyim', content: 'Çalıştığım dört brokerden Novatrix Markets işlem hızı ve spread istikrarı ile açık ara önde. Slipping neredeyse hiç yaşamadım.', rating: 5 },
  { name: 'Ayşe Y.', role: 'Algoritmik Strateji Geliştirici', content: 'FIX API entegrasyonu temiz, gecikme sürekli 30ms altında. EA’larımı hiç sorunsuz çalıştırıyorum.', rating: 5 },
  { name: 'Burak D.', role: 'Yatırım Danışmanı', content: 'Para çekme işlemleri gerçekten söyledikleri gibi 1 gün içinde sonuçlanıyor. Müşterilerime gönül rahatlığıyla öneriyorum.', rating: 5 },
  { name: 'Selin A.', role: 'Swing Trader', content: 'TradingView entegrasyonu mükemmel. Grafikten doğrudan işlem deneyimi alışık olduğum her şeyi değiştirdi.', rating: 5 },
]

const faqs = [
  { q: 'Novatrix Markets’te hesap açmak ne kadar sürer?', a: 'Online başvuru ortalama 3 dakika sürer. Kimlik doğrulama (KYC) belgeleriniz hazırsa hesabınız 24 saat içinde aktive edilir.' },
  { q: 'Minimum yatırım tutarı nedir?', a: 'Standard ve İslami hesaplarda 100 USD, Raw Spread hesabında 500 USD, VIP hesabında ise 25.000 USD’dir.' },
  { q: 'Para yatırma ve çekme işlemleri ücretsiz mi?', a: 'Evet. Banka havalesi, kredi kartı, Skrill, Neteller ve kripto para yöntemleriyle yapılan işlemlerde Novatrix Markets komisyon almaz.' },
  { q: 'Kaldıraç oranları nedir?', a: 'Maksimum kaldıraç 1:500’dür. Hesap bakiyenize, varlık sınıfına ve bulunduğunuz yargı bölgesine göre değişkenlik gösterebilir.' },
  { q: 'Hangi işlem platformlarını destekliyorsunuz?', a: 'MetaTrader 4, MetaTrader 5, cTrader ve TradingView platformlarını tüm cihazlarda destekliyoruz. Ayrıca web ve mobil terminallerimiz mevcuttur.' },
  { q: 'İslami (swap-free) hesap seçeneği var mı?', a: 'Evet. Tüm hesap türlerinde, talep üzerine swap olmayan İslami hesap açılabilirsiniz. Ek bir komisyon uygulanmaz.' },
]

function NumberStat({ value, label }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-gradient">{value}</div>
      <div className="mt-1 text-xs md:text-sm text-slate-500">{label}</div>
    </div>
  )
}

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-500">{k}</span>
      <span className="text-brand-primary font-semibold">{v}</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO (koyu lacivert) ── */}
      <section className="section-hero relative overflow-hidden">
        {/* Floating orbs */}
        <div className="hero-orb-1" aria-hidden="true" />
        <div className="hero-orb-2" aria-hidden="true" />
        <div className="hero-orb-3" aria-hidden="true" />
        {/* Remove old light-mode absolute blurs — handled by section-hero */}
        <div className="container relative py-16 md:py-24">
          <div className="hidden xl:block absolute left-[-180px] top-32 float-card z-10">
  <div className="rounded-2xl bg-white p-5 shadow-xl border border-slate-100">
    <div className="text-xs font-semibold text-slate-400 uppercase">
      EUR/USD Spread
    </div>

    <div className="mt-1 text-3xl font-bold text-slate-900">
      0.0
      <span className="ml-1 text-base text-slate-400">
        pips
      </span>
    </div>
  </div>
</div>
<div className="hidden xl:block absolute right-[-180px] top-[450px] float-card-delay z-10">
  <div className="rounded-2xl bg-white p-5 shadow-xl border border-slate-100">
    <div className="text-xs font-semibold text-slate-400 uppercase">
      Ortalama Emir İletimi
    </div>

    <div className="mt-1 text-3xl font-bold text-slate-900">
      &lt;1
      <span className="ml-1 text-base text-slate-400">
        ms
      </span>
    </div>
  </div>
</div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="chip"><span className="chip-dot" /> Kurumsal Forex & CFD Aracı Kurumu</div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-brand-primary">Piyasalar Hareket Ediyor. </span><br />
                <span className="text-gradient-accent">Siz Hazır mısınız?</span><br />
                <span className="text-brand-primary">Daha Hızlı. Daha Güçlü. Daha Karlı.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                Forex, Emtia, Endeks, Hisse Senedi ve Kripto Para piyasalarına tek hesap üzerinden erişin. 0.0 pip’ten başlayan spreadler, Tier-1 banka likiditesi ve 26ms emir yürütme.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/iletisim?live=1" className="btn-accent inline-flex h-12 items-center rounded-lg px-6 text-sm md:text-base">
                  Gerçek Hesap Aç <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/iletisim?demo=1" className="btn-ghost-dark inline-flex h-12 items-center rounded-lg px-6 text-sm md:text-base font-medium">
                  Demo Hesap Aç
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
                <NumberStat value="180+" label="Ülkede hizmet" />
                <NumberStat value="1.5M+" label="Aktif hesap" />
                <NumberStat value="$92B+" label="Aylık işlem hacmi" />
              </div>
            </div>

            {/* Hero side panel: Trust badges & key numbers */}
            <div className="lg:col-span-5">
              <div className="glass-strong relative overflow-hidden rounded-2xl p-5 md:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">Kurumsal Güvence</div>
                  <div className="chip"><span className="chip-dot" /> Tier-1</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="surface-card p-5">
                    <Shield className="h-5 w-5 text-brand-success" />
                    <div className="mt-3 text-2xl font-bold text-brand-primary">0.0 PIPS</div>
                    <div className="text-xs text-slate-500 mt-1">Sektördeki en düşük spreadler.</div>
                  </div>
                  <div className="surface-card p-5">
                    <Zap className="h-5 w-5 text-brand-accent" />
                    <div className="mt-3 text-2xl font-bold text-brand-primary">5/24</div>
                    <div className="text-xs text-slate-500 mt-1">Her zaman rehberlik ve destek için yanındayız.</div>
                  </div>
                  <div className="surface-card p-5">
                    <Globe2 className="h-5 w-5 text-brand-accent" />
                    <div className="mt-3 text-2xl font-bold text-brand-primary">180+</div>
                    <div className="text-xs text-slate-500 mt-1">Ülke</div>
                  </div>
                  <div className="surface-card p-5">
                    <BarChart3 className="h-5 w-5 text-brand-accent" />
                    <div className="mt-3 text-2xl font-bold text-brand-primary">1:500</div>
                    <div className="text-xs text-slate-500 mt-1">Maksimum kaldıraç</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-brand-success white-text" />
                    <span>Negatif bakiye koruması · Lisanslı bağlı kuruluşlar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TickerTape />
      {/* ── NEDEN Novatrix Markets (açık gri/beyaz) ── */}
      <section className="section-lwight-alt py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Neden Novatrix Markets"
            title={<>Kurumsal seviye altyapı, <span className="text-gradient-accent">bireysel</span> esneklik</>}
            description="Tier-1 banka likiditesini, hızlı emir yürütme altyapısını ve şeffaf fiyatlamayı tek bir çatı altında sunuyoruz."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFeatures.map((f) => (
              <div key={f.title} className="surface-card surface-card-hover p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/15 to-brand-success/10 border border-brand-accent/20">
                  <f.icon className="h-5 w-5 text-brand-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc.replace(/&apos;/g, "'")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HESAP TÜRLERİ (beyaz) ── */}
      <section className="section-light container py-20">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading
            eyebrow="Hesap Türleri"
            title={<>Stratejinize uygun <span className="text-gradient-accent">hesap</span></>}
            description="Yeni başlayanlardan kurumsal trader’lara kadar her ihtiyaç için optimize edilmiş hesap seçenekleri."
          />
          <Link href="/hesap-turleri" className="hidden sm:inline-flex items-center gap-1 text-sm text-brand-accent hover:underline">
            Detaylı karşılaştırma <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {accountTeasers.map((a) => (
            <div key={a.name} className={`relative rounded-2xl border p-6 transition-all hover:-translate-y-1 ${a.highlight ? 'border-brand-accent/50 bg-gradient-to-b from-brand-accent/8 to-white glow-accent' : 'surface-card surface-card-hover'}`}>
              {a.highlight && <span className="absolute -top-2.5 right-4 inline-flex items-center rounded-full bg-brand-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">Popüler</span>}
              <div className="text-sm text-slate-500">{a.tagline}</div>
              <div className="mt-1 text-2xl font-bold text-brand-primary">{a.name}</div>
              <div className="mt-4 space-y-2.5 text-sm">
                <Row k="Min. Yatırım" v={a.minDeposit} />
                <Row k="Spread" v={a.spreadFrom} />
                <Row k="Komisyon" v={a.commission} />
                <Row k="Kaldıraç" v={a.leverage} />
              </div>
              <Link href="/hesap-turleri" className={`mt-6 inline-flex h-10 w-full items-center justify-center rounded-md text-sm font-semibold ${a.highlight ? 'btn-accent' : 'border border-slate-300 bg-white text-brand-primary hover:bg-slate-50'}`}>
                Detaylar
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORMLAR (orta lacivert) ── */}
      <section className="section-mid-dark py-20">
        <div className="container">
          <SectionHeading
            eyebrow="İşlem Platformları"
            title={<>Sektörün en güçlü <span className="text-gradient-accent">platformları</span> tek hesapta</>}
            description="MT4, MT5, cTrader ve TradingView — favori platformunuzdan Novatrix Markets likiditesine bağlanın."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="surface-card surface-card-hover p-6 relative">
                {p.tag && <span className="absolute right-4 top-4 chip">{p.tag}</span>}
                <div className="text-lg font-semibold text-brand-primary">{p.name}</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                  <span className="rounded-md border border-white/10 bg-white/08 px-2 py-1 text-white/60">Windows</span>
                  <span className="rounded-md border border-white/10 bg-white/08 px-2 py-1 text-white/60">macOS</span>
                  <span className="rounded-md border border-white/10 bg-white/08 px-2 py-1 text-white/60">Web</span>
                  <span className="rounded-md border border-white/10 bg-white/08 px-2 py-1 text-white/60">Mobil</span>
                </div>
                <Link href="/platformlar" className="mt-5 inline-flex items-center gap-1 text-sm text-blue-300 hover:underline">
                  İncele <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PİYASALAR (beyaz) ── */}
      <section className="section-light container py-20">
        <SectionHeading
          eyebrow="Tüm Piyasalar"
          title={<>5 varlık sınıfı, <span className="text-gradient-accent">1.500+</span> enstrüman</>}
          description="Tek bir hesaptan küresel forex, emtia, endeks, hisse senedi ve kripto piyasalarına erişin."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {markets.map((m) => (
            <Link key={m.name} href={m.href} className="surface-card surface-card-hover p-5 group">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/15 to-brand-success/10 border border-brand-accent/20">
                <m.icon className="h-5 w-5 text-brand-accent" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-brand-primary font-semibold text-lg">{m.name}</div>
                <span className="text-[11px] font-medium text-brand-accent">{m.count}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">{m.desc}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-brand-accent group-hover:translate-x-0.5 transition-transform">
                Detay <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── EĞİTİM (koyu lacivert) ── */}
      <section className="section-dark py-20">
        <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading
            eyebrow="Eğitim Merkezi"
            title={<>Bilgi ile <span className="text-gradient-accent">işlem yapın</span></>}
            description="Sıfırdan ileri seviyeye, Türkçe hazırlanmış ücretsiz eğitim materyalleri ve günlük piyasa analizleri."
          />
          <Link href="/egitim" className="hidden sm:inline-flex items-center gap-1 text-sm text-brand-accent hover:underline">
            Tüm içerikler <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {eduItems.map((e) => (
            <Link key={e.title} href="/egitim" className="surface-card surface-card-hover p-5 group">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-300" />
                <span className="text-[11px] uppercase tracking-[0.16em] text-blue-300 font-semibold">{e.tag}</span>
              </div>
              <div className="mt-3 text-base font-semibold leading-snug text-white ">{e.title}</div>
              <p className="mt-2 text-sm">{e.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-blue-300 group-hover:translate-x-0.5 transition-transform">
                Devamını oku <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* ── MÜŞTERİ YORUMLARI (açık gri) ── */}
      <section className="section-light-alt container py-20">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title={<>Trader’ların <span className="text-gradient-accent">tercihi</span></>}
          description="Novatrix Markets üyelerinin gerçek deneyimlerinden bir seçki."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="surface-card p-5">
              <div className="flex items-center gap-1 text-brand-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="text-sm font-semibold text-brand-primary">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SSS (koyu lacivert) ── */}
      <section className="section-dark py-20">
        <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="SSS"
              title={<>Sıkça sorulan <span className="text-gradient-accent">sorular</span></>}
              description="Daha fazla soru için destek ekibimiz 7/24 hizmetinizdedir."
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/08 px-4 py-2 text-xs text-white/70">
              <Headphones className="h-3.5 w-3.5 text-blue-300" /> 7/24 Türkçe canlı destek
            </div>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-white hover:no-underline hover:text-blue-300">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-white/65 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
