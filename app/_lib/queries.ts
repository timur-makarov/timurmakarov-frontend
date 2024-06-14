import { Article } from '@/app/_lib/types'

const defaultHeaders = {
  Authorization: 'Bearer ' + process.env.API_TOKEN,
}

function getURL(path: string, locale: string, options?: Record<string, string>): string {
  return (
    process.env.BACKEND_URI +
    `/api/${path}?locale=${locale}` +
    (options ? '&' + new URLSearchParams(options) : '')
  )
}

export type ProfileData = {
  id: number
  attributes: {
    name: string
    jobTitle: string
    bio: string
  }
}

export async function getProfileData(locale: string): Promise<ProfileData> {
  const res = await fetch(getURL('profile', locale), { headers: defaultHeaders })

  if (!res.ok) {
    throw new Error('Failed to fetch profile data')
  }

  const { data } = await res.json()
  return data
}

export type MetadataData = {
  id: number
  attributes: {
    title: string
    description: string
  }
}

export async function getHeadMetadata(locale: string): Promise<MetadataData> {
  const res = await fetch(getURL('metadata', locale), { headers: defaultHeaders })

  if (!res.ok) {
    throw new Error('Failed to fetch head metadata')
  }

  const { data } = await res.json()
  return data
}

export type ArticleData = {
  id: number
  attributes: Article
}

export async function getArticles(locale: string): Promise<ArticleData[]> {
  const res = await fetch(getURL('articles', locale, { populate: 'image' }), {
    headers: defaultHeaders,
  })

  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }

  const { data } = await res.json()
  return data
}

export async function getArticleBySlug(locale: string, slug: string): Promise<ArticleData> {
  const res = await fetch(
    getURL(`articles`, locale, { 'filters[slug][$eq]': slug, populate: 'image' }),
    {
      headers: defaultHeaders,
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch article')
  }

  const { data } = await res.json()
  return data[0]
}
