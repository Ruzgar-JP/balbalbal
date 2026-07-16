'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, Phone, MapPin, MessageCircle, Headphones, Send, CheckCircle2, Globe2, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'
import PageHero from '@/components/site/page-hero'
import SectionHeading from '@/components/site/section-heading'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'

export default function IletisimPage() {
  return (
    <Suspense fallback={<div className="container py-24 text-slate-600">Yükleniyor…</div>}>
      <IletisimInner />
    </Suspense>
  )
}

function IletisimInner() {
  const params = useSearchParams()
  const liveParam = params?.get('live')
  const demoParam = params?.get('demo')
  const typeParam = params?.get('type')
  const platformParam = params?.get('platform')
  const defaultTab = liveParam ? 'live' : demoParam ? 'demo' : 'contact'

  let defaultPlatform = 'MT5'
  if (platformParam) {
    const pLower = platformParam.toLowerCase()
    if (pLower === 'mt4') defaultPlatform = 'MT4'
    else if (pLower === 'mt5') defaultPlatform = 'MT5'
    else if (pLower === 'ctrader') defaultPlatform = 'cTrader'
    else if (pLower === 'tradingview') defaultPlatform = 'TradingView'
  }

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={<>Bize <span className="text-gradient-accent">ulaşın</span></>}
        description="Hesap açma, teknik destek veya genel sorularınız için uzman ekibimiz 7/24 yanınızda."
      />

      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/[0.03] border border-slate-200">
                <TabsTrigger value="live" className="data-[state=active]:bg-brand-accent data-[state=active]:text-[#030B17]">Gerçek Hesap</TabsTrigger>
                <TabsTrigger value="demo" className="data-[state=active]:bg-brand-accent data-[state=active]:text-[#030B17]">Demo Hesap</TabsTrigger>
                <TabsTrigger value="contact" className="data-[state=active]:bg-brand-accent data-[state=active]:text-[#030B17]">İletişim</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="mt-6">
                <AccountForm mode="live" type={typeParam || 'standard'} defaultPlatform={defaultPlatform} />
              </TabsContent>
              <TabsContent value="demo" className="mt-6">
                <AccountForm mode="demo" type="demo" defaultPlatform={defaultPlatform} />
              </TabsContent>
              <TabsContent value="contact" className="mt-6">
                <ContactForm />
              </TabsContent>
            </Tabs>
          </div>

          {/* Side: support */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Headphones className="h-5 w-5 text-brand-accent" /></div>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">7/24 Destek</h3>
              <p className="mt-2 text-sm text-slate-600">Uzman Türkçe destek ekibimiz haftanın her günü hizmetinizde.</p>
              <div className="mt-4 space-y-2 text-sm">
        
                <div className="flex items-center gap-2 text-slate-700"><Mail className="h-4 w-4 text-brand-accent" /><span>support@novatrixmarkets.com</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30"><Globe2 className="h-5 w-5 text-brand-accent" /></div>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">Global Ofisler</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-600">
                <li><span className="text-slate-700">Londra</span> · 25 Old Broad Street</li>
                <li><span className="text-slate-700">Limasol</span> · Spyrou Kyprianou 75</li>
                <li><span className="text-slate-700">Sidney</span> · 1 Bligh Street</li>
                <li><span className="text-slate-700">İstanbul</span> · Levent</li>
                <li><span className="text-slate-700">Dubai</span> · DIFC Gate Avenue</li>
                <li><span className="text-slate-700">Singapur</span> · 8 Marina Boulevard</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-success/30 bg-brand-success/5 p-6">
              <div className="flex items-center gap-2 text-brand-success">
                <CheckCircle2 className="h-4 w-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Güvenli</span>
              </div>
              <p className="mt-2 text-xs text-slate-600">Tüm formlar TLS 1.3 şifrelemesi ile güvenli olarak iletilir. Verileriniz KVKK ve GDPR ile uyumlu şekilde işlenir.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function AccountForm({ mode = 'demo', type = 'standard', defaultPlatform = 'MT5' }) {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', country: 'Türkiye',
    accountType: type, leverage: '1:500', platform: defaultPlatform, agreed: false,
  })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.agreed) {
      toast.error('Lütfen risk bildirimi ve sözleşmeyi onaylayın')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, mode }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Bir hata oluştu')
      setDone(true)
      toast.success(mode === 'live' ? 'Gerçek hesap başvurunuz alındı!' : 'Demo hesabınız 60 saniye içinde oluşturulacak!')
    } catch (err) {
      toast.error(err.message || 'Gönderim başarısız oldu')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-success/15 border border-brand-success/30 mb-4">
          <CheckCircle2 className="h-7 w-7 text-brand-success" />
        </div>
        <h3 className="text-2xl font-bold text-brand-primary">Teşekkürler {form.fullName.split(' ')[0]}!</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          {mode === 'live'
            ? 'Hesap açma talebiniz alındı. Hesap yöneticimiz 24 saat içinde sizi arayacak ve KYC sürecini başlatacaktır.'
            : 'Demo hesabınızın erişim bilgileri e-posta adresinize gönderildi. Şimdi MT4/MT5 ile giriş yaparak işlem yapmaya başlayabilirsiniz.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h3 className="text-xl font-bold text-brand-primary">{mode === 'live' ? 'Gerçek Hesap Açılış Başvurusu' : 'Demo Hesap Aç'}</h3>
      <p className="text-xs text-slate-600 -mt-2">Tüm alanlar gizli tutulur. {mode === 'demo' && '100.000 USD sanal bakiye ile 90 gün boyunca kullanılabilir demo hesap.'}</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="text-xs">Ad Soyad *</Label>
          <Input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" placeholder="Örn. Mehmet Yılmaz" />
        </div>
        <div>
          <Label className="text-xs">E-posta *</Label>
          <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" placeholder="mehmet@ornek.com" />
        </div>
        <div>
          <Label className="text-xs">Telefon</Label>
          <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" placeholder="+90 5XX XXX XX XX" />
        </div>
        <div>
          <Label className="text-xs">Ülke</Label>
          <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" />
        </div>
        <div>
          <Label className="text-xs">Hesap Türü</Label>
          <Select value={form.accountType} onValueChange={(v) => setForm({ ...form, accountType: v })}>
            <SelectTrigger className="mt-1 bg-slate-50 border-slate-200 text-brand-primary"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="raw">Raw Spread</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="islami">İslami (Swap-Free)</SelectItem>
              {mode === 'demo' && <SelectItem value="demo">Demo</SelectItem>}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Kaldıraç</Label>
          <Select value={form.leverage} onValueChange={(v) => setForm({ ...form, leverage: v })}>
            <SelectTrigger className="mt-1 bg-slate-50 border-slate-200 text-brand-primary"><SelectValue /></SelectTrigger>
            <SelectContent>
              {['1:50', '1:100', '1:200', '1:300', '1:400', '1:500'].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2">
          <Label className="text-xs">Platform</Label>
          <Select value={form.platform} onValueChange={(v) => setForm({ ...form, platform: v })}>
            <SelectTrigger className="mt-1 bg-slate-50 border-slate-200 text-brand-primary"><SelectValue /></SelectTrigger>
            <SelectContent>
              {['MT4', 'MT5', 'cTrader', 'TradingView'].map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <label className="flex items-start gap-3 cursor-pointer mt-2">
        <Checkbox checked={form.agreed} onCheckedChange={(v) => setForm({ ...form, agreed: !!v })} className="mt-0.5 border-slate-400 data-[state=checked]:bg-brand-accent data-[state=checked]:border-brand-accent" />
        <span className="text-xs text-slate-600">
          18 yaşından büyüğümü, <a href="/yasal/risk-bildirimi" className="text-brand-accent hover:underline">Risk Bildirimi</a>&apos;ni okuduğumu, <a href="/yasal/kullanim-sartlari" className="text-brand-accent hover:underline">Kullanım Şartları</a> ve <a href="/yasal/gizlilik" className="text-brand-accent hover:underline">Gizlilik Politikası</a>&apos;nı kabul ettiğimi onaylıyorum.
        </span>
      </label>
      <button type="submit" disabled={loading} className="btn-accent inline-flex h-12 w-full items-center justify-center rounded-md text-sm disabled:opacity-50">
        {loading ? 'Gönderiliyor...' : (mode === 'live' ? 'Gerçek Hesap Aç' : 'Demo Hesap Aç')} <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  )
}

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Genel', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Bir hata oluştu')
      setDone(true)
      toast.success('Mesajınız alındı!')
    } catch (err) {
      toast.error(err.message || 'Gönderim başarısız oldu')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-success/15 border border-brand-success/30 mb-4">
          <CheckCircle2 className="h-7 w-7 text-brand-success" />
        </div>
        <h3 className="text-2xl font-bold text-brand-primary">Mesajınız alındı!</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">En kısa sürede {form.email} adresine dönüş yapacağız.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h3 className="text-xl font-bold text-brand-primary">Genel İletişim</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="text-xs">Ad Soyad *</Label>
          <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" />
        </div>
        <div>
          <Label className="text-xs">E-posta *</Label>
          <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" />
        </div>
        <div>
          <Label className="text-xs">Telefon</Label>
          <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" />
        </div>
        <div>
          <Label className="text-xs">Konu</Label>
          <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
            <SelectTrigger className="mt-1 bg-slate-50 border-slate-200 text-brand-primary"><SelectValue /></SelectTrigger>
            <SelectContent>
              {['Genel', 'Hesap Açma', 'Para Yatırma / Çekme', 'Teknik Destek', 'Kurumsal & İş Ortaklığı', 'KYC / Belgeler', 'Şikayet'].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-xs">Mesajınız *</Label>
        <Textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 bg-slate-50 border-slate-200 text-brand-primary" />
      </div>
      <button type="submit" disabled={loading} className="btn-accent inline-flex h-12 w-full items-center justify-center rounded-md text-sm disabled:opacity-50">
        {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'} <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  )
}
