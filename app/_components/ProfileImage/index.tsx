import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div className="relative">
      <Image
        src="/images/tbilisi.jpg"
        width={1024}
        height={224}
        className="h-56 object-cover"
        loading="eager"
        alt="Tbilisi, Georgia"
        priority
      />

      <Image
        src="/images/avatar.jpg"
        width={100}
        height={150}
        loading="eager"
        className="absolute bottom-0 left-0"
        alt="Timur Makarov avatar"
      />
    </div>
  )
}
