'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Logo from './logo'

const nav = [
  { label: 'Ana Sayfa', href: '/' },
  {
    label: 'Piyasalar',
    children: [
      { label: 'Forex', href: '/piyasalar/forex', desc: '60+ döviz çifti, sıkı spreadler' },
      { label: 'Emtialar', href: '/piyasalar/emtialar', desc: 'Altın, Gümüş, Petrol ve daha fazlası' },
      { label: 'Endeksler', href: '/piyasalar/endeksler', desc: 'S&P 500, NASDAQ, DAX, FTSE' },
      { label: 'Hisse Senetleri', href: '/piyasalar/hisseler', desc: '1000+ ABD ve Avrupa hissesi' },
      { label: 'Kripto Paralar', href: '/piyasalar/kripto', desc: 'BTC, ETH, SOL ve 50+ kripto CFD' },
      { label: 'Tüm Piyasalar', href: '/piyasalar', desc: 'Tüm enstrümanlara genel bakış' },
    ],
  },
  { label: 'Hesap Türleri', href: '/hesap-turleri' },
  { label: 'Platformlar', href: '/platformlar' },

  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {nav.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-slate-700 hover:text-brand-primary data-[state=open]:text-brand-primary data-[state=open]:bg-slate-100 hover:bg-slate-100">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[520px] grid-cols-2 gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-xl">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={c.href}
                                className="block rounded-lg p-3 hover:bg-slate-50 transition-colors"
                              >
                                <div className="text-sm font-semibold text-brand-primary">{c.label}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{c.desc}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:text-brand-primary hover:bg-slate-100 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/iletisim"
            className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:text-brand-primary hover:bg-slate-100 transition-colors"
          >
            Giriş Yap
          </Link>
          <Link
            href="/iletisim?demo=1"
            className="inline-flex h-9 items-center rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-brand-primary hover:border-brand-accent/60 hover:bg-slate-50 transition-colors"
          >
            Demo Aç
          </Link>
          <Link
            href="/iletisim?live=1"
            className="btn-accent inline-flex h-9 items-center rounded-md px-4 text-sm"
          >
            Gerçek Hesap <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-brand-primary">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-l border-slate-200 text-brand-primary p-0 w-[88%] sm:w-[420px]">
            <SheetTitle className="sr-only">Menü</SheetTitle>
            <div className="p-5 border-b border-slate-200"><Logo /></div>
            <nav className="p-3 flex flex-col">
              {nav.map((item) =>
                item.children ? (
                  <details key={item.label} className="group">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-50">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pl-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:text-brand-primary hover:bg-slate-50"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className="p-4 border-t border-slate-200 grid gap-2">
              <Link href="/iletisim?demo=1" onClick={() => setOpen(false)} className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white text-sm font-medium text-brand-primary">Demo Hesap Aç</Link>
              <Link href="/iletisim?live=1" onClick={() => setOpen(false)} className="btn-accent inline-flex h-10 items-center justify-center rounded-md text-sm">Gerçek Hesap Aç</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
