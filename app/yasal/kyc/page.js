import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'KYC Politikası' }

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="KYC (Müşteri Tanıma) Politikası" description="Yasal yükümlülükler ve güvenliğiniz için müşteri tanıma sürecimizin detayları." />
      <article className="container py-12 max-w-3xl space-y-8">
        {[
          { h: '1. KYC’nin Amacı', p: 'KYC süreci, müşterimizin kimliğini doğrulamak, finansal işlemlerin yasallığını güvence altına almak ve düzenleyici kurallara uyum sağlamak amacıyla yapılır.' },
          { h: '2. Talep Edilen Belgeler', p: 'Geçerli kimlik (nüfus cüzdanı / pasaport / ehliyet); son 6 ay içinde çıkmış adres belgesi (fatura, banka ekstresi); gerekli olduğunda gelir kaynağı belgesi (maaş bordrosu, vergi beyanı).' },
          { h: '3. Süreç Adımları', p: 'Müşteri panelinden belge yükleme; otomatik OCR ve manuel inceleme; ortalama 4 saat, en geç 24 saat içinde tamamlama; e-posta ile sonuç bildirimi.' },
          { h: '4. Onaylanmayan Belgeler', p: 'Bulanık, kesilmiş veya süresi dolmuş belgeler reddedilir. Müşteri yeniden yükleme yapabilir.' },
          { h: '5. KYC Olmadan İşlem', p: 'Demo hesabınızda KYC zorunlu değildir. Gerçek hesabınızda işlem başlatabilirsiniz; ancak para çekme için KYC tamamlanmalıdır.' },
          { h: '6. Güncel Kalma Sorumluluğu', p: 'Adres, telefon, e-posta veya yasal durumunuzda değişiklik olduğunda 30 gün içinde bildiriminiz beklenir.' },
          { h: '7. Veri Güvenliği', p: 'KYC belgeleri TLS 1.3 şifrelemesi ile iletilir ve ISO 27001 sertifikalı sunucularda saklanır. Yalnızca yetkili uyum personeli erişebilir.' },
          { h: '8. Yenileme', p: 'Yüksek riskli profiller için yıllık KYC güncellemesi; diğerleri için 3 yılda bir tazeleme.' },
          { h: '9. Red Hakkı', p: 'Şirket; geçerli neden bildirmeden başvuruları reddetme veya hesabı kapatma hakkını saklı tutar.' },
          { h: '10. İletişim', p: 'KYC ile ilgili sorularınız için kyc@capitalmarket.com adresine yazabilirsiniz.' },
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
