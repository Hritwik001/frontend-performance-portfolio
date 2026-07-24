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
      className={`text-gold-shine text-sm font-medium uppercase tracking-[0.2em] ${className}`}
    >
      {children}
    </span>
  );
}
