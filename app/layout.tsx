import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
