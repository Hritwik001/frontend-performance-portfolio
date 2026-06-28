import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-xl)] border border-[var(--border)] bg-white/[0.03] p-6 shadow-2xl shadow-black/20 transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-white/[0.05] ${className}`}
    >
      {children}
    </div>
  );
}
