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
            <Eyebrow>React.js / Next.js Performance Engineer</Eyebrow>

            <Heading className="mt-5 max-w-4xl">
              Making modern React & Next.js applications feel fast.
            </Heading>

            <Text className="mt-6 max-w-3xl">
              I help engineering teams identify rendering bottlenecks, optimize React dashboards,
              improve responsiveness, and make frontend applications feel faster for real users.
            </Text>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>React Profiler</Badge>
              <Badge>Core Web Vitals</Badge>
              <Badge>Rendering Performance</Badge>
              <Badge>Dashboard Optimization</Badge>
              <Badge>Large Data Set Optimization</Badge>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#case-studies" aria-label="Go to case studies">
                <Button>
                  Explore Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="#contact" aria-label="Go to contact section">
                <Button variant="secondary">Contact Me</Button>
              </a>
            </div>
          </Reveal>

          <Reveal
            className="motion-float-panel rounded-[var(--radius-xl)] border border-[var(--border)] bg-white/[0.03] p-6 shadow-2xl shadow-black/30"
            delay={140}
            direction="right"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Performance Proof
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              React & Next.js Performance Case Studies
            </h2>

            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              Real before/after optimization work across dashboard-heavy React and Next.js
              applications, validated using React Profiler and documented case studies.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">SupportDesk</p>
                <p className="mt-2 text-xl font-semibold">3675ms {"\u2192"} 2.3ms</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  Ticketing dashboard optimized for search, filtering, rendering workload,
                  pagination and responsiveness.
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5">
                <p className="text-sm text-[var(--text-muted)]">RevenuePulse</p>
                <p className="mt-2 text-xl font-semibold">2000ms {"\u2192"} 140ms</p>
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
              <p className="text-3xl font-bold">React Profiler</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Primary Investigation Tool
              </p>
            </Reveal>

            <Reveal className="motion-stat" delay={160}>
              <p className="text-3xl font-bold">3675ms {"\u2192"} 2.3ms</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Best Measured Improvement</p>
            </Reveal>

            <Reveal className="motion-stat" delay={240}>
              <p className="text-3xl font-bold">React + Next.js</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Primary Technology Stack</p>
            </Reveal>

            <Reveal className="motion-stat" delay={320}>
              <p className="text-3xl font-bold">Profiler</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Measurement & Validation</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
