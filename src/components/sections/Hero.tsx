import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CornerGlow } from "@/components/motion/CornerGlow";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

const recentWork = [
  {
    label: "PathPilot AI",
    headline: "AI copilot, live",
    description:
      "An AI career-matching copilot — chat or resume in, ranked matches and a streamed pitch out, powered by real Gemini integration.",
  },
  {
    label: "Nova Fiber",
    headline: "5-step signup, built",
    description:
      "A fiber ISP marketing site and signup wizard — availability check, plans, scheduling, and account, in one continuous flow.",
  },
  {
    label: "My Tango Events",
    headline: "Design concept, built",
    description:
      "An editorial tango events landing page — category filters, live search, and save states, with no backend behind it.",
  },
  {
    label: "KitchenFlow",
    headline: "Built end-to-end",
    description:
      "A six-module kitchen operations dashboard — live ticket board, station load, crew, and service analytics.",
  },
  {
    label: "SupportDesk",
    headline: "3675ms → 2.3ms",
    description:
      "Ticketing dashboard optimized for search, filtering, rendering workload, pagination and responsiveness.",
  },
  {
    label: "RevenuePulse",
    headline: "2000ms → 140ms",
    description:
      "SaaS analytics dashboard optimized for KPI loading, chart rendering, search, filtering and dashboard responsiveness.",
  },
];

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <CornerGlow
        className="left-1/2 top-0 -ml-64 h-[32rem] w-[32rem] bg-[var(--accent-soft)]"
        fromX={-70}
        fromY={-70}
      />
      <CornerGlow
        className="right-0 top-24 h-80 w-80 bg-white/[0.04]"
        fromX={70}
        fromY={-70}
        delay={120}
      />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal direction="left">
            <Eyebrow>Frontend Engineer — React.js / Next.js</Eyebrow>

            <Heading className="mt-5 max-w-4xl">
              <TextReveal
                text="Frontend engineering for products that feel"
                accentText="as good as they look."
                accentClassName="font-display-accent text-gold-shine"
              />
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
              Three products built from the ground up, two documented React/Next.js
              performance turnarounds, and a design-led concept, each shipped with real detail.
            </p>

            <div className="mt-8 space-y-4">
              {recentWork.map((work, index) => (
                <Reveal key={work.label} delay={220 + index * 90}>
                  <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]">
                    <p className="text-sm text-[var(--text-muted)]">{work.label}</p>
                    <p className="mt-2 text-xl font-semibold">{work.headline}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                      {work.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mt-20 border-t border-[var(--border)] pt-10">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="motion-stat" delay={80}>
              <p className="text-3xl font-bold">6 Case Studies</p>
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
