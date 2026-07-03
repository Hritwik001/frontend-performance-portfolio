import { Activity, BarChart3, Blocks, Gauge, LayoutGrid, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: LayoutGrid,
    title: "Product & UI Engineering",
    description:
      "Component architecture, state design, and interface polish for dashboards, internal tools, and product-grade UI.",
    items: [
      "React & Next.js architecture",
      "Component and design systems",
      "State and data-flow modeling",
      "Production-ready, typed codebases",
    ],
  },
  {
    icon: Gauge,
    title: "Frontend Performance Optimization",
    description:
      "A focused investigation and fix for React or Next.js applications that have started to feel slow.",
    items: [
      "React Profiler analysis",
      "Core Web Vitals review",
      "Re-render and bundle optimization",
      "Before / after performance validation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Engineering Partnership",
    description:
      "Continuous frontend support for product teams — new features, UI iteration, and performance regression prevention as the application grows.",
    items: [
      "Feature and UI development",
      "Monthly performance reviews",
      "Release validation",
      "Architecture consultation",
    ],
  },
];

const capabilities = [
  { icon: LayoutGrid, label: "Product UI Engineering" },
  { icon: Blocks, label: "Design Systems" },
  { icon: BarChart3, label: "Dashboard Systems" },
  { icon: Activity, label: "Performance Engineering" },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Frontend engineering across three types of engagements."
          description="New interfaces built from the ground up, performance turnarounds on existing ones, and ongoing support as the product grows."
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
