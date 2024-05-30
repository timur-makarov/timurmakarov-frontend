import { Inter } from 'next/font/google'

import "flag-icons/css/flag-icons.min.css"
import '../globals.css'
import { NextIntlClientProvider } from "next-intl"
import { Metadata } from "next"
import { getMetadataData } from "@/app/lib/queries"


const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export async function generateMetadata(
	{ params }: { params: { locale: string } },
): Promise<Metadata> {
	const data = await getMetadataData(params.locale)
	
	return {
		title: data.attributes.title,
		description: data.attributes.description,
	}
}

export default function RootLayout({
	children,
	params: { locale }
}: Readonly<{
	children: React.ReactNode,
	params: { locale: string };
}>)
{
	
	return (
		<html lang={locale}>
		<body className={inter.className}>
			<NextIntlClientProvider>
				{children}
			</NextIntlClientProvider>
		</body>
		</html>
	)
}
