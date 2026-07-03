import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="font-semibold text-white">
              Hritwik<span className="text-[var(--accent)]">.</span>
            </Link>

            <p className="mt-2">
              Frontend engineering for React & Next.js products.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="mailto:hritwiktiwary001@gmail.com"
              className="transition-colors hover:text-white"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/hritwik-tiwary/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Hritwik001"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-[var(--text-muted)]">
          © 2026 Hritwik Tiwary. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
