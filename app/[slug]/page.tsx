import { getArticleBySlug } from '@/app/_lib/queries'
import { getLocale } from '../_lib/utils/i18n'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from './page.module.scss'
import clsx from 'clsx'

export default async function Home({ params }: { params: { slug: string } }) {
  const locale = getLocale()
  const article = await getArticleBySlug(locale, params.slug)

  if (!article) {
    return null
  }

  const imageSrc =
    process.env.NEXT_PUBLIC_BACKEND_URI + article.attributes.image.data.attributes.url

  return (
    <div>
      <Image
        src={imageSrc}
        width={1024}
        height={224}
        className="h-56 object-cover"
        alt={'Timur Makarov. ' + article.attributes.title}
        loading="eager"
        priority
      />

      <h1 className="text-4xl font-bold text-center my-6">{article.attributes.title}</h1>

      <ReactMarkdown className={clsx(styles.markdownWrapper, 'px-2 lg:px-0')}>
        {article.attributes.content}
      </ReactMarkdown>
    </div>
  )
}
