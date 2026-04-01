import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '커리큘럼 | AX Academy',
}

// ─── 엑스퍼트 과정 데이터 ───────────────────────────────────────────────
const comparisonRows = [
  { general: '강사가 정해진 커리큘럼을 일방적으로 강의', expert: '담당자의 실제 업무 문제에서 출발하여 함께 해결' },
  { general: '교육 종료 후 현업 적용까지 스스로 해결해야 함', expert: '교육 종료 시 즉시 실무 배포 가능한 미니앱 산출물 보장' },
  { general: 'AI는 어렵고 복잡한 기술 — 심리적 장벽 강화', expert: '내 업무를 도와주는 도구 — 인식 전환에 집중' },
  { general: '전원 동일 커리큘럼 — 개인 업무와 무관한 내용 다수', expert: '지적 피로도가 가장 높은 업무를 우선순위로 맞춤 설계' },
  { general: '성과 측정 불가 — 교육 이수 여부만 확인', expert: '퇴근 시간 단축, 처리 시간 단축률 등 체감 성과 정량 측정' },
]

const spiralPhases = [
  {
    phase: '1단계', duration: '1~2M', name: 'Spark', nameKo: '마중물',
    target: '핵심 1~2인 (Enabler)',
    activities: ['1:1 심층 인터뷰: "어떤 업무가 가장 짜증나세요?"', '지적 피로도 최고 업무 발굴 및 우선순위 선정', 'Quick-Win 미니앱 1~2종 즉시 개발·배포', 'AX 역량 사전 진단 실시'],
    goal: '"AI 덕분에 1시간 일찍 퇴근" 실제 사례 창출 → 동료의 자발적 관심 유도',
  },
  {
    phase: '2단계', duration: '3M', name: 'Viral', nameKo: '입소문',
    target: '관심 있는 부서원 3~5인',
    activities: ['내부 공유회: "어? 쟤는 어떻게 저렇게 빨리 가?"', '동료 성공 목격 → 심리적 전이 유도', '참여 의사 인력 1:1 코칭 확장', '추가 미니앱 공동 개발 (참여자 주도)'],
    goal: 'AI 심리 허들 제거 / 자발적 참여 3인↑ 확보',
  },
  {
    phase: '3단계', duration: '4~7M', name: 'Scale', nameKo: '표준화',
    target: '전사 핵심 인력 10인',
    activities: ['전원 80H 핵심역량 교육 (1인 1미니앱↑)', '10종↑ 미니앱 완성·사내 배포 + 사용자 가이드', 'PoC 3건 수행 및 AX 실행계획서 완성'],
    goal: '10인 역량 내재화 / 미니앱 10종↑ 배포 / AX 실행계획서 제출',
  },
]

const processSteps = [
  {
    num: '①', name: '업무 페인포인트 발굴', weight: '20%',
    activities: ['담당자별 매일 반복되는 엑셀 작업·수기 입력 업무 전수 조사', '지적 피로도가 가장 높은 업무 우선순위 선정', 'AS-IS 프로세스 매핑 및 시간 낭비 정량화'],
    output: '업무 프로세스 분석서 (Pain Point 정의)',
    color: 'bg-primary/5 border-primary/20',
    numColor: 'bg-primary text-white',
  },
  {
    num: '②', name: '솔루션 기획 및 PoC', weight: '20%',
    activities: ['발굴된 문제를 AI로 해결하는 방법 기술검증(PoC)', '가벼운 툴 활용, 복잡한 DB 연동 없이 독립 구동 로직 설계', '1시간짜리 해결 — Quick & Lean 접근 우선'],
    output: '솔루션 설계안 (TO-BE + 기술검증 결과)',
    color: 'bg-secondary/5 border-secondary/20',
    numColor: 'bg-secondary text-white',
  },
  {
    num: '③', name: '미니앱(Mini App) 개발', weight: '40%',
    activities: ['오더 자동 엑셀 변환기 (카카오톡·이메일 오더 파싱)', '배차 데이터 파싱 자동화 / TMS-엑셀 정산 통합 자동화', '목표: 과거 3시간 작업 → 20분 이내 처리, 독립 구동 가능한 경량 앱'],
    output: '실행 가능한 미니앱 (즉시 업무 투입 완성본)',
    color: 'bg-tertiary/5 border-tertiary/20',
    numColor: 'bg-tertiary text-white',
  },
  {
    num: '④', name: '현장 적용 및 피드백', weight: '20%',
    activities: ['실제 업무 적용 후 퇴근 시간 단축 등 체감 효과 정량 측정', '사용자 가이드 제작 및 동료 대상 사내 확산 지원', '피드백 반영하여 미니앱 지속 고도화'],
    output: '활용 성과 보고서 + 사용자 가이드',
    color: 'bg-primary/5 border-primary/20',
    numColor: 'bg-primary/70 text-white',
  },
]

