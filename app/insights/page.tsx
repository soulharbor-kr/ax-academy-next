import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import ArticleReadButton from '@/components/ArticleReadButton'
import { insightsData } from '@/lib/insights-data'

export const metadata = {
  title: '물류 및 산업 동향 | AX Academy',
}

const featured = insightsData.find((a) => a.featured)!
const articles = insightsData.filter((a) => !a.featured)

const trending = [
  { tag: '해운', title: '홍해 사태 1년: 수에즈 우회 운항의 장기 영향 분석', date: '2025.03.18', slug: 'red-sea-one-year' },
  { tag: 'AI', title: 'LLM 기반 물류 에이전트 GPT-4o vs Claude 3.5 비교', date: '2025.03.10', slug: 'llm-logistics-agent' },
  { tag: '정책', title: 'EU CBAM 2026년 전면 시행 — 국내 수출 물류사 대응', date: '2025.03.05', slug: 'eu-cbam-2026' },
  { tag: '해운', title: '컨테이너 선복 과잉 우려: 신조 선박 대량 인도 영향', date: '2025.02.10', slug: 'container-oversupply-2025' },
  { tag: 'AI', title: 'n8n으로 구현하는 물류 자동화: 2025년 워크플로우 10선', date: '2025.01.07', slug: 'n8n-automation-2025' },
]

export default function Insights() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 py-12">

        {/* Featured Article */}
        <section className="mb-16">
          <Link href={`/insights/${featured.slug}`} className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 block">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <Image
                  src={featured.img}
                  alt={featured.alt}
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold tracking-wider uppercase">Feature Article</span>
                  <span className="text-on-surface-variant text-sm">2025년 3월</span>
                </div>
                <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 italic">
                  {featured.title}
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                  {featured.desc}
                </p>
                <div className="flex items-center gap-6">
                  <ArticleReadButton slug={featured.slug} />
                  <span className="text-on-surface-variant text-sm border-l border-outline-variant/30 pl-6">{featured.readTime} 읽기</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Main Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Feed */}
          <div className="flex-1">
            <div className="mb-10 flex items-center gap-4 overflow-x-auto pb-2">
              {['전체', '해운 (Ocean)', '항공 (Air)', '내륙운송 (Land)', 'AI', '정책 (Policy)', '유가 (Oil)'].map((tag, i) => (
                <button key={tag} className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-highest text-on-surface-variant transition-colors'}`}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block">
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container-low relative">
                    <Image src={a.img} alt={a.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-tertiary font-bold text-xs uppercase tracking-widest">{a.tag}</span>
                    <h3 className="font-headline text-lg font-bold leading-snug group-hover:text-secondary transition-colors line-clamp-2">{a.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">{a.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium pt-1">
                      <span>{a.date}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-10">
            {/* Newsletter */}
            <div className="bg-primary p-8 rounded-xl text-on-primary">
              <h3 className="font-headline text-2xl mb-3">물류 인사이트 구독</h3>
              <p className="text-primary-fixed-dim text-sm mb-6">매주 엄선된 물류 AI 트렌드를 이메일로 받아보세요.</p>
              <NewsletterForm />
            </div>

            {/* Trending */}
            <div>
              <h3 className="font-headline text-xl text-primary mb-6">인기 아티클</h3>
              <div className="space-y-6">
                {trending.map(({ tag, title, date, slug }) => (
                  <Link key={slug} href={`/insights/${slug}`} className="group cursor-pointer block">
                    <span className="text-tertiary font-bold text-xs uppercase tracking-widest block mb-1">{tag}</span>
                    <p className="font-medium text-on-surface group-hover:text-secondary transition-colors text-sm leading-snug">{title}</p>
                    <span className="text-xs text-on-surface-variant mt-1 block">{date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="font-headline text-xl text-primary mb-6">주요 토픽</h3>
              <div className="flex flex-wrap gap-2">
                {['해운', '항공', '내륙운송', 'AI', '정책', '유가', '자동화', 'SCM', '관세', 'ESG', '항만', '드론'].map(topic => (
                  <button key={topic} className="px-3 py-1.5 bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface-variant text-xs font-medium rounded-full transition-colors">
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Article count */}
            <div className="bg-surface-container-low rounded-xl p-6 text-center">
              <div className="font-headline text-4xl text-primary mb-1">{insightsData.length}</div>
              <p className="text-on-surface-variant text-sm">2024~2025 물류 인사이트 아티클</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
