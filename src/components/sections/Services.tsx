import { Activity, BarChart3, Gauge, LineChart, PackageSearch, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Gauge,
    title: "Frontend Performance Audit",
    description:
      "A focused investigation to identify what is slowing your React or Next.js application.",
    items: [
      "React Profiler analysis",
      "Core Web Vitals review",
      "Bundle and network analysis",
      "Prioritized performance roadmap",
    ],
  },
  {
    icon: Activity,
    title: "React & Next.js Optimization Sprint",
    description:
      "Hands-on implementation to improve rendering, responsiveness, search, filtering, and dashboard performance.",
    items: [
      "Re-render optimization",
      "Memoization strategy",
      "Next.js image, font and loading improvements",
      "Before / after performance validation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Performance Partnership",
    description:
      "Continuous performance support for product teams that want to prevent regressions as the application grows.",
    items: [
      "Monthly performance reviews",
      "Performance regression checks",
      "Release validation",
      "Architecture consultation",
    ],
  },
];

const capabilities = [
  { icon: BarChart3, label: "Dashboard Performance" },
  { icon: PackageSearch, label: "Bundle Optimization" },
  { icon: LineChart, label: "Core Web Vitals" },
  { icon: Activity, label: "React Rendering" },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Performance engineering support for React & Next.js teams."
          description="Three focused ways to diagnose, fix, and maintain frontend performance without turning the engagement into a vague development project."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                className="motion-card group rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_50px_rgba(245,197,66,0.10)]"
                delay={index * 120}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>

                <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-[var(--text-secondary)]">
                      <span className="text-[var(--accent)]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="motion-card mt-10 rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Capabilities Covered
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.label}
                  className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-white/[0.03] p-4"
                >
                  <Icon size={18} className="text-[var(--accent)]" />
                  <span className="text-sm text-[var(--text-secondary)]">{capability.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
