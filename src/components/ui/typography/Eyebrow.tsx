import { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({
  children,
  className = "",
}: EyebrowProps) {
  return (
    <span
      className={`text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)] ${className}`}
    >
      {children}
    </span>
  );
}
