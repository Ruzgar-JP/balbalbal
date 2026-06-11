import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={180}
        height={60}
        priority
      />
    </Link>
  )
}