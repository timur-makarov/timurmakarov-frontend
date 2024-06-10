import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const subdomain = req.nextUrl.hostname.split('.')[0]
  if (req.nextUrl.hostname.split('.').length === 3 && subdomain !== 'www') {
    res.cookies.set({
      name: 'locale',
      value: subdomain,
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  return res
}
