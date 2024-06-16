import { getArticleBySlug } from '@/app/_lib/queries'
import { getLocale } from '../_lib/utils/i18n'
import Image from 'next/image'
import BlockRendererClient from '@/app/_components/BlockRendererClient'

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

      <div className="richTextWrapper">
        <h1 className="text-4xl md:text-5xl font-bold text-center my-10">
          {article.attributes.title}
        </h1>
        <BlockRendererClient content={article.attributes.content} />
      </div>
    </div>
  )
}
