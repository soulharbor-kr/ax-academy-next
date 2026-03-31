import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: '물류 및 산업 동향 | AX Academy',
}

const articles = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXAkke7wrNrzU4n028raEVEzQNq31UGQ1LX5QvHNeDUgXsFJK9wSuPuidIt6W9wLExNhFexyjNz4FAve4CV7Onzr5KbmsriO8X_Kj7-7FRaBVDlTZVNaIFzDoBy4qgalgMdzUmIrPte49jczqYTCTQDXh79mguAPXbU53fCCB4uL2OEY0ev1ChCGNe6a92lRVm0YmECCj3Rcsi5vwdq28g7YJ6pagNvF4LQ2XoapI4XVgnl-OmIQHbJS7t0_LF_sdapxQYKu8KOGA',
    alt: '항공 화물', tag: '항공 (Air)', date: '2024.10.15', read: '5 min read',
    title: 'Global Air Freight Trends: Demand Resilience Amid Economic Shifts',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_anvfb7vMwat0pFNvid1SR9I9iIB-xi09_HQeYhpVGMZxd7nPjoySOIAxexuyR8oHLGMfJmocoQEUN50c-DQNpY9NUTlkeNJS_yx7LtDJ8ELCzhMFdQ9TQVZMwQZWw3s2cFYrZpoi4ORCNT-q7ysH3yLmXbAeCmtDLWWMIABgKqNkXWDiaojYgNu_ZagJPs1EraLvXcJ0ix4Jz10dgeiJCPc7zJyGoUio2jwlBTJwHgC7IG_NUCLb7Pa-iS71F9nvx3GKSRI-hDE',
    alt: '데이터 분석', tag: 'AI', date: '2024.10.12', read: '8 min read',
    title: 'Predictive Analytics: Minimizing Empty Miles in Inland Transport',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRKA97_IkG15DJaKSBVhXqoyZoNZ0Ar5aFgY-B_YdAqWZyAPn9wTe_z0HXbmknH7TS9KeRtsvP6NfrZDbgfb6P1bl0rnguIRMolPHC0I4nZ7Lgdk341wiSv3IZGN2kwOdJMZncldI_i5KhxNKAOkUU4FM3JwOl__zRv8amA-S6W-xIm9oXZURx2CiYZrsYUgE5Jqdd1GWk7chDOmHV8Z94aHGb2mp4gGNLtGEZ7dWiNk2eyz2EpgIJuNHOcYV9cm_9eaRvEuHP-0g',
    alt: '컨테이너 선박', tag: '해운 (Ocean)', date: '2024.10.10', read: '6 min read',
    title: 'The Baltic Dry Index Spike: Analyzing the Q4 Maritime Outlook',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnPMqThy3wUEKsv8pB8ncLcxnyUnEeApfaU2blBAh-iKtUiWZ08C-EiTVm-rpfwNR0e_-d_v0cdwOrg4rG3dKGohkkSP98j4cooMnEdpfUZjgXApyqS0Prs4B1ji-FmTlqtsxVaoA7HEVOOyMr4ypKb4Quz9FDVewR3MRdQvARfEzTD4Aw1W2zszBgFkWrSozBmqvP4hvIqeXSHIVoBGWGEeVDVFBVJDhC-6WUk25AZylHR1yYP5u1YWY9KMFxNwg2ARvjKDNCXL8',
    alt: '정책 회의', tag: '정책 (Policy)', date: '2024.10.08', read: '4 min read',
    title: 'New Customs Automation Policies Reshaping Cross-Border Logistics',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0PBVFGMBJ6tMmpdLOBDZEIeqCfngQWXZpivJ_HPYSwejRHuoLDG2SwIpAuVpjxEkuTwRsuH6yYONq6LWOdlrpAaoTQQLszzKmoFqXBRiK0sbWrjmigblnP06aWvhvXK0ZHo6bsB3Z5piaR0xZJEPdNfuluEZNBUSxqzndPbJk6ngYmNqhmpmQgNh8qNf94OktSL3PSvVpXRxXGDAqON-ZG6_IuBehi9bMd-e0oUYWSeG02_zok9bzGNnKxus2gOl70F-3NzvZ-Sg',
    alt: '물류 창고', tag: 'AI', date: '2024.10.05', read: '7 min read',
    title: 'Warehouse AI: How Computer Vision is Transforming Inventory Accuracy',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs',
    alt: '터미널 야간', tag: '해운 (Ocean)', date: '2024.10.02', read: '5 min read',
    title: 'Port Congestion Index: AI-Powered Predictions for Vessel Scheduling',
  },
]

