import { getProfileData } from '@/app/lib/queries'
import LocaleSelect from '@/app/components/Header/LocaleSelect'
import { cookies } from 'next/headers'

export default async function Header() {
  const data = await getProfileData()
  const defaultLocale = cookies().get('locale')?.value || 'en'

  return (
    <div className={'flex items-center gap-10'}>
      <h1>{data.attributes.name}</h1>

      <LocaleSelect defaultLocale={defaultLocale} />
    </div>
  )
}
