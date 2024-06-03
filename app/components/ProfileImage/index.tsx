import Image from 'next/image'

export default function ProfileImage() {
  return (
    <Image
      src="/images/tbilisi2.jpg"
      width={1080}
      height={224}
      className="h-56 object-cover"
      loading={'eager'}
      alt="Tbilisi, Georgia"
    />
  )
}
