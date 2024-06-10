export function getCookie(name: string): string | null {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}

export function setCookie(name: string, value: string, days: number) {
  let expires = ''

  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  expires = `; expires=${date.toUTCString()}`

  const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN || 'localhost'
  document.cookie = `${name}=${value || ''}${expires}; path=/; domain=${domain}`
}
