import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}
