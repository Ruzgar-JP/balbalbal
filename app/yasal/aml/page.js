import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'AML Politikası' }

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="AML (Kara Para Aklamayla Mücadele) Politikası" description="Novatrix Markets, kara para aklama ve terörün finansmanıyla mücadelede sıfır tolerans politikası uygulamaktadır." />
      <article className="container py-12 max-w-3xl space-y-8">
        {[
          { h: '1. Genel Yaklaşım', p: 'Novatrix Markets; FATF tavsiyeleri, AB 5. AML Direktifi ve Türkiye MASAK düzenlemeleri ile uyumlu, risk tabanlı bir AML politikası yürür.' },
          { h: '2. Müşteri Tanıma (KYC)', p: 'Her müşterinin kimliği belge bazlı doğrulanır: geçerli kimlik (nüfus cüzdanı/pasaport), adres belgesi ve gerekli durumlarda gelir kaynağı belgesi istenir.' },
          { h: '3. Şüpheli İşlem Bildirimi', p: 'Şüpheli işlem tespit edildiğinde yetkili otoritelere derhal bildirim yapılır. Müşterinin bilgilendirilmesi yasaktır.' },
          { h: '4. Yüksek Riskli Müşteriler', p: 'PEP (Politically Exposed Person) müşteriler, FATF’in yüksek riskli ülke listesindeki yargı bölgelerinden gelen başvurular ve yaptırım listelerindeki kişiler; gelişmiş durum tespiti (EDD) gerektirir veya reddedilir.' },
          { h: '5. Yalnız Banka & Belirli Ödeme', p: 'Para yatırma ve çekme işlemleri yalnızca müşterinin kendi adına kayıtlı banka hesabı, kartı veya e-cüzdanı ile yapılır. Üçüncü taraf ödemeleri kabul edilmez.' },
          { h: '6. İşlem İzleme', p: 'Tüm işlem hareketleri otomatik AML kuralları ile izlenir; olaĚndışı desenler manuel olarak incelenir.' },
          { h: '7. Belge Saklama', p: 'KYC belgeleri ve işlem kayıtları ilgili yasal süre boyunca (en az 7 yıl) güvenli ortamda saklanır.' },
          { h: '8. Çalışan Eğitimi', p: 'Şirket çalışanları düzenli AML/CTF eğitimleri alır. Yeni düzenlemeler ekibe ivedilikle iletilir.' },
          { h: '9. Uygunluk Memuru', p: 'Atanmış AML uyum memuru, tüm süreçlerin denetiminden sorumludur. İletişim: compliance@capitalmarket.com' },
          { h: '10. Yaptırımlar', p: 'Bu politikanın ihlali; hesabın derhal kapatılması, bakiyenin dondurulması ve yetkili otoritelere bildirim ile sonuçlanır.' },
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
