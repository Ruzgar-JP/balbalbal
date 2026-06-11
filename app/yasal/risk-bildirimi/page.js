import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'
import { AlertTriangle } from 'lucide-react'

export const metadata = { title: 'Risk Bildirimi' }

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Risk Bildirimi" description="CFD ve kaldıraçlı ürünlerle işlem yapmadan önce aşağıdaki riskleri okuyup anladığınızdan emin olun." />
      <article className="container py-12 max-w-3xl space-y-8">
        <div className="rounded-2xl border border-brand-warning/30 bg-brand-warning/5 p-5 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-brand-warning shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 leading-relaxed">CFD’ler kaldıraçlı karmaşık ürünlerdir ve hızlı para kaybetme riski içerir. Yatırımcıların %74-89&apos;u CFD işlemlerinde kayıp yaşamaktadır. Kaybetmeyi göze alabileceğiniz tutarla işlem yapın.</p>
        </div>
        {[
          { h: '1. Genel Risk Uyarısı', p: 'CFD ve forex işlemleri, hızlı ve büyük miktarda para kaybetme riski içeren karmaşık finansal ürünlerdir. Bu ürünlerle işlem yapmadan önce risklerini tam olarak anlamalısınız.' },
          { h: '2. Kaldıraç Riski', p: 'Yüksek kaldıraç, kar potansiyelini artırdığı gibi kayıp riskini de artırır. Küçük bir fiyat hareketi, yatırdığınız marjın tamamını yok edebilir.' },
          { h: '3. Piyasa Riski', p: 'Piyasalar; ekonomik veriler, jeopolitik gelişmeler, merkez bankası kararları ve diğer faktörler nedeniyle aniden ve sert hareket edebilir.' },
          { h: '4. Likidite Riski', p: 'Belirli piyasa koşullarında spreadler genişleyebilir, fiyat boşlukları oluşabilir ve emirler beklenenden farklı fiyatta gerçekleşebilir.' },
          { h: '5. Teknik Riskler', p: 'Donanım, yazılım veya internet bağlantısı sorunları işlem yapmanızı engelleyebilir. Yedek bağlantı ve mobil erişim hazır tutulması önerilir.' },
          { h: '6. Para Birimi Riski', p: 'Hesap baz para biriminizden farklı enstrümanlarda işlem yaparken, kar/zararınız döviz kuru değişimlerinden etkilenir.' },
          { h: '7. Negatif Bakiye Koruması', p: 'Novatrix Markets bireysel hesaplarda negatif bakiye koruması sağlar; hesabınız sıfırın altına düşmez. Ancak yatırdığınız tüm tutarı kaybetmeniz hala mümkündür.' },
          { h: '8. Profesyonel Tavsiye', p: 'Bu metin yatırım tavsiyesi değildir. Karar vermeden önce bağımsız finansal danışmandan tavsiye almanızı öneririz.' },
          { h: '9. Geçmiş Performans', p: 'Geçmiş performans gelecekteki sonuçları garanti etmez. Demo hesapta elde edilen sonuçlar canlı piyasada birebir tekrarlanmayabilir.' },
          { h: '10. Bilgilendirilmiş Onay', p: 'Novatrix Markets’te hesap açarak yukarıdaki tüm riskleri okuduğunuzu, anladığınızı ve kabul ettiğinizi onaylamış olursunuz.' },
        ].map((s, i) => (
          <section key={i}>
            <h2 className="text-2xl font-bold text-brand-primary">{s.h}</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{s.p}</p>
          </section>
        ))}
      </article>
      <CtaBanner />
    </>
  )
}
