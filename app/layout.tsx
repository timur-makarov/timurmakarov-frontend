import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  alternates: {
    languages: {
      ru: 'https://timurmakarov.com/ru',
      en: 'https://timurmakarov.com/en',
      'x-default': 'https://timurmakarov.com/en',
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
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = cookies().get('theme')?.value || '0'
  const themeClass = theme === '0' ? 'light' : 'dark'

  return (
    <html>
      <body className={clsx(themeClass, inter.className)}>{children}</body>
    </html>
  )
}
