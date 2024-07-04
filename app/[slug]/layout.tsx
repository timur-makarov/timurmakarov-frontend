import type { Metadata } from 'next'
import { getLocale } from '@/app/_lib/utils/i18n'
import { ArticleData, getArticleBySlug } from '@/app/_lib/queries'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const locale = getLocale()

  let data: ArticleData

  data = await getArticleBySlug(locale, params.slug)
  if (!data) {
    notFound()
  }

  return {
    title: data.attributes.title,
    description: data.attributes.description,
    openGraph: {
      locale: locale,
      type: 'article',
      title: data.attributes.title,
      description: data.attributes.description,
      url: `https://${locale !== 'en' ? `${locale}.` : ''}timurmakarov.com/${params.slug}`,
      publishedTime: data.attributes.createdAt,
      modifiedTime: data.attributes.updatedAt,
      authors: 'Timur Makarov',
      images: [
        {
          url: process.env.NEXT_PUBLIC_BACKEND_URI + data.attributes.image.data.attributes.url,
        },
      ],
    },
    twitter: {
      creator: '@timurmakarov_',
      site: '@timurmakarov_',
      title: data.attributes.title,
      description: data.attributes.description,
      images: process.env.NEXT_PUBLIC_BACKEND_URI + data.attributes.image.data.attributes.url,
      card: 'summary_large_image',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
