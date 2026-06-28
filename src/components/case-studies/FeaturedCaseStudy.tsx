import { MetricsGrid } from "./MetricsGrid";

type FeaturedCaseStudyProps = {
  title: string;
  subtitle: string;
  summary: string;
  metrics: string[];
};

export function FeaturedCaseStudy({
  title,
  subtitle,
  summary,
  metrics,
}: FeaturedCaseStudyProps) {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-white/[0.03] p-10 shadow-2xl shadow-black/30 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--accent-soft)] blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          Featured Investigation
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="mt-2 text-lg text-[var(--text-muted)]">
          {subtitle}
        </p>

        <p className="mt-8 max-w-3xl leading-8 text-[var(--text-secondary)]">
          {summary}
        </p>

        <MetricsGrid metrics={metrics} />
      </div>
    </section>
  );
}
