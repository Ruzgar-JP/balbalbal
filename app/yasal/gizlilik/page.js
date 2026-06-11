import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Gizlilik Politikası' }

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Gizlilik Politikası" description="Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuza dair detaylı bilgi. KVKK ve GDPR uyumludur." />
      <article className="container py-12 max-w-3xl space-y-8">
        {[
          { h: '1. Veri Sorumlusu', p: 'Novatrix Markets Global Ltd., KVKK ve GDPR kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işler.' },
          { h: '2. Topladığımız Veriler', p: 'Kimlik bilgileri (ad, soyad, doğum tarihi), iletişim bilgileri (e-posta, telefon, adres), kimlik belgesi görüntüleri, finansal bilgiler (gelir, işlem geçmişi), platform kullanım verileri (IP, cihaz, oturum) ve KYC/AML sürecinde gerekli diğer veriler.' },
          { h: '3. Veri İşleme Amaçları', p: 'Hizmetlerin sunulması, hesabınızın açılışı, kimliğinizin doğrulanması, yasal yükümlülüklerin yerine getirilmesi (AML/CFT), sahtekarlığın önlenmesi, raporlama ve dolaylı pazarlama (iletişim onayınızı verdiyseniz).' },
          { h: '4. Hukuki Dayanak', p: 'KVKK m. 5/2 ve GDPR Madde 6: sözleşmenin kurulması/ifası, yasal yükümlülük, meşru menfaat ve iletişim/pazarlama için açık rızanız.' },
          { h: '5. Veri Aktarımı', p: 'Verileriniz; düzenleyici otoritelerle, KYC/AML hizmet sağlayıcılarıyla, ödeme servis sağlayıcılarıyla, denetim firmalarıyla ve grup şirketleriyle, gerekli güvenlik önlemleri alınmış olarak paylaşılır.' },
          { h: '6. Saklama Süresi', p: 'Yasal yükümlülükler gereği en az 7 yıl. Süre sonunda veriler güvenli şekilde silinir.' },
          { h: '7. Haklarınız', p: 'Verilerinize erişim, düzeltme, silinme, işlemeye itiraz ve veri taşınabilirliği haklarına sahipsiniz. privacy@capitalmarket.com adresine başvurarak haklarınızı kullanabilirsiniz.' },
          { h: '8. Cookie ve İzleyiciler', p: 'Sitemiz; oturum, analitik ve performans cookie’leri kullanır. Cookie ayarlarınızı tarayıcınızdan yönetebilirsiniz.' },
          { h: '9. Veri Güvenliği', p: 'Tüm veri iletimi TLS 1.3 ile şifrelenir. Veriler ISO 27001 sertifikalı sunucularda saklanır ve erişim sıkı yetki kontrolü altındadır.' },
          { h: '10. İletişim', p: 'Gizlilik konularında Veri Koruma Sorumlumuza dpo@capitalmarket.com adresinden ulaşabilirsiniz.' },
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
