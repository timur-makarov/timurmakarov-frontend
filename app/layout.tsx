import type { Metadata } from 'next'
import { EB_Garamond, Source_Serif_4 } from 'next/font/google'
import { getLocale } from '@/app/_lib/utils/i18n'
import 'flag-icons/css/flag-icons.min.css'
import './globals.scss'
import { getHeadMetadata } from '@/app/_lib/queries'
import ThemeMediaQuery from '@/app/_components/ThemeMediaQuery'
import { cookies } from 'next/headers'
import Header from '@/app/_components/Header'
import clsx from 'clsx'

const font = Source_Serif_4({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'block',
})

const font2 = EB_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'block',
})

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale()
  const data = await getHeadMetadata(locale)

  return {
    title: data.attributes.title,
    description: data.attributes.description,
    openGraph: {
      title: data.attributes.title,
      description: data.attributes.description,
      type: 'website',
      locale: locale,
      siteName: data.attributes.title,
    },
    twitter: {
      creator: '@timurmakarov_',
      site: '@timurmakarov_',
      card: 'summary_large_image',
    },
    alternates: {
      languages: {
        en: 'https://timurmakarov.com',
        ru: 'https://ru.timurmakarov.com',
        'x-default': 'https://timurmakarov.com',
      },
      canonical: {
        url: `https://${locale !== 'en' ? `${locale}.` : ''}timurmakarov.com`,
      },
    },
    icons: [
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
    ],
    manifest: '/site.webmanifest',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeCookie = cookies().get('theme')?.value
  const gaIdCookie = cookies().get('gaId')?.value || ''
  const themeClass = themeCookie === '0' ? 'light' : themeCookie ? 'dark' : 'light'
  const locale = getLocale()

  return (
    <html lang={locale} className={clsx(font.className)}>
      <body className={themeClass}>
        <ThemeMediaQuery themeCookie={themeCookie} />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
