import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '커리큘럼 | AX Academy',
}

const weeks = [
  {
    week: 'Week 01', title: 'AI Basics', icon: 'lightbulb', strong: true,
    tools: 'ChatGPT, NotebookLM',
    schedule: '물류 AI 리서치 및 프롬프트 엔지니어링',
    outcome: '물류 도메인 지식 AI 최적화',
  },
  {
    week: 'Week 02', title: 'n8n Automation', icon: 'settings', strong: false,
    tools: 'n8n, Claude',
    schedule: '노코드 워크플로우 설계 및 API 연동',
    outcome: '실시간 데이터 파이프라인 구축',
  },
  {
    week: 'Week 03', title: 'Logistics AX', icon: 'local_shipping', strong: false,
    tools: 'Supabase, SQL',
    schedule: '물류 특화 커스텀 AI 모델 튜닝',
    outcome: '견적 및 물량 예측 시스템',
  },
  {
    week: 'Week 04', title: 'Full-stack / Deployment', icon: 'rocket_launch', strong: false,
    tools: 'Next.js, Railway, Vercel',
    schedule: '웹 인터페이스 구현 및 클라우드 배포',
    outcome: '실 서비스 배포 및 포트폴리오 완성',
  },
]

const modules = [
  { num: '01', title: '물류 도메인 마스터', desc: '해상/항공/내륙 물류의 전반적인 구조와 데이터 흐름을 AI 관점에서 재해석합니다.', icon: 'map' },
  { num: '02', title: '프롬프트 엔지니어링', desc: '물류 업무에 최적화된 AI 프롬프트 설계 방법론을 실습 데이터와 함께 학습합니다.', icon: 'edit_note' },
  { num: '03', title: 'n8n 워크플로우 자동화', desc: '노코드 도구로 이메일 파싱, API 연동, 슬랙 알림까지 실제 워크플로우를 구축합니다.', icon: 'account_tree' },
  { num: '04', title: 'RAG 기반 지식 에이전트', desc: '사내 문서와 매뉴얼을 학습한 맞춤형 AI 챗봇을 설계하고 배포하는 과정입니다.', icon: 'chat_bubble' },
  { num: '05', title: '데이터베이스 & SQL', desc: 'Supabase를 활용하여 물류 데이터를 저장하고 AI 분석에 활용할 수 있는 구조를 설계합니다.', icon: 'storage' },
  { num: '06', title: '웹 앱 배포 & 포트폴리오', desc: 'Next.js와 Railway를 활용하여 나만의 물류 AI 솔루션을 실제 서비스로 배포합니다.', icon: 'cloud_upload' },
]

export default function Curriculum() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-xs font-bold tracking-widest uppercase rounded">4-Week Intensive Masterclass</div>
          <h1 className="font-headline text-6xl md:text-8xl leading-tight text-primary">
            물류 AI 마스터 과정: <span className="italic text-secondary">지능형 전환의 설계</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            단순한 자동화를 넘어 물류 현장의 흐름을 재설계합니다. AI Basics부터 Full-stack 배포까지, 4주 만에 물류 AX 전문가로 거듭나는 커리큘럼을 확인하세요.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-shadow">브로셔 다운로드</button>
            <Link href="/apply" className="px-8 py-4 border border-outline text-primary rounded-lg font-semibold text-lg hover:bg-surface-container-low transition-colors text-center">
              학습 상담 예약
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-full bg-secondary/10 absolute -top-10 -right-10 w-64 h-64 blur-3xl"></div>
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-yFqTKe5uQNe9lvn9LtZwxeaZpTXo8PYMolNbA7iUwa-VQ_ZoTPwYJlClKjirgpTTPyN5bmuRwCZqvM-7sfn8E6I-UMXIaHlLYjVlnWmKk0dWEaAJb7XTS9BgtqAsRgnjY7rrzInsUBTvLmsG1bp5yBI5XzZc6TzJ40YeBPnFFcJKJAnH8EfcIcLM6kDX2Tc9G5E5WWaSfr_YYY43rwUSE4q9soft0tfPKYJXS-7NQjG1rWAWuE_uKw6RQ3gP5UjcTJnB_pvYOfM"
              alt="물류 창고" width={600} height={600} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface-container-low">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-2">Roadmap</span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary">학습 타임라인</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {weeks.map(({ week, title, icon, strong, tools, schedule, outcome }) => (
              <div key={week} className="bg-surface-container-lowest p-8 rounded-xl h-full shadow-sm hover:shadow-xl transition-all duration-300" style={{ borderTop: `4px solid ${strong ? '#012435' : 'rgba(1,36,53,0.3)'}` }}>
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">{week}</span>
                  <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
                </div>
                <h3 className="font-headline text-2xl mb-4 text-primary">{title}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-on-surface/60 uppercase text-[10px] tracking-wider mb-1">Tools Used</p>
                    <p className="text-on-surface">{tools}</p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface/60 uppercase text-[10px] tracking-wider mb-1">Schedule</p>
                    <p className="text-on-surface">{schedule}</p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface/60 uppercase text-[10px] tracking-wider mb-1">Outcome</p>
                    <p className="text-secondary font-medium">{outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-4">Core Modules</span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary">핵심 학습 모듈</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(({ num, title, desc, icon }) => (
              <div key={num} className="bg-surface-container-low p-10 rounded-xl hover:bg-surface-container-lowest hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-secondary font-bold text-sm">{num}</span>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors">{icon}</span>
                </div>
                <h3 className="font-headline text-xl text-primary mb-3">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-container-lowest rounded-2xl p-12 md:p-16 shadow-sm border border-outline-variant/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">수강료</span>
                <div className="font-headline text-6xl text-primary mb-2">₩1,490,000</div>
                <p className="text-on-surface-variant text-sm mb-6">4주 전 과정 · 모든 실습 자료 포함 · 수료 후 커뮤니티 평생 이용</p>
                <ul className="space-y-3 text-sm">
                  {['현업 강사진의 1:1 멘토링', '실습 프로젝트 포트폴리오 제작', '수료 후 취업/창업 연계 지원', '기업 교육 별도 견적 가능'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left">
                <Link href="/apply" className="block px-10 py-5 bg-primary text-white font-bold rounded-lg text-lg hover:opacity-90 transition-all shadow-2xl shadow-primary/20 text-center mb-4">
                  지금 수강 신청하기
                </Link>
                <button className="block w-full px-10 py-5 border border-outline-variant/30 text-primary font-bold rounded-lg hover:bg-surface-container-low transition-all text-center">
                  브로셔 다운로드
                </button>
                <p className="text-xs text-on-surface-variant mt-4 text-center">얼리버드 마감: 11월 15일</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
