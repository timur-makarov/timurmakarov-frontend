'use client'
import Image from 'next/image'

import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'
import ArticleAccordion from '@/app/_components/ArticleAccordion'

export default function BlockRendererClient({ content }: { content: BlocksContent }) {
  if (!content) return null

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ''}
            />
          )
        },
        heading: ({ children, level, plainText }) => {
          // @ts-ignore
          const text: string = children?.[0]?.props?.text
            ?.replaceAll(/(?=\S)(?=\W)\W/g, '')
            .replaceAll(' ', '-')

          switch (level) {
            case 2:
              return <h2 id={text}>{children}</h2>
            case 3:
              return <h3 id={text}>{children}</h3>
            default:
              return <h4 id={text}>{children}</h4>
          }
        },
        paragraph: ({ children }) => {
          // @ts-ignore
          const text: string = children?.[0]?.props?.text

          if (text.startsWith('<accordion>')) {
            const title = text.split('<accordion>')[1]
            const content = text.split('<accordion>')[2].trimStart()
            return <ArticleAccordion title={title} content={content} />
          }

          return <p>{children}</p>
        },
      }}
    />
  )
}
