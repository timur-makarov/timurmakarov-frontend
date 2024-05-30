'use client'
import styles from "./index.module.scss"
import { useEffect, useMemo, useState } from "react"
import { useLocale } from "next-intl"


interface Language {
	key: string;
	name: string;
}

const LANGUAGE_SELECTOR_ID = 'language-selector'

export default function LanguageSelector() {
	const locale = useLocale()
	
	const languages = useMemo(() => [
		{ key: 'en', name: 'English' },
		{ key: 'ru', name: 'Русский' },
	], [])
	
	
	const [isOpen, setIsOpen] = useState(false)
	const selectedLanguage = languages.find(
		(language) => language.key === locale) || languages[0]
	
	useEffect(() => {
		const handleWindowClick = (event: any) => {
			const target = event.target.closest('button')
			if (target && target.id === LANGUAGE_SELECTOR_ID) {
				return
			}
			setIsOpen(false)
		}
		
		window.addEventListener('click', handleWindowClick)
		return () => {
			window.removeEventListener('click', handleWindowClick)
		}
	}, [])
	
	
	return (
		<>
			<div className="flex items-center z-40">
				<div className="relative inline-block w-36 text-left">
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							id={LANGUAGE_SELECTOR_ID}
							aria-haspopup="true"
							aria-expanded={isOpen}
						>
							<FlagIcon countryCode={selectedLanguage.key}/>
							{selectedLanguage.name}
							<svg
								className="-mr-1 ml-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					
					{isOpen && <div
						className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="language-selector"
					>
						<div className="py-1 grid grid-cols-1 gap-2" role="none">
							{languages.map((language, index) => {
								return (
									<a key={language.key} href={"/" + language.key}>
										<button
											className={`${
												selectedLanguage.key === language.key
													? "bg-gray-100 text-gray-900"
													: "text-gray-700"
											} px-4 w-36 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
											role="menuitem"
										>
											<FlagIcon countryCode={language.key}/>
											<span className="truncate">{language.name}</span>
										</button>
									</a>
								)
							})}
						</div>
					</div>}
				</div>
			</div>
		</>
	)
};


interface FlagIconProps {
	countryCode: string;
}

function FlagIcon({ countryCode = "" }: FlagIconProps) {
	if (countryCode === "en") {
		countryCode = "gb"
	}
	
	return (
		<span
			className={`fi fis ${styles.fiCircle} inline-block mr-2 fi-${countryCode}`}
		/>
	)
}