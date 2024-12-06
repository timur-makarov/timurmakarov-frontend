"use server"
import { getProfileData } from '@/app/_lib/queries'
import LanguageSelector from '@/app/_components/Header/LocaleSelect'
import ThemeButton from '@/app/_components/Header/ThemeButton'
import { getLocale } from '@/app/_lib/utils/i18n'
import { getThemeNumber } from '@/app/_lib/utils/theme'

export default async function Header() {
  const locale = getLocale()
  const themeNumber = getThemeNumber()

  const data = await getProfileData(locale)

  return (
    <header className="px-2 py-3 md:px-12">
      <div className="flex items-center justify-between flex-col gap-4 md:flex-row">
        <a href="/">
          <h1 className="text-4xl font-bold">{data.attributes.name}</h1>
        </a>

        <div className="flex items-center gap-2">
          <ThemeButton locale={locale} themeNumber={themeNumber} />
          <LanguageSelector locale={locale} />
        </div>
      </div>
    </header>
  )
}
