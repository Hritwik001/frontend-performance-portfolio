import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <Container>
        <SectionHeading
          eyebrow="Featured Investigations"
          title="Performance work shown through measurable case studies."
          description="Two documented React and Next.js dashboard investigations showing how slow interfaces were measured, diagnosed, optimized, and validated."
        />

        <div className="mt-16 space-y-10">
          <Reveal>
            <article className="motion-card group rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_50px_rgba(245,197,66,0.10)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Featured Investigation
              </p>

              <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <h3 className="text-4xl font-semibold tracking-tight">RevenuePulse</h3>

                  <p className="mt-3 text-lg text-[var(--text-muted)]">
                    SaaS Revenue Analytics Dashboard
                  </p>

                  <p className="mt-6 leading-8 text-[var(--text-secondary)]">
                    A React and Next.js revenue analytics dashboard with delayed KPI rendering, slow
                    chart loading, laggy subscription search, slow plan filtering, and heavy
                    dashboard refresh behavior.
                  </p>
                </div>

                <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/40 p-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Before</p>
                      <p className="mt-2 text-4xl font-bold">2000ms</p>
                    </div>

                    <div>
                      <p className="text-sm text-[var(--text-muted)]">After</p>
                      <p className="mt-2 text-4xl font-bold text-[var(--accent)]">140ms</p>
                    </div>
                  </div>

                  <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[92%] rounded-full bg-[var(--accent)]" />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                    React Profiler validated a significant render-time reduction after optimization.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">Problem</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    Slow KPI loading, delayed revenue charts, laggy search, slow filters, and
                    sluggish dashboard refresh.
                  </p>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">Optimization</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    Removed artificial delays, memoized revenue calculations, optimized
                    search/filtering, and reduced table rendering.
                  </p>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">Result</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    Render time improved from 2000ms to 140ms with smoother dashboard interactions.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="motion-media group/image overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30 transition-all duration-300 hover:border-[var(--border-strong)]">
                  <div className="border-b border-[var(--border)] px-5 py-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                      Application Dashboard
                    </p>
                  </div>

                  <a
                    href="/images/revenuepulse/dashboard.png"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open RevenuePulse dashboard screenshot"
                  >
                    <Image
                      src="/images/revenuepulse/dashboard.png"
                      alt="RevenuePulse dashboard screenshot"
                      width={1600}
                      height={900}
                      className="w-full transition-transform duration-500 group-hover/image:scale-[1.02]"
                    />
                  </a>

                  <p className="border-t border-[var(--border)] px-5 py-3 text-sm text-[var(--text-secondary)]">
                    Revenue dashboard after performance optimization.
                  </p>
                </div>

                <div className="motion-media group/image overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30 transition-all duration-300 hover:border-[var(--border-strong)]">
                  <div className="border-b border-[var(--border)] px-5 py-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                      React Profiler Analysis
                    </p>
                  </div>

                  <a
                    href="/images/revenuepulse/profiler.png"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open RevenuePulse React Profiler screenshot"
                  >
                    <Image
                      src="/images/revenuepulse/profiler.png"
                      alt="RevenuePulse optimized React Profiler screenshot"
                      width={1600}
                      height={900}
                      className="w-full transition-transform duration-500 group-hover/image:scale-[1.02]"
                    />
                  </a>

                  <p className="border-t border-[var(--border)] px-5 py-3 text-sm text-[var(--text-secondary)]">
                    Optimized React Profiler capture showing reduced render time.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1GBauEmln7Z4Mu3KuQSTaLvDPmEOv8Hu7/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-md)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  After Optimization
                </a>

                <a
                  href="https://drive.google.com/file/d/11qBFfqrGdqf8lOB6x7Zv5_Jra0xtASor/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-md)] border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
                >
                  Before Optimization
                </a>

                <a
                  href="/case-studies/RevenuePulse_Performance_Case_Study.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-md)] border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
                >
                  Technical Case Study
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="motion-card group rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_50px_rgba(245,197,66,0.10)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Featured Investigation
              </p>

              <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <h3 className="text-4xl font-semibold tracking-tight">SupportDesk</h3>

                  <p className="mt-3 text-lg text-[var(--text-muted)]">
                    Enterprise Ticketing Platform
                  </p>

                  <p className="mt-6 leading-8 text-[var(--text-secondary)]">
                    A React and Next.js ticketing dashboard with laggy search, slow filters, heavy
                    rendering, expensive ticket processing, and poor responsiveness across a
                    10,000-ticket dataset.
                  </p>
                </div>

                <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/40 p-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Before</p>
                      <p className="mt-2 text-4xl font-bold">3675ms</p>
                    </div>

                    <div>
                      <p className="text-sm text-[var(--text-muted)]">After</p>
                      <p className="mt-2 text-4xl font-bold text-[var(--accent)]">2.3ms</p>
                    </div>
                  </div>

                  <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[98%] rounded-full bg-[var(--accent)]" />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                    React Profiler validated a dramatic render-time reduction after optimization.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">Problem</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    Laggy search, slow filters, heavy rendering, expensive ticket processing, and
                    poor responsiveness.
                  </p>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">Optimization</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    Memoized dataset generation, optimized filtering, added debounced search,
                    deferred updates, and pagination.
                  </p>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">Result</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    Render time improved from 3675ms to 2.3ms with smoother search, filtering, and
                    table interactions.
                  </p>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30">
                <div className="flex aspect-[16/9] items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold">SupportDesk Dashboard</p>
                    <div className="mt-10 space-y-6">
                      <div className="motion-media group/image overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30">
                        <div className="border-b border-[var(--border)] px-5 py-3">
                          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                            SupportDesk Dashboard
                          </p>
                        </div>

                        <a
                          href="/images/supportdesk/dashboard.png"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src="/images/supportdesk/dashboard.png"
                            alt="SupportDesk dashboard screenshot"
                            width={1600}
                            height={900}
                            className="w-full transition-transform duration-500 group-hover/image:scale-[1.02]"
                          />
                        </a>

                        <p className="px-5 py-3 text-sm text-[var(--text-secondary)]">
                          Ticketing dashboard after performance optimization.
                        </p>
                      </div>

                      <div className="motion-media group/image overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30">
                        <div className="border-b border-[var(--border)] px-5 py-3">
                          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                            React Profiler Analysis
                          </p>
                        </div>

                        <a href="/images/supportdesk/profiler.png" target="_blank" rel="noreferrer">
                          <Image
                            src="/images/supportdesk/profiler.png"
                            alt="SupportDesk optimized React Profiler screenshot"
                            width={1600}
                            height={900}
                            className="w-full transition-transform duration-500 group-hover/image:scale-[1.02]"
                          />
                        </a>

                        <p className="px-5 py-3 text-sm text-[var(--text-secondary)]">
                          Optimized React Profiler capture showing reduced render time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1XurDFOQUs8Hdh220oKKPE6IaVcbgg4Yp/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-md)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  After Optimization
                </a>

                <a
                  href="https://drive.google.com/file/d/1NqHumYcf0cJX6y-LKTih93OrfBIqAekC/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-md)] border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
                >
                  Before Optimization
                </a>

                <a
                  href="/case-studies/SupportDesk_Performance_Case_Study.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-md)] border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
                >
                  Technical Case Study
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
