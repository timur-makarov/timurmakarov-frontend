import { cookies } from 'next/headers'
import { Locale } from '@/app/_lib/types'

export function getLocale(): Locale {
  return (cookies().get('locale')?.value || 'en') as Locale
}
