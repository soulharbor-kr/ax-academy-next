import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-[#F4F4F2]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-headline font-black text-primary mb-6">AX Academy</div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            물류와 AI의 결합을 통해 새로운 비즈니스 가치를 창출하는 지식의 설계자.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline text-lg text-primary mb-6">Education</h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-600 hover:text-secondary transition-colors" href="/about">AX 아카데미 소개</Link></li>
            <li><Link className="text-sm text-slate-600 hover:text-secondary transition-colors" href="/curriculum">커리큘럼</Link></li>
            <li><Link className="text-sm text-slate-600 hover:text-secondary transition-colors" href="/apply">기업 교육 문의</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg text-primary mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-600 hover:text-secondary transition-colors" href="/cases">물류 AX 사례</Link></li>
            <li><Link className="text-sm text-slate-600 hover:text-secondary transition-colors" href="/insights">물류 및 산업 동향</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg text-primary mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-sm text-slate-600 hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-sm text-slate-600 hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="text-sm text-slate-600 hover:text-secondary transition-colors" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-black/5 text-center md:text-left">
        <p className="text-xs text-slate-500">© 2024 AX Academy. The Intellectual Architect of Logistics AI.</p>
      </div>
    </footer>
  )
}
