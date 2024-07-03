'use client'
import styles from './index.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { Locale } from '@/app/_lib/types'

type Props = {
  locale: Locale
}

interface Language {
  key: string
  name: string
}

const LANGUAGE_SELECTOR_ID = 'language-selector'

export default function LanguageSelector({ locale }: Props) {
  const languages = useMemo<Language[]>(
    () => [
      { key: 'en', name: 'English' },
      { key: 'ru', name: 'Русский' },
    ],
    [],
  )

  const [isOpen, setIsOpen] = useState(false)
  const selectedLanguage = languages.find((language) => language.key === locale) || languages[0]

  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest('button')
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return
      }
      setIsOpen(false)
    }

    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  function getHref(language: Language) {
    const pathname = window.location.pathname
    const key = language.key === 'en' ? 'www' : language.key
    return `https://${key}.timurmakarov.com${pathname}`
  }

  return (
    <>
      <div className="flex items-center z-40">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border
              border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700
              hover:bg-gray-50 dark-bg dark:border-gray-500"
            id={LANGUAGE_SELECTOR_ID}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <FlagIcon countryCode={selectedLanguage.key} />
            <span className="ml-2">{selectedLanguage.name}</span>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-1 shadow-lg bg-white dark:bg-gray-800 w-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="grid grid-cols-1" role="none">
                {languages.map((language) => {
                  return (
                    <a key={language.key} target="_self" href={getHref(language)}>
                      <button
                        className={`px-4 w-full py-2 text-sm text-left items-center inline-flex
                        dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700`}
                        role="menuitem"
                      >
                        <FlagIcon countryCode={language.key} />
                        <span className="ml-2">{language.name}</span>
                      </button>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

interface FlagIconProps {
  countryCode: string
}

function FlagIcon({ countryCode = '' }: FlagIconProps) {
  if (countryCode === 'en') {
    countryCode = 'gb'
  }

  return <span className={`fi fis ${styles.fiCircle} inline-block fi-${countryCode}`} />
}
