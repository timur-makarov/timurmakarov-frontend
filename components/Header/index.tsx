import { getProfileData } from '@/lib/queries'
import LanguageSelector from '@/components/Header/LocaleSelect'
import { getLocale } from 'next-intl/server'
import ThemeButton from '@/components/Header/ThemeButton'
import { cookies } from 'next/headers'
import { Locale } from '@/lib/types'

export default async function Header() {
  const locale = (await getLocale()) as Locale
  const data = await getProfileData(locale)
  const themeNumber = cookies().get('theme')?.value || '0'

  return (
    <header className="px-2 py-3 md:px-12 bg-blue-200 dark:bg-blue-900">
      <div className="flex items-center justify-between flex-col gap-4 md:flex-row">
        <h1 className="text-4xl font-bold">{data.attributes.name}</h1>
        <div className="flex items-center gap-2">
          <ThemeButton locale={locale} themeNumber={themeNumber} />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}
