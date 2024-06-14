import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { getArticles, getProfileData } from '../_lib/queries'
import { getLocale } from '@/app/_lib/utils/i18n'

export async function GET() {
  const locale = getLocale()
  const articles = await getArticles(locale)
  const profileData = await getProfileData(locale)

  const pages: ISitemapField[] = articles.map((article) => ({
    loc: `https://${locale !== 'en' ? locale : 'www'}.timurmakarov.com/${article.attributes.slug}`,
    lastmod: article.attributes.updatedAt,
    images: [
      {
        loc: new URL(process.env.BACKEND_URI + article.attributes.image.data.attributes.url),
      },
    ],
    news: {
      title: article.attributes.title,
      publicationName: profileData.attributes.name,
      publicationLanguage: locale,
      date: article.attributes.createdAt,
    },
  }))

  return getServerSideSitemap(pages)
}
