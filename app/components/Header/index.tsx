import { getProfileData } from '@/app/lib/queries'
import LanguageSelector from '@/app/components/Header/LocaleSelect'
import { getLocale } from "next-intl/server"


export default async function Header() {
	const locale = await getLocale()
	const data = await getProfileData(locale)
	
	return (
		<div className={'flex items-center gap-10'}>
			<h1>{data.attributes.name}</h1>
			
			<LanguageSelector/>
		</div>
	)
}
