import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const res = NextResponse.next()

  if (req.nextUrl.hostname.split('.').length === 3) {
    res.cookies.set('locale', req.nextUrl.hostname.split('.')[0])
  }

  return res
}
