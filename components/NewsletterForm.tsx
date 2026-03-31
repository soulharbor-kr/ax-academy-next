'use client'
import { useState, FormEvent } from 'react'

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '오류가 발생했습니다.')
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : '오류가 발생했습니다.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 mt-2">
        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <p className="text-primary-fixed-dim text-sm">구독해 주셔서 감사합니다!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email" name="email" placeholder="이메일 주소 입력" required
        className="w-full px-4 py-3 bg-primary-container text-on-primary rounded-lg text-sm placeholder:text-primary-fixed-dim/60 focus:outline-none focus:ring-1 focus:ring-secondary"
      />
      <button type="submit" disabled={status === 'loading'} className="w-full py-3 bg-secondary text-on-secondary font-bold rounded-lg text-sm hover:opacity-90 transition-all disabled:opacity-60">
        {status === 'loading' ? '처리 중...' : '구독하기'}
      </button>
      {status === 'error' && <p className="text-red-300 text-xs">{errorMsg}</p>}
    </form>
  )
}
