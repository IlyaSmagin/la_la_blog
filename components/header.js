import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight mb-12 pt-12">
      <Link href="/">
        <a className="hover:underline decoration-2">la_la_blog</a>
      </Link>
      .
    </h2>
  )
}
