import PageHero from '@/components/site/page-hero'
import CtaBanner from '@/components/site/cta-banner'

export const metadata = { title: 'Kullanım Şartları' }

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Kullanım Şartları" description="Bu metin, Novatrix Markets hizmetlerinin kullanımına ilişkin koşulları belirler. Son güncelleme: 1 Haziran 2025." />
      <article className="container py-12 max-w-3xl prose prose-invert prose-headings:text-white prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-brand-primary">
        <section>
          <h2 className="text-2xl font-bold text-brand-primary">1. Genel Hükümler</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Novatrix Markets Global Ltd. (&ldquo;Şirket&rdquo;, &ldquo;biz&rdquo;) tarafından sağlanan web sitesi, mobil uygulama ve işlem platformları (&ldquo;Hizmetler&rdquo;), bu Kullanım Şartları (&ldquo;Şartlar&rdquo;) kapsamında sunulmaktadır. Hizmetleri kullanarak bu Şartları kabul etmiş sayılırsınız.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">2. Hizmet Kapsamı</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Novatrix Markets; Forex, CFD, Emtia, Endeks, Hisse Senedi ve Kripto para CFD’leri üzerinde elektronik işlem hizmetleri sunar. Hizmetler yalnızca yasal olarak izin verilen yargı bölgeleri kapsamında sunulmaktadır. ABD, Kanada, İran, Kuzey Kore ve diğer kısıtlı bölge sakinlerine hizmet sunulmaz.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">3. Hesap Açılışı ve Uygunluk</h2>
          <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-6">
            <li>18 yaşını doldurmuş olmak.</li>
            <li>Kimlik doğrulama (KYC) ve AML süreçlerini tamamlamak.</li>
            <li>Sunduğunuz bilgilerin doğru ve güncel olması.</li>
            <li>Yargı bölgenizin yasaları gereği işlem yapmaya yetkili olmanız.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">4. Risk Bildirimi</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">CFD’ler kaldıraçlı ve karmaşık ürünlerdir. Hızlı para kaybetme riski içerir. Yatırımcıların %74-89&apos;u CFD işlemlerinde kayıp yaşa maktadır. Kaybetmeyi göze alamayacağınız tutarda yatırım yapmayın.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">5. Fiyatlama ve Komisyon</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Spreadler değişkendir ve piyasa koşullarına göre yenilenir. Komisyon ve swap oranları hesap türünüze göre uygulanır ve websitemizde güncel olarak yayınlanır.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">6. Şirketin Sorumluluk Sınırlaması</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Hizmetler &ldquo;olduğu gibi&rdquo; sağlanır. Sistem arızaları, internet kesintileri veya üçüncü taraf veri sağlayıcılarından kaynaklanan gecikme/hata durumlarında Şirket’in sorumluluğu yasal düzenlemeler çerçevesinde sınırlıdır.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">7. Hesabınızın Sonlandırılması</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Şirket; AML, suistimal, piyasa manipülasyonu veya bu Şartların ihlali durumunda hesabınızı derhal kapatma hakkını saklı tutar. Bakiyeniz, yasal kesintiler sonrasında iade edilir.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">8. Uygulanacak Hukuk</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">İşbu Şartlar Birleşik Krallık yasalarına tabidir. Anlaşmazlıkların çözümünde öncelikle uzlaşma yolu denenir; sonuç alınamazsa Londra mahkemelerinin yetkisi kabul edilir.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-brand-primary">9. Değişiklikler</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Şirket bu Şartları herhangi bir zamanda güncelleme hakkını saklı tutar. Önemli değişiklikler kayıtlı e-posta adresinize bildirilir.</p>
        </section>
      </article>
      <CtaBanner />
    </>
  )
}
