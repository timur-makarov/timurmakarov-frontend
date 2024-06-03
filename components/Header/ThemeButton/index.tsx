'use client'
import Image from 'next/image'
import messageByLocale from '@/assets/messageByLocale'
import { Locale } from '@/lib/types'

type Props = {
  locale: Locale
  themeNumber: string
}

export default function ThemeButton({ locale, themeNumber }: Props) {
  function handleThemeChange() {
    const newTheme = themeNumber === '0' ? '1' : '0'
    document.cookie = `theme=${newTheme}; path=/`
    window.location.reload()
  }

  const themeType = themeNumber === '0' ? 'light' : 'dark'
  const message = messageByLocale['theme'][locale][themeType]

  return (
    <div className="flex items-center z-40">
      <div className="relative inline-block w-fit text-left">
        <div>
          <button
            onClick={handleThemeChange}
            type="button"
            className="inline-flex items-center justify-between gap-2 w-full rounded-md border border-gray-300
              shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Image src="/icons/theme-light-dark.svg" alt="theme" width={24} height={24} />
            <span>{message}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
