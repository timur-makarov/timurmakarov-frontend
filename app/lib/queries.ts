import { cookies } from 'next/headers'

const defaultHeaders = {
  Authorization: 'Bearer ' + process.env.API_TOKEN,
}

function getURL(path: string): string {
  const localeCookie = cookies().get('locale')?.value
  return process.env.BACKEND_URI + `/api/${path}?locale=${localeCookie || 'en'}`
}

export type ProfileData = {
  id: number
  attributes: {
    name: string
    description: string
  }
}

export async function getProfileData(): Promise<ProfileData> {
  const res = await fetch(getURL('profile'), {
    headers: defaultHeaders,
  })

  if (!res.ok) {
    throw new Error('Failed to profile data')
  }

  const { data } = await res.json()

  return data
}
