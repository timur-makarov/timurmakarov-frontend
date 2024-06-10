export function setCookie(name: string, value: string, days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = `;expires=${date.toUTCString()}`

  const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN || 'localhost'
  document.cookie = `${name}=${value}${expires};path=/;domain=${domain}`
}
