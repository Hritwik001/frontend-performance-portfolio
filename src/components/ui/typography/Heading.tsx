import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h1
      className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}
