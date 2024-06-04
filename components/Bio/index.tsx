import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { MdPinDrop } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/lib/types'
import { getProfileData } from '@/lib/queries'
import styles from './index.module.scss'

export default async function Bio() {
  const locale = (await getLocale()) as Locale
  const profileData = await getProfileData(locale)

  return (
    <div className="px-2 lg:px-0">
      <h2 className="text-2xl md:text-4xl font-semibold mt-4 mb-4 md:mb-8">
        Fullstack Blockchain Developer
      </h2>

      <div className="flex gap-4 md:gap-8 lg:gap-16 md:flex-row flex-col">
        <div className="whitespace-nowrap flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdPinDrop size={20} color="#eb3110" /> <span>Tbilisi, Georgia</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub size={20} />
            <a href="https://github.com/Timur-Makarov">github.com/Timur-Makarov</a>
          </div>
          <div className="flex items-center gap-2">
            <IoMail size={20} color="#edcb51" />
            <a href="mailto://hello@timurmakarov.com">hello@timurmakarov.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaTelegramPlane size={20} color="#24A1DE" />
            <a href="https://t.me/timurmakarov_com">@timurmakarov_com</a>
          </div>
        </div>

        <div className={styles.markdownWrapper}>
          <ReactMarkdown>{profileData.attributes.bio}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
