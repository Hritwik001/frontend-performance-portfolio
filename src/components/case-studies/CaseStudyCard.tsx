import { Badge } from "@/components/ui/Badge";

type CaseStudyCardProps = {
  title: string;
  subtitle: string;
  before: string;
  after: string;
  summary: string;
  tags: string[];
  metrics: string[];
  highlights: string[];
};

export function CaseStudyCard({
  title,
  subtitle,
  before,
  after,
  summary,
  tags,
metrics,
highlights,
}: CaseStudyCardProps) {
  return (
    <article className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-white/[0.03] p-8 transition-all duration-300 hover:border-[var(--accent)]">
      <p className="text-sm text-[var(--text-muted)]">
        {subtitle}
      </p>

      <h3 className="mt-2 text-3xl font-semibold">
        {title}
      </h3>

      <div className="mt-6 flex items-center gap-4">
        <div>
          <p className="text-xs text-[var(--text-muted)]">
            Before
          </p>

          <p className="text-xl font-bold">
            {before}
          </p>
        </div>

        <span className="text-[var(--accent)] text-xl">
          →
        </span>

        <div>
          <p className="text-xs text-[var(--text-muted)]">
            After
          </p>

          <p className="text-xl font-bold">
            {after}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
  {metrics.map((metric) => (
    <div
      key={metric}
      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-black/30 p-4"
    >
      <p className="text-sm font-semibold">{metric}</p>
    </div>
  ))}
</div>

      <p className="mt-6 leading-7 text-[var(--text-secondary)]">
        {summary}
      </p>

      <ul className="mt-6 space-y-3">
  {highlights.map((highlight) => (
    <li
      key={highlight}
      className="text-sm leading-6 text-[var(--text-secondary)]"
    >
      ✓ {highlight}
    </li>
  ))}
</ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
