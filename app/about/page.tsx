import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'AX 아카데미 소개 | AX Academy',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Our Philosophy</span>
          <h1 className="font-headline text-6xl md:text-8xl text-primary leading-[0.9] tracking-tighter mb-8">
            The Intellectual <br /><span className="italic font-normal">Architect</span> of Logistics.
          </h1>
          <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed font-light">
            AX 아카데미는 단순한 기술 교육을 넘어, 물류 현장의 방대한 데이터를 지능형 자산으로 전환하는 '인공지능 전환(AX)'의 선구자를 양성합니다.
          </p>
        </div>
        <div className="hidden md:block col-span-4 aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFYuz3vH2lYyL1AJ7uX5uh2qdcFFGH92rL7K3TCrvKF4K7Kd9YKo7lrRLaK0qzQhqEpR_1eybrLjDql4edc1bj8MQ-6UOqchM4owqZ49pOFVdLbQAqBkG2ENOlf-szw1pjP6v_Or4NsDyLwDA_HtLv63mw5VUsWutQtoLEzTXinSizO23RiPtT9f73jbTLS8N6e-hanLmjCjFf69V_y5575YqNyr-E9xmO7buhIoLG7vLe1bbvu_IayeX1_YjlwKUw2gifAas13Ik"
            alt="물류 창고" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* AX vs DX */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl text-primary mb-4 italic">What is AX?</h2>
            <p className="text-on-surface-variant text-sm uppercase tracking-widest">Digital Transformation vs AI Transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-8">
            {/* DX */}
            <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-outline mb-4">settings_suggest</span>
                <h3 className="font-headline text-2xl text-primary mb-2">DX: Digital Transformation</h3>
                <p className="text-on-surface-variant text-sm mb-6">아날로그의 디지털화, 프로세스의 전산화</p>
                <ul className="text-left w-full space-y-3 text-sm text-on-surface">
                  {['종이 문서를 데이터베이스로 전환', '업무 도구의 디지털 솔루션 도입', '가시성(Visibility) 확보 중심'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant flex-shrink-0"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Arrow */}
            <div className="md:col-span-3 flex flex-col items-center justify-center">
              <div className="hidden md:block w-full h-px bg-outline-variant/30 relative">
                <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-outline-variant/50 rotate-45"></div>
              </div>
              <span className="bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold my-4">INTELLIGENCE</span>
            </div>
            {/* AX */}
            <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-xl shadow-xl shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                <h3 className="font-headline text-2xl mb-2 text-on-primary">AX: AI Transformation</h3>
                <p className="text-primary-fixed-dim text-sm mb-6">데이터를 기반으로 한 지능적 의사결정 자동화</p>
                <ul className="text-left w-full space-y-3 text-sm text-primary-fixed">
                  {['최적화 경로 및 수요 예측 자동화', 'LLM 기반 물류 지식 에이전트 구축', '스스로 학습하고 판단하는 자율 물류'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-8 block">Our Vision</span>
          <blockquote className="font-headline text-4xl md:text-6xl text-primary leading-tight italic">
            "AI는 기술의 집합이 아니라, <br />
            <span className="text-secondary">인간의 통찰력</span>을 증폭시키는 <br />
            새로운 시대의 설계도입니다."
          </blockquote>
          <div className="mt-12 w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Practice-first', desc: '이론에 매몰되지 않습니다. 현업에서 즉시 사용 가능한 실전형 프로젝트와 실습 데이터로 수업을 구성합니다.', icon: 'terminal', dark: false },
              { num: '02', title: 'Logistics-specific', desc: '범용 AI가 아닌 물류 도메인에 특화된 AI 모델링을 다룹니다. 공급망 관리, 창고 운영, 배송 최적화의 난제를 해결합니다.', icon: 'local_shipping', dark: true },
              { num: '03', title: 'No-code friendly', desc: '코딩을 몰라도 괜찮습니다. n8n, Make 등 노코드 툴을 활용하여 누구나 AI 자동화 워크플로우를 구축할 수 있게 돕습니다.', icon: 'auto_fix', dark: false },
            ].map(({ num, title, desc, icon, dark }) => (
              <div key={num} className={`p-12 rounded-xl flex flex-col justify-between ${dark ? 'bg-primary text-on-primary shadow-2xl shadow-primary/20' : 'bg-surface-container-low hover:bg-surface-container-lowest transition-colors duration-500'}`}>
                <div>
                  <span className={`font-bold text-3xl mb-6 block ${dark ? 'text-secondary' : 'text-tertiary'}`}>{num}</span>
                  <h4 className={`text-2xl font-headline mb-4 ${dark ? '' : 'text-primary'}`}>{title}</h4>
                  <p className={`leading-relaxed ${dark ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>{desc}</p>
                </div>
                <span className={`material-symbols-outlined mt-8 text-4xl ${dark ? 'text-secondary' : 'text-outline-variant'}`} style={dark ? { fontVariationSettings: "'FILL' 1" } : undefined}>{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB--T1D2E6JRdErPMASNjzvqN8YbQgIiIV8VOB2Ovt853pybhz8ufvYFRlOD6SjkHS6k9AilQK5KejHepfHwVL0fZJaRWeCFt-vpK8L_RrL4hEtly2HEhQrq2DqtitXRIi3doXxduaG77frqxAhnLeZrFRHexdBc7nghcl_5jybovASWKkyH0djiXCpcNW9UNC0wsFvaLba00RRcqn-62llDPVZ3a3jyty9yo5IaJhwv1I0eOAIwi-6UuUo1PSGNkifYf-OBSSzaMc"
                alt="Dr. Kim 프로필" fill className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-lg text-on-secondary hidden md:block">
              <p className="font-headline text-2xl italic">"The Future is AI-driven."</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Head Instructor</span>
            <h3 className="font-headline text-5xl text-primary mb-2">Dr. Kim</h3>
            <p className="text-on-surface-variant font-medium text-lg mb-8 italic text-tertiary">PhD in AI Optimization &amp; Logistics Intelligence</p>
            <div className="space-y-6">
              {[
                { icon: 'school', title: '15년 현장 경력', desc: '글로벌 포워딩사 및 3PL 기업 전략 컨설팅 경력. AI 기반 물류 솔루션 10여 건 실제 배포.' },
                { icon: 'psychology', title: 'AI 연구 전문가', desc: 'NeurIPS, ICML 등 최상위 AI 학술지 논문 게재. 물류 최적화 알고리즘 특허 보유.' },
                { icon: 'groups', title: '300+ 수료생 배출', desc: '국내 주요 물류 기업 임직원 및 스타트업 창업자 다수 배출. 수강생 만족도 4.9/5.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">{icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">{title}</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-6">물류 AX 혁신의 설계자가 되세요</h2>
          <p className="text-primary-fixed-dim text-xl mb-10">다음 기수는 12월 1일 시작됩니다. 지금 바로 상담을 신청하세요.</p>
          <Link href="/apply" className="inline-block px-12 py-5 bg-secondary text-on-secondary font-bold rounded-lg hover:opacity-90 transition-all">
            수강 신청하기
          </Link>
        </div>
      </section>
    </>
  )
}
