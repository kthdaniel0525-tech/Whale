import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Box,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDotDashed,
  Code2,
  Database,
  Globe2,
  History,
  Newspaper,
  RefreshCw,
  Rocket,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/site/fade-in";
import { Header } from "@/components/site/header";
import { WhaleMark, WhaleWordmark } from "@/components/site/logo";
import { MarketSignal } from "@/components/site/market-signal";
import { Eyebrow, SectionHeading, StatusBadge } from "@/components/site/ui";
import {
  buildSteps,
  missions,
  projectFeatures,
  roadmap,
  teamMembers,
  technologies,
  updates,
} from "@/data/site-data";

const icons = {
  box: Box,
  loop: RefreshCw,
  spark: Sparkles,
  chart: ChartNoAxesCombined,
  database: Database,
  news: Newspaper,
  building: Building2,
  globe: Globe2,
  bot: Bot,
  history: History,
  rocket: Rocket,
};

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Header />

      <section className="hero-section relative min-h-[880px] pb-20 pt-32 sm:min-h-screen sm:pt-40">
        <div className="hero-glow" />
        <div className="site-container relative z-10 grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              Independent AI Product Team
            </div>
            <h1 className="font-display text-[clamp(4.75rem,12vw,9.25rem)] font-semibold leading-[0.78] tracking-[-0.07em] text-white">
              WHALE
            </h1>
            <p className="mt-8 max-w-xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-slate-100 sm:text-5xl">
              Build. Test.
              <br />
              Learn. <span className="text-cyan-300">Scale.</span>
            </p>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Whale은 AI와 소프트웨어로 아이디어를 실제 사람들이 사용할 수 있는 제품으로 만듭니다.
              기획에서 배포까지, 직접 만들고 검증하며 앞으로 나아갑니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#project" className="primary-link justify-center sm:justify-start">
                Explore our work
                <ArrowDown size={16} />
              </a>
              <a href="#team" className="secondary-link justify-center sm:justify-start">
                Meet the team
              </a>
            </div>
          </div>

          <FadeIn delay={120}>
            <MarketSignal />
          </FadeIn>
        </div>

        <div className="site-container relative z-10 mt-16 flex items-center gap-4 text-xs text-slate-600 lg:mt-24">
          <span className="font-mono uppercase tracking-[0.15em]">Scroll to explore</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          <span className="font-mono text-cyan-300/60">01 / 09</span>
        </div>
      </section>

      <section id="about" className="section-pad border-t border-white/[0.06]">
        <div className="site-container">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
              <div>
                <Eyebrow>About Whale</Eyebrow>
                <p className="font-mono text-xs leading-6 text-slate-600">EST. BY BUILDING</p>
              </div>
              <div>
                <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-6xl">
                  아이디어가 제품이 되는
                  <br />
                  <span className="text-slate-500">전 과정을 경험합니다.</span>
                </h2>
                <div className="mt-10 grid gap-7 text-base leading-7 text-slate-400 sm:grid-cols-2">
                  <p>
                    Whale은 AI로 무엇을 할 수 있는지 말하는 데서 출발하지 않았습니다. 작지만
                    유용한 아이디어를 실제 서비스로 만드는 과정이 궁금해서 시작했습니다.
                  </p>
                  <p>
                    단순한 학교 프로젝트를 넘어, 문제 정의부터 개발·테스트·배포·사용자
                    피드백까지 제품의 전체 생애주기를 직접 경험하는 것을 중요하게 생각합니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-[#08131f]">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Mission"
              title="생각을 실행으로 바꾸는 세 가지 원칙"
              description="완벽한 계획보다 작동하는 첫 버전을 만들고, 실제 과정에서 얻은 배움을 다음 제품에 연결합니다."
            />
          </FadeIn>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {missions.map((mission, index) => {
              const Icon = icons[mission.icon as keyof typeof icons];
              return (
                <FadeIn key={mission.title} delay={index * 80}>
                  <article className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-cyan-300/[0.025] sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">
                        <Icon size={20} />
                      </span>
                      <span className="font-mono text-xs text-slate-700">{mission.number}</span>
                    </div>
                    <h3 className="mt-16 font-display text-2xl font-semibold tracking-[-0.025em] text-white">
                      {mission.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-400">{mission.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="project" className="section-pad">
        <div className="site-container">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <SectionHeading
                eyebrow="Current Project · 001"
                title="AI Investment Agent"
                description="하나의 숫자를 예측하는 대신, 시장을 움직이는 여러 신호를 수집하고 연결해 더 나은 투자 리서치를 돕는 AI Agent를 만들고 있습니다."
              />
              <div className="lg:pb-2">
                <StatusBadge status="In Development" />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="project-thesis mt-12 grid overflow-hidden rounded-3xl border border-white/[0.08] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">The thesis</p>
                <p className="mt-6 max-w-2xl font-display text-3xl font-medium leading-[1.3] tracking-[-0.03em] text-white sm:text-4xl">
                  데이터는 흩어져 있습니다.
                  <br />
                  <span className="text-slate-400">판단에는 연결된 맥락이 필요합니다.</span>
                </p>
              </div>
              <div className="border-t border-white/[0.07] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-base leading-7 text-slate-400">
                  주식 데이터, 기술적 지표, 기업 실적, 뉴스, FOMC, CPI, PPI, 금리,
                  VIX, S&amp;P 500, NASDAQ 등 서로 다른 정보가 하나의 리서치 흐름에서
                  해석되도록 설계합니다.
                </p>
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  * 투자 자문이나 수익을 보장하는 서비스가 아니며, 현재 연구·개발 중인 프로젝트입니다.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {projectFeatures.map((feature, index) => {
              const Icon = icons[feature.icon as keyof typeof icons];
              return (
                <FadeIn key={feature.title} delay={(index % 4) * 55}>
                  <article className="feature-card h-full p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <Icon size={19} className="text-cyan-300" />
                      <StatusBadge status={feature.status} />
                    </div>
                    <h3 className="mt-10 font-display text-lg font-semibold tracking-[-0.02em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#08131f]">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="How We Build"
              title="리서치에서 배포까지, 하나의 루프로"
              description="각 단계는 끝이 아니라 다음 실험을 더 잘 설계하기 위한 입력입니다."
            />
          </FadeIn>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {buildSteps.map((item, index) => (
              <FadeIn key={item.step} delay={(index % 4) * 50} className="h-full">
                <div className="group relative h-full min-h-52 bg-[#08131f] p-6 transition hover:bg-[#0a1927]">
                  <span className="font-mono text-xs text-cyan-300/70">{item.step}</span>
                  {index < buildSteps.length - 1 && (
                    <span className="absolute right-5 top-5 hidden text-slate-700 lg:block">↘</span>
                  )}
                  <div className="mt-20">
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section-pad">
        <div className="site-container">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
              <div>
                <SectionHeading
                  eyebrow="Progress / Journey"
                  title="만드는 과정을 기록합니다."
                  description="성공한 결과뿐 아니라, 어떤 가설을 세우고 무엇을 배웠는지 투명하게 남깁니다."
                />
              </div>
              <div className="border-t border-white/[0.08]">
                {updates.map((update) => (
                  <article key={update.date} className="grid gap-4 border-b border-white/[0.08] py-7 sm:grid-cols-[70px_1fr_auto] sm:gap-6">
                    <span className="font-mono text-xs tracking-[0.12em] text-cyan-300/70">{update.date}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white">{update.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">{update.description}</p>
                    </div>
                    <div className="sm:pt-0.5">
                      <StatusBadge status={update.status} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="team" className="section-pad bg-[#08131f]">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Team"
              title="서로 다른 전문성, 하나의 빌드 팀"
              description="각자의 영역을 깊이 파고들되, 제품의 처음과 끝은 함께 책임집니다."
            />
          </FadeIn>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 70}>
                <article className="team-card h-full rounded-2xl border border-white/[0.07] p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] font-display text-lg font-semibold text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex gap-2">
                      <span className="social-placeholder" aria-label="GitHub 링크 준비 중" title="프로필 업데이트 예정">
                        <Code2 size={16} />
                      </span>
                      <span className="social-placeholder" aria-label="LinkedIn 링크 준비 중" title="프로필 업데이트 예정">
                        <BriefcaseBusiness size={16} />
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-9 font-display text-2xl font-semibold tracking-[-0.025em] text-white">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-300">{member.role}</p>
                  <p className="mt-5 text-sm leading-6 text-slate-500">{member.description}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {member.focus.map((item) => (
                      <span key={item} className="rounded-full border border-white/[0.07] px-3 py-1.5 text-xs text-slate-400">{item}</span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-600">* 팀원 이름과 프로필 링크는 실제 정보로 업데이트할 예정입니다.</p>
        </div>
      </section>

      <section className="border-y border-white/[0.06] py-10">
        <div className="site-container">
          <p className="mb-7 font-mono text-xs uppercase tracking-[0.16em] text-slate-600">Technology</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-12">
            {technologies.map((technology) => (
              <span key={technology} className="font-display text-xl font-medium tracking-[-0.02em] text-slate-300 sm:text-2xl">{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Vision / Roadmap"
              title="금융 리서치에서 시작해, 더 넓은 시장으로"
              description="우리는 단계마다 작동하는 가치를 먼저 증명한 뒤 다음 범위로 확장합니다."
            />
          </FadeIn>
          <div className="roadmap-line relative mt-16 grid gap-4 lg:grid-cols-3">
            {roadmap.map((phase, index) => (
              <FadeIn key={phase.horizon} delay={index * 80}>
                <article className="relative h-full rounded-2xl border border-white/[0.07] bg-[#08131f] p-7 sm:p-8">
                  <div className="absolute -top-2 left-8 h-4 w-4 rounded-full border-[3px] border-[#06101a] bg-cyan-300 shadow-[0_0_15px_#22d3ee66]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300">{phase.horizon}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-white">{phase.title}</h3>
                    <StatusBadge status={phase.status} />
                  </div>
                  <ul className="mt-8 space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                        <CircleDotDashed size={15} className="shrink-0 text-slate-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 sm:pb-6">
        <FadeIn>
          <div className="cta-panel mx-auto max-w-[1400px] overflow-hidden rounded-3xl border border-cyan-300/15 px-6 py-16 text-center sm:px-12 sm:py-24">
            <WhaleMark className="mx-auto h-12 w-12" />
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">The journey has just begun</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Turning ideas into
              <br />
              real products.
            </h2>
            <a href="#journey" className="primary-link mx-auto mt-9 w-fit">
              Follow our journey
              <ArrowUpRight size={16} />
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="site-container py-12 sm:py-16">
        <div className="flex flex-col gap-10 border-b border-white/[0.07] pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <WhaleWordmark />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">AI와 소프트웨어로 실제 사용 가능한 서비스를 만드는 팀.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="cursor-default" title="링크 업데이트 예정">GitHub · Soon</span>
            <span className="cursor-default" title="연락처 업데이트 예정">Email · Soon</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Whale. All rights reserved.</p>
          <p>Build · Test · Learn · Scale</p>
        </div>
      </footer>
    </main>
  );
}
