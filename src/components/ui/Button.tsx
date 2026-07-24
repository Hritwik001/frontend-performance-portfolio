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
  "relative inline-flex cursor-pointer select-none items-center justify-center overflow-hidden rounded-[var(--radius-md)] px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "btn-shine bg-[var(--accent)] text-black hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20",

    secondary:
      "border border-[var(--border-strong)] bg-transparent text-white hover:bg-white/5",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center">{children}</span>
    </button>
  );
}
