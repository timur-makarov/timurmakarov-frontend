import Bio from '@/components/Bio'
import Header from '@/components/Header'
import ProfileImage from '@/components/ProfileImage'
import ThemeMediaQuery from '@/components/ThemeMediaQuery'
import { cookies } from 'next/headers'

export default function Home() {
  const themeCookie = cookies().get('theme')?.value

  return (
    <main>
      <ThemeMediaQuery themeCookie={themeCookie} />
      <Header />
      <ProfileImage />
      <Bio />
    </main>
  )
}
