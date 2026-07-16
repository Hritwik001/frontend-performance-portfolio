import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal direction="left">
            <Eyebrow>Frontend Engineer — React.js / Next.js</Eyebrow>

            <Heading className="mt-5 max-w-4xl">
              Frontend engineering for products that feel as good as they look.
            </Heading>

            <Text className="mt-6 max-w-3xl">
              I build React and Next.js interfaces end to end — component architecture, state,
              interaction, and visual detail. Performance is the specialty within that: rendering
              efficiency, Core Web Vitals, and interfaces that stay responsive under real data.
            </Text>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>React &amp; Next.js</Badge>
              <Badge>Product UI Engineering</Badge>
              <Badge>Design Systems</Badge>
              <Badge>Performance Engineering</Badge>
              <Badge>Dashboard Systems</Badge>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#case-studies" aria-label="Go to case studies">
                <Button>
                  View the Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="#contact" aria-label="Go to contact section">
                <Button variant="secondary">Contact Me</Button>
              </a>
            </div>
          </Reveal>

          <Reveal
            className="motion-card motion-float-panel rounded-[var(--radius-xl)] border border-[var(--border)] bg-white/[0.03] p-6 shadow-2xl shadow-black/30"
            delay={140}
            direction="right"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Recent Work
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Product Builds &amp; Performance Case Studies
            </h2>

            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              Three products built from the ground up, and two documented React/Next.js
              performance turnarounds, each validated with React Profiler data.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">PathPilot AI</p>
                <p className="mt-2 text-xl font-semibold">AI copilot, live</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  An AI career-matching copilot — chat or resume in, ranked matches and a
                  streamed pitch out, powered by real Gemini integration.
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">Nova Fiber</p>
                <p className="mt-2 text-xl font-semibold">5-step signup, built</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  A fiber ISP marketing site and signup wizard — availability check, plans,
                  scheduling, and account, in one continuous flow.
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">KitchenFlow</p>
                <p className="mt-2 text-xl font-semibold">Built end-to-end</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  A six-module kitchen operations dashboard — live ticket board, station load,
                  crew, and service analytics.
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">SupportDesk</p>
                <p className="mt-2 text-xl font-semibold">3675ms {"→"} 2.3ms</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  Ticketing dashboard optimized for search, filtering, rendering workload,
                  pagination and responsiveness.
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">RevenuePulse</p>
                <p className="mt-2 text-xl font-semibold">2000ms {"→"} 140ms</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  SaaS analytics dashboard optimized for KPI loading, chart rendering, search,
                  filtering and dashboard responsiveness.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mt-20 border-t border-[var(--border)] pt-10">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="motion-stat" delay={80}>
              <p className="text-3xl font-bold">5 Case Studies</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Product Builds &amp; Performance Work
              </p>
            </Reveal>

            <Reveal className="motion-stat" delay={160}>
              <p className="text-3xl font-bold">3675ms {"→"} 2.3ms</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Best Measured Improvement</p>
            </Reveal>

            <Reveal className="motion-stat" delay={240}>
              <p className="text-3xl font-bold">React + Next.js + TS</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Primary Technology Stack</p>
            </Reveal>

            <Reveal className="motion-stat" delay={320}>
              <p className="text-3xl font-bold">Profiler + Lighthouse</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Measurement &amp; Validation</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
