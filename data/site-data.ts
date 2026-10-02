export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Researching"
  | "Planned";

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Journey", href: "#journey" },
  { label: "Team", href: "#team" },
];

export const missions = [
  {
    number: "01",
    title: "Build Real Products",
    description:
      "아이디어를 문서에 멈추지 않고, 실제 사용 가능한 제품으로 구현합니다.",
    icon: "box",
  },
  {
    number: "02",
    title: "Learn Through Execution",
    description:
      "기획부터 배포와 피드백까지 직접 실행하며 가장 빠르게 배웁니다.",
    icon: "loop",
  },
  {
    number: "03",
    title: "Create Useful AI Services",
    description:
      "기술 자체보다 사람의 판단과 행동을 실제로 돕는 AI를 만듭니다.",
    icon: "spark",
  },
];

export const projectFeatures: {
  title: string;
  description: string;
  status: ProjectStatus;
  icon: string;
}[] = [
  {
    title: "Technical Indicators",
    description: "가격·거래량 기반 지표를 분석 가능한 형태로 구성합니다.",
    status: "In Development",
    icon: "chart",
  },
  {
    title: "Market Data Analysis",
    description: "여러 시장 데이터를 한 흐름에서 관찰하고 해석합니다.",
    status: "In Development",
    icon: "database",
  },
  {
    title: "Financial News Summarization",
    description: "시장에 영향을 주는 뉴스의 핵심과 맥락을 요약합니다.",
    status: "Researching",
    icon: "news",
  },
  {
    title: "Company Earnings Analysis",
    description: "실적 발표와 주요 재무 변화를 구조적으로 분석합니다.",
    status: "Researching",
    icon: "building",
  },
  {
    title: "Macroeconomic Indicators",
    description: "FOMC, CPI, PPI, 금리와 변동성 지표를 함께 살핍니다.",
    status: "Planned",
    icon: "globe",
  },
  {
    title: "AI Research Assistant",
    description: "흩어진 근거를 연결해 투자 리서치 과정을 보조합니다.",
    status: "In Development",
    icon: "bot",
  },
  {
    title: "Backtesting",
    description: "가설과 전략을 과거 데이터에서 검증하는 환경을 설계합니다.",
    status: "Planned",
    icon: "history",
  },
  {
    title: "Paper / Automated Trading",
    description: "모의 운용부터 자동화 연구까지 단계적으로 확장합니다.",
    status: "Planned",
    icon: "rocket",
  },
];

export const buildSteps = [
  { step: "01", title: "Research", description: "문제와 시장을 이해합니다." },
  { step: "02", title: "Idea & Planning", description: "가설과 범위를 정의합니다." },
  { step: "03", title: "MVP Design", description: "핵심 경험을 설계합니다." },
  { step: "04", title: "Development", description: "작동하는 제품을 만듭니다." },
  { step: "05", title: "Testing / Backtesting", description: "기능과 가설을 검증합니다." },
  { step: "06", title: "Deployment", description: "실제 환경에 배포합니다." },
  { step: "07", title: "User Feedback", description: "사용자의 반응을 관찰합니다." },
  { step: "08", title: "Iteration", description: "배운 것을 제품에 반영합니다." },
];

export const updates = [
  {
    date: "NOW",
    title: "AI Investment Agent — 첫 번째 프로젝트",
    description:
      "기술적 지표, 시장 데이터, 기업 실적, 뉴스와 거시경제 지표를 연결하는 투자 리서치 Agent의 구조를 설계하고 있습니다.",
    status: "In Development" as ProjectStatus,
  },
  {
    date: "NEXT",
    title: "데이터 파이프라인과 분석 흐름",
    description:
      "신뢰할 수 있는 데이터 수집 방식과 AI 분석 결과의 근거 제시 방식을 연구합니다.",
    status: "Researching" as ProjectStatus,
  },
  {
    date: "LATER",
    title: "검증 환경으로 확장",
    description:
      "리서치 결과를 검증할 수 있도록 백테스팅과 Paper Trading을 단계적으로 준비합니다.",
    status: "Planned" as ProjectStatus,
  },
];

export const teamMembers = [
  {
    name: "Team Member 01",
    role: "AI / Backend / Product",
    description: "AI 분석 구조와 제품 경험, 백엔드 시스템을 함께 설계합니다.",
    focus: ["AI Systems", "Backend", "Product"],
    github: null,
    linkedin: null,
  },
  {
    name: "Team Member 02",
    role: "Investment Strategy / Quant Research",
    description: "시장 가설과 투자 전략을 데이터로 정의하고 검증합니다.",
    focus: ["Strategy", "Quant", "Research"],
    github: null,
    linkedin: null,
  },
  {
    name: "Team Member 03",
    role: "Development / API & Infrastructure",
    description: "데이터 연동과 API, 안정적인 서비스 기반을 구축합니다.",
    focus: ["Development", "API", "Infrastructure"],
    github: null,
    linkedin: null,
  },
];

export const technologies = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "AI / LLM APIs",
  "Financial Data APIs",
];

export const roadmap = [
  {
    horizon: "SHORT TERM",
    title: "Foundation",
    status: "In Development" as ProjectStatus,
    items: ["AI Investment Agent MVP", "Market Data Integration", "AI Analysis"],
  },
  {
    horizon: "MID TERM",
    title: "Validation",
    status: "Planned" as ProjectStatus,
    items: ["Backtesting", "Paper Trading", "User Testing"],
  },
  {
    horizon: "LONG TERM",
    title: "Expansion",
    status: "Planned" as ProjectStatus,
    items: [
      "Automated Trading Research",
      "Crypto / Other Markets",
      "More AI-powered Services",
    ],
  },
];

