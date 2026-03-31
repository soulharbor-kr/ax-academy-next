import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '물류 AX 사례 | AX Academy',
}

const cases = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFjDk6nz0frcM22DfqabBXNgwi0GjXznjRdPrZKEhsXELy-bgjmEEP8h-8sVeJjo__KqysZwmqnJEUkXrbJ5c2HAB12sMC9rNPTOF7IoFTeRHHjxN772Re6TWoHCBYT6KhyzT82woA9j3D0DXMnJuhYa1niaFM7FIZMYmp7aUtU1N_GttRkPoxyI4NIEHuaUZ2Vgvnn1VhVEYmtM-jCeoQaVOjVGNkE-u5ISr0U2iRuua1HIEUN2iGtVW_QDykGPXWKXFTkF1_3S0',
    alt: '데이터 대시보드', tag: '자동화 · n8n',
    title: '포워딩 견적 자동화 에이전트',
    desc: '이메일과 PDF로 수신되는 견적 요청을 자동 파싱하여 ERP 시스템에 연동, 최적 운임을 즉시 산출하는 AI 에이전트.',
    company: 'G포워딩 · 수강 12기',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLwzoiydPwSnDjTvGqGSvUwT6PTamV6nSl1UnEuMsAGi2lMqf4Hfi1hvhCHQq8ZIv1_Hocr32LJyPsOwnasqkTQVMWQwpm3CPXXKJd9LPrP5OdgfRsIiWuMORQgh4QHUqay_vR8PVEK5MOD4IyuFFuKkfFBS1G-P3Zxv17XAjWbFTQjq1a7sR3by7HpdHnRabqVxywTLI8zl-PshsebItPxKpNVp6H1Hr5YtzLL5_1UW1FY8iuDe8jIDPugAOXav5k4ozz-6ulIrM',
    alt: 'AI 네트워크', tag: '챗봇 · RAG',
    title: '사내 물류 지식 베이스 챗봇',
    desc: '수백 페이지 분량의 운영 매뉴얼을 RAG 방식으로 학습시켜 신입 사원 온보딩 기간을 8주에서 2주로 단축.',
    company: 'S물류 · 수강 11기',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_anvfb7vMwat0pFNvid1SR9I9iIB-xi09_HQeYhpVGMZxd7nPjoySOIAxexuyR8oHLGMfJmocoQEUN50c-DQNpY9NUTlkeNJS_yx7LtDJ8ELCzhMFdQ9TQVZMwQZWw3s2cFYrZpoi4ORCNT-q7ysH3yLmXbAeCmtDLWWMIABgKqNkXWDiaojYgNu_ZagJPs1EraLvXcJ0ix4Jz10dgeiJCPc7zJyGoUio2jwlBTJwHgC7IG_NUCLb7Pa-iS71F9nvx3GKSRI-hDE',
    alt: '예측 분석', tag: '예측 분석 · ML',
    title: '수요 예측 기반 배차 최적화',
    desc: '과거 배송 데이터와 외부 요인을 결합하여 주간 물동량을 예측하고, 최적 배차 계획을 자동 생성하는 시스템.',
    company: 'K택배 · 수강 12기',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs',
    alt: '컨테이너 터미널', tag: '자동화 · n8n',
    title: '컨테이너 반출입 현황 자동 리포트',
    desc: '터미널 데이터를 실시간 수집하고 일일 현황 리포트를 자동 생성하여 운영팀 슬랙으로 발송하는 워크플로우.',
    company: 'P터미널 · 수강 11기',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXAkke7wrNrzU4n028raEVEzQNq31UGQ1LX5QvHNeDUgXsFJK9wSuPuidIt6W9wLExNhFexyjNz4FAve4CV7Onzr5KbmsriO8X_Kj7-7FRaBVDlTZVNaIFzDoBy4qgalgMdzUmIrPte49jczqYTCTQDXh79mguAPXbU53fCCB4uL2OEY0ev1ChCGNe6a92lRVm0YmECCj3Rcsi5vwdq28g7YJ6pagNvF4LQ2XoapI4XVgnl-OmIQHbJS7t0_LF_sdapxQYKu8KOGA',
    alt: '항공 화물', tag: '예측 분석 · AI',
    title: '항공 운임 변동 예측 모델',
    desc: '유가, 환율, 계절성 데이터를 학습하여 2주 후 항공 운임을 예측하고 최적 구매 시점을 알려주는 AI 모델.',
    company: 'A항공화물 · 수강 10기',
  },
]

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
        <div className="relative group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-[560px] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs"
                alt="컨테이너 터미널" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-surface-container-lowest">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold tracking-wider uppercase">Featured Case</span>
                <span className="text-on-surface-variant text-sm">2024년 10월</span>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 italic">
                Morning Briefing 자동화: 물류 뉴스 AI 분석 시스템
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                글로벌 물류 뉴스, 유가, 선복 데이터를 매일 새벽 AI가 자동 수집·분석하여 팀 슬랙으로 브리핑을 전송하는 n8n 기반 자동화 솔루션. 정보 수집 시간 90% 절감 달성.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ val: '90%', label: '시간 절감' }, { val: '24/7', label: '자동 운영' }, { val: '500+', label: '일일 소스' }].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-headline text-3xl font-bold text-secondary">{val}</div>
                    <div className="text-xs text-on-surface-variant mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-secondary font-bold cursor-pointer group">
                <span>자세히 보기</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>

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
          {cases.map(({ img, alt, tag, title, desc, company }) => (
            <article key={title} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-surface-container-low relative">
                <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <span className="text-tertiary font-bold text-xs uppercase tracking-widest block mb-3">{tag}</span>
                <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">{company}</span>
                  <div className="flex items-center gap-1 text-secondary font-bold text-sm">
                    <span>자세히</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                </div>
              </div>
            </article>
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
