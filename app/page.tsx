import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface pt-12">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="z-10">
            <span className="uppercase tracking-widest text-xs font-bold text-secondary mb-4 block">THE FUTURE OF LOGISTICS</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] mb-8" style={{ letterSpacing: '-0.02em' }}>
              AI는 도구일 뿐,<br />
              <span className="newsreader-italic font-light">혁신은 사람이 한다</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              물류 현장의 고유한 데이터와 AI 기술을 결합하여 실무적인 혁신을 설계합니다. AX 아카데미는 단순한 기술 교육을 넘어, 물류 비즈니스의 미래를 재정의하는 인재를 양성합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="px-8 py-4 bg-primary text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/10">
                수강 신청하기
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link href="/curriculum" className="px-8 py-4 border border-outline-variant/30 text-primary font-bold rounded-lg hover:bg-surface-container-low transition-all text-center">
                커리큘럼 보기
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0PBVFGMBJ6tMmpdLOBDZEIeqCfngQWXZpivJ_HPYSwejRHuoLDG2SwIpAuVpjxEkuTwRsuH6yYONq6LWOdlrpAaoTQQLszzKmoFqXBRiK0sbWrjmigblnP06aWvhvXK0ZHo6bsB3Z5piaR0xZJEPdNfuluEZNBUSxqzndPbJk6ngYmNqhmpmQgNh8qNf94OktSL3PSvVpXRxXGDAqON-ZG6_IuBehi9bMd-e0oUYWSeG02_zok9bzGNnKxus2gOl70F-3NzvZ-Sg"
                alt="물류 창고" fill className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-xl shadow-2xl max-w-xs border border-outline-variant/10">
              <div className="text-secondary mb-2"><span className="material-symbols-outlined">verified_user</span></div>
              <p className="text-primary font-bold text-lg mb-1">산업 맞춤형 교육</p>
              <p className="text-sm text-on-surface-variant">현업 물류 전문가들이 직접 설계한 실무 위주의 AX 마스터 코스</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Duration',    title: '4주 완성',      desc: '기초부터 실전 프로젝트까지, 압축된 기간 내에 마스터하는 커리큘럼' },
              { label: 'Accessibility', title: '24시간 교육',  desc: '언제 어디서나 학습 가능한 온라인 플랫폼과 실시간 멘토링 지원' },
              { label: 'Curriculum',  title: '10+ 워크플로우', desc: '자동화 견적부터 배차 최적화까지, 현업 핵심 워크플로우 10종 마스터' },
            ].map(({ label, title, desc }) => (
              <div key={label} className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-secondary transition-transform hover:-translate-y-2">
                <div className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">{label}</div>
                <div className="text-4xl font-headline font-bold text-primary mb-2">{title}</div>
                <p className="text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">AX APPLICATIONS</span>
              <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">물류 현장을 바꾸는<br />실질적인 AI 도구들</h2>
            </div>
            <p className="text-on-surface-variant md:text-right max-w-xs">이론에만 그치지 않습니다. 바로 내일의 실무에 적용할 수 있는 솔루션을 직접 구축합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden group">
              <div className="p-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary-container text-secondary flex items-center justify-center rounded-lg mb-6">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Morning Logistics Briefing</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">수만 개의 글로벌 뉴스와 유가, 선복량을 AI가 새벽마다 분석하여 오늘의 물류 전략을 제안합니다.</p>
                <div className="mt-auto overflow-hidden rounded-xl h-48 relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFjDk6nz0frcM22DfqabBXNgwi0GjXznjRdPrZKEhsXELy-bgjmEEP8h-8sVeJjo__KqysZwmqnJEUkXrbJ5c2HAB12sMC9rNPTOF7IoFTeRHHjxN772Re6TWoHCBYT6KhyzT82woA9j3D0DXMnJuhYa1niaFM7FIZMYmp7aUtU1N_GttRkPoxyI4NIEHuaUZ2Vgvnn1VhVEYmtM-jCeoQaVOjVGNkE-u5ISr0U2iRuua1HIEUN2iGtVW_QDykGPXWKXFTkF1_3S0" alt="대시보드" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-10 flex flex-col">
              <div className="w-12 h-12 bg-white text-secondary flex items-center justify-center rounded-lg mb-6 shadow-sm">
                <span className="material-symbols-outlined">auto_mode</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Quotation Automation</h3>
              <p className="text-on-surface-variant">수작업으로 이루어지던 복잡한 포워딩 견적 산출 프로세스를 AI 에이전트로 완전 자동화합니다.</p>
            </div>
            <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-10 flex flex-col">
              <div className="w-12 h-12 bg-white text-secondary flex items-center justify-center rounded-lg mb-6 shadow-sm">
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">New Employee AI Chatbot</h3>
              <p className="text-on-surface-variant">복잡한 사내 매뉴얼과 운영 규정을 즉시 답변해주는 온보딩 최적화 챗봇을 설계합니다.</p>
            </div>
            <div className="md:col-span-8 bg-primary rounded-2xl overflow-hidden relative group">
              <div className="p-10 relative z-10 flex flex-col h-full justify-center">
                <h3 className="text-3xl font-headline text-white mb-4">나만의 물류 AI 솔루션<br />직접 개발하고 배포하세요</h3>
                <p className="text-on-primary-container mb-8 max-w-sm">코딩 실력이 없어도 가능합니다. No-code와 AI의 결합으로 당신도 개발자가 될 수 있습니다.</p>
                <Link href="/curriculum" className="text-secondary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  자세히 알아보기 <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLwzoiydPwSnDjTvGqGSvUwT6PTamV6nSl1UnEuMsAGi2lMqf4Hfi1hvhCHQq8ZIv1_Hocr32LJyPsOwnasqkTQVMWQwpm3CPXXKJd9LPrP5OdgfRsIiWuMORQgh4QHUqay_vR8PVEK5MOD4IyuFFuKkfFBS1G-P3Zxv17XAjWbFTQjq1a7sR3by7HpdHnRabqVxywTLI8zl-PshsebItPxKpNVp6H1Hr5YtzLL5_1UW1FY8iuDe8jIDPugAOXav5k4ozz-6ulIrM" alt="AI" fill className="object-cover -z-10 opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">SUCCESS STORIES</span>
            <h2 className="text-4xl font-headline text-primary">변화를 만든 리더들의 이야기</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {[
              { quote: '"AI가 막막했는데, 물류 현장의 문제를 해결하는 구체적인 방법을 배우고 나니 자신감이 생겼습니다. 이제 우리 회사의 디지털 혁신을 제가 이끌고 있습니다."', name: '김진우 본부장', role: 'S물류 전략기획팀', initial: 'K', mt: '' },
              { quote: '"단순 교육을 넘어 실무 자동화 워크플로우를 즉시 적용할 수 있다는 점이 가장 큰 매력이었습니다. 반복 업무가 70% 이상 줄어들었습니다."', name: '이지아 매니저', role: 'Global Logistics Operations', initial: 'L', mt: 'md:mt-12' },
            ].map(({ quote, name, role, initial, mt }) => (
              <div key={name} className={`flex-1 bg-surface-container-lowest p-12 rounded-2xl shadow-sm relative ${mt}`}>
                <span className="material-symbols-outlined text-6xl text-secondary-fixed-dim opacity-30 absolute top-8 right-8">format_quote</span>
                <p className="text-xl text-primary font-medium italic mb-10 leading-relaxed">{quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">{initial}</div>
                  <div>
                    <div className="font-bold text-primary">{name}</div>
                    <div className="text-sm text-on-surface-variant">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-8">당신의 커리어를 재설계할 시간입니다</h2>
          <p className="text-xl text-on-surface-variant mb-12">AX 아카데미의 다음 기수는 12월 1일 시작됩니다. 지금 바로 상담을 신청하세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="px-12 py-5 bg-primary text-white font-bold rounded-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-all text-center">수강 신청하기</Link>
            <button className="px-12 py-5 bg-white text-primary font-bold border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-all">브로셔 다운로드</button>
          </div>
        </div>
      </section>
    </>
  )
}
