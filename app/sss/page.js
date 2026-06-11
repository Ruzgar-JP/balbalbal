import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata = { title: 'Sıkça Sorulan Sorular (SSS)' }

const groups = [
  {
    title: 'Hesaplar',
    items: [
      ['Novatrix Markets’te hesap açmak ne kadar sürer?', 'Online başvuru ortalama 3 dakika sürer. KYC belgeleriniz hazırsa hesabınız 24 saat içinde aktive edilir.'],
      ['Minimum yatırım tutarı nedir?', 'Standard ve İslami hesaplarda 100 USD, Raw Spread hesabında 500 USD, VIP hesabında 25.000 USD’dir.'],
      ['Hangi hesap türü benim için uygun?', 'Yeni başlayanlar ve dengeli işlem yapanlar Standard, profesyonel scalper ve EA kullanıcıları Raw Spread, kurumsal müşteriler VIP hesabı tercih etmektedir.'],
      ['Birden fazla hesap açabilir miyim?', 'Evet, aynı KYC altında farklı hesap türleri ve farklı baz para birimlerinde (USD, EUR, GBP, TRY) hesap açabilirsiniz.'],
      ['Hesabımı nasıl kapatırım?', 'Destek ekibimize yazılı talepte bulunarak hesabınızı aynı gün kapatabilirsiniz. Bakiyeniz tanımlı ödeme yöntemine iade edilir.'],
    ],
  },
  {
    title: 'Para Yatırma',
    items: [
      ['Hangi para yatırma yöntemleri var?', 'Banka havalesi, kredi/banka kartı, Skrill, Neteller, Perfect Money, ve kripto para (BTC, ETH, USDT) ile yatırım yapabilirsiniz.'],
      ['Para yatırma komisyonu var mı?', 'Hayır. Novatrix Markets tüm para yatırma işlemlerinde herhangi bir komisyon almaz.'],
      ['Para yatırma ne kadar sürer?', 'Kart ve e-cüzdan işlemleri anında; banka havalesi 1-2 iş günü; kripto onaylar ağ hızına göre 10-60 dk içinde tamamlanır.'],
      ['Minimum yatırma tutarı ne kadar?', 'Tüm yöntemler için minimum 100 USD’dir. Kripto yöntemlerinde 50 USD karşılığından başlar.'],
      ['Türk Lirası ile yatırabilir miyim?', 'Evet. TRY baz para birimli hesap açarak yerel havale ile yatırım yapabilirsiniz.'],
    ],
  },
  {
    title: 'Para Çekme',
    items: [
      ['Para çekme süresi ne kadardır?', 'Talebiniz onaylandıktan sonra aynı iş günü içinde işleme alınır. Banka havalesi 1-3 iş günü, diğer yöntemler genelde 24 saat içinde sonuçlanır.'],
      ['Para çekme komisyonu var mı?', 'Novatrix Markets komisyon almaz. Aralık bankası veya ödeme servis sağlayıcısı ücret yansıtabilir.'],
      ['Aynı yöntemle mi para çekmek zorundayım?', 'Evet. AML düzenlemeleri gereği para çekme yatırım yapılan yöntemle gerçekleştirilir.'],
      ['Minimum çekim tutarı nedir?', 'Minimum çekim tutarı 10 USD’dir.'],
      ['Para çekme talebimi nasıl iptal ederim?', 'Müşteri panelinden "Bekleyen İşlemler" bölümünden talebinizi işleme alınmadan iptal edebilirsiniz.'],
    ],
  },
  {
    title: 'Platformlar',
    items: [
      ['Hangi platformları destekliyorsunuz?', 'MetaTrader 4, MetaTrader 5, cTrader ve TradingView platformlarını web, masaüstü, iOS ve Android olarak destekliyoruz.'],
      ['EA / Algoritmik işlem yapabilir miyim?', 'Evet. MT4 ve MT5’te MQL4/MQL5 EA’ları ve cTrader’da cBots tam destekli. Scalping ve hedging her hesap türünde serbesttir.'],
      ['VPS hizmeti ücretsiz mi?', 'Aktif bakiyesi 5.000 USD’nin üzerinde olan veya aylık 10 lot üzeri işlem yapan müşterilerimize VPS ücretsiz sunulur.'],
      ['TradingView ile bağlantı nasıl kurulur?', 'TradingView üzerinde "Broker seç" menüsünden Novatrix Markets’ı seçip canlı hesapınızla giriş yapın.'],
      ['Mobil işlem yapabilir miyim?', 'Evet. Tüm platformların iOS ve Android uygulamaları mevcuttur.'],
    ],
  },
  {
    title: 'İşlem Koşulları',
    items: [
      ['Spreadler ne zaman genişler?', 'Asya seansının açılışında ve makro veri açıklamaları öncesi/sonrası piyasa likiditesi nedeniyle spreadler geçici olarak genişleyebilir.'],
      ['Slipaj yaşanır mı?', 'Düşük gecikme altyapımız sayesinde normal piyasa koşullarında slipaj minimum düzeydedir. Yüksek volatilitede pozitif/negatif slipaj oluşabilir.'],
      ['Yeniden kotasyon (requote) yapıyor musunuz?', 'Hayır. STP/ECN modelimiz gereği yeniden kotasyon yapılmaz; emir piyasada en iyi fiyatla gerçekleşir.'],
      ['Negatif bakiye koruması var mı?', 'Evet. Tüm bireysel hesaplarda negatif bakiye koruması sağlanır; hesabınız asla sıfırın altına düşmez.'],
      ['Hangi emir türlerini destekliyorsunuz?', 'Piyasa, Limit, Stop, Stop Limit, Trailing Stop ve OCO emir türleri desteklenir.'],
    ],
  },
  {
    title: 'Kimlik Doğrulama (KYC)',
    items: [
      ['KYC için hangi belgeler gerekli?', 'Geçerli kimlik belgesi (nüfus cüzdanı, pasaport veya ehliyet) ve son 6 ay içinde çıkmış adres belgesi (fatura, banka ekstresi vb.).'],
      ['Belgelerimi nasıl yükleyebilirim?', 'Müşteri panelinizden "KYC Belgeleri" bölümü üzerinden yükleyebilirsiniz. Belgeler 24 saat içinde incelenir.'],
      ['KYC tamamlanmadan işlem yapabilir miyim?', 'Demo hesabınızda kesintisiz işlem yapabilirsiniz. Gerçek hesabınızda KYC tamamlanana kadar çekim kısıtlıdır.'],
      ['KYC süreci ne kadar sürer?', 'Ortalama 4 saat, en geç 24 saat.'],
      ['Belgelerim onaylanmazsa ne olur?', 'Destek ekibimiz nedenini size bildirir ve gerekli belgeyi tekrar yükleyebilirsiniz.'],
    ],
  },
]

export default function SSSPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title={<>Sıkça sorulan <span className="text-gradient-accent">sorular</span></>}
        description="Hesap açmanız, para yatırma/çekme, platformlar ve işlem koşulları hakkında en çok sorulan sorular ve detaylı yanıtlar."
      />
      <section className="container py-12 space-y-10">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">{g.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {g.items.map(([q, a], i) => (
                    <AccordionItem key={i} value={`${g.title}-${i}`}>
                      <AccordionTrigger>{q}</AccordionTrigger>
                      <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                        {a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
            </Accordion>
          </div>
        ))}
      </section>
      <CtaBanner />
    </>
  )
}
