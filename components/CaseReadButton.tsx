import Link from 'next/link'

export default function CaseReadButton({ slug }: { slug: string }) {
  return (
    <Link
      href={`/cases/${slug}`}
      className="inline-flex items-center gap-2 text-secondary font-bold group"
    >
      <span>자세히 보기</span>
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
    </Link>
  )
}
