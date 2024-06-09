'use client'

import { useEffect } from 'react'

type Props = {
  themeCookie: string | undefined
}

export default function ThemeMediaQuery({ themeCookie }: Props) {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const darkMode = mediaQuery.matches
    const root = document.body

    if (!themeCookie) {
      if (darkMode) {
        root.classList.add('dark')
        document.cookie = 'theme=1'
      }

      mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
          root.classList.add('dark')
        } else {
          root.classList.remove('dark')
        }
      })
    }
  })

  return <></>
}
