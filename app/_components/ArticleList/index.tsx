import { getArticles } from '@/app/_lib/queries'
import { getLocale } from '@/app/_lib/utils/i18n'
import messageByLocale from '@/app/_assets/messageByLocale'

export default async function ArticleList() {
  const locale = getLocale()
  const articles = await getArticles(locale)

  function displayDate(date: string) {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="mt-8 px-2 lg:px-0">
      <h1 className="text-3xl font-semibold mb-4">{messageByLocale.articles.title[locale]}</h1>

      <ul className="dark-bg-in-light dark:bg-white rounded-lg shadow divide-y divide-gray-200 dark:text-black">
        {articles.map((article) => (
          <a href={`/${article.attributes.slug}`} key={article.attributes.title}>
            <li className="px-6 py-6">
              <div className="flex flex-col gap-1 md:gap-0 md:flex-row justify-between items-center mb-2">
                <h3 className="font-bold text-2xl text-center">{article.attributes.title}</h3>
                <span className="text-gray-200 dark:text-gray-500 text-xs">
                  {messageByLocale.articles.lastUpdate[locale]}:{' '}
                  {displayDate(article.attributes.updatedAt)}
                </span>
              </div>
              <p className="text-gray-300 dark:text-gray-700 text-base">
                {article.attributes.description}
              </p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}
