import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
  "inline-flex cursor-pointer select-none items-center justify-center rounded-[var(--radius-md)] px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--accent)] text-black hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20",

    secondary:
      "border border-[var(--border-strong)] bg-transparent text-white hover:bg-white/5",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
