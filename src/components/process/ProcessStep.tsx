import { LucideIcon } from "lucide-react";

type ProcessStepProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
};

export function ProcessStep({
  icon: Icon,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6 group">
      {/* Timeline */}
      {!isLast && (
        <div className="absolute left-6 top-14 h-full w-px bg-[var(--border)]" />
      )}

      {/* Icon */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_30px_rgba(245,197,66,0.15)]">
        <Icon size={22} className="text-[var(--accent)]" />
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
    </div>
  );
}
