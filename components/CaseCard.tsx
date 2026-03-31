'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CaseCardProps {
  img: string
  alt: string
  tag: string
  title: string
  desc: string
  company: string
}

export default function CaseCard({ img, alt, tag, title, desc, company }: CaseCardProps) {
  const [toast, setToast] = useState(false)

  const handleClick = () => {
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  return (
    <article
      onClick={handleClick}
      className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
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

      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium animate-fade-in">
          사례 상세 페이지를 준비 중입니다.
        </div>
      )}
    </article>
  )
}
