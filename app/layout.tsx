import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Timur Makarov',
  description:
    'Timur Makarov - Software Engineer. Interested in Blockchain, Self-development and Personal Finance.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const defaultLocale = cookies().get('locale')?.value || 'en'

  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
