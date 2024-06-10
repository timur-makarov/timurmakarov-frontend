import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { getLocale } from '@/app/_lib/utils/i18n'
import { getThemeNumber } from '@/app/_lib/utils/theme'
import { getHeadMetadata } from '@/app/_lib/queries'
import 'flag-icons/css/flag-icons.min.css'
import './globals.scss'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale()
  const data = await getHeadMetadata(locale)

  return {
    title: data.attributes.title,
    description: data.attributes.description,
    alternates: {
      languages: {
        en: 'https://timurmakarov.com',
        ru: 'https://ru.timurmakarov.com',
        'x-default': 'https://timurmakarov.com',
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
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = getThemeNumber()
  const themeClass = theme === '0' ? 'light' : 'dark'
  const locale = getLocale()

  return (
    <html lang={locale}>
      <body className={clsx(themeClass, inter.className)}>{children}</body>
    </html>
  )
}
