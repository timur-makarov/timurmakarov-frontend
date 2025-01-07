import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { TbFileCv } from 'react-icons/tb'
import { MdPinDrop } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import { getProfileData } from '@/app/_lib/queries'
import styles from './index.module.scss'
import { getLocale } from '@/app/_lib/utils/i18n'
import messageByLocale from '@/app/_assets/messageByLocale'
import profileImage from '@/public/images/avatar.jpg'
import Image from 'next/image'
import { SiLeetcode } from 'react-icons/si'

export default async function Bio() {
  const locale = getLocale()
  const profileData = await getProfileData(locale)

  const locationText = messageByLocale.bioLinks.location[locale]
  const cvText = messageByLocale.bioLinks.cv[locale]

  const bioLinks = [
    {
      icon: <MdPinDrop size={20} color="#eb3110" />,
      url: '',
      title: locationText,
    },
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/timur-makarov',
      title: 'Github',
    },
    {
      icon: <SiLeetcode size={20} color="#e5a512" />,
      url: 'https://leetcode.com/u/timur-makarov',
      title: 'Leetcode',
    },
    {
      icon: <IoMail size={20} color="#edcb51" />,
      url: 'mailto://contact@timurmakarov.com',
      title: 'Email',
    },
    {
      icon: <FaTelegramPlane size={20} color="#24A1DE" />,
      url: 'https://t.me/timurmakarov_com',
      title: 'Telegram',
    },
    {
      icon: <TbFileCv size={20} color="#cf4040" />,
      url: `https://docs.google.com/document/d/10SNkU-21nv17emvFSS2j_zYmTkJl0YjJbwPswQxASZ8/edit?usp=sharing`,
      title: cvText,
    },
  ]

  return (
    <div className="px-2 lg:px-0">
      <div className="mt-4 mb-4 md:mb-8 relative">
        <h2 className="text-2xl md:text-4xl font-semibold">{profileData.attributes.jobTitle}</h2>
        <Image
          src={profileImage}
          width={85}
          height={130}
          className="absolute right-0 top-0"
          alt="Timur Makarov avatar"
          loading="eager"
          priority
        />
      </div>

      <div className="flex gap-4 md:gap-8 lg:gap-12 md:flex-row flex-col md:pt-6">
        <div className="whitespace-nowrap flex flex-col gap-2">
          {bioLinks.map((link) => (
            <div key={link.title} className="flex items-center gap-2">
              {link.icon}
              {link.url ? (
                <a href={link.url} target="_blank" className="hover:underline">
                  {link.title}
                </a>
              ) : (
                <span>{link.title}</span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.markdownWrapper}>
          <ReactMarkdown>{profileData.attributes.bio}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
