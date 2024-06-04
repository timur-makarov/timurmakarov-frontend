const defaultHeaders = {
  Authorization: 'Bearer ' + process.env.API_TOKEN,
}

function getURL(path: string, locale: string): string {
  return process.env.BACKEND_URI + `/api/${path}?locale=${locale}`
}

export type ProfileData = {
  id: number
  attributes: {
    name: string
    description: string
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
