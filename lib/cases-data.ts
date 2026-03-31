export interface CaseData {
  slug: string
  tag: string
  title: string
  shortTitle: string
  desc: string
  company: string
  companyFull: string
  img: string
  alt: string
  date: string
  featured?: boolean

  overview: string
  stats: { val: string; label: string }[]
  challenge: string
  solution: string
  process: { step: string; title: string; desc: string }[]
  results: string
  techStack: { name: string; role: string }[]
  quote: { text: string; author: string; role: string }
}

export const casesData: CaseData[] = [
  {
    slug: 'morning-briefing',
    tag: '자동화 · n8n',
    title: 'Morning Briefing 자동화: 물류 뉴스 AI 분석 시스템',
    shortTitle: 'Morning Briefing 자동화',
    desc: '글로벌 물류 뉴스, 유가, 선복 데이터를 매일 새벽 AI가 자동 수집·분석하여 팀 슬랙으로 브리핑을 전송하는 n8n 기반 자동화 솔루션. 정보 수집 시간 90% 절감 달성.',
    company: 'D물류그룹 · 수강 12기',
    companyFull: 'D물류그룹',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs',
    alt: '컨테이너 터미널',
    date: '2024년 10월',
    featured: true,
    overview:
      '글로벌 물류 시장은 매일 수천 건의 뉴스와 데이터가 쏟아집니다. D물류그룹의 전략팀은 매일 아침 팀원 3명이 2시간씩 뉴스를 수집·정리하는 업무를 반복하고 있었습니다. AX Academy 수강 후 n8n + GPT-4o를 활용해 이 전 과정을 완전 자동화했습니다.',
    stats: [
      { val: '90%', label: '정보 수집 시간 절감' },
      { val: '24/7', label: '무중단 자동 운영' },
      { val: '500+', label: '일일 모니터링 소스' },
      { val: '6h', label: '일일 절감 공수' },
    ],
    challenge:
      '전략팀 3명이 매일 오전 2시간씩 Lloyd\'s List, FreightWaves, 한국해운신문 등 20여 개 매체를 수동으로 확인하고 요약 메모를 작성했습니다. 유가·선복지수 데이터는 별도로 엑셀에 옮겨야 했고, 정보 누락과 담당자 부재 시 공백이 반복되는 문제가 있었습니다.',
    solution:
      'n8n 워크플로우가 매일 새벽 5시에 실행되어 RSS 피드 500개 이상을 크롤링하고, GPT-4o가 물류 관련성을 판단하여 핵심 내용을 3줄 요약합니다. EIA 유가 API, Baltic Dry Index 데이터도 자동 수집하여 전일 대비 변동률을 계산합니다. 최종 브리핑은 오전 7시에 팀 슬랙 채널로 자동 발송됩니다.',
    process: [
      {
        step: '01',
        title: '데이터 소스 매핑',
        desc: '팀이 실제로 보는 뉴스 매체 20개를 RSS 피드로 전환 가능한지 검토하고, 없는 경우 n8n HTTP 노드로 직접 파싱하는 방법을 설계했습니다.',
      },
      {
        step: '02',
        title: 'n8n 크롤링 파이프라인 구축',
        desc: 'RSS Reader 노드 + HTTP Request 노드로 500개 소스에서 원문을 수집하고, 중복 제거 로직으로 이미 발송된 기사를 필터링합니다.',
      },
      {
        step: '03',
        title: 'GPT-4o 요약 및 분류',
        desc: 'OpenAI 노드에 프롬프트를 설계해 물류·해운·항공 관련성 점수를 매기고, 상위 15개 기사를 선별해 3줄 요약과 영향도 태그(긍정/부정/중립)를 추가합니다.',
      },
      {
        step: '04',
        title: '지표 데이터 통합',
        desc: 'EIA API로 WTI 유가, Freightos API로 글로벌 컨테이너 운임지수(FBX)를 수집하여 전일 대비 등락률을 자동 계산합니다.',
      },
      {
        step: '05',
        title: '슬랙 브리핑 발송',
        desc: '슬랙 Block Kit으로 시각적으로 정리된 브리핑 메시지를 구성하고, 매일 오전 7시 정각에 팀 채널로 자동 발송합니다.',
      },
    ],
    results:
      '도입 후 전략팀 3명의 아침 뉴스 수집 업무가 완전히 사라졌습니다. 절감된 하루 6시간을 고객 제안서 작성과 시장 분석에 투입하여, 분기 수주 제안 건수가 40% 증가했습니다. 정보 누락 사고도 0건을 달성했습니다.',
    techStack: [
      { name: 'n8n', role: '워크플로우 자동화 엔진' },
      { name: 'GPT-4o', role: '뉴스 요약 및 분류' },
      { name: 'EIA API', role: '유가 데이터 수집' },
      { name: 'Freightos API', role: '컨테이너 운임지수' },
      { name: 'Slack API', role: '브리핑 발송 채널' },
      { name: 'Supabase', role: '발송 이력 관리' },
    ],
    quote: {
      text: '매일 아침 뉴스 보는 게 일이었는데, 이제 슬랙 열면 이미 정리가 되어 있어요. 처음엔 반신반의했는데 3개월째 단 한 번도 빠진 적이 없습니다.',
      author: '김현수',
      role: 'D물류그룹 전략기획팀 팀장',
    },
  },
  {
    slug: 'forwarding-quote-agent',
    tag: '자동화 · n8n',
    title: '포워딩 견적 자동화 에이전트',
    shortTitle: '포워딩 견적 자동화',
    desc: '이메일과 PDF로 수신되는 견적 요청을 자동 파싱하여 ERP 시스템에 연동, 최적 운임을 즉시 산출하는 AI 에이전트.',
    company: 'G포워딩 · 수강 12기',
    companyFull: 'G포워딩',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFjDk6nz0frcM22DfqabBXNgwi0GjXznjRdPrZKEhsXELy-bgjmEEP8h-8sVeJjo__KqysZwmqnJEUkXrbJ5c2HAB12sMC9rNPTOF7IoFTeRHHjxN772Re6TWoHCBYT6KhyzT82woA9j3D0DXMnJuhYa1niaFM7FIZMYmp7aUtU1N_GttRkPoxyI4NIEHuaUZ2Vgvnn1VhVEYmtM-jCeoQaVOjVGNkE-u5ISr0U2iRuua1HIEUN2iGtVW_QDykGPXWKXFTkF1_3S0',
    alt: '데이터 대시보드',
    date: '2025년 2월',
    overview:
      '국제 포워딩사 G포워딩은 하루 평균 80건의 견적 요청을 이메일과 PDF 첨부파일로 수신합니다. 영업팀 4명이 각 요청을 직접 읽고 ERP에 입력하는 데 건당 평균 25분이 소요되었습니다. AX Academy 수강 후 GPT-4o + n8n으로 전체 프로세스를 자동화했습니다.',
    stats: [
      { val: '25분 → 90초', label: '견적 처리 시간' },
      { val: '80건/일', label: '자동 처리 건수' },
      { val: '98.5%', label: '데이터 추출 정확도' },
      { val: '3.2억', label: '연간 인건비 절감 추정' },
    ],
    challenge:
      '고객들은 각기 다른 포맷으로 견적을 요청합니다. 어떤 고객은 이메일 본문에, 어떤 고객은 자체 양식 PDF로, 어떤 고객은 엑셀 파일로 보냅니다. 영업팀은 이를 일일이 읽고 출발지·목적지·화물 종류·중량·용적·인코텀즈를 ERP에 수동 입력해야 했습니다.',
    solution:
      'Gmail 트리거로 신규 견적 요청 이메일을 감지하면, 첨부 PDF와 이메일 본문을 GPT-4o Vision으로 파싱하여 구조화된 JSON을 추출합니다. 추출된 데이터는 자체 ERP API로 자동 입력되고, 운임 데이터베이스와 대조하여 최적 운임 3가지를 산출합니다. 전체 과정이 90초 안에 완료되고 영업 담당자에게 슬랙 알림이 갑니다.',
    process: [
      {
        step: '01',
        title: '이메일 자동 감지',
        desc: 'Gmail API 트리거가 "견적 요청" 키워드가 포함된 이메일을 실시간으로 감지하고 n8n 파이프라인을 시작합니다.',
      },
      {
        step: '02',
        title: 'PDF/이미지 파싱',
        desc: 'GPT-4o Vision으로 PDF 첨부파일과 이메일 본문을 동시에 분석하여 출발지, 목적지, 화물 정보, 인코텀즈 등 15개 필드를 추출합니다.',
      },
      {
        step: '03',
        title: 'ERP 자동 입력',
        desc: '추출된 구조화 데이터를 ERP REST API에 POST하여 새 견적 건을 자동 생성합니다. 누락 필드가 있을 경우 담당자 이메일로 부분 입력 알림을 발송합니다.',
      },
      {
        step: '04',
        title: '최적 운임 산출',
        desc: '내부 운임 DB와 선사별 스팟레이트를 대조하여 최저가·최단 리드타임·최적 균형의 3가지 옵션을 자동으로 산출합니다.',
      },
      {
        step: '05',
        title: '영업팀 슬랙 알림',
        desc: '처리 완료 후 담당 영업사원에게 견적 요약과 ERP 링크를 슬랙으로 전달, 최종 검토 및 승인만 하면 됩니다.',
      },
    ],
    results:
      '건당 25분에서 90초로 처리 시간이 94% 단축되었습니다. 영업팀 4명이 입력 업무에서 해방되어 고객 관계 관리와 신규 영업에 집중할 수 있게 되었습니다. 도입 3개월 만에 영업팀 1인당 처리 고객 수가 2.4배 증가했습니다.',
    techStack: [
      { name: 'n8n', role: '워크플로우 자동화 엔진' },
      { name: 'GPT-4o Vision', role: 'PDF·이메일 파싱' },
      { name: 'Gmail API', role: '이메일 트리거' },
      { name: 'ERP REST API', role: '견적 데이터 입력' },
      { name: 'Slack API', role: '담당자 알림' },
      { name: 'PostgreSQL', role: '운임 DB 관리' },
    ],
    quote: {
      text: '하루에 이메일 80개를 타이핑하는 게 제 일의 절반이었어요. 이제 그 시간에 고객 미팅을 3배 더 잡을 수 있게 됐습니다.',
      author: '이지민',
      role: 'G포워딩 영업팀 수석',
    },
  },
  {
    slug: 'logistics-knowledge-chatbot',
    tag: '챗봇 · RAG',
    title: '사내 물류 지식 베이스 챗봇',
    shortTitle: '물류 지식 베이스 챗봇',
    desc: '수백 페이지 분량의 운영 매뉴얼을 RAG 방식으로 학습시켜 신입 사원 온보딩 기간을 8주에서 2주로 단축.',
    company: 'S물류 · 수강 11기',
    companyFull: 'S물류',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLwzoiydPwSnDjTvGqGSvUwT6PTamV6nSl1UnEuMsAGi2lmqf4Hfi1hvhCHQq8ZIv1_Hocr32LJyPsOwnasqkTQVMWQwpm3CPXXKJd9LPrP5OdgfRsIiWuMORQgh4QHUqay_vR8PVEK5MOD4IyuFFuKkfFBS1G-P3Zxv17XAjWbFTQjq1a7sR3by7HpdHnRabqVxywTLI8zl-PshsebItPxKpNVp6H1Hr5YtzLL5_1UW1FY8iuDe8jIDPugAOXav5k4ozz-6ulIrM',
    alt: 'AI 네트워크',
    date: '2024년 8월',
    overview:
      'S물류는 택배·화물·3PL 등 다양한 사업부를 운영하며 운영 매뉴얼이 1,200페이지에 달합니다. 신입 직원이 실무 질문을 하면 선배가 직접 답하거나 문서를 찾아줘야 했고, 온보딩에 평균 8주가 걸렸습니다. RAG 기반 사내 챗봇 도입으로 이 문제를 근본적으로 해결했습니다.',
    stats: [
      { val: '8주 → 2주', label: '온보딩 기간 단축' },
      { val: '1,200p', label: 'RAG 학습 문서량' },
      { val: '94%', label: '답변 만족도' },
      { val: '선배 개입 -70%', label: '반복 질문 감소' },
    ],
    challenge:
      '신입 직원들은 매일 "위험물 분류 기준이 어떻게 되나요?", "이 경우 파손 보상 절차는?" 같은 질문을 선배들에게 반복적으로 했습니다. 선배들은 업무 집중이 방해되었고, 신입들은 문서 1,200페이지를 직접 찾아야 해서 적응이 느렸습니다.',
    solution:
      '운영 매뉴얼, 고객 FAQ, 사고 처리 가이드라인 등 총 1,200페이지 분량의 문서를 OpenAI Embeddings로 벡터화하여 Supabase pgvector에 저장했습니다. 직원이 슬랙에서 질문하면 관련 문서 청크를 검색하여 GPT-4o가 정확한 답변과 출처 문서 페이지를 함께 제공합니다.',
    process: [
      {
        step: '01',
        title: '문서 수집 및 정제',
        desc: 'PDF, Word, 사내 위키 등 다양한 형식의 문서를 통일된 텍스트로 변환하고, 의미 단위로 청킹하는 전처리 작업을 수행했습니다.',
      },
      {
        step: '02',
        title: '벡터 임베딩 생성',
        desc: 'OpenAI text-embedding-3-large 모델로 각 청크의 임베딩 벡터를 생성하고 Supabase pgvector 테이블에 저장했습니다.',
      },
      {
        step: '03',
        title: '슬랙 봇 연동',
        desc: 'Slack App을 생성하여 @봇 멘션 시 n8n 웹훅으로 질문이 전달되는 파이프라인을 구축했습니다.',
      },
      {
        step: '04',
        title: 'RAG 검색 및 답변 생성',
        desc: '질문을 임베딩하여 유사도 상위 5개 청크를 검색하고, GPT-4o에게 컨텍스트와 함께 전달하여 정확하고 근거 있는 답변을 생성합니다.',
      },
      {
        step: '05',
        title: '출처 투명성 제공',
        desc: '답변과 함께 참조한 문서명과 페이지 번호를 명시하여 직원이 원문을 직접 확인할 수 있도록 했습니다.',
      },
    ],
    results:
      '신입 직원 온보딩 기간이 8주에서 2주로 단축되었습니다. 선배 직원들의 반복 질문 응대가 70% 감소하여 핵심 업무 집중도가 크게 향상되었습니다. 직원 만족도 조사에서 챗봇 답변 만족도 94%를 기록했습니다.',
    techStack: [
      { name: 'OpenAI Embeddings', role: '문서 벡터화' },
      { name: 'GPT-4o', role: '답변 생성' },
      { name: 'Supabase pgvector', role: '벡터 DB' },
      { name: 'n8n', role: 'RAG 파이프라인' },
      { name: 'Slack API', role: '직원 인터페이스' },
      { name: 'Python', role: '문서 전처리' },
    ],
    quote: {
      text: '예전엔 신입한테 같은 질문 열 번씩 받았어요. 이제 "봇한테 물어봐"라고 하면 끝납니다. 그리고 봇 대답이 제가 설명하는 것보다 더 정확해요.',
      author: '박준혁',
      role: 'S물류 운영팀 책임',
    },
  },
  {
    slug: 'demand-forecast-dispatch',
    tag: '예측 분석 · ML',
    title: '수요 예측 기반 배차 최적화',
    shortTitle: '수요 예측 배차 최적화',
    desc: '과거 배송 데이터와 외부 요인을 결합하여 주간 물동량을 예측하고, 최적 배차 계획을 자동 생성하는 시스템.',
    company: 'K택배 · 수강 12기',
    companyFull: 'K택배',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_anvfb7vMwat0pFNvid1SR9I9iIB-xi09_HQeYhpVGMZxd7nPjoySOIAxexuyR8oHLGMfJmocoQEUN50c-DQNpY9NUTlkeNJS_yx7LtDJ8ELCzhMFdQ9TQVZMwQZWw3s2cFYrZpoi4ORCNT-c7ysH3yLmXbAeCmtDLWWMIABgKqNkXWDiaojYgNu_ZagJPs1EraLvXcJ0ix4Jz10dgeiJCPc7zJyGoUio2jwlBTJwHgC7IG_NUCLb7Pa-iS71F9nvx3GKSRI-hDE',
    alt: '예측 분석',
    date: '2025년 1월',
    overview:
      'K택배의 수도권 허브는 일일 물동량 변동이 최대 ±40%에 달해 배차 계획 수립이 어려웠습니다. 부족하면 연장근무, 남으면 차량 공회전으로 매월 큰 손실이 발생했습니다. 머신러닝 예측 모델 도입으로 물동량을 사전 예측하고 배차를 자동화했습니다.',
    stats: [
      { val: '91%', label: '주간 예측 정확도' },
      { val: '-23%', label: '차량 공회전 감소' },
      { val: '4.8억', label: '연간 운영비 절감' },
      { val: '배차 시간 -85%', label: '계획 수립 자동화' },
    ],
    challenge:
      '배차 담당자가 경험에 의존해 월요일 오전에 주간 배차 계획을 수립했습니다. 명절, 쇼핑 시즌, 날씨 등의 변수를 직관으로 반영해야 해서 정확도가 낮았고, 차량이 부족하면 긴급 용차로, 남으면 기사들이 반납하는 비효율이 반복되었습니다.',
    solution:
      '3년치 일별 물동량 데이터에 기상청 날씨 예보, 이커머스 플랫폼 프로모션 일정, 공휴일·명절 변수를 결합하여 XGBoost + LSTM 앙상블 모델을 훈련했습니다. 매주 금요일 자동으로 다음 주 일별 예측을 생성하고, 예측값을 기반으로 최적 배차 계획서를 Excel 파일로 자동 생성합니다.',
    process: [
      {
        step: '01',
        title: '데이터 수집 및 특성 엔지니어링',
        desc: '3년치 일별 물동량 데이터에 요일, 월, 공휴일 여부, 기상 데이터, 이커머스 대형 프로모션 일정을 특성으로 추가했습니다.',
      },
      {
        step: '02',
        title: 'XGBoost + LSTM 앙상블 모델 훈련',
        desc: '단기 패턴에 강한 XGBoost와 시계열 장기 패턴에 강한 LSTM을 앙상블하여 단독 모델 대비 예측 정확도를 8%p 향상시켰습니다.',
      },
      {
        step: '03',
        title: '자동 예측 파이프라인 구성',
        desc: 'n8n 스케줄러가 매주 금요일 정오에 모델을 실행하여 다음 주 7일치 물동량 예측값을 생성합니다.',
      },
      {
        step: '04',
        title: '배차 계획 자동 생성',
        desc: '예측 물동량을 차량 용적과 기사 근무 스케줄에 대입하여 최적 배차 계획서를 자동으로 생성하고 담당자 이메일로 발송합니다.',
      },
      {
        step: '05',
        title: '실적 대비 모델 재학습',
        desc: '매월 실제 물동량 vs 예측값을 비교하여 오차가 5% 이상이면 자동으로 모델 재학습을 트리거합니다.',
      },
    ],
    results:
      '주간 예측 정확도 91% 달성으로 차량 공회전이 23% 감소했습니다. 연간 운영비 절감 효과는 약 4.8억원으로 추정됩니다. 배차 담당자의 계획 수립 시간이 기존 4시간에서 30분으로 줄었고, 해당 인력을 물류 품질 개선 업무에 재배치했습니다.',
    techStack: [
      { name: 'Python', role: '모델 개발 및 파이프라인' },
      { name: 'XGBoost', role: '주요 예측 모델' },
      { name: 'LSTM (PyTorch)', role: '시계열 보조 모델' },
      { name: 'n8n', role: '자동 실행 스케줄러' },
      { name: '기상청 API', role: '날씨 데이터 연동' },
      { name: 'PostgreSQL', role: '물동량 데이터 저장' },
    ],
    quote: {
      text: '월요일 아침마다 배차표 만드는 게 제일 스트레스였는데, 이제 금요일에 메일 확인하고 검토만 합니다. 예측이 생각보다 훨씬 잘 맞아요.',
      author: '최성원',
      role: 'K택배 수도권허브 배차팀장',
    },
  },
  {
    slug: 'container-auto-report',
    tag: '자동화 · n8n',
    title: '컨테이너 반출입 현황 자동 리포트',
    shortTitle: '컨테이너 현황 자동 리포트',
    desc: '터미널 데이터를 실시간 수집하고 일일 현황 리포트를 자동 생성하여 운영팀 슬랙으로 발송하는 워크플로우.',
    company: 'P터미널 · 수강 11기',
    companyFull: 'P터미널',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoQ3xq8srVH6peD__guY4bEcP3OgQVpu7ihBj_Xg9vD_VKmyc-PN_kQIhkkr0wBykggN36mUBKQ9fqFdYNcd5SWPvbSg0DKgTNoV24lDCmW0rRpOXbm6aha_mzl55lxNq9klrY89vvaMYy7BnNowA14XARgChKYadQOPal_f92v_3z-sVEkoCk8efkOdcwSdDmyMo_uAfn-NZ_OFd3Iz3-Box75EtniL67iG4rMLJUvRmUeJ94daE5YzP6BWdKHbaVIaGVjo2bxs',
    alt: '컨테이너 터미널',
    date: '2024년 6월',
    overview:
      'P터미널은 하루 평균 1,400TEU의 컨테이너를 처리합니다. 운영팀은 매일 퇴근 전 TOS(터미널 운영 시스템)에서 데이터를 수동으로 추출하여 리포트를 작성했습니다. 이 작업에만 하루 90분이 소요되었으며 주말에는 공백이 발생했습니다. n8n 자동화로 이 문제를 완전히 해결했습니다.',
    stats: [
      { val: '1,400 TEU', label: '일일 처리량 모니터링' },
      { val: '90분 → 0분', label: '수동 리포트 작업 제거' },
      { val: '365일', label: '무결석 자동 리포트' },
      { val: '15분', label: '이상 감지 알림 속도' },
    ],
    challenge:
      '운영팀이 매일 저녁 TOS에서 반입·반출·야적·체류 컨테이너 데이터를 엑셀로 내려받아 수동으로 집계표를 만들었습니다. 주말과 공휴일에는 당직자가 리포트를 만들지 않아 데이터 공백이 생겼고, 이상 징후(야적 과부하, 장기 체류 컨테이너)를 다음 날에야 발견하는 문제가 있었습니다.',
    solution:
      'TOS REST API를 n8n으로 연결하여 1시간마다 컨테이너 현황 데이터를 자동 수집합니다. 야적률이 85%를 초과하거나 체류 기간 7일 이상 컨테이너가 발생하면 즉시 슬랙 알림을 발송합니다. 매일 오후 6시에는 일일 종합 리포트가 운영팀 채널로 자동 발송됩니다.',
    process: [
      {
        step: '01',
        title: 'TOS API 연동',
        desc: 'TOS 벤더사와 협력하여 REST API 엔드포인트를 확보하고, n8n HTTP Request 노드로 1시간 주기 데이터 수집 파이프라인을 구성했습니다.',
      },
      {
        step: '02',
        title: '이상 감지 로직 설계',
        desc: '야적률 85% 초과, 체류 7일 이상, 위험물 컨테이너 구역 이탈 등 5가지 이상 조건을 정의하고 실시간 모니터링 로직을 구현했습니다.',
      },
      {
        step: '03',
        title: '자동 알림 발송',
        desc: '이상 조건 감지 시 15분 이내에 담당자와 팀장에게 슬랙 DM과 채널 알림을 동시에 발송합니다.',
      },
      {
        step: '04',
        title: '일일 리포트 자동 생성',
        desc: '하루 집계 데이터를 시각화 테이블로 구성하고 전일·전주 대비 증감률을 계산하여 매일 오후 6시에 운영팀 슬랙으로 발송합니다.',
      },
      {
        step: '05',
        title: '주간·월간 리포트 확장',
        desc: '일일 자동화 이후 주간 트렌드 분석과 월간 KPI 리포트도 자동화하여 임원 보고 자료 준비 시간도 절감했습니다.',
      },
    ],
    results:
      '하루 90분의 수동 리포트 작업이 완전히 사라졌습니다. 365일 데이터 공백 없이 현황이 모니터링되며, 이상 징후 발견 속도가 다음날 → 15분 이내로 개선되었습니다. 야적 과부하로 인한 작업 지연 사고가 전년 대비 60% 감소했습니다.',
    techStack: [
      { name: 'n8n', role: '자동화 파이프라인' },
      { name: 'TOS REST API', role: '터미널 데이터 수집' },
      { name: 'Slack API', role: '리포트·알림 발송' },
      { name: 'PostgreSQL', role: '시계열 데이터 저장' },
      { name: 'Chart.js', role: '리포트 시각화' },
      { name: 'Node.js', role: '커스텀 집계 로직' },
    ],
    quote: {
      text: '주말에 당직 서면서 리포트 만들던 게 없어졌어요. 이제 슬랙만 켜면 현황이 다 나옵니다. 이상이 생기면 알아서 메시지도 오고요.',
      author: '한상민',
      role: 'P터미널 운영팀 과장',
    },
  },
  {
    slug: 'air-freight-prediction',
    tag: '예측 분석 · AI',
    title: '항공 운임 변동 예측 모델',
    shortTitle: '항공 운임 예측 모델',
    desc: '유가, 환율, 계절성 데이터를 학습하여 2주 후 항공 운임을 예측하고 최적 구매 시점을 알려주는 AI 모델.',
    company: 'A항공화물 · 수강 10기',
    companyFull: 'A항공화물',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXAkke7wrNrzU4n028raEVEzQNq31UGQ1LX5QvHNeDUgXsFJK9wSuPuidIt6W9wLExNhFexyjNz4FAve4CV7Onzr5KbmsriO8X_Kj7-7FRaBVDlTZVNaIFzDoBy4qgalgMdzUmIrPte49jczqYTCTQDXh79mguAPXbU53fCCB4uL2OEY0ev1ChCGNe6a92lRVm0YmECCj3Rcsi5vwdq28g7YJ6pagNvF4LQ2XoapI4XVgnl-OmIQHbJS7t0_LF_sdapxQYKu8KOGA',
    alt: '항공 화물',
    date: '2024년 4월',
    overview:
      'A항공화물은 반도체·의약품 등 고가 긴급 화물을 주로 취급합니다. 항공 운임은 유가·환율·성수기·공급 용량에 따라 수시로 변동하며, 운임을 언제 확정하느냐에 따라 건당 수백만원 차이가 납니다. AI 예측 모델로 최적 구매 시점을 선제적으로 파악하는 시스템을 구축했습니다.',
    stats: [
      { val: '87%', label: '2주 후 운임 예측 정확도' },
      { val: '건당 -12%', label: '평균 운임 절감' },
      { val: '7.2억', label: '연간 운임 절감 추정' },
      { val: '80+', label: '학습 특성(Feature) 수' },
    ],
    challenge:
      '구매팀이 경험과 감으로 항공 운임 구매 시점을 결정했습니다. 운임이 오를 것 같으면 미리 사고, 내릴 것 같으면 기다렸지만 정확도가 낮았습니다. 2023년에는 잘못된 시점 판단으로 연간 운임 예산의 8%를 초과 지출하는 사태가 발생했습니다.',
    solution:
      '5년치 항공 운임 히스토리에 WTI 유가, 원/달러 환율, 항공기 가동률, 계절성, 전자제품·의약품 수출 지수 등 80개 이상의 특성을 결합하여 예측 모델을 훈련했습니다. 매일 최신 데이터로 2주 후 운임을 예측하고, 현재보다 낮을 것으로 예측되면 "대기", 오를 것으로 예측되면 "즉시 구매" 신호를 발송합니다.',
    process: [
      {
        step: '01',
        title: '운임 데이터 수집 및 정제',
        desc: '5년치 주요 항로별 항공 운임 데이터를 수집하고, 이상값 제거와 결측치 처리로 학습 가능한 형태로 정제했습니다.',
      },
      {
        step: '02',
        title: '외부 변수 특성 엔지니어링',
        desc: 'EIA 유가, 한국은행 환율 API, IATA 항공기 가동률 데이터 등 80개 이상의 외부 변수를 수집하고 시차(lag) 특성을 생성했습니다.',
      },
      {
        step: '03',
        title: 'LightGBM 앙상블 모델 훈련',
        desc: 'LightGBM 회귀 모델을 기본으로, Random Forest와 앙상블하여 단독 모델 대비 예측 오차(MAPE)를 15% 개선했습니다.',
      },
      {
        step: '04',
        title: '구매 신호 생성 로직',
        desc: '예측 운임이 현재 대비 3% 이상 오를 것으로 전망되면 "즉시 구매" 신호를, 내릴 것으로 전망되면 "대기" 신호를 자동 생성합니다.',
      },
      {
        step: '05',
        title: '일일 구매팀 대시보드 발송',
        desc: '주요 항로별 예측 운임 차트와 구매 신호를 담은 리포트를 매일 오전 8시에 구매팀 이메일과 슬랙으로 발송합니다.',
      },
    ],
    results:
      '2주 후 운임 예측 정확도 87% 달성으로, 구매팀이 최적 시점에 운임을 확정할 수 있게 되었습니다. 도입 후 1년간 건당 평균 운임이 12% 절감되었으며, 연간 추정 절감액은 7.2억원입니다. 운임 예산 초과 사태는 0건으로 줄었습니다.',
    techStack: [
      { name: 'Python', role: '모델 개발 및 파이프라인' },
      { name: 'LightGBM', role: '운임 예측 모델' },
      { name: 'Random Forest', role: '앙상블 보조 모델' },
      { name: 'EIA·한국은행 API', role: '외부 데이터 수집' },
      { name: 'n8n', role: '일일 자동 실행' },
      { name: 'Slack API', role: '구매 신호 발송' },
    ],
    quote: {
      text: '운임 살 타이밍을 매번 감으로 잡았는데, 이제 모델이 신호를 줘요. 처음엔 반신반의했는데 1년 지나고 보니 예산 절감이 숫자로 나왔습니다.',
      author: '정유진',
      role: 'A항공화물 구매팀 부장',
    },
  },
]

export function getCaseBySlug(slug: string): CaseData | undefined {
  return casesData.find((c) => c.slug === slug)
}
