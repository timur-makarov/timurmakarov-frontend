'use client'
import messageByLocale from '@/app/_assets/messageByLocale'
import { Locale } from '@/app/_lib/types'
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5'
import { setCookie } from '@/app/_lib/utils/cookie'

type Props = {
  locale: Locale
  themeNumber: string
}

export default function ThemeButton({ locale, themeNumber }: Props) {
  function handleThemeChange() {
    const newThemeNumber = themeNumber === '0' ? '1' : '0'
    setCookie('theme', newThemeNumber, 365)
    window.location.reload()
  }

  const themeType = themeNumber === '0' ? 'dark' : 'light'
  const message = messageByLocale['theme'][themeType][locale]

  return (
    <div className="flex items-center z-40">
      <div className="relative inline-block w-fit text-left">
        <div>
          <button
            onClick={handleThemeChange}
            type="button"
            className="inline-flex items-center justify-between gap-2 w-full rounded-md border dark-bg
            border-gray-300 dark:border-gray-500 shadow-sm px-4 py-2.5 bg-white text-sm font-medium
            text-gray-700 hover:bg-gray-50"
          >
            {themeNumber == '0' ? <IoMoonSharp size={20} /> : <IoSunnySharp size={20} />}
            <span>{message}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
