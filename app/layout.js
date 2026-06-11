import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import SiteHeader from '@/components/site/header'
import SiteFooter from '@/components/site/footer'
import RiskBanner from '@/components/site/risk-banner'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://capitalmarket.example'),
  title: {
    default: 'Novatrix Markets — Güvenle Küresel Piyasalarda İşlem Yapın',
    template: '%s | Novatrix Markets',
  },
  description:
    'Forex, Emtia, Endeks, Hisse Senedi ve Kripto Para piyasalarına kurumsal fiyatlama ve düşük spread ile tek hesap üzerinden erişin.',
  keywords: [
    'forex broker', 'cfd', 'Novatrix Markets', 'metatrader 4', 'metatrader 5',
    'ctrader', 'tradingview', 'düşük spread', 'kurumsal forex', 'kripto cfd'
  ],
  openGraph: {
    title: 'Novatrix Markets — Güvenle Küresel Piyasalarda İşlem Yapın',
    description: 'Forex, Emtia, Endeks, Hisse Senedi ve Kripto Para piyasaları için kurumsal fiyatlama.',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          <RiskBanner />
          <SiteHeader />
          <main className="relative">{children}</main>
          <SiteFooter />
          <Toaster richColors theme="light" position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
