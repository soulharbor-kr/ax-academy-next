import Image from 'next/image'
import Link from 'next/link'
import CaseCard from '@/components/CaseCard'
import CaseReadButton from '@/components/CaseReadButton'
import { casesData } from '@/lib/cases-data'

export const metadata = {
  title: '물류 AX 사례 | AX Academy',
}

const featured = casesData.find((c) => c.featured)!
const gridCases = casesData.filter((c) => !c.featured)

export default function Cases() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl mb-20">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Case Studies</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8 italic">
            물류 현장에서<br />검증된 AX 솔루션
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            수강생들이 실제 현업에서 구축하고 배포한 AI 자동화 사례를 소개합니다. 이론을 넘어 현장에서 작동하는 솔루션들입니다.
          </p>
        </div>

        {/* Featured */}
        <Link href={`/cases/${featured.slug}`} className="relative group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 mb-20 block">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-[560px] overflow-hidden">
              <Image
                src={featured.img}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-surface-container-lowest">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold tracking-wider uppercase">Featured Case</span>
                <span className="text-on-surface-variant text-sm">{featured.date}</span>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 italic">
                {featured.title}
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                {featured.desc}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featured.stats.slice(0, 3).map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-headline text-3xl font-bold text-secondary">{val}</div>
                    <div className="text-xs text-on-surface-variant mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <CaseReadButton slug={featured.slug} />
            </div>
          </div>
        </Link>

        {/* Cases Grid */}
        <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-headline text-3xl text-primary">전체 사례 보기</h2>
          <div className="flex gap-2 flex-wrap">
            {['전체', '자동화', '예측 분석', '챗봇'].map((tag, i) => (
              <button key={tag} className={`px-4 py-2 rounded-full text-sm font-medium ${i === 0 ? 'bg-primary text-white' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant transition-colors'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {gridCases.map((c) => (
            <CaseCard key={c.slug} {...c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl text-primary mb-6">당신의 사례를 만들어 보세요</h2>
          <p className="text-xl text-on-surface-variant mb-10">다음 기수에서 당신만의 물류 AI 솔루션을 구축하고 실제 현장에 배포하세요.</p>
          <Link href="/apply" className="inline-block px-12 py-5 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-2xl shadow-primary/20">
            수강 신청하기
          </Link>
        </div>
      </section>
    </>
  )
}
