import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: '물류 및 산업 동향 | AX Academy',
}

// 이미지 풀 — 카테고리별로 순환 사용
const IMGS = {
  ocean: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDRKA97_IkG15DJaKSBVhXqoyZoNZ0Ar5aFgY-B_YdAqWZyAPn9wTe_z0HXbmknH7TS9KeRtsvP6NfrZDbgfb6P1bl0rnguIRMolPHC0I4nZ7Lgdk341wiSv3IZGN2kwOdJMZncldI_i5KhxNKAOkUU4FM3JwOl__zRv8amA-S6W-xIm9oXZURx2CiYZrsYUgE5Jqdd1GWk7chDOmHV8Z94aHGb2mp4gGNLtGEZ7dWiNk2eyz2EpgIJuNHOcYV9cm_9eaRvEuHP-0g',
  ],
  air: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBXAkke7wrNrzU4n028raEVEzQNq31UGQ1LX5QvHNeDUgXsFJK9wSuPuidIt6W9wLExNhFexyjNz4FAve4CV7Onzr5KbmsriO8X_Kj7-7FRaBVDlTZVNaIFzDoBy4qgalgMdzUmIrPte49jczqYTCTQDXh79mguAPXbU53fCCB4uL2OEY0ev1ChCGNe6a92lRVm0YmECCj3Rcsi5vwdq28g7YJ6pagNvF4LQ2XoapI4XVgnl-OmIQHbJS7t0_LF_sdapxQYKu8KOGA',
  ],
  ai: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD_anvfb7vMwat0pFNvid1SR9I9iIB-xi09_HQeYhpVGMZxd7nPjoySOIAxexuyR8oHLGMfJmocoQEUN50c-DQNpY9NUTlkeNJS_yx7LtDJ8ELCzhMFdQ9TQVZMwQZWw3s2cFYrZpoi4ORCNT-q7ysH3yLmXbAeCmtDLWWMIABgKqNkXWDiaojYgNu_ZagJPs1EraLvXcJ0ix4Jz10dgeiJCPc7zJyGoUio2jwlBTJwHgC7IG_NUCLb7Pa-iS71F9nvx3GKSRI-hDE',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDLwzoiydPwSnDjTvGqGSvUwT6PTamV6nSl1UnEuMsAGi2lMqf4Hfi1hvhCHQq8ZIv1_Hocr32LJyPsOwnasqkTQVMWQwpm3CPXXKJd9LPrP5OdgfRsIiWuMORQgh4QHUqay_vR8PVEK5MOD4IyuFFuKkfFBS1G-P3Zxv17XAjWbFTQjq1a7sR3by7HpdHnRabqVxywTLI8zl-PshsebItPxKpNVp6H1Hr5YtzLL5_1UW1FY8iuDe8jIDPugAOXav5k4ozz-6ulIrM',
  ],
  policy: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCnPMqThy3wUEKsv8pB8ncLcxnyUnEeApfaU2blBAh-iKtUiWZ08C-EiTVm-rpfwNR0e_-d_v0cdwOrg4rG3dKGohkkSP98j4cooMnEdpfUZjgXApyqS0Prs4B1ji-FmTlqtsxVaoA7HEVOOyMr4ypKb4Quz9FDVewR3MRdQvARfEzTD4Aw1W2zszBgFkWrSozBmqvP4hvIqeXSHIVoBGWGEeVDVFBVJDhC-6WUk25AZylHR1yYP5u1YWY9KMFxNwg2ARvjKDNCXL8',
  ],
  land: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB0PBVFGMBJ6tMmpdLOBDZEIeqCfngQWXZpivJ_HPYSwejRHuoLDG2SwIpAuVpjxEkuTwRsuH6yYONq6LWOdlrpAaoTQQLszzKmoFqXBRiK0sbWrjmigblnP06aWvhvXK0ZHo6bsB3Z5piaR0xZJEPdNfuluEZNBUSxqzndPbJk6ngYmNqhmpmQgNh8qNf94OktSL3PSvVpXRxXGDAqON-ZG6_IuBehi9bMd-e0oUYWSeG02_zok9bzGNnKxus2gOl70F-3NzvZ-Sg',
  ],
  oil: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCFYuz3vH2lYyL1AJ7uX5uh2qdcFFGH92rL7K3TCrvKF4K7Kd9YKo7lrRLaK0qzQhqEpR_1eybrLjDql4edc1bj8MQ-6UOqchM4owqZ49pOFVdLbQAqBkG2ENOlf-szw1pjP6v_Or4NsDyLwDA_HtLv63mw5VUsWutQtoLEzTXinSizO23RiPtT9f73jbTLS8N6e-hanLmjCjFf69V_y5575YqNyr-E9xmO7buhIoLG7vLe1bbvu_IayeX1_YjlwKUw2gifAas13Ik',
  ],
}

