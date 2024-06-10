import { cookies } from 'next/headers'

export function getThemeNumber(): string {
  return cookies().get('theme')?.value || '0'
}
