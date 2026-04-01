import Link from 'next/link'

export default function ArticleReadButton({ slug = 'ai-supply-chain-redesign', label = '전문 읽기' }: { slug?: string; label?: string }) {
  return (
    <Link
      href={`/insights/${slug}`}
      className="flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4"
    >
      {label}
      <span className="material-symbols-outlined">arrow_forward</span>
    </Link>
  )
}
