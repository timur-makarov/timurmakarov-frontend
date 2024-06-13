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
  content: string
  createdAt: string
  updatedAt: string
  image: ImageMedia
}
