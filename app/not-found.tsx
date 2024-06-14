import { getLocale } from '@/app/_lib/utils/i18n'
import messageByLocale from '@/app/_assets/messageByLocale'

export default function NotFound() {
  const locale = getLocale()
  const pageNotFoundText = messageByLocale.errors.pageNotFound[locale]
  const homePageText = messageByLocale.errors.homePage[locale]

  return (
    <div className="flex gap-4 flex-col items-center justify-center h-full">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-4xl">{pageNotFoundText}</h2>
      <a href="/" className="underline text-blue-500">
        {homePageText}
      </a>
    </div>
  )
}
