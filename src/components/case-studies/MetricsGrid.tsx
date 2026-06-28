type MetricsGridProps = {
  metrics: string[];
};

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric}
          className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5 text-center"
        >
          <p className="text-lg font-semibold">
            {metric}
          </p>
        </div>
      ))}
    </div>
  );
}
