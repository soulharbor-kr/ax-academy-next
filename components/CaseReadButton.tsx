'use client'

import { useState } from 'react'

export default function CaseReadButton() {
  const [toast, setToast] = useState(false)

  const handleClick = () => {
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 text-secondary font-bold cursor-pointer group"
      >
        <span>자세히 보기</span>
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
          사례 상세 페이지를 준비 중입니다.
        </div>
      )}
    </>
  )
}
