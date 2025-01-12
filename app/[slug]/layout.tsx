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
      type: 'article',
      title: data.attributes.title,
      description: data.attributes.description,
      url: `https://timurmakarov.com/${params.slug}`,
      publishedTime: data.attributes.createdAt,
      modifiedTime: data.attributes.updatedAt,
      authors: 'Timur Makarov',
    },
    twitter: {
      title: data.attributes.title,
      description: data.attributes.description,
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
