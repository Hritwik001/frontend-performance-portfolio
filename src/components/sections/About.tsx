import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal className="motion-card grid gap-10 rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-2xl shadow-black/25 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_50px_rgba(245,197,66,0.10)] lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-10">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Frontend Engineer working across the full product surface."
              description="New interfaces built from the ground up, and existing ones that have started to feel slow or unwieldy under real data. Performance is where the work goes deepest."
            />
          </div>

          <div className="space-y-5 text-[var(--text-secondary)]">
            <p className="leading-8">
              My work covers component architecture, state and data flow, interaction design, and
              visual detail. Recent projects include a kitchen operations dashboard built from the
              ground up (KitchenFlow) and performance turnarounds on SaaS analytics and ticketing
              platforms.
            </p>

            <p className="leading-8">
              Whatever the starting point, the approach stays the same: understand the product and
              the user, build or fix it with clean, typed, maintainable code, and validate the result
              with React Profiler, Chrome DevTools, Lighthouse, and Core Web Vitals data.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-4">
                <p className="text-sm text-[var(--text-muted)]">Primary Stack</p>
                <p className="mt-2 font-semibold text-white">React • Next.js • TS</p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-4">
                <p className="text-sm text-[var(--text-muted)]">Focus Areas</p>
                <p className="mt-2 font-semibold text-white">Product UI • Performance</p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-4">
                <p className="text-sm text-[var(--text-muted)]">Tooling</p>
                <p className="mt-2 font-semibold text-white">Profiler • DevTools</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
