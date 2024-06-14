import { FaGithub, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { MdPinDrop } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import { getProfileData } from '@/app/_lib/queries'
import styles from './index.module.scss'
import { getLocale } from '@/app/_lib/utils/i18n'
import messageByLocale from '@/app/_assets/messageByLocale'

export default async function Bio() {
  const locale = getLocale()
  const profileData = await getProfileData(locale)

  const locationText = messageByLocale.bioLinks.location[locale]

  return (
    <div className="px-2 lg:px-0">
      <h2 className="text-2xl md:text-4xl font-semibold mt-4 mb-4 md:mb-8">
        {profileData.attributes.jobTitle}
      </h2>

      <div className="flex gap-4 md:gap-8 lg:gap-12 md:flex-row flex-col">
        <div className="whitespace-nowrap flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdPinDrop size={20} color="#eb3110" /> <span>{locationText}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub size={20} />
            <a href="https://github.com/Timur-Makarov" className="hover:underline">
              Github
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IoMail size={20} color="#edcb51" />
            <a href="mailto://hello@timurmakarov.com" className="hover:underline">
              Email
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaTelegramPlane size={20} color="#24A1DE" />
            <a href="https://t.me/timurmakarov_com" className="hover:underline">
              Telegram
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={20} color="#25d366" />
            <a href="https://wa.me/+995597556372" className="hover:underline">
              WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.markdownWrapper}>
          <ReactMarkdown>{profileData.attributes.bio}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
