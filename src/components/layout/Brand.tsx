import Link from "next/link";

export function Brand() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-black transition-transform duration-200 group-hover:scale-105">
        H
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight">
          Hritwik
        </span>

        <span className="text-xs text-[var(--text-muted)]">
          Frontend Engineer
        </span>
      </div>
    </Link>
  );
}
