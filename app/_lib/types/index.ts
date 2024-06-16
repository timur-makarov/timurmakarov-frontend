import type { BlocksContent } from '@strapi/blocks-react-renderer'

export type Locale = 'en' | 'ru'

type ImageMedia = {
  data: {
    attributes: {
      url: string
      height: number
      width: number
      name: string
    }
  }
}

export type Article = {
  title: string
  slug: string
  description: string
  content: BlocksContent
  createdAt: string
  updatedAt: string
  image: ImageMedia
}