const trending = [
  { tag: 'AI', title: 'Top 5 LLMs for Logistics Use Cases in 2024', date: '2024.10.14' },
  { tag: '유가 (Oil)', title: 'Brent Crude Impact on Freight Rates: A Data-Driven Analysis', date: '2024.10.11' },
  { tag: '내륙운송', title: 'Last-Mile Delivery Revolution: Autonomous Vehicles in Urban Logistics', date: '2024.10.09' },
  { tag: '정책', title: 'Carbon Emission Reporting: New EU Regulations for Shippers', date: '2024.10.07' },
]

export default function Insights() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 py-12">

        {/* Featured Article */}
        <section className="mb-16">
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs"
                  alt="컨테이너 터미널" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold tracking-wider uppercase">Feature Article</span>
                  <span className="text-on-surface-variant text-sm">12 Oct 2024</span>
                </div>
                <h1 className="font-headline text-4xl lg:text-6xl font-bold text-primary leading-tight mb-8 italic">
                  The Dawn of Autonomous Logistics: How Generative AI is Rewiring Global Supply Chains
                </h1>
                <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
                  Explore the transformative shift as Large Language Models transition from digital assistants to operational architects in the world&apos;s most complex logistics networks.
                </p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4">
                    Read Full Insight
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <span className="text-on-surface-variant text-sm border-l border-outline-variant/30 pl-6">12 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Feed */}
          <div className="flex-1">
            <div className="mb-10 flex items-center gap-4 overflow-x-auto pb-2">
              {['All', '해운 (Ocean)', '항공 (Air)', '내륙운송 (Land)', 'AI', '정책 (Policy)', '유가 (Oil)'].map((tag, i) => (
                <button key={tag} className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-highest text-on-surface-variant transition-colors'}`}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map(({ img, alt, tag, date, read, title }) => (
                <article key={title} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low mb-6 relative">
                    <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                    <span className="text-tertiary font-bold text-xs uppercase tracking-widest">{tag}</span>
                    <h3 className="font-headline text-xl font-bold leading-snug group-hover:text-secondary transition-colors line-clamp-2">{title}</h3>
                    <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium">
                      <span>{date}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span>{read}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-10">
            {/* Newsletter */}
            <div className="bg-primary p-8 rounded-xl text-on-primary">
              <h3 className="font-headline text-2xl mb-3">물류 인사이트 구독</h3>
              <p className="text-primary-fixed-dim text-sm mb-6">매주 엄선된 물류 AI 트렌드를 이메일로 받아보세요.</p>
              <NewsletterForm />
            </div>

            {/* Trending */}
            <div>
              <h3 className="font-headline text-xl text-primary mb-6">인기 아티클</h3>
              <div className="space-y-6">
                {trending.map(({ tag, title, date }) => (
                  <div key={title} className="group cursor-pointer">
                    <span className="text-tertiary font-bold text-xs uppercase tracking-widest block mb-1">{tag}</span>
                    <p className="font-medium text-on-surface group-hover:text-secondary transition-colors text-sm leading-snug">{title}</p>
                    <span className="text-xs text-on-surface-variant mt-1 block">{date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="font-headline text-xl text-primary mb-6">주요 토픽</h3>
              <div className="flex flex-wrap gap-2">
                {['해운', '항공', '내륙운송', 'AI', '정책', '유가', '자동화', 'SCM', '관세'].map(topic => (
                  <button key={topic} className="px-3 py-1.5 bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface-variant text-xs font-medium rounded-full transition-colors">
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
