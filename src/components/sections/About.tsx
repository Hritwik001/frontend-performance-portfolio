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
              title="Frontend Performance Engineer specializing in React & Next.js."
              description="I work on performance-heavy frontend applications where rendering efficiency, dashboard responsiveness, Core Web Vitals, and real user experience matter."
            />
          </div>

          <div className="space-y-5 text-[var(--text-secondary)]">
            <p className="leading-8">
              I specialize in improving React and Next.js applications used in SaaS products and
              enterprise platforms. My work focuses on identifying rendering bottlenecks, reducing
              unnecessary re-renders, optimizing dashboard interactions, and making complex
              interfaces feel faster for real users.
            </p>

            <p className="leading-8">
              I approach frontend performance as an engineering investigation: measure the current
              state, identify the highest-impact bottlenecks, implement targeted improvements, and
              validate the results using tools like React Profiler, Chrome DevTools, Lighthouse, and
              Core Web Vitals.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-4">
                <p className="text-sm text-[var(--text-muted)]">Primary Stack</p>
                <p className="mt-2 font-semibold text-white">React • Next.js</p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-4">
                <p className="text-sm text-[var(--text-muted)]">Focus Areas</p>
                <p className="mt-2 font-semibold text-white">Rendering • CWV</p>
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