const articles = [
  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    img: IMGS.ocean[0], alt: '컨테이너 선박', tag: '해운 (Ocean)', date: '2025.03.18', read: '7분',
    title: '홍해 사태 1년: 수에즈 우회 운항이 글로벌 운임에 미친 장기 영향 분석',
    desc: '2024년 1월 후티 반군 공격 이후 수에즈 운하 회피가 지속되며 아시아-유럽 항로 운임이 구조적으로 재편됐다. 선사들의 희망봉 우회 전략과 선복 수급 변화를 데이터로 짚는다.',
  },
  {
    img: IMGS.ai[0], alt: 'AI 물류', tag: 'AI', date: '2025.03.10', read: '9분',
    title: 'LLM 기반 물류 에이전트의 현재: GPT-4o와 Claude 3.5, 실무 적용 사례 비교',
    desc: '대형 포워더들이 도입하기 시작한 LLM 기반 견적·스케줄 에이전트의 실제 성과를 비교 분석한다. 응답 정확도, 연동 복잡도, 비용 효율성 세 가지 축으로 평가한다.',
  },
  {
    img: IMGS.policy[0], alt: '정책 회의', tag: '정책 (Policy)', date: '2025.03.05', read: '6분',
    title: 'EU CBAM(탄소국경조정제도) 2026년 전면 시행 — 국내 수출 물류사 대응 전략',
    desc: '철강·시멘트·알루미늄 등 6개 품목에 탄소 비용을 부과하는 EU CBAM이 2026년 완전 적용된다. 한국 수출 물류사들이 지금 준비해야 할 탄소 발자국 측정·보고 체계를 정리한다.',
  },
  {
    img: IMGS.air[0], alt: '항공 화물', tag: '항공 (Air)', date: '2025.02.25', read: '5분',
    title: '2025년 1분기 항공 화물 운임 동향: 이커머스 특수와 공급 부족의 교차',
    desc: '중국발 직구 플랫폼(테무·쉬인)의 항공 화물 수요 급증과 화물기 공급 부족이 맞물리며 2025년 초 아시아-북미 항공 운임이 코로나 이후 최고 수준을 기록했다.',
  },
  {
    img: IMGS.land[0], alt: '물류 창고', tag: '내륙운송 (Land)', date: '2025.02.18', read: '6분',
    title: '전기 화물차 보급 가속화: 국내 택배사 전기차 전환 로드맵 현황',
    desc: '쿠팡·CJ대한통운·한진 등 국내 주요 택배사들이 2030년 전기차 전환 목표를 공표했다. 충전 인프라 부족과 배터리 원가 문제를 어떻게 풀어가고 있는지 살펴본다.',
  },
  {
    img: IMGS.ocean[1], alt: '항만', tag: '해운 (Ocean)', date: '2025.02.10', read: '8분',
    title: '2025년 컨테이너 선복 과잉 우려: 신조 선박 대량 인도와 운임 하방 압력',
    desc: '2021~2022년 발주 붐으로 제작된 대형 컨테이너선들이 2025년 집중 인도되며 선복 과잉 우려가 현실화되고 있다. 머스크·MSC·코스코의 선대 조정 전략과 운임 전망을 분석한다.',
  },
  {
    img: IMGS.ai[1], alt: 'AI 분석', tag: 'AI', date: '2025.01.28', read: '7분',
    title: '물류 창고 로봇 자동화 ROI 분석: 어느 시점부터 인간 대체가 경제적인가',
    desc: '아마존 로보틱스, Locus Robotics 등의 창고 자동화 사례를 분석해 초기 투자비 회수 기간과 운영 효율화 지표를 정량화한다. 국내 3PL 적용 시 고려사항도 함께 제시한다.',
  },
  {
    img: IMGS.oil[0], alt: '정유 시설', tag: '유가 (Oil)', date: '2025.01.20', read: '5분',
    title: '브렌트유 70달러 하향 돌파 — 물류 연료비 절감 효과와 운임 반영 시차',
    desc: '2025년 초 유가 하락이 해운·항공·육운 업계 연료비에 어떻게 반영되는지, 그리고 최종 운임 인하로 이어지기까지의 시차를 업종별로 분석한다.',
  },
  {
    img: IMGS.policy[0], alt: '규제', tag: '정책 (Policy)', date: '2025.01.14', read: '6분',
    title: '미국 트럼프 2기 관세 정책 — 한국 물류 업계 영향과 공급망 재편 시나리오',
    desc: '트럼프 2기 행정부의 보편 관세 10~20% 부과 방침이 현실화될 경우 한국 제조·물류 기업의 공급망에 미치는 영향을 시나리오별로 분석한다.',
  },
  {
    img: IMGS.ai[0], alt: 'AI 데이터', tag: 'AI', date: '2025.01.07', read: '8분',
    title: 'n8n으로 구현하는 물류 자동화: 2025년 활용 가능한 워크플로우 10선',
    desc: '노코드 자동화 툴 n8n을 활용해 현업에서 바로 구현 가능한 물류 워크플로우 10가지를 소개한다. 견적 자동화부터 운항 스케줄 모니터링까지 단계별 설정법을 제공한다.',
  },

  // ── 2024 Q4 ──────────────────────────────────────────────────────────
  {
    img: IMGS.ocean[0], alt: '선박 운항', tag: '해운 (Ocean)', date: '2024.12.23', read: '7분',
    title: '발틱운임지수(BDI) 4분기 급락의 원인: 철광석·석탄 수요 감소와 선복 조정',
    desc: '2024년 4분기 BDI가 1,000포인트 아래로 하락하며 벌크 해운 시장이 침체 국면에 접어들었다. 중국 경기 둔화와 계절적 수요 감소, 선사별 대응 전략을 분석한다.',
  },
  {
    img: IMGS.air[0], alt: '화물 터미널', tag: '항공 (Air)', date: '2024.12.16', read: '5분',
    title: '인천공항 화물 처리량 역대 최고 경신 — 반도체·배터리 수출 호조가 견인',
    desc: '2024년 인천공항 화물 처리량이 330만 톤을 넘어서며 역대 최고치를 기록했다. 반도체·이차전지 수출 증가와 미주 노선 신규 취항이 주요 요인이었다.',
  },
  {
    img: IMGS.land[0], alt: '도심 배송', tag: '내륙운송 (Land)', date: '2024.12.09', read: '6분',
    title: '도심 라스트마일 배송 혁신: 카카오모빌리티·배민커넥트의 클라우드소싱 전략',
    desc: '플랫폼 기업들이 일반 시민을 배송원으로 활용하는 클라우드소싱 물류 모델이 확산 중이다. 단가 경쟁력과 서비스 품질 사이의 균형점을 현장 데이터로 분석한다.',
  },
  {
    img: IMGS.policy[0], alt: '국제 회의', tag: '정책 (Policy)', date: '2024.12.02', read: '5분',
    title: 'IMO 2030 황산화물 규제 강화 로드맵 — 국내 선사 스크러버 설치 현황',
    desc: '국제해사기구(IMO)가 2030년까지 선박 탄소 집약도 40% 감축을 목표로 규제를 강화하고 있다. HMM·팬오션 등 국내 선사들의 친환경 선박 전환 투자 현황을 점검한다.',
  },
  {
    img: IMGS.ai[1], alt: '디지털 물류', tag: 'AI', date: '2024.11.25', read: '9분',
    title: '포워딩 견적 AI 자동화 실전 사례: 처리 속도 80% 향상, 오류율 95% 감소',
    desc: '중견 포워더 A사가 LLM 기반 견적 자동화 시스템을 도입한 후 6개월간의 성과 보고서를 공개했다. 이메일 파싱부터 ERP 연동까지 전체 프로세스의 구현 방법을 상세히 소개한다.',
  },
  {
    img: IMGS.ocean[1], alt: '컨테이너 터미널', tag: '해운 (Ocean)', date: '2024.11.18', read: '6분',
    title: '파나마 운하 가뭄 종료, 통항 제한 해제 — 태평양 노선 운임 정상화 전망',
    desc: '2023년 말부터 이어진 극심한 가뭄으로 하루 통항 선박을 24척으로 제한했던 파나마 운하가 2024년 하반기 강수량 회복으로 정상화됐다. 태평양 항로 운임 구조 변화를 분석한다.',
  },
  {
    img: IMGS.oil[0], alt: '원유', tag: '유가 (Oil)', date: '2024.11.11', read: '5분',
    title: 'OPEC+ 감산 연장 결정과 물류 비용 전망: 4분기 유가 시나리오 분석',
    desc: 'OPEC+가 하루 220만 배럴 자발적 감산을 2024년 말까지 연장하기로 합의했다. 국제 유가 등락이 해운·항공·트럭 운송 비용에 미치는 단기·중기 영향을 분석한다.',
  },
  {
    img: IMGS.ai[0], alt: '스마트 창고', tag: 'AI', date: '2024.11.04', read: '7분',
    title: '공급망 가시성(Supply Chain Visibility) 플랫폼 비교: Project44 vs FourKites vs Shippeo',
    desc: '실시간 화물 추적과 예외 관리 기능을 제공하는 글로벌 SCV 플랫폼 3종을 비교한다. 국내 도입 시 고려해야 할 현지화 지원·API 연동·비용 구조를 상세히 정리했다.',
  },
  {
    img: IMGS.land[0], alt: '트럭 물류', tag: '내륙운송 (Land)', date: '2024.10.28', read: '6분',
    title: '화물 운전자 부족 현상 심화 — 자율주행 트럭이 해결사가 될 수 있을까',
    desc: '국내 화물 운전자 평균 연령이 55세를 넘어서며 인력 부족이 구조적 문제로 부각되고 있다. Aurora·Plus AI 등 글로벌 자율주행 트럭 기업의 상용화 시점과 국내 적용 가능성을 검토한다.',
  },
  {
    img: IMGS.ocean[0], alt: '항구', tag: '해운 (Ocean)', date: '2024.10.21', read: '8분',
    title: '머스크·하팍로이드 얼라이언스 재편 — 제미나이 협력체 출범과 선사 경쟁 구도 변화',
    desc: '2025년 2월 출범한 머스크·하팍로이드의 제미나이 협력체(Gemini Cooperation)가 기존 2M 해체 후 어떤 노선 구조를 택했는지, 화주 입장에서 무엇이 달라지는지 분석한다.',
  },

  // ── 2024 Q3 ──────────────────────────────────────────────────────────
  {
    img: IMGS.ai[1], alt: 'AI 분석', tag: 'AI', date: '2024.09.30', read: '7분',
    title: 'RAG 아키텍처로 구축하는 물류 지식 챗봇 — 구현 단계별 가이드',
    desc: '사내 SOP, 운임표, 관세 DB를 벡터 임베딩으로 저장하고 LLM과 연결하는 RAG 챗봇 구현 전 과정을 다룬다. Supabase pgvector와 OpenAI Embeddings 조합으로 실제 구현한 사례를 공개한다.',
  },
  {
    img: IMGS.air[0], alt: '항공 화물 터미널', tag: '항공 (Air)', date: '2024.09.23', read: '5분',
    title: '배터리·위험물 항공 규제 강화: IATA DGR 2025 개정 주요 내용 정리',
    desc: '2025년부터 적용되는 IATA 위험물 규정(DGR) 개정안에서 리튬 배터리 포장·표시·검사 요건이 대폭 강화됐다. 전자제품·EV 부품 수출 기업이 반드시 확인해야 할 변경 사항을 정리한다.',
  },
  {
    img: IMGS.policy[0], alt: '관세', tag: '정책 (Policy)', date: '2024.09.16', read: '6분',
    title: '한국 전자통관시스템(UNI-PASS) 고도화 — AI 기반 위험화물 사전 선별 시스템 도입',
    desc: '관세청이 머신러닝 기반 수출입 위험 화물 자동 선별 시스템을 전면 도입했다. 통관 지연 리스크가 낮아진 반면 데이터 정합성 요건이 강화돼 화주·포워더의 서류 관리가 중요해졌다.',
  },
  {
    img: IMGS.ocean[1], alt: '선박', tag: '해운 (Ocean)', date: '2024.09.09', read: '7분',
    title: '컨테이너 운임 2024년 여름 피크시즌 분석: SCFI 4,000포인트 돌파 배경',
    desc: '홍해 사태와 미국 항만 파업 우려가 겹치며 2024년 7~8월 상하이컨테이너운임지수(SCFI)가 4,000포인트를 돌파했다. 계절적 요인 외 구조적 요인을 항목별로 분석한다.',
  },
  {
    img: IMGS.ai[0], alt: '물류 디지털', tag: 'AI', date: '2024.09.02', read: '6분',
    title: '물류 데이터 분석을 위한 Python 기초 — 판다스로 운임 데이터 다루기',
    desc: '코딩 입문자도 따라 할 수 있는 물류 데이터 분석 가이드. SCFI·BDI 공개 데이터를 판다스로 불러와 시각화하고 간단한 예측 모델을 만드는 실습 과정을 단계별로 설명한다.',
  },
  {
    img: IMGS.land[0], alt: '배송 센터', tag: '내륙운송 (Land)', date: '2024.08.26', read: '5분',
    title: '쿠팡 로켓배송 물류 네트워크 해부: AI 수요 예측이 재고 배치를 어떻게 바꿨나',
    desc: '쿠팡이 2024년 공개한 물류 기술 특허와 투자자 발표 자료를 분석해 AI 기반 수요 예측 → 재고 사전 배치 → 당일 배송 실현의 메커니즘을 구체적으로 살펴본다.',
  },
  {
    img: IMGS.oil[0], alt: '유가', tag: '유가 (Oil)', date: '2024.08.19', read: '6분',
    title: '중동 긴장 고조와 호르무즈 해협 리스크 — 에너지 물류 공급망 취약성 진단',
    desc: '이란-이스라엘 갈등이 확대될 경우 호르무즈 해협을 통과하는 하루 2,100만 배럴의 원유 수송에 미치는 영향을 시나리오별로 분석하고 국내 정유사·화학사의 대응 방안을 검토한다.',
  },
  {
    img: IMGS.ocean[0], alt: '항만 크레인', tag: '해운 (Ocean)', date: '2024.08.12', read: '8분',
    title: '미국 동부 항만 파업 위기와 글로벌 공급망 충격 — 예방·대응 시나리오',
    desc: '2024년 10월 미국 동·걸프만 항만 노조(ILA)가 파업에 돌입해 3일간 물류 대란이 발생했다. 북미 수출입 기업들의 비상 계획과 항만 다변화 전략을 정리한다.',
  },
  {
    img: IMGS.ai[1], alt: 'AI 플랫폼', tag: 'AI', date: '2024.08.05', read: '7분',
    title: '물류 스타트업 AI 투자 현황 2024: 프레이토스·플렉스포트·카고AI 최근 동향',
    desc: '2024년 글로벌 물류 테크 스타트업에 투자된 VC 자금은 약 34억 달러로 전년 대비 18% 증가했다. 주요 투자처와 기술 분야 트렌드, 국내 물류 테크 생태계 현황을 함께 분석한다.',
  },

  // ── 2024 Q2 ──────────────────────────────────────────────────────────
  {
    img: IMGS.policy[0], alt: '정책', tag: '정책 (Policy)', date: '2024.07.29', read: '5분',
    title: '중국 전기차·배터리 EU 추가 관세 부과 — 국내 물류사에 미치는 영향',
    desc: 'EU가 중국산 전기차에 최대 48%의 추가 관세를 부과하기로 결정하면서 BYD·CATL의 유럽향 화물 흐름이 변화하고 있다. 국내 자동차·배터리 물류사의 반사 효과를 분석한다.',
  },
  {
    img: IMGS.ocean[1], alt: '해운', tag: '해운 (Ocean)', date: '2024.07.22', read: '6분',
    title: '신조선 발주 트렌드 2024: 암모니아·메탄올 추진 친환경 선박 시장 급성장',
    desc: '2024년 상반기 글로벌 신조선 발주 중 친환경 연료(LNG·메탄올·암모니아) 추진 선박 비중이 처음으로 60%를 넘어섰다. 국내 조선 빅3의 수주 포트폴리오와 기술 개발 현황을 정리한다.',
  },
  {
    img: IMGS.land[0], alt: '물류 센터', tag: '내륙운송 (Land)', date: '2024.07.15', read: '7분',
    title: '수도권 물류센터 공급 과잉의 역설: 임대료 하락에도 공실 증가하는 이유',
    desc: '2021~2023년 물류센터 건설 붐의 후폭풍으로 2024년 수도권 물류센터 공실률이 상승하고 있다. 지역별 공실 편차, 대형 3PL의 임차 전략 변화, 향후 공급 조절 방향을 분석한다.',
  },
  {
    img: IMGS.ai[0], alt: '스마트 물류', tag: 'AI', date: '2024.07.08', read: '8분',
    title: '물류 계약 AI 검토 시스템 도입 가이드: 조달 계약서 위험 조항 자동 식별',
    desc: 'LLM을 활용해 운송 계약서의 책임 제한 조항, 포장 규격 조건, 지연 패널티 조항을 자동으로 식별하고 비교하는 시스템 구축 사례를 소개한다. 프롬프트 설계 핵심 포인트를 공개한다.',
  },
  {
    img: IMGS.air[0], alt: '항공 화물', tag: '항공 (Air)', date: '2024.07.01', read: '5분',
    title: '테무·쉬인發 항공 화물 폭증 — 인천 화물 터미널 용량 포화와 운임 급등',
    desc: '중국 이커머스 플랫폼의 소량 직구 배송이 인천공항 화물 처리 시스템에 과부하를 일으키고 있다. 목별 물동량 데이터와 IATA e-AWB 현황, 터미널 확장 계획을 분석한다.',
  },
  {
    img: IMGS.oil[0], alt: '원유 시장', tag: '유가 (Oil)', date: '2024.06.24', read: '5분',
    title: '저탄소 해운 연료 가격 비교: LNG·메탄올·암모니아의 경제성 분석 2024',
    desc: 'IMO 규제 강화에 맞춰 선사들이 도입을 검토 중인 친환경 연료의 현재 가격과 에너지 효율, 인프라 성숙도를 비교한다. 2030년 가격 전망과 투자 타이밍 가이드도 제공한다.',
  },
  {
    img: IMGS.ocean[0], alt: '컨테이너', tag: '해운 (Ocean)', date: '2024.06.17', read: '6분',
    title: '중국 광저우 홍수와 공급망 타격: 주강 삼각주 공장 생산 차질 분석',
    desc: '2024년 6월 광저우·포산 지역 기록적 홍수로 전자·섬유·부품 공장 수천 곳이 침수 피해를 입었다. 국내 소싱 기업들의 긴급 공급처 다변화 사례와 재난 대응 SCM 전략을 정리한다.',
  },
  {
    img: IMGS.policy[0], alt: '환경 규제', tag: '정책 (Policy)', date: '2024.06.10', read: '6분',
    title: '국내 택배 과대포장 규제 강화 시행 — 물류 업계 친환경 포장 전환 현황',
    desc: '2024년 7월부터 시행된 개정 자원재활용법에 따라 쿠팡·SSG닷컴 등 주요 이커머스 업체들의 포장재 기준이 강화됐다. 업체별 친환경 포장 전환 비용과 물류 공정 변화를 분석한다.',
  },

  // ── 2024 Q1 / 2023 후반 ──────────────────────────────────────────────
  {
    img: IMGS.ai[1], alt: 'AI 물류 플랫폼', tag: 'AI', date: '2024.05.27', read: '9분',
    title: '물류 수요 예측 머신러닝 모델 구축 실전: XGBoost vs LSTM 성능 비교',
    desc: '실제 국내 3PL 사의 2년 물동량 데이터를 활용해 XGBoost, LSTM, Prophet 세 가지 예측 모델을 구축하고 성능을 비교한 실험 결과를 공유한다. 코드와 데이터 전처리 방법 포함.',
  },
  {
    img: IMGS.land[0], alt: '물류 드론', tag: '내륙운송 (Land)', date: '2024.05.20', read: '5분',
    title: '드론 배송 상용화 현황: 국내 규제 완화와 유통 업계 파일럿 프로그램 성과',
    desc: '국토교통부가 도심 드론 배송을 위한 UAM 회랑 지정 계획을 발표한 가운데 CJ대한통운·한국항공우주산업의 드론 배송 파일럿 결과와 비용 경쟁력 분석을 공개한다.',
  },
  {
    img: IMGS.ocean[1], alt: '항만 자동화', tag: '해운 (Ocean)', date: '2024.05.13', read: '7분',
    title: '부산항 자동화 터미널(BNCT) 3단계 확장 — 스마트 포트 전환 로드맵',
    desc: '세계 7위 컨테이너 항만 부산항이 2030년까지 완전 자동화를 목표로 AGV·자동 크레인 확충을 추진 중이다. 운영 효율화 지표와 항만 노동자 고용 전환 프로그램을 함께 살펴본다.',
  },
  {
    img: IMGS.policy[0], alt: '무역 정책', tag: '정책 (Policy)', date: '2024.05.06', read: '5분',
    title: 'RCEP 발효 2년 차 효과 분석 — 아세안 물류 거점 이전 기업 사례 정리',
    desc: 'RCEP 발효 2년이 지나면서 중국을 대체할 생산 기지로 베트남·인도네시아·태국을 선택한 국내 제조기업들의 물류 네트워크 재편 현황과 실제 비용 절감 효과를 분석한다.',
  },
  {
    img: IMGS.ai[0], alt: '데이터 분석', tag: 'AI', date: '2024.04.29', read: '6분',
    title: '물류 운영 보고서 자동화: ChatGPT API로 주간 KPI 리포트 생성하기',
    desc: 'WMS/TMS 데이터를 API로 불러와 ChatGPT가 자동으로 주간 물류 KPI 보고서를 작성하게 하는 파이프라인 구축 방법을 설명한다. 실제 프롬프트 템플릿과 비용 분석 포함.',
  },
  {
    img: IMGS.ocean[0], alt: '홍해 항로', tag: '해운 (Ocean)', date: '2024.04.15', read: '8분',
    title: '홍해 사태 긴급 분석: 수에즈 운하 우회로 인한 아시아-유럽 운임 충격',
    desc: '2024년 1월 후티 반군의 상선 공격이 본격화되며 주요 선사들이 수에즈 운하 통항을 중단하고 희망봉 우회로 전환했다. 항로 연장으로 인한 추가 비용과 화주 영향을 긴급 분석한다.',
  },
  {
    img: IMGS.air[0], alt: '항공 화물', tag: '항공 (Air)', date: '2024.03.25', read: '6분',
    title: '해운 대란 반사이익: 2024년 항공 화물 수요 급증과 운임 상승 메커니즘',
    desc: '홍해 사태로 해운 리드타임이 2~3주 늘어나자 긴급 화물 수요가 항공으로 전환되며 아시아발 항공 운임이 급등했다. 해운·항공 운임 상관관계와 화주의 모달 쉬프트 패턴을 분석한다.',
  },
  {
    img: IMGS.ai[1], alt: 'AI 공급망', tag: 'AI', date: '2024.03.11', read: '7분',
    title: '생성형 AI가 물류 산업에 가져올 변화 — 가트너 하이프사이클로 보는 현재 위치',
    desc: '가트너 2024 공급망 기술 하이프사이클에서 생성형 AI·디지털 트윈·자율 로봇은 각각 어느 단계에 위치하는가. 기술 성숙도와 국내 도입 적정 시점을 실무 관점에서 분석한다.',
  },
]

