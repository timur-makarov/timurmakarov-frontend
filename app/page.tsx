import Bio from '@/app/_components/Bio'
import Header from '@/app/_components/Header'
import ProfileImage from '@/app/_components/ProfileImage'
import ThemeMediaQuery from '@/app/_components/ThemeMediaQuery'
import { getThemeNumber } from '@/app/_lib/utils/theme'

export default function Home() {
  const themeCookie = getThemeNumber()

  return (
    <main>
      <ThemeMediaQuery themeCookie={themeCookie} />
      <Header />
      <ProfileImage />
      <Bio />
    </main>
  )
}
