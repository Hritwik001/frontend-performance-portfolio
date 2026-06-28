import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Text({
  children,
  className = "",
}: TextProps) {
  return (
    <p
      className={`text-base leading-7 text-[var(--text-secondary)] sm:text-lg ${className}`}
    >
      {children}
    </p>
  );
}
