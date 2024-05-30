'use client'

type Props = {
  defaultLocale: string
}

export default function LocaleSelect({ defaultLocale }: Props) {
  const changeLocale = (locale: string) => {
    document.cookie = `locale=${locale}`
    window.location.reload()
  }

  return (
    <select
      className={'border-2'}
      defaultValue={defaultLocale}
      onChange={(el) => changeLocale(el.target.value)}
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  )
}
