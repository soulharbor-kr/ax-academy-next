'use client'
import { useState } from 'react'

export default function ArticleReadButton({ label = '전문 읽기' }: { label?: string }) {
  const [clicked, setClicked] = useState(false)

  if (clicked) {
    return (
      <span className="flex items-center gap-2 text-on-surface-variant text-sm">
        <span className="material-symbols-outlined text-secondary text-base">schedule</span>
        아티클 상세 페이지를 준비 중입니다.
      </span>
    )
  }

  return (
    <button
      onClick={() => setClicked(true)}
      className="flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4"
    >
      {label}
      <span className="material-symbols-outlined">arrow_forward</span>
    </button>
  )
}