const trending = [
  { tag: '해운', title: '홍해 사태 1년: 수에즈 우회 운항의 장기 영향 분석', date: '2025.03.18' },
  { tag: 'AI', title: 'LLM 기반 물류 에이전트 GPT-4o vs Claude 3.5 비교', date: '2025.03.10' },
  { tag: '정책', title: 'EU CBAM 2026년 전면 시행 — 국내 수출 물류사 대응', date: '2025.03.05' },
  { tag: '해운', title: '컨테이너 선복 과잉 우려: 신조 선박 대량 인도 영향', date: '2025.02.10' },
  { tag: 'AI', title: 'n8n으로 구현하는 물류 자동화: 2025년 워크플로우 10선', date: '2025.01.07' },
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
                  <span className="text-on-surface-variant text-sm">2025년 3월</span>
                </div>
                <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 italic">
                  자율 물류의 새벽: 생성형 AI가 글로벌 공급망을 어떻게 재설계하는가
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                  대형 언어 모델(LLM)이 단순 디지털 보조 도구를 넘어 세계에서 가장 복잡한 물류 네트워크의 운영 설계자로 전환되고 있다. 홍해 사태·관세 충격·탄소 규제의 3중 압박 속에서 AI는 어떤 역할을 맡고 있는가.
                </p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4">
                    전문 읽기
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <span className="text-on-surface-variant text-sm border-l border-outline-variant/30 pl-6">12분 읽기</span>
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
              {['전체', '해운 (Ocean)', '항공 (Air)', '내륙운송 (Land)', 'AI', '정책 (Policy)', '유가 (Oil)'].map((tag, i) => (
                <button key={tag} className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-highest text-on-surface-variant transition-colors'}`}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map(({ img, alt, tag, date, read, title, desc }) => (
                <article key={title} className="group cursor-pointer bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container-low relative">
                    <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-tertiary font-bold text-xs uppercase tracking-widest">{tag}</span>
                    <h3 className="font-headline text-lg font-bold leading-snug group-hover:text-secondary transition-colors line-clamp-2">{title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">{desc}</p>
                    <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium pt-1">
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
                {['해운', '항공', '내륙운송', 'AI', '정책', '유가', '자동화', 'SCM', '관세', 'ESG', '항만', '드론'].map(topic => (
                  <button key={topic} className="px-3 py-1.5 bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface-variant text-xs font-medium rounded-full transition-colors">
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Article count */}
            <div className="bg-surface-container-low rounded-xl p-6 text-center">
              <div className="font-headline text-4xl text-primary mb-1">{articles.length + 1}</div>
              <p className="text-on-surface-variant text-sm">2024~2025 물류 인사이트 아티클</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
