'use client'
import Link from 'next/link'
import { useState, FormEvent } from 'react'

const cohorts = [
  { cohort: '제 13기 마스터', start: '2024년 12월 1일', schedule: '매주 토요일 13:00 - 18:00', status: '모집중', active: true },
  { cohort: '제 12기 마스터', start: '2024년 10월 15일', schedule: '매주 토요일 13:00 - 18:00', status: '마감', active: false },
  { cohort: '제 11기 마스터', start: '2024년 8월 10일', schedule: '매주 토요일 13:00 - 18:00', status: '마감', active: false },
  { cohort: '제 10기 마스터', start: '2024년 6월 1일', schedule: '매주 토요일 13:00 - 18:00', status: '마감', active: false },
]

export default function Apply() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorText, setErrorText] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      position: (form.elements.namedItem('position') as HTMLInputElement).value,
      motivation: (form.elements.namedItem('motivation') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || '오류가 발생했습니다.')
      }
      setStatus('success')
      form.reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorText(err instanceof Error ? err.message : '오류가 발생했습니다.')
    }
  }

  return (
    <main className="max-w-screen-2xl mx-auto px-6 py-12 md:py-20 lg:flex lg:gap-20">
      {/* Form */}
      <div className="flex-1">
        <header className="mb-12">
          <span className="text-secondary font-bold uppercase tracking-wider text-xs">Enrollment Process</span>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
            물류 AI의 <span className="newsreader-italic">설계자</span>가 되세요.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            실무 데이터와 최신 AI 기술을 결합하여 물류 산업의 혁신을 이끌어갈 리더를 양성합니다. 지금 신청하여 당신의 커리어를 재정의하십시오.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'name', label: '이름', placeholder: '성함을 입력하세요', type: 'text', required: true },
              { id: 'email', label: '이메일 주소', placeholder: 'example@company.com', type: 'email', required: true },
              { id: 'phone', label: '연락처', placeholder: '010-0000-0000', type: 'tel', required: false },
              { id: 'company', label: '소속 기업', placeholder: '회사명을 입력하세요', type: 'text', required: false },
              { id: 'position', label: '직책', placeholder: '예: 물류 기획팀장', type: 'text', required: false },
            ].map(({ id, label, placeholder, type, required }) => (
              <div key={id} className="space-y-2">
                <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">{label}</label>
                <input
                  id={id} name={id} type={type} required={required} placeholder={placeholder}
                  className="w-full px-5 py-4 bg-surface-container-high border-none rounded-lg focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none"
                />
              </div>
            ))}
            <div className="space-y-2">
              <label htmlFor="motivation" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">수강 동기</label>
              <select id="motivation" name="motivation" className="w-full px-5 py-4 bg-surface-container-high border-none rounded-lg focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none appearance-none">
                <option value="">동기를 선택하세요</option>
                <option>실무 역량 강화</option>
                <option>기술 트렌드 파악</option>
                <option>네트워킹 및 협업</option>
                <option>사내 AX 프로젝트 도입</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">추가 문의사항 (선택)</label>
            <textarea
              id="message" name="message" rows={4} placeholder="교육과정이나 신청에 대해 궁금한 점을 남겨주세요."
              className="w-full px-5 py-4 bg-surface-container-high border-none rounded-lg focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none resize-none"
            />
          </div>
          <button
            type="submit" disabled={status === 'loading'}
            className="w-full md:w-auto px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg text-lg hover:shadow-xl hover:shadow-primary/10 transition-all active:scale-95 disabled:opacity-60"
          >
            {status === 'loading' ? '제출 중...' : '수강 신청하기'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-8 p-6 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <p className="font-bold text-primary">신청이 완료되었습니다!</p>
                <p className="text-sm text-on-surface-variant mt-1">담당자가 영업일 기준 1-2일 내에 연락드릴 예정입니다.</p>
              </div>
            </div>
          </div>
        )}
        {status === 'error' && (
          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <div>
                <p className="font-bold text-red-700">오류가 발생했습니다.</p>
                <p className="text-sm text-red-600 mt-1">{errorText}</p>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Table */}
        <section className="mt-24">
          <h3 className="font-headline text-2xl font-bold text-primary mb-8">교육 일정 안내</h3>
          <div className="overflow-hidden rounded-xl border border-outline-variant/15">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-black/5">
                  {['기수', '시작일', '요일/시간', '상태'].map((h, i) => (
                    <th key={h} className={`px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant ${i === 2 ? 'hidden md:table-cell' : ''} ${i === 3 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {cohorts.map(({ cohort, start, schedule, status: s, active }) => (
                  <tr key={cohort} className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-6 font-medium">{cohort}</td>
                    <td className="px-6 py-6">{start}</td>
                    <td className="px-6 py-6 hidden md:table-cell">{schedule}</td>
                    <td className="px-6 py-6 text-right">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${active ? 'bg-secondary-container text-on-surface' : 'bg-surface-container-highest text-on-surface-variant opacity-60'}`}>
                        {s}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:w-96 flex-shrink-0 mt-16 lg:mt-0 space-y-8">
        {/* What you get */}
        <div className="bg-primary p-10 rounded-2xl text-on-primary sticky top-24">
          <h3 className="font-headline text-2xl mb-8">수강 특전</h3>
          <div className="space-y-6">
            {[
              { icon: 'school', title: '현업 전문가 강의', desc: '물류 현장 15년 경력의 Dr. Kim 직강' },
              { icon: 'computer', title: '실습 데이터 제공', desc: '실제 물류 데이터로 진행하는 핸즈온 실습' },
              { icon: 'group', title: '수강생 커뮤니티', desc: '수료 후에도 평생 이용 가능한 네트워크' },
              { icon: 'workspace_premium', title: '수료증 발급', desc: '물류 AX 전문가 과정 공식 수료증 수여' },
              { icon: 'support_agent', title: '1:1 멘토링', desc: '프로젝트별 담당 멘토의 개인 코칭' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary text-sm">{icon}</span>
                </div>
                <div>
                  <p className="font-bold text-on-primary text-sm">{title}</p>
                  <p className="text-primary-fixed-dim text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="font-headline text-4xl text-on-primary mb-1">₩1,490,000</div>
            <p className="text-primary-fixed-dim text-xs mb-6">얼리버드 마감: 11월 15일</p>
            <Link href="#" className="block text-center py-3 bg-secondary text-on-secondary font-bold rounded-lg hover:opacity-90 transition-all text-sm">
              기업 교육 별도 문의
            </Link>
          </div>
        </div>
      </aside>
    </main>
  )
}
