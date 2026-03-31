'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/about',      label: 'AX 아카데미 소개' },
  { href: '/curriculum', label: '커리큘럼' },
  { href: '/cases',      label: '물류 AX 사례' },
  { href: '/insights',   label: '물류 및 산업 동향' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-headline font-bold text-primary">
          AX Academy
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-secondary font-bold border-b-2 border-secondary pb-1'
                  : 'text-primary hover:text-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/apply"
            className="hidden md:block px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all active:scale-95"
          >
            수강 신청하기
          </Link>
          <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-outline-variant/20 px-6 py-4 space-y-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block text-primary hover:text-secondary text-sm font-medium py-2">
              {label}
            </Link>
          ))}
          <Link href="/apply" onClick={() => setOpen(false)}
            className="block px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg text-center">
            수강 신청하기
          </Link>
        </div>
      )}
    </nav>
  )
}
