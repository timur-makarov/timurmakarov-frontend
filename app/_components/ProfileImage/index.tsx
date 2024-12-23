import Image from 'next/image'
import profileImage from '@/public/images/avatar.jpg'
import coverImage from '@/public/images/tbilisi.jpg'

export default function ProfileImage() {
  return (
    <div className="relative">
      <Image
        src={coverImage}
        width={1024}
        height={224}
        className="h-56 object-cover"
        alt="Tbilisi, Georgia"
        loading="eager"
        priority
      />

      <Image
        src={profileImage}
        width={100}
        height={150}
        className=""
        alt="Timur Makarov avatar"
        loading="eager"
        priority
      />
    </div>
  )
}