// ─── 마스터 과정 데이터 ───────────────────────────────────────────────
const weeks = [
  { week: 'Week 01', title: 'AI Basics', icon: 'lightbulb', strong: true, tools: 'ChatGPT, NotebookLM', schedule: '물류 AI 리서치 및 프롬프트 엔지니어링', outcome: '물류 도메인 지식 AI 최적화' },
  { week: 'Week 02', title: 'n8n Automation', icon: 'settings', strong: false, tools: 'n8n, Claude', schedule: '노코드 워크플로우 설계 및 API 연동', outcome: '실시간 데이터 파이프라인 구축' },
  { week: 'Week 03', title: 'Logistics AX', icon: 'local_shipping', strong: false, tools: 'Supabase, SQL', schedule: '물류 특화 커스텀 AI 모델 튜닝', outcome: '견적 및 물량 예측 시스템' },
  { week: 'Week 04', title: 'Full-stack / Deployment', icon: 'rocket_launch', strong: false, tools: 'Next.js, Railway, Vercel', schedule: '웹 인터페이스 구현 및 클라우드 배포', outcome: '실 서비스 배포 및 포트폴리오 완성' },
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
      {/* ══════════════════════════════════════════════════════
          물류 AI 엑스퍼트 과정
      ══════════════════════════════════════════════════════ */}

      {/* 엑스퍼트 Hero */}
      <section className="px-6 py-24 md:py-32 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              Enterprise Program
            </div>
            <h1 className="font-headline text-5xl md:text-7xl leading-tight mb-6">
              물류 AI 엑스퍼트 과정
              <span className="block italic text-secondary mt-2">1:1 Problem-Solving 코칭</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-4">
              "하루 1시간의 여유, AI가 만드는 스마트한 물류 현장"
            </p>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-10">
              강의실 이론이 아닌 담당자의 실제 업무 현장에서 페인포인트를 함께 발굴하고, 코칭이 끝나는 시점에 즉시 사용 가능한 미니앱이 손에 남는 구조로 설계합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-xl">
                도입 문의하기
              </Link>
              <a href="#expert-comparison" className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                프로그램 상세 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 전략 1: 1:1 코칭 차별점 비교표 */}
      <section id="expert-comparison" className="py-24 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-3">Strategy 01</span>
            <h2 className="font-headline text-4xl text-primary mb-4">1:1 원온원 밀착 코칭 — 핵심 차별점</h2>
            <p className="text-on-surface-variant max-w-2xl">기존 집합 교육 방식과의 근본적인 차이를 확인하세요.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
            <div className="grid grid-cols-2 bg-primary">
              <div className="px-8 py-4 text-white font-bold text-center text-sm">일반 집합 교육 방식</div>
              <div className="px-8 py-4 text-secondary font-bold text-center text-sm border-l border-white/10">본 프로그램 — 1:1 밀착 코칭 방식</div>
            </div>
            {comparisonRows.map(({ general, expert }, i) => (
              <div key={i} className={`grid grid-cols-2 border-b border-outline-variant/10 ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                <div className="px-8 py-5 text-on-surface-variant text-sm text-center leading-relaxed border-r border-outline-variant/10">{general}</div>
                <div className="px-8 py-5 text-primary font-semibold text-sm text-center leading-relaxed">{expert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전략 2: Spiral Growth */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-3">Strategy 02</span>
            <h2 className="font-headline text-4xl text-primary mb-4">나선형 확산 모델 — Spark → Viral → Scale</h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">초기 소수 핵심 인력에서 압도적 성공 사례를 만들고 전사로 자연 확산합니다. 강제 동원이 아닌, 동료의 성공을 직접 목격한 자발적 참여로 조직 전체의 AX 문화를 형성합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spiralPhases.map(({ phase, duration, name, nameKo, target, activities, goal }, i) => (
              <div key={name} className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" style={{ opacity: 0.2 + i * 0.3 }}></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ opacity: 0.4 + i * 0.3 }}>
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-lg">{name} <span className="text-on-surface-variant font-normal text-sm">({nameKo})</span></div>
                    <div className="text-secondary text-xs font-bold">{phase} · {duration}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-2">대상</div>
                  <div className="text-sm text-primary font-medium">{target}</div>
                </div>
                <div className="mb-5">
                  <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-2">핵심 활동</div>
                  <ul className="space-y-2">
                    {activities.map((a, j) => (
                      <li key={j} className="flex gap-2 text-sm text-on-surface-variant">
                        <span className="text-secondary mt-0.5 flex-shrink-0">›</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">성과 목표</div>
                  <p className="text-sm text-primary font-medium leading-relaxed">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전략 3: 4단계 Problem-Solving 프로세스 */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-3">Strategy 03</span>
            <h2 className="font-headline text-4xl text-primary mb-4">4단계 Problem-Solving 프로세스</h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">매 코칭 세션은 아래 4단계 순환 구조로 진행되어, 코칭이 끝날 때마다 반드시 유형의 산출물이 남도록 보장합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map(({ num, name, weight, activities, output, color, numColor }) => (
              <div key={num} className={`rounded-2xl p-8 border ${color}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-full ${numColor} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {num}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{name}</h3>
                    <span className="text-xs text-on-surface-variant">비중 {weight}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {activities.map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-on-surface-variant">
                      <span className="text-secondary mt-0.5 flex-shrink-0">›</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 pt-4 border-t border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-sm">output</span>
                  <span className="text-sm font-bold text-primary">{output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전략 4: TMS AI 레이어 */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-4">Strategy 04</span>
            <h2 className="font-headline text-4xl mb-6">TMS 위에 AI 레이어 추가 — 기존 투자 보호</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              신규 시스템 교체가 아닌 기존 TMS 인프라 위에 경량 AI 자동화 레이어를 비파괴 방식으로 추가합니다. 교육 과정에서 개발된 미니앱들은 귀사만의 독점 디지털 자산이 되며, 향후 메인 시스템 고도화 시 기초 요구사항으로 활용됩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { icon: 'apps', text: '전용 업무 로직이 반영된 10개 이상의 독점 미니앱 디지털 자산 확보' },
                { icon: 'description', text: '향후 시스템 고도화 시 요구사항 명세서 역할 수행 → 개발 비용 및 기간 절감' },
              ].map(({ icon, text }) => (
                <div key={icon} className="flex gap-4 bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 mt-0.5">{icon}</span>
                  <p className="text-white/80 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <Link href="/apply" className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-xl">
              엑스퍼트 과정 도입 문의
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          물류 AI 마스터 과정
      ══════════════════════════════════════════════════════ */}

      {/* 구분선 */}
      <div className="bg-surface-container-low py-8 flex items-center justify-center gap-4">
        <div className="h-px bg-outline-variant/30 flex-1 max-w-xs"></div>
        <span className="text-on-surface-variant text-sm font-medium tracking-widest uppercase">개인 수강 과정</span>
        <div className="h-px bg-outline-variant/30 flex-1 max-w-xs"></div>
      </div>

      {/* 마스터 Hero */}
      <section className="px-6 py-24 md:py-32 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-xs font-bold tracking-widest uppercase rounded">4-Week Intensive Masterclass</div>
          <h2 className="font-headline text-5xl md:text-7xl leading-tight text-primary">
            물류 AI 마스터 과정: <span className="italic text-secondary">지능형 전환의 설계</span>
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            단순한 자동화를 넘어 물류 현장의 흐름을 재설계합니다. AI Basics부터 Full-stack 배포까지, 4주 만에 물류 AX 전문가로 거듭나는 커리큘럼을 확인하세요.
          </p>
          <div className="flex gap-4 flex-wrap">
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
