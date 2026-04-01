import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { insightsData, getInsightBySlug } from '@/lib/insights-data'

export function generateStaticParams() {
  return insightsData.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | AX Academy Insights`,
    description: article.desc,
  }
}

export default function InsightDetail({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug(params.slug)
  if (!article) notFound()

  const related = insightsData.filter((a) => a.slug !== article.slug && a.tag === article.tag).slice(0, 3)
  const moreRelated = related.length < 3
    ? insightsData.filter((a) => a.slug !== article.slug && !related.includes(a)).slice(0, 3 - related.length)
    : []
  const relatedArticles = [...related, ...moreRelated].slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[520px] overflow-hidden">
        <Image
          src={article.img}
          alt={article.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-tertiary/80 text-white rounded-full text-xs font-bold tracking-wider uppercase">
              {article.tag}
            </span>
            <span className="text-white/70 text-sm">{article.date}</span>
            <span className="text-white/70 text-sm">· {article.readTime} 읽기</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl text-white leading-tight max-w-4xl italic">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Main */}
          <article className="flex-1 max-w-3xl">
            {/* Lead */}
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12 border-l-4 border-secondary pl-6">
              {article.desc}
            </p>

            {/* Body */}
            <div className="space-y-12">
              {article.body.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-headline text-2xl text-primary mb-4 font-bold">{section.heading}</h2>
                  <p className="text-on-surface leading-relaxed text-base">{section.content}</p>
                </section>
              ))}
            </div>

            {/* Key Points */}
            <div className="mt-12 bg-surface-container-low rounded-2xl p-8">
              <h3 className="font-headline text-xl text-primary mb-6 font-bold">핵심 요약</h3>
              <ul className="space-y-3">
                {article.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-on-surface text-sm leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5 flex-shrink-0">check_circle</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back */}
            <div className="mt-12">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                인사이트 목록으로
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0 space-y-10">
            {/* Article Info */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg text-primary mb-4">아티클 정보</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">카테고리</dt>
                  <dd className="font-medium text-on-surface">{article.tag}</dd>
                </div>
                <div>
                  <dt className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">발행일</dt>
                  <dd className="font-medium text-on-surface">{article.date}</dd>
                </div>
                <div>
                  <dt className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">예상 읽기 시간</dt>
                  <dd className="font-medium text-on-surface">{article.readTime}</dd>
                </div>
              </dl>
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 rounded-xl text-on-primary">
              <h3 className="font-headline text-xl mb-3">물류 AX 역량을 키우고 싶으신가요?</h3>
              <p className="text-primary-fixed-dim text-sm mb-6 leading-relaxed">
                AX Academy에서 이 아티클의 내용을 실제로 구현하는 방법을 배울 수 있습니다.
              </p>
              <Link
                href="/curriculum"
                className="block text-center px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                커리큘럼 보기
              </Link>
            </div>

            {/* Related */}
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="font-headline text-lg text-primary mb-4">관련 아티클</h3>
                <div className="space-y-4">
                  {relatedArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/insights/${a.slug}`}
                      className="group block bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="relative h-28 overflow-hidden">
                        <Image src={a.img} alt={a.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-4">
                        <span className="text-tertiary font-bold text-xs uppercase tracking-widest block mb-1">{a.tag}</span>
                        <h4 className="text-sm font-bold leading-snug group-hover:text-secondary transition-colors line-clamp-2">{a.title}</h4>
                        <span className="text-xs text-on-surface-variant mt-1 block">{a.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}
