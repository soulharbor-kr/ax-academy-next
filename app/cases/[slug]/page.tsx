import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { casesData, getCaseBySlug } from '@/lib/cases-data'

export function generateStaticParams() {
  return casesData.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const c = getCaseBySlug(params.slug)
  if (!c) return {}
  return { title: `${c.shortTitle} | AX Academy 사례` }
}

export default function CaseDetail({ params }: { params: { slug: string } }) {
  const c = getCaseBySlug(params.slug)
  if (!c) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden">
        <Image src={c.img} alt={c.alt} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              {c.tag}
            </span>
            <span className="text-white/70 text-sm">{c.date}</span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white leading-tight italic max-w-4xl mb-4">
            {c.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">{c.companyFull}</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary">
        <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {c.stats.map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-headline text-2xl md:text-3xl font-bold text-secondary">{val}</div>
              <div className="text-white/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Overview */}
            <section>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-3">Overview</span>
              <h2 className="font-headline text-3xl text-primary mb-6">프로젝트 개요</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">{c.overview}</p>
            </section>

            {/* Challenge */}
            <section>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-3">Challenge</span>
              <h2 className="font-headline text-3xl text-primary mb-6">해결해야 할 과제</h2>
              <div className="bg-surface-container-low rounded-2xl p-8 border-l-4 border-tertiary">
                <p className="text-on-surface-variant leading-relaxed text-lg">{c.challenge}</p>
              </div>
            </section>

            {/* Solution */}
            <section>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-3">Solution</span>
              <h2 className="font-headline text-3xl text-primary mb-6">AI 솔루션</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">{c.solution}</p>
            </section>

            {/* Process */}
            <section>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-3">Process</span>
              <h2 className="font-headline text-3xl text-primary mb-8">구현 과정</h2>
              <div className="space-y-6">
                {c.process.map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-headline font-bold text-primary text-sm">{step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold text-primary text-lg mb-2">{title}</h3>
                      <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-3">Results</span>
              <h2 className="font-headline text-3xl text-primary mb-6">성과</h2>
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <p className="text-on-surface-variant leading-relaxed text-lg">{c.results}</p>
              </div>
            </section>

            {/* Quote */}
            <section className="bg-surface-container-lowest rounded-2xl p-10 shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">format_quote</span>
              <blockquote className="font-headline text-xl text-primary italic leading-relaxed mb-6">
                "{c.quote.text}"
              </blockquote>
              <div>
                <div className="font-bold text-primary">{c.quote.author}</div>
                <div className="text-on-surface-variant text-sm">{c.quote.role}</div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Case Info */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm sticky top-8">
              <h3 className="font-bold text-primary text-lg mb-4">사례 정보</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">business</span>
                  <div>
                    <div className="text-on-surface-variant text-xs mb-0.5">기업</div>
                    <div className="text-primary font-medium">{c.companyFull}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">category</span>
                  <div>
                    <div className="text-on-surface-variant text-xs mb-0.5">카테고리</div>
                    <div className="text-primary font-medium">{c.tag}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">calendar_month</span>
                  <div>
                    <div className="text-on-surface-variant text-xs mb-0.5">배포 시점</div>
                    <div className="text-primary font-medium">{c.date}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">school</span>
                  <div>
                    <div className="text-on-surface-variant text-xs mb-0.5">수강 정보</div>
                    <div className="text-primary font-medium">{c.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-primary text-lg mb-4">기술 스택</h3>
              <div className="space-y-3">
                {c.techStack.map(({ name, role }) => (
                  <div key={name} className="flex items-center justify-between py-2 border-b border-surface-container-low last:border-0">
                    <span className="font-bold text-primary text-sm">{name}</span>
                    <span className="text-on-surface-variant text-xs">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-6 text-center">
              <h3 className="font-headline text-lg font-bold text-white mb-2">나도 만들 수 있을까?</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">AX Academy에서 동일한 스택으로 직접 구축해보세요.</p>
              <Link href="/apply" className="block w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors text-sm">
                수강 신청하기
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other Cases */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="font-headline text-3xl text-primary mb-10">다른 사례 보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casesData
              .filter((other) => other.slug !== c.slug)
              .slice(0, 3)
              .map((other) => (
                <Link key={other.slug} href={`/cases/${other.slug}`} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <Image src={other.img} alt={other.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-tertiary font-bold text-xs uppercase tracking-widest block mb-2">{other.tag}</span>
                    <h3 className="font-headline text-base font-bold text-primary group-hover:text-secondary transition-colors leading-snug">{other.shortTitle}</h3>
                    <p className="text-on-surface-variant text-xs mt-2">{other.company}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/cases" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
              <span>전체 사례 보기</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
