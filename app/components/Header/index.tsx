import { getProfileData } from '@/app/lib/queries'
import LanguageSelector from '@/app/components/Header/LocaleSelect'
import { getLocale } from 'next-intl/server'
import ThemeButton from '@/app/components/Header/ThemeButton'
import { cookies } from 'next/headers'
import { Locale } from '@/app/lib/types'

export default async function Header() {
  const locale = (await getLocale()) as Locale
  const data = await getProfileData(locale)
  const themeNumber = cookies().get('theme')?.value || '0'

  return (
    <header className="px-2 py-3 md:px-12 bg-blue-100">
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
